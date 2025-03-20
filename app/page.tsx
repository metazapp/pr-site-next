"use client";

import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ContactSection from "@/components/home/ContactSection";
import { setupAnimations } from "@/utils/animations";

export default function Home() {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
    </Layout>
  );
}