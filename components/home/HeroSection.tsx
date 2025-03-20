"use client";

import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Precision Engineered Plastic Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Leading manufacturer of high-performance automotive components with unmatched precision and quality
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto">
          Discover Our Solutions
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}