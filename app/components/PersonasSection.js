export default function PersonasSection() {
  const personas = [
    {
      id: 1,
      role: 'Student',
      title: 'Law students preparing for exams and practice',
      description: 'Study materials that explain the reasoning behind the rules',
      link: 'Explore',
    },
    {
      id: 2,
      role: 'Creator',
      title: 'Content makers navigating intellectual property and rights',
      description: 'Understand what you can and cannot publish online',
      link: 'Explore',
    },
    {
      id: 3,
      role: 'Seller',
      title: 'Small business owners selling goods and services',
      description: 'Know your obligations before they become problems',
      link: 'Explore',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#e3d3bc' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4" style={{ color: '#313236' }}>
          Users
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#313236' }}>
          Who benefits most
        </h3>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#735148' }}>
          Three kinds of people find their answers here
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="border rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ borderColor: '#735148', backgroundColor: '#FFFFFF' }}
            >
              {/* Placeholder image */}
              <div className="rounded h-48 mb-6 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
                <svg
                  className="w-16 h-16"
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

              <p className="text-sm font-semibold mb-2" style={{ color: '#735148' }}>{persona.role}</p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#313236' }}>{persona.title}</h3>
              <p className="mb-6" style={{ color: '#735148' }}>{persona.description}</p>
              <a href="#" className="font-semibold hover:underline" style={{ color: '#313236' }}>
                {persona.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
