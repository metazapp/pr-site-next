'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

// Product categories and products data
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'interior', name: 'Interior Components' },
  { id: 'exterior', name: 'Exterior Components' },
  { id: 'underhood', name: 'Under-Hood Components' },
  { id: 'structural', name: 'Structural Components' },
]

const products = [
  {
    id: 'dashboard-components',
    name: 'Dashboard Components',
    category: 'interior',
    image: '/images/products/dashboard-components.jpg',
    description: 'Precision-engineered dashboard components with superior finish and durability.',
    features: [
      'High-quality surface finish',
      'Precise fitment with OEM specifications',
      'UV-resistant materials',
      'Customizable textures and colors',
      'Integrated mounting solutions',
    ],
    applications: [
      'Instrument panels',
      'Center consoles',
      'Control interfaces',
      'Air vent assemblies',
      'Display surrounds',
    ],
    materials: ['ABS', 'PC/ABS', 'TPO', 'TPE'],
  },
  {
    id: 'door-panels',
    name: 'Door Panels',
    category: 'interior',
    image: '/images/products/door-panels.jpg',
    description: 'Custom door panels designed for optimal aesthetics and functionality.',
    features: [
      'Integrated arm rests',
      'Storage compartments',
      'Speaker grilles',
      'Control mount points',
      'Soft-touch surfaces',
    ],
    applications: [
      'Front and rear door panels',
      'Upper door trims',
      'Armrest modules',
      'Window switch panels',
      'Handle surrounds',
    ],
    materials: ['PP', 'TPO', 'ABS', 'PC/ABS'],
  },
  {
    id: 'bumper-systems',
    name: 'Bumper Systems',
    category: 'exterior',
    image: '/images/products/bumper-systems.jpg',
    description: 'High-impact resistant bumper systems with integrated sensor housing capabilities.',
    features: [
      'Impact absorption zones',
      'Integrated sensor housings',
      'Aerodynamic design',
      'Weather resistant',
      'UV stabilized materials',
    ],
    applications: [
      'Front bumper assemblies',
      'Rear bumper assemblies',
      'Lower valances',
      'Diffusers',
      'Skid plates',
    ],
    materials: ['PP', 'TPO', 'PC/PBT', 'PBT'],
  },
  {
    id: 'grille-assemblies',
    name: 'Grille Assemblies',
    category: 'exterior',
    image: '/images/products/grille-assemblies.jpg',
    description: 'Customizable grille assemblies featuring modern designs and durable materials.',
    features: [
      'High-gloss or matte finishes',
      'Chrome accent compatibility',
      'Integrated emblem mounting',
      'Air flow optimization',
      'Impact resistant design',
    ],
    applications: [
      'Front fascia grilles',
      'Lower air intakes',
      'Side vents',
      'Decorative trim elements',
      'Active air shutter systems',
    ],
    materials: ['ABS', 'PC/ABS', 'PA', 'ASA'],
  },
  {
    id: 'cooling-systems',
    name: 'Cooling System Components',
    category: 'underhood',
    image: '/images/products/cooling-systems.jpg',
    description: 'Heat-resistant plastic components for automotive cooling systems.',
    features: [
      'High temperature resistance',
      'Chemical resistance',
      'Pressure-tested designs',
      'Vibration dampening',
      'Integrated connection points',
    ],
    applications: [
      'Fan shrouds',
      'Expansion tanks',
      'Coolant reservoirs',
      'Water pump housings',
      'Radiator end tanks',
    ],
    materials: ['PA', 'PPS', 'PPA', 'PBT'],
  },
  {
    id: 'air-intake',
    name: 'Air Intake Components',
    category: 'underhood',
    image: '/images/products/air-intake.jpg',
    description: 'Optimized air intake components designed for improved engine performance.',
    features: [
      'Smooth airflow design',
      'Heat shielding properties',
      'Acoustic dampening',
      'Precise filtration fit',
      'Integrated sensor mounts',
    ],
    applications: [
      'Air filter housings',
      'Intake manifolds',
      'Air ducts',
      'Resonator chambers',
      'MAF sensor housings',
    ],
    materials: ['PP', 'PA', 'PBT', 'PPS'],
  },
  {
    id: 'fastening-systems',
    name: 'Fastening Systems',
    category: 'structural',
    image: '/images/products/fastening-systems.jpg',
    description: 'Durable plastic fastening systems for various automotive applications.',
    features: [
      'Quick-release mechanisms',
      'Anti-vibration design',
      'Reusable fasteners',
      'Load-optimized structures',
      'Material compatibility',
    ],
    applications: [
      'Panel attachments',
      'Interior trim fasteners',
      'Harness clips',
      'Body panel clips',
      'Functional component mounts',
    ],
    materials: ['PA', 'POM', 'PP', 'TPE'],
  },
  {
    id: 'reinforcement-brackets',
    name: 'Reinforcement Brackets',
    category: 'structural',
    image: '/images/products/reinforcement-brackets.jpg',
    description: 'Lightweight yet strong reinforcement brackets for structural support.',
    features: [
      'High strength-to-weight ratio',
      'Glass fiber reinforcement',
      'Load path optimization',
      'Integrated mounting points',
      'Vibration isolation',
    ],
    applications: [
      'Dashboard support structures',
      'Door reinforcements',
      'Seat mounting brackets',
      'HVAC system supports',
      'Electronics mounting frames',
    ],
    materials: ['PA-GF', 'PP-GF', 'PBT-GF', 'PC-GF'],
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory)
  
  // Get product details for the selected product
  const productDetails = selectedProduct 
    ? products.find(p => p.id === selectedProduct) 
    : null

  return (
    <>
      {/* Hero section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover our comprehensive range of high-quality plastic components engineered for the automotive industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Products section */}
      <section className="py-16">
        <Container>
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setSelectedProduct(null)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Selected product details */}
          {selectedProduct && productDetails && (
            <div className="mb-16">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProduct(null)}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                iconPosition="left"
                className="mb-6"
              >
                Back to all products
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={productDetails.image}
                      alt={productDetails.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{productDetails.name}</h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mb-6 rounded-full"></div>
                  
                  <p className="text-lg text-gray-700 mb-8">{productDetails.description}</p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {productDetails.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
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
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Applications</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {productDetails.applications.map((application, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Available Materials</h3>
                      <div className="flex flex-wrap gap-2">
                        {productDetails.materials.map((material, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <Button href="/contact" size="lg" variant="primary">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products grid */}
          {!selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  variant="default"
                  hoverEffect={true}
                  onClick={() => setSelectedProduct(product.id)}
                  className="cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <button
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.75 9.75l4.5 4.5M9.75 14.25l4.5-4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any products in this category.</p>
              <Button onClick={() => setActiveCategory('all')} variant="outline">
                View All Products
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <Container>
          <Card variant="neumorphic" className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Custom Components?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in creating custom plastic components tailored to your specific requirements and specifications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Contact Our Team
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Learn About Our Services
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  )
}