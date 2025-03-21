import type { Metadata } from 'next'
import Container from '../components/ui/Container'
import Contact from '../components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | PR Plastics',
  description: 'Get in touch with our team of experts for inquiries about our plastic component solutions for the automotive industry.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: 'https://prplastics.in/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Get in touch with our team of experts for any inquiries about our services and products.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact form and info */}
      <Contact />

      {/* FAQ section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and products.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What industries do you serve?',
                answer: 'While we primarily focus on the automotive industry, our expertise in plastic component manufacturing extends to aerospace, consumer electronics, and industrial equipment sectors as well.'
              },
              {
                question: 'What is your typical production lead time?',
                answer: 'Lead times vary depending on the complexity and volume of the project. For standard components, we typically deliver within 4-6 weeks from order confirmation. Custom projects may require 8-12 weeks for tooling and initial production.'
              },
              {
                question: 'Do you offer engineering support for design optimization?',
                answer: 'Yes, we provide comprehensive engineering support for design optimization. Our team can help with material selection, DFM (Design for Manufacturing) analysis, and structural optimization to improve performance and reduce costs.'
              },
              {
                question: 'What quality certifications do you hold?',
                answer: 'PR Plastics is ISO 9001 and IATF 16949 certified. We also comply with various environmental and safety standards including ISO 14001 and OHSAS 18001.'
              },
              {
                question: 'Can you handle small production runs or prototypes?',
                answer: 'Yes, we offer both rapid prototyping services and low-volume production runs. For prototypes, we use a combination of 3D printing and CNC machining to deliver accurate prototypes quickly.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship to customers worldwide. We have established logistics partnerships to ensure reliable and cost-effective shipping to major global markets.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}