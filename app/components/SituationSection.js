export default function SituationSection() {
  const statistics = [
    {
      id: 1,
      title: 'Seven in ten cannot read their contracts',
      subtitle: 'Access',
      description: 'Legal literacy remains low across all demographics',
      link: 'Read',
    },
    {
      id: 2,
      title: 'Legal advice remains expensive and out of reach',
      subtitle: 'Cost keeps people away from help',
      description: 'Time is money in the legal world',
      link: 'Explore',
    },
    {
      id: 3,
      title: 'Waiting for answers wastes hours and resources',
      subtitle: 'Discover',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'Button',
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#e3d3bc' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4" style={{ color: '#313236' }}>
          Reality
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#313236' }}>
          The knowledge gap is real
        </h3>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#735148' }}>
          Most people struggle to understand legal documents on their own
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="border rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ borderColor: '#735148', backgroundColor: '#FFFFFF' }}
            >
              {/* Placeholder image */}
              <div className="rounded h-40 mb-6 flex items-center justify-center" style={{ backgroundColor: '#735148', color: '#e3d3bc' }}>
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

              <p className="text-sm font-semibold mb-2" style={{ color: '#735148' }}>{stat.subtitle}</p>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#313236' }}>{stat.title}</h3>
              <p className="mb-6" style={{ color: '#735148' }}>{stat.description}</p>
              <a href="#" className="font-semibold hover:underline" style={{ color: '#313236' }}>
                {stat.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
