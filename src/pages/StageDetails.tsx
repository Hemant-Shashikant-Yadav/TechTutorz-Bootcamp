import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { stages } from "../data/bootcampData";

const StageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Map stage id to week id in data
  const stageToDataId = (stageId: string | undefined) => {
    return stageId;
  };
  const stageData = stages.find((stage) => stage.id === stageToDataId(id));

  // Animation on mount
  useEffect(() => {
    if (headerRef.current && contentRef.current && stageData) {
      const tl = gsap.timeline();

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animate content sections
      const sections = contentRef.current.querySelectorAll("section");
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, [stageData]);

  // If stage not found, display an error
  if (!stageData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Stage not found
        </h2>
        <p className="text-gray-600 mb-6">
          The stage you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  // Helper to get Stage title
  const getStageTitle = () => {
    return stageData.title;
  };

  return (
    <div className="pt-20">
      {/* Header with background image */}
      <div
        ref={headerRef}
        className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${stageData.detailImage || stageData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {getStageTitle()}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {stageData.shortDescription}
          </p>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 py-10">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-50 p-6 rounded-lg flex items-start">
              <Calendar className="text-orange-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Schedule</h3>
                <p className="text-gray-600">{stageData.schedule}</p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg flex items-start">
              <Clock className="text-orange-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
                <p className="text-gray-600">{stageData.duration}</p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg flex items-start">
              <BookOpen className="text-orange-500 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Focus Area</h3>
                <p className="text-gray-600">{stageData.focusArea}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            {stageData.description}
          </p>
        </section>

        {/* Curriculum */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Curriculum
          </h2>
          <div className="space-y-4">
            {stageData.curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-orange-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How it helps */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            How It Helps
          </h2>
          <div className="bg-orange-50 p-8 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {stageData.benefits}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stageData.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-orange-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <div className="bg-white p-8 rounded-lg shadow-md border border-orange-100 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to advance your career?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Secure your spot in our bootcamp and take the first step towards
              your dream placement.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Explore Other Stages
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StageDetails;
