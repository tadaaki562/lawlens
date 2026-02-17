import Image from 'next/image';

export default function PersonasSection() {
  const personas = [
    {
      id: 1,
      role: 'Student',
      title: 'Law students preparing for exams and practice',
      description: 'Study materials that explain the reasoning behind the rules',
      image: '/Images/Landing%20Page/learning.jpg',
    },
    {
      id: 2,
      role: 'Creator',
      title: 'Content makers navigating intellectual property and rights',
      description: 'Understand what you can and cannot publish online',
      image: '/Images/Landing%20Page/publishing.jpg',
    },
    {
      id: 3,
      role: 'Seller',
      title: 'Small business owners selling goods and services',
      description: 'Know your obligations before they become problems',
      image: '/Images/Landing%20Page/business.jpg',
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
              {/* Image */}
              <div className="rounded h-48 mb-6 overflow-hidden bg-gray-200">
                <Image
                  src={persona.image}
                  alt={persona.role}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-semibold mb-2" style={{ color: '#735148' }}>{persona.role}</p>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#313236' }}>{persona.title}</h3>
              <p className="" style={{ color: '#735148' }}>{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
