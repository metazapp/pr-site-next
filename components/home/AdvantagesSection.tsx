"use client";

import { Shield, Factory, Users, PenTool as Tool } from "lucide-react";

const advantages = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Quality Assured",
    description: "ISO 9001:2015 certified manufacturing processes"
  },
  {
    icon: <Factory className="w-10 h-10 text-blue-600" />,
    title: "Modern Facility",
    description: "State-of-the-art machinery and equipment"
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Expert Team",
    description: "Highly skilled engineering and production staff"
  },
  {
    icon: <Tool className="w-10 h-10 text-blue-600" />,
    title: "Custom Solutions",
    description: "Tailored manufacturing solutions for your needs"
  }
];

export default function AdvantagesSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="fade-in opacity-0 translate-y-10 transition-all duration-700 bg-gray-50 p-6 rounded-lg shadow-[3px_3px_10px_#d1d1d1,-3px_-3px_10px_#ffffff] hover:shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff]"
            >
              <div className="flex flex-col items-center text-center">
                {advantage.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}