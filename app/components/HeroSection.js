'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen  overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/Images/Landing Page/hero.jpg" 
        alt="Hero Image" 
        fill
        className="object-cover"
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content overlaid on top */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
            Understand the law in plain language
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
            LawLens transforms complex legal documents into clear, readable summaries. Get the answers
            you need without the jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="px-8 py-3 rounded font-bold hover:opacity-60 transition" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
              Start
            </a>
            <a href="#about" className="px-8 py-3 rounded font-bold transition" style={{ border: '2px solid #e3d3bc', color: '#e3d3bc' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#e3d3bc'; e.target.style.color = '#313236'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e3d3bc'; }}>
              Learn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}