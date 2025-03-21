'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const advantages = [
  {
    title: 'Advanced Engineering',
    description: 'Our engineering team employs cutting-edge design principles and simulation tools to optimize component performance.',
    icon: '/images/icons/engineering.svg',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure our components meet or exceed industry specifications.',
    icon: '/images/icons/quality.svg',
  },
  {
    title: 'Cost Efficiency',
    description: 'Strategic material selection and optimized production processes deliver cost-effective solutions without compromising quality.',
    icon: '/images/icons/cost.svg',
  },
  {
    title: 'Rapid Turnaround',
    description: 'Streamlined workflows and dedicated production lines enable quick project completion and timely delivery.',
    icon: '/images/icons/speed.svg',
  },
  {
    title: 'Material Innovation',
    description: 'Continuous research into advanced polymer formulations to enhance durability, weight reduction, and sustainability.',
    icon: '/images/icons/innovation.svg',
  },
  {
    title: 'Global Support',
    description: 'Comprehensive technical support and service network ensuring seamless integration of our components worldwide.',
    icon: '/images/icons/support.svg',
  },
]

export default function Advantages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const advantageRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animate advantages on scroll
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

    advantageRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700')
        observer.observe(ref)
      }
    })

    return () => {
      advantageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/pattern.svg)', backgroundSize: '50px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose PR Plastics
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-300 to-teal-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-100 leading-relaxed">
            Our commitment to excellence and innovation sets us apart in the automotive plastic components industry.
          </p>
        </div>

        {/* Advantages grid with neumorphic design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={(el) => (advantageRefs.current[index] = el)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-inner">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-blue-100">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}