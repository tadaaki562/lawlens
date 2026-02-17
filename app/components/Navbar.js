'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#e3d3bc', borderBottom: '1px solid #735148' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#313236' }}>LawLens</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="font-medium transition"
              style={{ color: '#313236' }}
              onMouseEnter={(e) => e.target.style.color = '#735148'}
              onMouseLeave={(e) => e.target.style.color = '#313236'}
            >
              About us
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

          {/* Start, Login, and Signup Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 rounded hover:opacity-90 transition font-medium" style={{ backgroundColor: '#313236', color: '#e3d3bc' }}>
              Start
            </button>
            <a href="/login" className="px-6 py-2 rounded hover:opacity-90 transition font-medium border-2 inline-block" style={{ borderColor: '#313236', color: '#313236', backgroundColor: 'transparent' }}>
              Login
            </a>
            <a href="/signup" className="px-6 py-2 rounded hover:opacity-90 transition font-medium" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
