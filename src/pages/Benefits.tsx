import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Award, FileCheck, Users, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animation on mount
  useEffect(() => {
    if (headerRef.current && contentRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
      
      // Animate content sections
      const sections = contentRef.current.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: 0.3 + (index * 0.15),
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);

  const benefits = [
    {
      icon: <FileCheck className="h-8 w-8 text-orange-500" />,
      title: 'Resume Building',
      description: 'Get professional guidance on crafting an industry-standard resume that highlights your strengths and makes you stand out from the crowd.',
      items: [
        'ATS-optimized formatting',
        'Strategic skill presentation',
        'Achievement-focused content',
        'Multiple review rounds'
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Mock Interviews',
      description: 'Practice with realistic mock interviews conducted by industry professionals who provide detailed feedback and improvement suggestions.',
      items: [
        'Technical interviews',
        'HR rounds',
        'Behavioral questions',
        'Stress interview preparation'
      ]
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: 'Personal Branding',
      description: 'Learn how to build and optimize your professional online presence, especially on platforms like LinkedIn and GitHub.',
      items: [
        'LinkedIn profile optimization',
        'GitHub portfolio curation',
        'Professional networking strategies',
        'Digital presence management'
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Soft Skills Development',
      description: 'Enhance your communication, presentation, and interpersonal skills that are crucial for excelling in group discussions and interviews.',
      items: [
        'Communication workshops',
        'Group discussion tactics',
        'Presentation skills',
        'Conflict resolution techniques'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div 
        ref={headerRef}
        className="relative py-20 bg-orange-500 text-white overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Additional Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Beyond technical training, we offer a comprehensive development program to make you placement-ready in all aspects.
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-orange-100">
                <div className="mb-6">{benefit.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h2>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What You'll Get:</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-orange-500 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why These Benefits Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete Package</h3>
                <p className="text-gray-600 mb-4">
                  Technical skills alone are not enough to succeed in today's competitive job market. Our additional benefits ensure you're well-rounded and prepared for all aspects of the placement process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Insights</h3>
                <p className="text-gray-600 mb-4">
                  Learn directly from professionals who understand what companies are looking for. Get insider knowledge on recruitment processes and expectations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Confidence Building</h3>
                <p className="text-gray-600 mb-4">
                  Practice in a supportive environment builds your confidence for real interviews. Our mock interviews and feedback sessions prepare you for any scenario.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Long-term Career Skills</h3>
                <p className="text-gray-600 mb-4">
                  The soft skills and personal branding techniques you learn will benefit you throughout your career, not just during placement season.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="bg-white p-8 rounded-lg shadow-md border border-orange-100 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Secure Your Dream Placement?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our comprehensive 7-week bootcamp and get access to all these benefits and more. Seats are limited for the upcoming batch.
            </p>
            <button className="btn-primary">
              Register Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Benefits;