import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import WeekDetails from "./pages/WeekDetails";
import Benefits from "./pages/Benefits";
import RegistrationPage from "./pages/RegistrationPage";

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  // Initialize animations on component mount
  useEffect(() => {
    // Global animation setup
    gsap.config({
      autoSleep: 60,
      force3D: true,
    });
  }, []);

  // Handle route change animations
  useEffect(() => {
    // Animate page transitions
    const content = document.querySelector("main");
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage/:id" element={<WeekDetails />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
