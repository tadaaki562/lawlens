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
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ borderColor: '#735148', backgroundColor: '(158, 142, 119, 0.1)' }}
            >
              {/* Placeholder image */}
              <div className="rounded h-32 mb-4 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <p className="text-sm font-semibold mb-2" style={{ color: '#e3d3bc' }}>{feature.subtitle}</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#e3d3bc' }}>{feature.title}</h3>
              <p className="mb-4 text-sm" style={{ color: '#e3d3bc' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Warning section - full width */}
        <div className="border rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center" style={{ borderColor: '#735148', backgroundColor: 'rgba(227, 211, 188, 0.05)' }}>
          <div>
            {/* Placeholder image */}
            <div className="rounded h-64 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
              <svg
                className="w-20 h-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 9v2m0 4v2m0 4v2m6-8a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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