"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Visit Us</h3>
          <p className="text-gray-600">123 Manufacturing Ave,<br />Industrial District,<br />Tech City, TC 12345</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Call Us</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Email Us</h3>
          <p className="text-gray-600">info@plastitech.com</p>
        </div>
      </div>
    </div>
  );
}