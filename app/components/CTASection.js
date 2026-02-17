'use client';
import Image from 'next/image';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section id='cta' className="py-45 px-4 " style={{ backgroundColor: '#e3d3bc' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#313236' }}>
          Ready to know your rights
        </h2>
        <p className="text-lg mb-12" style={{ color: '#735148' }}>
          Start decoding legal documents today. Your questions deserve clear answers.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/app" className="px-8 py-3 rounded font-bold hover:opacity-90 transition inline-block" style={{ backgroundColor: '#313236', color: '#e3d3bc' }}>
            Begin
          </Link>
          <a href="/signup" className="px-8 py-3 rounded font-bold hover:opacity-90 transition inline-block border-2" style={{ borderColor: '#313236', color: '#313236', backgroundColor: 'transparent' }}>
            Sign Up
          </a>
        </div>

        {/* Large placeholder image */}
        <div className="rounded-lg h-full w-full p-1 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
          <Image 
                            src="/Images/Landing Page/cta.png" 
                            alt="CTA Image" 
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover group-hover:blur-sm transition-all duration-300"
                          />
        </div>
      </div>
    </section>
  );
}
