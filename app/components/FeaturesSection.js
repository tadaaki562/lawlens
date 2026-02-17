export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Speak like yourself',
      subtitle: 'Input',
      description: 'Ask questions in your own words without legal training',
    },
    {
      id: 2,
      title: 'Laws find their place',
      subtitle: 'Sorting',
      description: 'The system identifies which laws apply to your situation',
    },
    {
      id: 3,
      title: 'Plain English, no tricks',
      subtitle: 'Clarity',
      description: 'Complex statutes become sentences you can actually understand',
    },
    {
      id: 4,
      title: 'Know where it comes from',
      subtitle: 'Sources',
      description: 'Every answer links back to official government documents',
    },
  ];

  return (
    <section id="features" className="py-20 px-4" style={{ backgroundColor: '#313236' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4" style={{ color: '#e3d3bc' }}>
          Capability
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#e3d3bc' }}>
          What LawLens does
        </h3>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#e3d3bc' }}>
          Five tools built to decode legal complexity into readable insight
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.slice(0, 4).map((feature) => {
            const getIcon = () => {
              switch(feature.id) {
                case 1: // Input - speech bubble
                  return (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  );
                case 2: // Sorting - simple stack
                  return (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  );
                case 3: // Clarity - lightbulb
                  return (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 6v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  );
                case 4: // Sources - link/document
                  return (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  );
                default:
                  return null;
              }
            };
            return (
            <div
              key={feature.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: '#735148', backgroundColor: '(158, 142, 119, 0.1)' }}
            >
              {/* Context-specific icon */}
              <div className="rounded h-32 mb-4 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
                {getIcon()}
              </div>

              <p className="text-sm font-semibold mb-2" style={{ color: '#e3d3bc' }}>{feature.subtitle}</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#e3d3bc' }}>{feature.title}</h3>
              <p className="mb-4 text-sm" style={{ color: '#e3d3bc' }}>{feature.description}</p>
            </div>
            );
          })}
        </div>

        {/* Warning section - contained width */}
        <div className="border rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto" style={{ borderColor: '#735148', backgroundColor: 'rgba(227, 211, 188, 0.05)' }}>
          <div>
            {/* Warning icon */}
            <div className="rounded h-40 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: '#e3d3bc' }}>Warning</p>
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#e3d3bc' }}>
              This is not legal advice from a lawyer
            </h3>
            <p className="mb-6" style={{ color: '#e3d3bc' }}>
              LawLens provides information only. Serious matters need real counsel.
            </p>
            <div className="flex gap-4 items-center">
              <a 
                href="https://sc.judiciary.gov.ph/home-legal-assistance-advice-opinions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 rounded hover:opacity-80 transition font-medium" 
                style={{ border: '1px solid #735148', color: '#e3d3bc' }}
              >
                Consult
              </a>
              <a 
                href="https://sc.judiciary.gov.ph/faq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline font-medium" 
                style={{ color: '#e3d3bc' }}
              >
                Learn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}