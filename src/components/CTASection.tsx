import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      // Animate CTA content
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Dream Placement?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our bootcamp and transform your career prospects. Limited seats
            available for the upcoming batch.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span>Batch: May 21, 2025</span>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2" />
              <span>Only 30 Seats</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              <span>Registration Closing Soon</span>
            </div>
          </div>

          <Link
            to="/register"
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Register Now
          </Link>
          <RegistrationModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
