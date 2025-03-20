"use client";

import { Factory, MapPin, Phone, Mail } from "lucide-react";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Factory className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">PlastiTech</span>
            </div>
            <p className="text-sm">
              Leading manufacturer of precision plastic components for the automotive industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Manufacturing Ave, Industrial District
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@plastitech.com
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <SocialIcons iconClassName="text-gray-400 hover:text-white transition-colors" />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} PlastiTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}