'use client';

export default function Footer() {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: '#313236', borderTop: '1px solid #735148' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-80 gap-8 mb-12 ">
          {/* Logo Section */}
          {/* <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#F3EEED' }}>Logo</h3>
            <p className="text-sm mb-6" style={{ color: '#567470' }}>
              Get updates on new features and product releases.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border rounded text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#567470' }}
              />
              <button className="px-4 py-2 rounded hover:opacity-90 transition text-sm font-medium" style={{ backgroundColor: '#F3EEED', color: '#0C2924' }}>
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-3" style={{ color: '#567470' }}>
              By subscribing you agree to our Privacy Policy and consent to receive updates from LawLens.
            </p>
          </div> */}

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F3EEED' }}>Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Official Gazette
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Legal Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F3EEED' }}>Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  About LawLens
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F3EEED' }}>Follow us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm flex items-center gap-2" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F3EEED'} onMouseLeave={(e) => e.currentTarget.style.color = '#567470'}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center gap-2" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F3EEED'} onMouseLeave={(e) => e.currentTarget.style.color = '#567470'}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8" style={{ borderTop: '1px solid #e3d3bc' }}>
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: '#e3d3bc' }}>
              © 2025 LawLens. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                Terms of Service
              </a>
              <a href="#" className="text-sm" style={{ color: '#e3d3bc' }} onMouseEnter={(e) => e.target.style.color = '#F3EEED'} onMouseLeave={(e) => e.target.style.color = '#567470'}>
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
