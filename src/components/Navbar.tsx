"use client";

import Link from "next/link";
import { TextsUk } from "@/app/texts/uk";

export default function Navbar() {
  const navItems = [
    { label: TextsUk.navEvents, href: "/events" },
    { label: TextsUk.navBlog, href: "/blog" },
    { label: TextsUk.navGallery, href: "/gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-navy-950/85 backdrop-blur border-b border-silver-400/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Elma Events"
                className="h-10 w-10 rounded-full object-cover scale-110"
              />
              <span className="font-serif text-silver-100 text-2xl font-semibold tracking-[0.2em] uppercase">
                Elma Events
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-silver-200 px-4 py-2 rounded-md text-base font-medium hover:text-elma-pink hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden sm:inline-block bg-elma-pink text-white px-7 py-2 rounded-full font-semibold hover:bg-[#d95593] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {TextsUk.navWantEvent}
            </a>
          </div>

          {/* Mobile menu button (for future implementation) */}
          <div className="md:hidden">
            <button className="text-silver-200 p-2 hover:bg-white/10 rounded-md transition-all">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
