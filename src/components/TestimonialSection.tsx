import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Google',
    content: 'The bootcamp was instrumental in my placement at Google. The technical skills and interview preparation gave me an edge over other candidates.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Rahul Patel',
    role: 'Full Stack Developer at Amazon',
    content: 'From struggling with aptitude to acing technical interviews, this bootcamp transformed my approach to placements. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Aarti Singh',
    role: 'Data Analyst at Microsoft',
    content: 'The structured approach and daily practice sessions helped me improve consistently. The mock interviews boosted my confidence tremendously.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate testimonials
      testimonialRefs.current.forEach((testimonial, index) => {
        if (testimonial) {
          gsap.fromTo(
            testimonial,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.2 + index * 0.15,
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 ref={titleRef} className="section-title text-center mb-12">
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500 h-5 w-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;