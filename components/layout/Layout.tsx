"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}