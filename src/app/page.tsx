'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  TrendingUp,
  Users,
  BookOpen,
  MessageCircle,
  Star,
  CheckCircle,
  BarChart3,
  Target,
  Trophy,
  Clock,
  Shield,
  Zap
} from 'lucide-react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp size={16} />
                <span>Join 150+ Active Traders</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Master Trading with the{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  ProfitPeers Collective
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Step into an exclusive trading community where experienced professionals share live market insights,
                proven strategies, and real-time analysis. Transform your trading journey with peer-to-peer learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/pricing"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 text-center"
                >
                  Get Master Access - $99
                </Link>
                <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
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
                  <span>Live Support</span>
                </div>
              </div>
            </div>
            <div className="lg:order-last">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Live Signal</p>
                        <p className="text-sm text-gray-500">EUR/USD</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">+2.4%</p>
                      <p className="text-sm text-gray-500">24h change</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Entry Point</span>
                      <span className="text-sm font-bold text-green-600">1.0845</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Target</span>
                      <span className="text-sm font-bold text-blue-600">1.0920</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Stop Loss</span>
                      <span className="text-sm font-bold text-red-600">1.0800</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">
                      💡 Pro Tip: &quot;Watch for breakout confirmation above resistance&quot;
                    </p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-15"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ProfitPeers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community where trading knowledge flows freely and success is shared.
              Get everything you need to trade confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Market Breakdowns</h3>
              <p className="text-gray-600 mb-4">
                Get real-time market analysis from experienced traders. Watch live as we break down price action,
                identify key levels, and spot high-probability trading opportunities across forex, stocks, and crypto.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Daily live sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Multi-market coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Interactive Q&A</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive Resource Library</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive collection of trading resources, including strategy guides, risk management
                frameworks, technical analysis tutorials, and market psychology insights from veteran traders.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>50+ strategy guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Risk management tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Updated weekly</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Trader Discussions</h3>
              <p className="text-gray-600 mb-4">
                Connect with like-minded traders in our active community channels. Share trade ideas, get feedback
                on your analysis, and learn from others&apos; experiences in real-time market conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>24/7 active community</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Trade idea sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Mentor feedback</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Tool Access</h3>
              <p className="text-gray-600 mb-4">
                Get first access to our premium trading tools, calculators, and market scanners. From position sizing
                calculators to advanced technical indicators, arm yourself with professional-grade resources.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Position size calculator</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Market scanners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Custom indicators</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay ahead of the market with regular strategy updates and adaptations. As market conditions change,
                we evolve our approaches and share new methodologies to keep your trading edge sharp.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Weekly strategy calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Market adaptation guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Performance tracking</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Management Focus</h3>
              <p className="text-gray-600 mb-4">
                Learn how to protect your capital with proven risk management techniques. We emphasize sustainable
                trading practices that help you stay in the game long-term and compound your growth consistently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Capital preservation strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Psychology workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Drawdown recovery plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">150+</div>
              <div className="text-blue-50 text-sm md:text-base font-medium">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">95%</div>
              <div className="text-blue-50 text-sm md:text-base font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-blue-50 text-sm md:text-base font-medium">Market Coverage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">3yrs</div>
              <div className="text-blue-50 text-sm md:text-base font-medium">Track Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built by Traders, for Traders
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ProfitPeers was founded by a group of professional traders who recognized the power of collective
                knowledge. After years of trading in isolation, we discovered that sharing insights and collaborating
                with peers dramatically improved our performance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we&apos;ve created the ultimate trading collective where experience meets innovation. Our community
                combines seasoned professionals with ambitious newcomers, creating an environment where everyone learns
                and grows together.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">$2M+</div>
                  <div className="text-sm text-gray-600">Combined Experience</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Expert Mentors</div>
                </div>
              </div>
            </div>
            <div className="lg:order-last">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">EUR/USD</div>
                    <div className="text-sm text-gray-600">+1.2%</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-green-600">GBP/JPY</div>
                    <div className="text-sm text-gray-600">+2.8%</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">BTCUSD</div>
                    <div className="text-sm text-gray-600">+5.4%</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">GOLD</div>
                    <div className="text-sm text-gray-600">+0.9%</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Weekly Performance</span>
                    <span className="text-2xl font-bold text-green-600">+12.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Target: +15%</span>
                    <span>78% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Traders Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful traders who&apos;ve transformed their trading with ProfitPeers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The live market breakdowns are incredible. I&apos;ve learned more in 3 months here than in
                2 years of trading alone. The community support is unmatched.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Chen</div>
                  <div className="text-sm text-gray-500">Forex Trader</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Finally found a trading community that actually cares about education and risk management.
                My account has grown 40% since joining ProfitPeers.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Williams</div>
                  <div className="text-sm text-gray-500">Stock Trader</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The real-time discussions and strategy updates keep me ahead of the market. Best investment
                I&apos;ve made for my trading career. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  D
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Rodriguez</div>
                  <div className="text-sm text-gray-500">Crypto Trader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about ProfitPeers? We&apos;re here to help you start your trading journey.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="How can we help you with your trading journey?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-blue-50 mb-8 drop-shadow-sm">
            Join 150+ successful traders in the ProfitPeers collective. Get instant access to live market breakdowns,
            exclusive resources, and a supportive community of experienced traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Master Access - $99
            </Link>
            <div className="flex items-center gap-2 text-blue-50">
              <Clock size={16} />
              <span className="text-sm font-medium">Join in under 2 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}