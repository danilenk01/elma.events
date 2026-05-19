"use client";

import { TextsUk } from "@/app/texts/uk";

export default function Navbar() {
  const navItems = [
    { label: TextsUk.navEvents, href: "/events" },
    { label: TextsUk.navBlog, href: "/blog" },
    { label: TextsUk.navGallery, href: "/gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">Elma🪐Events</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white px-4 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition-all duration-200"
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
              className="hidden sm:inline-block bg-white text-blue-900 px-7 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {TextsUk.navWantEvent}
            </a>
          </div>

          {/* Mobile menu button (for future implementation) */}
          <div className="md:hidden">
            <button className="text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-md transition-all">
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
