'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(1 - scrollY / 700, 0.3)
      const transform = `translateY(${scrollY * 0.4}px)`
      
      heroRef.current.style.opacity = opacity.toString()
      heroRef.current.style.transform = transform
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Manufacturing facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Content container - Added pt-20 for mobile and pt-28 for larger screens to prevent navbar overlap */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-28"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Precision Plastic Components for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
              Automotive Excellence
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Specializing in high-quality, custom-engineered plastic components that drive innovation in the automotive industry.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Products
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Stats with neumorphic design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '50+', label: 'Global Clients' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.2)] border border-white/10 hover:shadow-[inset_0_-20px_40px_-20px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}