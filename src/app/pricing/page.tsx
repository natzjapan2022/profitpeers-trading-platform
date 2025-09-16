'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  MessageCircle,
  Target,
  Zap,
  Shield,
  Clock,
  Award
} from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            <span>Limited Time - Join 150+ Active Traders</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One Plan, Unlimited
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              {' '}Trading Growth
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get instant access to everything you need to succeed in trading. No tiers, no limits,
            just pure value for serious traders ready to level up.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-2xl border border-primary-100 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <TrendingUp size={16} />
                  <span>Most Popular Choice</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Master Access Pass
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Everything you need to join the ProfitPeers trading collective
                </p>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-gray-900">$99</div>
                    <div className="text-lg text-gray-500">One-time payment</div>
                  </div>
                </div>
                <Link
                  href="/checkout/master"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Instant Access
                </Link>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>30-Day Refund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Lifetime Updates</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Live Trading Features</h3>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Live Market Breakdowns</h4>
                      <p className="text-gray-600 text-sm">Daily live sessions with experienced traders analyzing real-time market movements across forex, stocks, and crypto.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time Discussions</h4>
                      <p className="text-gray-600 text-sm">24/7 active community channels for sharing trade ideas, getting feedback, and learning from experienced traders.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Priority Tool Access</h4>
                      <p className="text-gray-600 text-sm">First access to premium calculators, market scanners, and custom indicators designed by our team.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Resources</h3>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Exclusive Resource Library</h4>
                      <p className="text-gray-600 text-sm">50+ comprehensive guides covering strategies, risk management, technical analysis, and market psychology.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Regular Strategy Updates</h4>
                      <p className="text-gray-600 text-sm">Weekly strategy calls and market adaptation guides to keep your trading edge sharp in changing conditions.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Risk Management Focus</h4>
                      <p className="text-gray-600 text-sm">Learn proven capital preservation techniques and psychology workshops to build sustainable trading habits.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What&apos;s Included */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Everything Included in Your Master Access
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Live market breakdowns (Daily)',
                    'Exclusive resource library (50+ guides)',
                    'Real-time trader discussions (24/7)',
                    'Priority tool access',
                    'Weekly strategy updates',
                    'Risk management workshops',
                    'Position sizing calculators',
                    'Market scanners & indicators',
                    'Psychology training modules',
                    'Trade idea sharing platform',
                    'Mentor feedback sessions',
                    'Performance tracking tools'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why ProfitPeers Delivers Exceptional Value
            </h2>
            <p className="text-xl text-gray-600">
              Compare what you get for $99 vs traditional trading education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Traditional Courses</h3>
                <div className="text-3xl font-bold text-red-600 mt-2">$500-2000</div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Outdated recorded content</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>No live interaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Limited community access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>No ongoing support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Trading Mentors</h3>
                <div className="text-3xl font-bold text-yellow-600 mt-2">$200-500/hr</div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Expensive hourly rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Limited time slots</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>One-on-one only</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>No community learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg border-2 border-primary-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg border border-blue-500">
                  Best Value
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ProfitPeers</h3>
                <div className="text-3xl font-bold text-primary-600 mt-2">$99</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Live daily market sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Active 24/7 community</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Comprehensive resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Lifetime access & updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join 150+ Successful Traders
            </h2>
            <p className="text-xl text-gray-600">
              See what our community members say about their ProfitPeers experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Best $99 I&apos;ve ever spent on trading education. The live sessions alone are worth 10x the price.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  J
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">James K.</div>
                  <div className="text-xs text-gray-500">Forex Trader</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Finally found a community that actually helps. My trading improved dramatically in just weeks.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Maria S.</div>
                  <div className="text-xs text-gray-500">Stock Trader</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;The risk management techniques alone saved me thousands. Worth every penny and more.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  D
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">David L.</div>
                  <div className="text-xs text-gray-500">Crypto Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ProfitPeers
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What exactly do I get for $99?
              </h3>
              <p className="text-gray-600">
                You get lifetime access to our trading collective including daily live market breakdowns,
                our exclusive resource library with 50+ guides, 24/7 community discussions, priority access
                to trading tools, weekly strategy updates, and ongoing mentorship from experienced traders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is this suitable for beginners?
              </h3>
              <p className="text-gray-600">
                Absolutely! We have traders of all experience levels. Our community and resources are designed
                to help beginners learn proper fundamentals while also providing advanced strategies for
                experienced traders. You&apos;ll learn at your own pace with full support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What markets do you cover?
              </h3>
              <p className="text-gray-600">
                We cover forex, stocks, crypto, commodities, and indices. Our live sessions rotate between
                different markets based on current opportunities and member interests. You&apos;ll get exposure
                to multiple markets and learn how to adapt your strategies across asset classes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee. If you&apos;re not completely satisfied with
                ProfitPeers within the first 30 days, simply contact our support team for a full refund.
                We&apos;re confident you&apos;ll love the value we provide.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do the live sessions work?
              </h3>
              <p className="text-gray-600">
                We host live market breakdown sessions daily at various times to accommodate different time zones.
                Sessions are recorded so you can watch later if you miss them live. We use screen sharing to
                analyze charts, discuss setups, and answer questions in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Start Your Trading Transformation Today
          </h2>
          <p className="text-xl text-primary-50 mb-8 drop-shadow-sm">
            Join 150+ traders who chose ProfitPeers for their trading education.
            Get instant access to everything you need to succeed.
          </p>
          <Link
            href="/checkout/master"
            className="inline-block bg-white text-primary-600 px-12 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Get Master Access - $99
          </Link>
          <div className="flex items-center justify-center gap-6 mt-8 text-primary-50">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm font-medium">Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span className="text-sm font-medium">30-day guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span className="text-sm font-medium">Join 150+ traders</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}