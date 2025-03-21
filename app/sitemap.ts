import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prplastics.in'
  
  // Main pages
  const routes = [
    '',
    '/services',
    '/products',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Blog posts would be dynamically added here in a real implementation
  // Example:
  // const blogPosts = await getBlogPosts()
  // const blogRoutes = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))
  
  // return [...routes, ...blogRoutes]
  return routes
}