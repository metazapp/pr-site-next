import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

export const metadata: Metadata = {
  title: 'Blog | PR Plastics',
  description: 'Insights, news, and trends in the automotive plastic components industry from PR Plastics.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: 'https://prplastics.in/blog',
  },
}

// Sample blog post data
// In a real implementation, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'advancements-in-automotive-plastics',
    title: 'Recent Advancements in Automotive Plastics Technology',
    excerpt: 'Explore the latest innovations in plastic materials and manufacturing techniques transforming the automotive industry.',
    date: 'March 15, 2025',
    author: 'Dr. Rahul Sharma',
    category: 'Technology',
    image: '/images/blog/advancements-in-automotive-plastics.jpg',
    readTime: '8 min read',
  },
  {
    slug: 'sustainability-in-manufacturing',
    title: 'Sustainability in Plastic Component Manufacturing',
    excerpt: 'How PR Plastics is implementing sustainable practices and eco-friendly materials in our manufacturing processes.',
    date: 'March 10, 2025',
    author: 'Priya Patel',
    category: 'Sustainability',
    image: '/images/blog/sustainability-in-manufacturing.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'impact-of-ev-trends',
    title: 'The Impact of Electric Vehicle Trends on Plastic Components',
    excerpt: 'Analyzing how the rise of electric vehicles is changing requirements for automotive plastic components.',
    date: 'March 5, 2025',
    author: 'Vikram Mehta',
    category: 'Industry Trends',
    image: '/images/blog/impact-of-ev-trends.jpg',
    readTime: '10 min read',
  },
  {
    slug: 'quality-control-innovations',
    title: 'Innovations in Quality Control for Automotive Components',
    excerpt: 'New technologies and methodologies that are enhancing quality assurance in plastic component manufacturing.',
    date: 'February 28, 2025',
    author: 'Dr. Anjali Desai',
    category: 'Quality Assurance',
    image: '/images/blog/quality-control-innovations.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'material-science-breakthroughs',
    title: 'Material Science Breakthroughs for Automotive Applications',
    excerpt: 'Exploring new polymer formulations providing enhanced performance characteristics for demanding automotive environments.',
    date: 'February 20, 2025',
    author: 'Dr. Rahul Sharma',
    category: 'Materials',
    image: '/images/blog/material-science-breakthroughs.jpg',
    readTime: '9 min read',
  },
  {
    slug: 'supply-chain-resilience',
    title: 'Building Supply Chain Resilience in Component Manufacturing',
    excerpt: 'Strategies for maintaining robust supply chains in the face of global uncertainties and disruptions.',
    date: 'February 15, 2025',
    author: 'Arjun Singh',
    category: 'Supply Chain',
    image: '/images/blog/supply-chain-resilience.jpg',
    readTime: '8 min read',
  },
]

// Featured post is the most recent one
const featuredPost = blogPosts[0]
// Other posts exclude the featured one
const otherPosts = blogPosts.slice(1)

export default function BlogPage() {
  return (
    <>
      {/* Hero section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Insights, news, and trends in the automotive plastic components industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured post */}
      <section className="py-16">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Article</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mb-6 rounded-full"></div>
          </div>

          <Card variant="elevated" className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {featuredPost.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {featuredPost.author}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                  >
                    Read Article
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
            </div>
          </Card>
        </Container>
      </section>

      {/* Blog post grid */}
      <section className="py-12 pb-20">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest Articles</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherPosts.map((post) => (
              <Card key={post.slug} variant="default" className="overflow-hidden h-full" hoverEffect={true}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <span className="text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium"
                    >
                      Read
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex" aria-label="Pagination">
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 text-gray-500"
              >
                Previous
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-blue-600 border border-blue-600 text-white hover:bg-blue-700"
              >
                1
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-100"
              >
                3
              </a>
              <span className="py-2 px-4 bg-white border border-gray-300 text-gray-500">
                ...
              </span>
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 text-gray-500 hover:bg-gray-100"
              >
                8
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 text-gray-500"
              >
                Next
              </a>
            </nav>
          </div>
        </Container>
      </section>

      {/* Newsletter subscription */}
      <section className="py-16 bg-blue-50">
        <Container>
          <Card variant="neumorphic" className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Stay Updated</h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest insights and news about the automotive plastic components industry.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  )
}