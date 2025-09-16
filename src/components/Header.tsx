'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, LogOut } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated
    const session = localStorage.getItem('userSession')
    if (session) {
      const sessionData = JSON.parse(session)
      const now = Date.now()
      if (sessionData.expiresAt > now) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('userSession')
        setIsAuthenticated(false)
      }
    }
  }, [pathname])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLogout = () => {
    localStorage.removeItem('userSession')
    setIsAuthenticated(false)
    router.push('/')
  }

  // Hide navigation on dashboard page
  const isDashboard = pathname === '/dashboard'

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation - Hide on dashboard */}
          {!isDashboard && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Get Access
              </Link>
            </nav>
          )}

          {/* Dashboard Auth Button */}
          {isDashboard && isAuthenticated && (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && !isDashboard && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Access
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Menu for Dashboard */}
        {isMenuOpen && isDashboard && isAuthenticated && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}