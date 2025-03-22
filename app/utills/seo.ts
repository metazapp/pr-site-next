import type { Metadata } from 'next'

/**
 * Base metadata object with default values
 */
export const baseMetadata: Metadata = {
  title: {
    default: 'PR Plastics | Premium Automotive Component Manufacturing',
    template: '%s | PR Plastics'
  },
  description: 'PR Plastics specializes in high-quality plastic component manufacturing for the automotive industry, providing innovative solutions with precision engineering.',
  keywords: ['plastic manufacturing', 'automotive components', 'plastic injection molding', 'automotive parts', 'precision engineering'],
  authors: [{ name: 'PR Plastics' }],
  creator: 'PR Plastics',
  publisher: 'PR Plastics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prplastics.in'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/**
 * Generate Open Graph metadata for a page
 */
export function createOpenGraphMetadata(
  title: string,
  description: string,
  url: string,
  imagePath: string = '/images/og-image.jpg'
): Metadata['openGraph'] {
  return {
    title,
    description,
    url,
    siteName: 'PR Plastics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

/**
 * Generate Twitter metadata for a page
 */
export function createTwitterMetadata(
  title: string,
  description: string,
  imagePath: string = '/images/twitter-image.jpg'
): Metadata['twitter'] {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [imagePath],
  }
}

/**
 * Create JSON-LD structured data for organization
 */
export function createOrganizationSchema() {
  return {
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
      telephone: '+91  99766 16661',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 1/117, Renugadevi Kovil Street',
      addressLocality: 'Coimbatore ',
      addressRegion: 'Tamilnadu',
      postalCode: '641047',
      addressCountry: 'IN',
    }
  }
}

/**
 * Create JSON-LD structured data for a product
 */
export function createProductSchema(
  name: string,
  description: string,
  image: string,
  category: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    category,
    manufacturer: {
      '@type': 'Organization',
      name: 'PR Plastics'
    }
  }
}

/**
 * Create JSON-LD structured data for a blog post
 */
export function createBlogPostSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  authorName: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PR Plastics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://prplastics.in/images/logo.png'
      }
    }
  }
}

/**
 * Combine metadata with base metadata
 */
export function mergeMetadata(metadata: Metadata): Metadata {
    return {
      ...baseMetadata,
      ...metadata,
      openGraph: {
        ...baseMetadata.openGraph,
        ...metadata.openGraph,
      },
      twitter: {
        ...baseMetadata.twitter,
        ...metadata.twitter,
      },
      robots: metadata.robots || baseMetadata.robots,
    }
  }