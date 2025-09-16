import Link from 'next/link'
import Logo from './Logo'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo size="lg" className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Join the ultimate trading collective where experienced traders share insights,
              strategies, and real-time market analysis to help you grow consistently.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-sm">support@profitpeers.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-sm">+1 (212) 847-3629</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-sm">350 Fifth Avenue, Suite 7800, New York, NY 10118</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ProfitPeers. All rights reserved. Trading involves risk and may not be suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  )
}