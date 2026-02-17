'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#e3d3bc', borderBottom: '1px solid #735148' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#313236' }}>LawLens</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="font-medium transition"
              style={{ color: '#313236' }}
              onMouseEnter={(e) => e.target.style.color = '#735148'}
              onMouseLeave={(e) => e.target.style.color = '#313236'}
            >
              About
            </a>
            <a
              href="#features"
              className="font-medium transition"
              style={{ color: '#313236' }}
              onMouseEnter={(e) => e.target.style.color = '#735148'}
              onMouseLeave={(e) => e.target.style.color = '#313236'}
            >
              Features
            </a>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="font-medium transition flex items-center gap-1"
                style={{ color: '#313236' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#735148'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#313236'}
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isResourcesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

          

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-2 z-10" style={{ backgroundColor: '#e3d3bc', border: '1px solid #735148' }}>
                  <a
                    href="#guides"
                    className="block px-4 py-2 transition"
                    style={{ color: '#313236' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(115, 81, 72, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Guides
                  </a>
                  <a
                    href="#faq"
                    className="block px-4 py-2 transition"
                    style={{ color: '#313236' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(115, 81, 72, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    FAQ
                  </a>
                  <a
                    href="#contact"
                    className="block px-4 py-2 transition"
                    style={{ color: '#313236' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(115, 81, 72, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/app" className="px-6 py-2 rounded hover:opacity-90 transition font-medium inline-block" style={{ backgroundColor: '#313236', color: '#e3d3bc' }}>
              Start
            </a>
            <a href="/login" className="px-6 py-2 rounded hover:opacity-90 transition font-medium border-2 inline-block" style={{ borderColor: '#313236', color: '#313236', backgroundColor: 'transparent' }}>
              Login
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 transition-all"
              style={{
                backgroundColor: '#313236',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}
            ></span>
            <span
              className="w-6 h-0.5 transition-all"
              style={{
                backgroundColor: '#313236',
                opacity: isMobileMenuOpen ? 0 : 1
              }}
            ></span>
            <span
              className="w-6 h-0.5 transition-all"
              style={{
                backgroundColor: '#313236',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in from Right */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div
        className="fixed top-16 right-0 h-screen w-64 shadow-lg transform transition-transform duration-300 overflow-y-auto md:hidden z-40"
        style={{
          backgroundColor: '#e3d3bc',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          borderLeft: '1px solid #735148'
        }}
      >
        <div className="p-6 space-y-4">
          {/* About Link Mobile */}
          <a
            href="#about"
            className="block font-medium py-2"
            style={{ color: '#313236' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>

          {/* Features Link Mobile */}
          <a
            href="#features"
            className="block font-medium py-2"
            style={{ color: '#313236' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>

          {/* Resources Dropdown Mobile */}
          <div>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full text-left font-medium py-2 transition flex items-center justify-between"
              style={{ color: '#313236' }}
            >
              Resources
              <svg
                className={`w-4 h-4 transition-transform ${
                  isResourcesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="pl-4 space-y-2">
                <a
                  href="#guides"
                  className="block py-2"
                  style={{ color: '#735148' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Guides
                </a>
                <a
                  href="#faq"
                  className="block py-2"
                  style={{ color: '#735148' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="block py-2"
                  style={{ color: '#735148' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="pt-4 space-y-3 border-t" style={{ borderColor: '#735148' }}>
            <a
              href="/app"
              className="w-full block py-2 rounded font-medium text-center"
              style={{ backgroundColor: '#313236', color: '#e3d3bc' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start
            </a>
            <a
              href="/login"
              className="w-full block py-2 rounded font-medium text-center border-2"
              style={{ borderColor: '#313236', color: '#313236', backgroundColor: 'transparent' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/signup"
              className="w-full block py-2 rounded font-medium text-center"
              style={{ backgroundColor: '#735148', color: '#e3d3bc' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
  
}
