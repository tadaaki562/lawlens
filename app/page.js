import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SituationSection from './components/SituationSection';
import FeaturesSection from './components/FeaturesSection';
import PersonasSection from './components/PersonasSection';
import SDGSection from './components/SDGSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SituationSection />
      <FeaturesSection />
      <PersonasSection />
      <SDGSection />
      <CTASection />
      <Footer />
    </div>
  );
}
