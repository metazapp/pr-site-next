'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initialize scroll state when component mounts
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [isMenuOpen])

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src="/images/logo.svg"
              alt="PR Plastics Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className={`font-bold text-xl ${
              scrolled || isMenuOpen ? 'text-gray-800' : 'text-white'
            }`}>
              PR Plastics
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors duration-200 ${
                  pathname === link.path
                    ? 'text-blue-600'
                    : scrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  scrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? 'w-6 transform rotate-45 translate-y-2' : 'w-6'}`}
              ></span>
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  scrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'w-4'}`}
              ></span>
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  scrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
                } ${isMenuOpen ? 'w-6 transform -rotate-45 -translate-y-2' : 'w-5'}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors duration-200 ${
                  pathname === link.path ? 'text-blue-300' : 'text-white hover:text-blue-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 px-8 py-3 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}