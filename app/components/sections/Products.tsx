'use client'

import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

// Product categories and showcased products
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
  },
  {
    id: 'door-panels',
    name: 'Door Panels',
    category: 'interior',
    image: '/images/products/door-panels.jpg',
    description: 'Custom door panels designed for optimal aesthetics and functionality.',
  },
  {
    id: 'bumper-systems',
    name: 'Bumper Systems',
    category: 'exterior',
    image: '/images/products/bumper-systems.jpg',
    description: 'High-impact resistant bumper systems with integrated sensor housing capabilities.',
  },
  {
    id: 'grille-assemblies',
    name: 'Grille Assemblies',
    category: 'exterior',
    image: '/images/products/grille-assemblies.jpg',
    description: 'Customizable grille assemblies featuring modern designs and durable materials.',
  },
  {
    id: 'cooling-systems',
    name: 'Cooling System Components',
    category: 'underhood',
    image: '/images/products/cooling-systems.jpg',
    description: 'Heat-resistant plastic components for automotive cooling systems.',
  },
  {
    id: 'air-intake',
    name: 'Air Intake Components',
    category: 'underhood',
    image: '/images/products/air-intake.jpg',
    description: 'Optimized air intake components designed for improved engine performance.',
  },
  {
    id: 'fastening-systems',
    name: 'Fastening Systems',
    category: 'structural',
    image: '/images/products/fastening-systems.jpg',
    description: 'Durable plastic fastening systems for various automotive applications.',
  },
  {
    id: 'reinforcement-brackets',
    name: 'Reinforcement Brackets',
    category: 'structural',
    image: '/images/products/reinforcement-brackets.jpg',
    description: 'Lightweight yet strong reinforcement brackets for structural support.',
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Product Showcase
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our range of high-quality plastic components engineered for the automotive industry.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
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

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
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
                <Link
                  href={`/products#${product.id}`}
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
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all products link */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
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
    </section>
  )
}