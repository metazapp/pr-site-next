import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Products from './components/sections/Products'
import Advantages from './components/sections/Advantages'
import Contact from './components/sections/Contact'
import { Metadata } from 'next'

// Add structured data for better SEO
export const generateMetadata = async (): Promise<Metadata> => {
  // Structured data for organization (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PR Plastics',
    url: 'https://prplastics.in',
    logo: 'https://prplastics.in/images/logo.png',
    sameAs: [
      'https://facebook.com/prplastics',
      'https://linkedin.com/company/prplastics',
      'https://twitter.com/prplastics',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-1234567890',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Industrial Area',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN',
    }
  };

  return {
    title: {
      default: 'PR Plastics | Premium Automotive Component Manufacturing',
      template: '%s | PR Plastics'
    },
    description: 'PR Plastics specializes in high-quality plastic component manufacturing for the automotive industry, providing innovative solutions with precision engineering.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      url: 'https://prplastics.in',
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Advantages />
      <Contact />
    </>
  )
}