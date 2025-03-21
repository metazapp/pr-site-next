import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

export const metadata: Metadata = {
  title: 'Services | PR Plastics',
  description: 'Comprehensive plastic component services including injection molding, precision engineering, and custom solutions for the automotive industry.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    url: 'https://prplastics.in/services',
  },
}

// Services data with expanded details
const serviceData = [
  {
    id: 'injection-molding',
    title: 'Injection Molding',
    shortDescription: 'High-precision injection molding services for automotive components with strict tolerance requirements and complex geometries.',
    image: '/images/services/injection-molding-large.jpg',
    detailedDescription: `
      Our state-of-the-art injection molding facilities are equipped with the latest technology to produce automotive components with exceptional precision and consistency. We specialize in:
      
      - Multi-cavity molds for efficient production
      - Complex geometries and tight tolerances
      - Materials selection for optimal performance
      - Process optimization for cost efficiency
      - In-mold assembly and decoration
      
      Using advanced simulation software, we optimize the molding process before production to minimize defects and ensure perfect parts every time. Our automated systems guarantee consistent quality across large production runs.
    `,
    features: [
      'Precision tolerances to ±0.05mm',
      'Multi-cavity tooling for high volume production',
      'Advanced material options including reinforced polymers',
      'Real-time quality monitoring',
      'Automated parts handling and assembly',
    ],
  },
  {
    id: 'precision-engineering',
    title: 'Precision Engineering',
    shortDescription: 'Advanced engineering solutions that optimize component design for performance, weight reduction, and cost efficiency.',
    image: '/images/services/precision-engineering-large.jpg',
    detailedDescription: `
      Our engineering team combines decades of experience with cutting-edge CAD/CAM technologies to create optimized component designs. We employ advanced simulation tools to validate performance before manufacturing, ensuring that each component meets or exceeds requirements.
      
      Our precision engineering services include:
      
      - 3D modeling and simulation
      - Design for manufacturing (DFM)
      - Finite element analysis (FEA)
      - Computational fluid dynamics (CFD)
      - Material optimization
      
      By focusing on design optimization, we can reduce material usage, streamline production processes, and enhance component performance simultaneously.
    `,
    features: [
      'Advanced 3D CAD design capabilities',
      'Structural and thermal simulation',
      'Material optimization for weight reduction',
      'Process optimization for cost efficiency',
      'Design review and validation',
    ],
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    shortDescription: 'Tailored plastic component development to meet specific automotive applications and unique OEM requirements.',
    image: '/images/services/custom-solutions-large.jpg',
    detailedDescription: `
      We specialize in developing custom plastic components that address specific challenges in automotive applications. Our collaborative approach involves working closely with your team to understand requirements, constraints, and opportunities for innovation.
      
      Our custom solutions process:
      
      1. Detailed consultation to understand requirements
      2. Conceptual design and prototyping
      3. Material selection and testing
      4. Production process development
      5. Quality validation and certification
      
      We excel at creating solutions for unique applications where standard components aren't sufficient, helping automotive manufacturers differentiate their products.
    `,
    features: [
      'Collaborative design process',
      'Rapid prototyping and iteration',
      'Custom material formulations',
      'Specialized surface finishes and textures',
      'Integration with existing systems',
    ],
  },
  {
    id: 'quality-testing',
    title: 'Quality Testing',
    shortDescription: 'Comprehensive testing protocols ensuring every component meets rigorous automotive industry standards and specifications.',
    image: '/images/services/quality-testing-large.jpg',
    detailedDescription: `
      Our comprehensive quality testing ensures that every component we produce meets or exceeds automotive industry standards. Our ISO-certified testing lab is equipped with advanced measurement and analysis tools to validate dimensional accuracy, material properties, and performance characteristics.
      
      Our testing capabilities include:
      
      - Dimensional inspection using coordinate measuring machines (CMM)
      - Material composition analysis
      - Environmental stress testing
      - Impact and durability testing
      - Functional performance evaluation
      
      We maintain detailed quality records for full traceability and can provide comprehensive test reports with each shipment.
    `,
    features: [
      'ISO 9001 and IATF 16949 certified processes',
      'Advanced metrology equipment',
      'Environmental aging chambers',
      'Mechanical load testing',
      'Chemical resistance validation',
    ],
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    shortDescription: 'Quick turnaround prototyping services that accelerate development cycles and validate designs before full production.',
    image: '/images/services/prototyping-large.jpg',
    detailedDescription: `
      Our rapid prototyping capabilities accelerate your product development cycle by quickly transforming concepts into physical prototypes for validation. We offer multiple prototyping technologies to meet different requirements for accuracy, material properties, and cost-effectiveness.
      
      Our prototyping services include:
      
      - 3D printing (FDM, SLA, SLS, MJF)
      - CNC machining for high-precision prototypes
      - Urethane casting for production-like parts
      - Prototype tooling and low-volume injection molding
      - Functional testing and validation
      
      With quick iteration cycles, we help you optimize designs and identify potential issues before committing to full production tooling.
    `,
    features: [
      '24-48 hour turnaround on simple prototypes',
      'Production-grade materials',
      'Functional testing capabilities',
      'Design refinement recommendations',
      'Smooth transition to production',
    ],
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    shortDescription: 'Ongoing technical assistance and consulting to optimize component integration and performance in final applications.',
    image: '/images/services/technical-support-large.jpg',
    detailedDescription: `
      Our commitment to your success extends beyond component delivery with comprehensive technical support services. Our experienced technical team offers guidance on component integration, troubleshooting, and optimization throughout the product lifecycle.
      
      Our technical support services include:
      
      - Integration assistance during assembly
      - Troubleshooting and problem resolution
      - Performance optimization recommendations
      - Field service and on-site support
      - Training for your technical team
      
      We view our relationship as a partnership and are dedicated to ensuring the optimal performance of our components in your applications.
    `,
    features: [
      'Dedicated technical account managers',
      'Regular performance reviews',
      'Documentation and training materials',
      'On-site technical visits when needed',
      '24/7 emergency support for critical issues',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive plastic component solutions designed to meet the demanding requirements of the automotive industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-16">
        <Container>
          <div className="space-y-24">
            {serviceData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mb-6 rounded-full"></div>
                  
                  <div className="prose prose-blue max-w-none mb-8">
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      {service.shortDescription}
                    </p>
                    {service.detailedDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-gray-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <Container>
          <Card variant="neumorphic" className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Discuss Your Project?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is ready to help you find the perfect plastic component solution for your automotive application.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/products"
                  className="px-8 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  View Our Products
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  )
}