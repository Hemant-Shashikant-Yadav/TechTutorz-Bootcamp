import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WeekCard from "./WeekCard";
import { weeks } from "../data/bootcampData";

gsap.registerPlugin(ScrollTrigger);

const WeeksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="weeks-section" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 ref={titleRef} className="section-title text-center mb-12">
          Bootcamp Structure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.map((week, index) => (
            <WeekCard
              key={week.id}
              week={
                week.id === "1-3"
                  ? "1"
                  : week.id === "4-6"
                  ? "2"
                  : week.id === "7"
                  ? "3"
                  : week.id
              }
              title={
                week.id === "1-3"
                  ? week.title.replace("Week 1-3", "Stage 1")
                  : week.id === "4-6"
                  ? week.title.replace("Week 4-6", "Stage 2")
                  : week.id === "7"
                  ? week.title.replace("Week 7", "Stage 3")
                  : week.title
              }
              description={week.shortDescription}
              image={week.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeksSection;
