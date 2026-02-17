import Image from 'next/image';

export default function SDGSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#735148' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-16" style={{ color: '#e3d3bc' }}>
          Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - SDG Wheel image */}
          <div className="rounded-lg h-96 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#ffffff' }}>
            <div className="w-full h-full flex items-center justify-center">
              <Image 
                src="/Images/SDG/sdglogo.png" 
                alt="UN Sustainable Development Goals Wheel" 
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#e3d3bc' }}>
              Education and justice for everyone
            </h3>
            <p className="mb-8 text-lg" style={{ color: '#e3d3bc' }}>
              LawLens supports the United Nations Sustainable Development Goals by making
              legal knowledge accessible to all and strengthening institutions through informed
              citizens.
            </p>

            {/* SDG Icons */}
            <div className="flex gap-4 mb-8 items-end">
              {/* SDG 4 */}
             
                <div className="transform transition-transform duration-300 hover:scale-110 w-40 h-40 flex items-center justify-center rounded" style={{ backgroundColor: '#F3EEED' }}>
                  <Image 
                    src="/Images/SDG/sdg4.png" 
                    alt="SDG 4 - Quality Education" 
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              

              {/* SDG 16 */}
              
                <div className="transform transition-transform duration-300 hover:scale-110 w-40 h-40 flex items-center justify-center rounded" style={{ backgroundColor: '#F3EEED' }}>
                  <Image 
                    src="/Images/SDG/sdg16.png" 
                    alt="SDG 16 - Peace, Justice and Strong Institutions" 
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
       

              {/* More SDGs - Clickable Link */}
              <a 
                href="https://sdgs.un.org/goals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 rounded h-24 flex items-center justify-center overflow-hidden relative group cursor-pointer"
                style={{ backgroundColor: '#e3d3bc' }}
              >
                <Image 
                  src="/Images/SDG/SDG Wheel_Transparent_WEB.png" 
                  alt="UN Sustainable Development Goals" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:blur-sm transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold text-sm text-center px-2 drop-shadow-lg" style={{ color: '#0C2924' }}>Explore More SDGs</span>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-2 rounded hover:opacity-80 transition font-medium" style={{ backgroundColor: '#F3EEED', color: '#0C2924' }}>
                Learn
              </button>
              <button className="hover:underline font-medium" style={{ color: '#F3EEED' }}>
                Discover →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
