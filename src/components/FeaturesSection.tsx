import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Comprehensive Curriculum',
    description: 'Covers aptitude, technical skills, and soft skills needed for placement success',
  },
  {
    title: 'Industry-aligned Content',
    description: 'Practice with real company questions and interview patterns',
  },
  {
    title: 'Daily Assessments',
    description: 'Regular tests to track progress and identify improvement areas',
  },
  {
    title: 'Mock Interviews',
    description: 'Simulated interview experiences with detailed feedback',
  },
  {
    title: 'Resume Building',
    description: 'Professional guidance on crafting an impressive resume',
  },
  {
    title: 'Personalized Mentorship',
    description: 'One-on-one sessions with industry professionals',
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      // Animate section title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate features
      featureRefs.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-orange-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          ref={titleRef} 
          className="section-title text-center mb-12"
        >
          Why Choose Our Bootcamp
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-sm border border-orange-100"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-orange-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 ml-9">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;