"use client";

import SocialIcons from "@/components/ui/SocialIcons";
import ContactInfo from "@/components/ui/ContactInfo";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-gray-50">
      <div className="grid md:grid-cols-2">
        {/* Left side - Contact Form */}
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Let discuss how we can help with your manufacturing needs</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right side - Contact Information */}
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Contact Information</h2>
            <ContactInfo />
            <div className="mt-12">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Follow Us</h3>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}