'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPlan, isValidPlan } from '@/lib/plans'
import {
  CheckCircle,
  ArrowLeft,
  Shield,
  Clock,
  RefreshCw,
  Zap,
  Lock,
  Star
} from 'lucide-react'

declare global {
  interface Window {
    WCLoader?: {
      init: () => void
    }
  }
}

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const planId = params.plan as string
  const [isLoading, setIsLoading] = useState(true)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const plan = getPlan(planId)

  useEffect(() => {
    // Redirect if invalid plan
    if (!isValidPlan(planId)) {
      router.push('/pricing')
      return
    }

    // Load Whop checkout script
    const loadWhopScript = async () => {
      try {
        if (typeof window !== 'undefined' && !window.WCLoader) {
          const script = document.createElement('script')
          script.src = 'https://js.whop.com/static/checkout/loader.js'
          script.async = true
          script.onload = () => {
            if (window.WCLoader) {
              window.WCLoader.init()
            }
            setIsLoading(false)
          }
          script.onerror = () => {
            setCheckoutError('Failed to load checkout. Please try again.')
            setIsLoading(false)
          }
          document.head.appendChild(script)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        setCheckoutError('An error occurred loading the checkout.')
        setIsLoading(false)
      }
    }

    loadWhopScript()

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://js.whop.com/static/checkout/loader.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [planId, router])

  if (!plan) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Plan Not Found</h1>
            <p className="text-gray-600 mb-6">The requested plan could not be found.</p>
            <Link
              href="/pricing"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Available Plans
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Pricing</span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
          <p className="text-gray-600 mt-2">
            You&apos;re just one step away from joining the ProfitPeers trading collective
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Plan Summary */}
            <div className="lg:order-first">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sticky top-8">
                <div className="flex items-center gap-4 mb-6">
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl font-bold text-gray-900">${plan.price}</div>
                  <div className="text-gray-500">One-time payment</div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-gray-900">What&apos;s included:</h3>
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">Secure Payment</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">30-Day Refund</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:order-last">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h3>

                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    <span className="ml-3 text-gray-600">Loading secure checkout...</span>
                  </div>
                ) : checkoutError ? (
                  <div className="text-center py-12">
                    <div className="text-red-600 mb-4">{checkoutError}</div>
                    <button
                      onClick={() => window.location.reload()}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Whop Checkout Embed */}
                    <div className="mb-6">
                      <div
                        data-whop-checkout-plan-id={plan.productId}
                        data-whop-checkout-theme="light"
                        data-whop-checkout-success-redirect="/login"
                        className="min-h-[400px]"
                      ></div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">Secure Checkout</div>
                          <div className="text-sm text-gray-600">
                            Your payment information is encrypted and secure
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Reminder */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-sm text-gray-600">Instant Access</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-600">30-Day Guarantee</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-600" />
                        </div>
                        <span className="text-sm text-gray-600">Lifetime Updates</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Trust Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose ProfitPeers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SSL Secured</h3>
                <p className="text-gray-600 text-sm">
                  Your payment and personal information is protected with bank-level security
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">30-Day Refund</h3>
                <p className="text-gray-600 text-sm">
                  Not satisfied? Get a full refund within 30 days, no questions asked
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Access</h3>
                <p className="text-gray-600 text-sm">
                  Start learning immediately after purchase with instant account activation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Whop purchase link */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Or you can purchase directly on Whop:
          </p>
          <Link
            href="https://whop.com/profitpeers-trading-collective/profitpeers-master-access-pass/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline text-sm transition-colors"
          >
            Purchase on Whop →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}