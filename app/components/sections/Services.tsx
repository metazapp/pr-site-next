'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'injection-molding',
    title: 'Injection Molding',
    description: 'High-precision injection molding services for automotive components with strict tolerance requirements and complex geometries.',
    icon: '/images/services/injection-molding.svg',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 'precision-engineering',
    title: 'Precision Engineering',
    description: 'Advanced engineering solutions that optimize component design for performance, weight reduction, and cost efficiency.',
    icon: '/images/services/precision-engineering.svg',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    description: 'Tailored plastic component development to meet specific automotive applications and unique OEM requirements.',
    icon: '/images/services/custom-solutions.svg',
    color: 'from-teal-600 to-teal-400',
  },
  {
    id: 'quality-testing',
    title: 'Quality Testing',
    description: 'Comprehensive testing protocols ensuring every component meets rigorous automotive industry standards and specifications.',
    icon: '/images/services/quality-testing.svg',
    color: 'from-purple-600 to-purple-400',
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    description: 'Quick turnaround prototyping services that accelerate development cycles and validate designs before full production.',
    icon: '/images/services/prototyping.svg',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Ongoing technical assistance and consulting to optimize component integration and performance in final applications.',
    icon: '/images/services/technical-support.svg',
    color: 'from-green-600 to-green-400',
  },
]

export default function Services() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animate services on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
        observer.observe(ref)
      }
    })

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Specialized Services
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive plastic component solutions designed to meet the demanding requirements of the automotive industry.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-1">
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-lg flex justify-center`}>
                  <div className="w-20 h-20 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:underline`}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 fill-current bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}