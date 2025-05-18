import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation on mount
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        '.scroll-indicator',
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            // Add pulsing animation to scroll indicator
            gsap.to('.scroll-indicator', {
              y: 10,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            });
          }
        },
        '-=0.2'
      );
  }, []);

  // Scroll to weeks section
  const scrollToWeeks = () => {
    const weeksSection = document.getElementById('weeks-section');
    if (weeksSection) {
      weeksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fff8f1 0%, #fff 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 z-10 text-center">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          7-Week Campus Placement Bootcamp
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Master aptitude, technical skills, and soft skills to secure your dream job.
          Join our intensive bootcamp designed for placement success.
        </p>
        <button 
          onClick={scrollToWeeks}
          className="hero-cta btn-primary text-lg px-8 py-3"
        >
          Start Now
        </button>
        
        {/* Scroll indicator */}
        <div 
          className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToWeeks}
        >
          <span className="text-sm text-gray-500 mb-2">Explore Weeks</span>
          <ArrowDown className="text-orange-500" size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;