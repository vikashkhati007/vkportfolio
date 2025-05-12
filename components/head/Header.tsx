import { Lilita_One, Poppins } from "next/font/google";
import React from "react";
import MobileNavbar from "./MobileNabar";
import { Metadata } from "next";
const lilita_One = Lilita_One({ subsets: ["latin-ext"], weight: "400" });
const poppins = Poppins({ subsets: ["latin-ext"], weight: "400" });

const Header = () => {
  return (
    <header className="backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className={`font-bold text-3xl text-primary rounded-full ${lilita_One.className}`}
            >
              VK
            </a>
          </div>
          <div className="hidden sm:block">
            <ul className={`flex items-center space-x-7 ${poppins.className}`}>
              <li>
                <a
                  href="#intro"
                  className="text-primary font-semibold hover:underline hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary font-semibold hover:underline hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-primary font-semibold hover:underline hover:text-blue-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary font-semibold hover:underline hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </header>
  );
};

// Add social media meta tags in your layout.tsx
export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vikashkhati.com',
    title: 'Vikash Khati - Full Stack Developer',
    description: 'Portfolio of Vikash Khati, Full Stack Web Developer',
    images: [
      {
        url: 'https://vikashkhati.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vikash Khati'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vikashkhati',
    creator: '@vikashkhati'
  }
}
export default Header;
