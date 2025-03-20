import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlastiTech - Precision Engineered Plastic Solutions",
  description: "Leading manufacturer of high-performance automotive components with unmatched precision and quality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}