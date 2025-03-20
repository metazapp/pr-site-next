"use client";

import { Factory, Settings, PenTool as Tool } from "lucide-react";

const services = [
  {
    icon: <Factory className="w-12 h-12 text-blue-600" />,
    title: "Automotive Components",
    description: "Specialized manufacturing of high-precision automotive plastic components"
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: "Custom Molding",
    description: "Tailored plastic molding solutions for specific industry requirements"
  },
  {
    icon: <Tool className="w-12 h-12 text-blue-600" />,
    title: "Engineering Consultation",
    description: "Expert guidance on design optimization and material selection"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Our Manufacturing Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff] transition-all duration-300 hover:shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] hover:transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}