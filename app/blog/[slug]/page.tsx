import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/ui/Container'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

// In a real implementation, this would fetch data from a CMS or database
// based on the slug parameter
const getBlogPost = (slug: string) => {
  // This is hardcoded blog post data for demonstration
  // For a real website, this would come from an API call
  const posts = {
    'advancements-in-automotive-plastics': {
      title: 'Recent Advancements in Automotive Plastics Technology',
      date: 'March 15, 2025',
      author: 'Dr. Rahul Sharma',
      authorRole: 'Chief Technology Officer',
      authorImage: '/images/team/rahul-sharma.jpg',
      category: 'Technology',
      image: '/images/blog/advancements-in-automotive-plastics.jpg',
      readTime: '8 min read',
      content: `
        <p>The automotive industry is undergoing a significant transformation, with plastic components playing an increasingly crucial role in vehicle design and manufacturing. At PR Plastics, we're at the forefront of this evolution, constantly researching and implementing the latest advancements in automotive plastics technology.</p>

        <h2>Lightweight Materials: The Future of Automotive Design</h2>
        <p>Weight reduction remains one of the primary objectives for automotive manufacturers, driven by the need to improve fuel efficiency and reduce emissions. Recent advancements in polymer science have introduced a new generation of lightweight materials that maintain or even enhance structural integrity.</p>
        <p>Carbon fiber reinforced polymers (CFRP) have seen significant cost reductions, making them more viable for mass-produced vehicles. Additionally, glass fiber reinforced thermoplastics offer an excellent balance of weight reduction and cost-effectiveness, with improvements in impact resistance and dimensional stability.</p>

        <h2>High-Performance Composites</h2>
        <p>The development of high-performance composites has revolutionized what's possible with plastic components in automotive applications. These advanced materials combine the benefits of multiple substances to create solutions that address specific challenges:</p>
        <ul>
          <li>Nano-composite materials that enhance mechanical properties</li>
          <li>Multi-material systems that optimize performance for specific applications</li>
          <li>Bio-based composites that reduce environmental impact while maintaining performance</li>
        </ul>
        <p>These composites allow for thinner wall sections, reduced weight, and improved functional integration, all while meeting stringent automotive requirements.</p>

        <h2>Advanced Manufacturing Techniques</h2>
        <p>The advancements in materials science have been complemented by innovations in manufacturing processes. Multi-material injection molding allows for creating complex components with varying properties in different areas, reducing assembly requirements and improving overall quality.</p>
        <p>Additive manufacturing (3D printing) has also evolved from primarily being used for prototyping to becoming a viable production method for certain components. This technology enables:</p>
        <ul>
          <li>Complex geometries that would be impossible with traditional manufacturing</li>
          <li>Reduced tooling costs for low-volume production</li>
          <li>Rapid iteration and customization capabilities</li>
          <li>Optimized structures that reduce weight while maintaining strength</li>
        </ul>

        <h2>Smart Materials and Integrated Electronics</h2>
        <p>Perhaps the most exciting frontier in automotive plastics is the development of smart materials and the integration of electronics within plastic components. Conductive polymers and materials with embedded sensors are transforming conventional parts into intelligent systems that can:</p>
        <ul>
          <li>Monitor structural integrity and performance</li>
          <li>Provide haptic feedback for human-machine interfaces</li>
          <li>Dynamically adjust properties based on environmental conditions</li>
          <li>Reduce wiring complexity through integrated circuits</li>
        </ul>
        <p>These innovations are particularly relevant as vehicles become more autonomous and connected, requiring more sensors and electronics throughout the vehicle.</p>

        <h2>Sustainability Innovations</h2>
        <p>Environmental considerations have driven significant research into sustainable alternatives for automotive plastics. Bio-based polymers derived from renewable resources are increasingly viable for automotive applications, with improvements in thermal stability and mechanical properties.</p>
        <p>Recycling technologies have also advanced significantly, with chemical recycling processes able to break down polymers to their base molecules, allowing for true circular economy solutions. These processes result in recycled materials with properties nearly identical to virgin materials.</p>

        <h2>Future Outlook</h2>
        <p>The pace of innovation in automotive plastics shows no signs of slowing. We anticipate continued advancements in:</p>
        <ul>
          <li>Self-healing polymers that can repair minor damage autonomously</li>
          <li>Shape-memory materials that can change form in response to stimuli</li>
          <li>Further integration of electronics and sensing capabilities</li>
          <li>Improved end-of-life recyclability and sustainable material sources</li>
        </ul>
        <p>At PR Plastics, we're committed to staying at the cutting edge of these developments, incorporating new technologies into our manufacturing processes and product offerings to provide our automotive clients with the most advanced solutions available.</p>

        <p>As the automotive industry continues its evolution toward more efficient, connected, and sustainable vehicles, plastic components will play an increasingly vital role. By embracing these technological advancements, we're helping our clients meet the challenges of today while preparing for the opportunities of tomorrow.</p>
      `,
      relatedPosts: [
        'sustainability-in-manufacturing',
        'impact-of-ev-trends',
        'material-science-breakthroughs',
      ]
    },
    // Additional posts would be defined here
  };

  return posts[slug as keyof typeof posts];
};

// For a real implementation, this would be a server component
// that generates metadata based on the actual blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | PR Plastics Blog',
    };
  }
  
  return {
    title: `${post.title} | PR Plastics Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, '') + '...',
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, '') + '...',
      url: `https://prplastics.in/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Dummy function to get related posts
// In a real implementation, this would fetch from a database or CMS
const getRelatedPosts = (slugs: string[]) => {
  const allPosts = {
    'sustainability-in-manufacturing': {
      slug: 'sustainability-in-manufacturing',
      title: 'Sustainability in Plastic Component Manufacturing',
      excerpt: 'How PR Plastics is implementing sustainable practices and eco-friendly materials in our manufacturing processes.',
      date: 'March 10, 2025',
      author: 'Priya Patel',
      category: 'Sustainability',
      image: '/images/blog/sustainability-in-manufacturing.jpg',
    },
    'impact-of-ev-trends': {
      slug: 'impact-of-ev-trends',
      title: 'The Impact of Electric Vehicle Trends on Plastic Components',
      excerpt: 'Analyzing how the rise of electric vehicles is changing requirements for automotive plastic components.',
      date: 'March 5, 2025',
      author: 'Vikram Mehta',
      category: 'Industry Trends',
      image: '/images/blog/impact-of-ev-trends.jpg',
    },
    'material-science-breakthroughs': {
      slug: 'material-science-breakthroughs',
      title: 'Material Science Breakthroughs for Automotive Applications',
      excerpt: 'Exploring new polymer formulations providing enhanced performance characteristics for demanding automotive environments.',
      date: 'February 20, 2025',
      author: 'Dr. Rahul Sharma',
      category: 'Materials',
      image: '/images/blog/material-science-breakthroughs.jpg',
    },
  };
  
  return slugs.map(slug => allPosts[slug as keyof typeof allPosts]);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  // Handle if post not found
  if (!post) {
    return (
      <section className="py-16">
        <Container>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Post Not Found</h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button href="/blog" variant="primary">
              Return to Blog
            </Button>
          </div>
        </Container>
      </section>
    );
  }
  
  // Get related posts
  const relatedPosts = post.relatedPosts ? getRelatedPosts(post.relatedPosts) : [];
  
  return (
    <>
      {/* Hero section */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <div className="relative w-10 h-10 overflow-hidden rounded-full bg-blue-200 mr-3">
                  {post.authorImage ? (
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-blue-700 font-bold">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <div className="font-medium">{post.author}</div>
                  {post.authorRole && (
                    <div className="text-blue-200 text-sm">{post.authorRole}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center text-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{post.date}</span>
                <span className="mx-2 text-gray-400">•</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured image */}
      <section className="py-8 bg-white">
        <Container>
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Article content */}
      <section className="py-12">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <Card variant="default" className="p-8 lg:p-12">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Social sharing */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">Share this article</h3>
                      <div className="flex space-x-4">
                        {[
                          {
                            name: 'Twitter',
                            icon: (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            ),
                            bgColor: 'bg-[#1DA1F2]',
                          },
                          {
                            name: 'LinkedIn',
                            icon: (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            ),
                            bgColor: 'bg-[#0A66C2]',
                          },
                          {
                            name: 'Facebook',
                            icon: (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                              </svg>
                            ),
                            bgColor: 'bg-[#1877F2]',
                          },
                        ].map((social) => (
                          <a
                            key={social.name}
                            href="#"
                            className={`${social.bgColor} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
                            aria-label={`Share on ${social.name}`}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    <Button href="/blog" variant="outline" size="sm" iconPosition="left" icon={
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
                    }>
                      Back to all articles
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Author info */}
              <Card variant="default" className="p-8 mt-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full bg-blue-100 mb-4 sm:mb-0 sm:mr-6">
                    {post.authorImage ? (
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-blue-700 font-bold text-xl">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.author}</h3>
                    {post.authorRole && (
                      <p className="text-gray-600 mb-4">{post.authorRole}</p>
                    )}
                    <p className="text-gray-600">
                      Dr. Rahul Sharma brings over 15 years of experience in polymer science and plastic manufacturing. As the Chief Technology Officer at PR Plastics, he leads our research and development initiatives to bring cutting-edge solutions to our automotive clients.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.slug} className="flex items-start">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {[
                    'Technology',
                    'Sustainability',
                    'Industry Trends',
                    'Materials',
                    'Manufacturing',
                    'Supply Chain',
                    'Quality Assurance',
                    'Innovation',
                  ].map((category) => (
                    <Link
                      key={category}
                      href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between py-2 px-4 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <span className="text-gray-700">{category}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <Card variant="neumorphic" className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest insights and news in the automotive plastics industry.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                  <Button type="submit" variant="primary" fullWidth={true}>
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}