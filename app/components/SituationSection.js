'use client';

import Image from 'next/image';

export default function SituationSection() {
  const statistics = [
    {
      id: 1,
      title: 'Legal Literacy Is Low',
      subtitle: 'Knowledge Gap',
      description: 'Many Filipinos find legal documents hard to understand. A study among college students in the Philippines showed that 88% have limited legal knowledge, with only about 11.5% scoring proficient in understanding law concepts.',
      link: 'Read Study',
      url: 'https://legalresearchph.com/2021/05/17/gauging-the-depth-of-legal-knowledge-among-college-undergraduates/',
      image: '/Images/Landing Page/knowledgegap.png'
    },
    {
      id: 2,
      title: 'Awareness of Laws Is Not Universal',
      subtitle: 'Awareness Gap',
      description: 'Many people don\'t know which laws apply to them. A community study on awareness of the Cybercrime Prevention Act (RA 10175) found that about 25% of respondents were unaware of it, even though they regularly use the internet.',
      link: 'Read Study',
      url: 'https://rsisinternational.org/journals/ijriss/articles/assessing-cybercrime-awareness-and-experiences-among-netizen-a-study-on-the-impact-of-r-a-10175-in-pagadian-city/',
      image: '/Images/Landing Page/awarenessgap.png'
    },
    {
      id: 3,
      title: 'Comprehension: Legal Language Is Difficult to Understand',
      subtitle: 'Comprehension Gap',
      description: 'A cognitive science study found that people recall and understand legal text much better when it is rewritten in plain language — meaning the original legalese is inherently harder to process.',
      link: 'Read Study',
      url: 'https://www.sciencedirect.com/science/article/pii/S0010027722000580',
      image: '/Images/Landing Page/comprehensiongap.png'
    },
  ];

  return (
    <section id="about"  className="py-20 px-4 pt-30" style={{ backgroundColor: '#e3d3bc' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4" style={{ color: '#313236' }}>
          Reality
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#313236' }}>
          Three Knowledge Gaps in the Philippines
        </h3>
        <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#735148' }}>
          Research shows that many Filipinos struggle with legal literacy, awareness, and comprehension
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="border rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ borderColor: '#735148', backgroundColor: '#FFFFFF' }}
            >
              {/* Image */}
              <div className="rounded h-40 mb-6 overflow-hidden bg-gray-200">
                <Image
                  src={stat.image}
                  alt={stat.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-semibold mb-2" style={{ color: '#735148' }}>{stat.subtitle}</p>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#313236' }}>{stat.title}</h3>
              <p className="mb-6" style={{ color: '#735148' }}>{stat.description}</p>
              <a href={stat.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#313236' }}>
                {stat.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
