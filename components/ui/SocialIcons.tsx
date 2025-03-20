"use client";

import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialIcons({ className = "flex space-x-4", iconClassName = "text-gray-600 hover:text-blue-600 transition-colors" }: SocialIconsProps) {
  return (
    <div className={className}>
      <a href="#" className={iconClassName}>
        <Facebook className="h-6 w-6" />
      </a>
      <a href="#" className={iconClassName}>
        <Twitter className="h-6 w-6" />
      </a>
      <a href="#" className={iconClassName}>
        <LinkedIn className="h-6 w-6" />
      </a>
      <a href="#" className={iconClassName}>
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
}