import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate header on mount
  useEffect(() => {
    gsap.fromTo(
      '.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-orange-500">Campus Bootcamp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/week/1-3" className="nav-link font-medium hover:text-orange-500 transition-colors">
              Week 1-3
            </Link>
            <Link to="/week/4-6" className="nav-link font-medium hover:text-orange-500 transition-colors">
              Week 4-6
            </Link>
            <Link to="/week/7" className="nav-link font-medium hover:text-orange-500 transition-colors">
              Week 7
            </Link>
            <Link to="/benefits" className="nav-link font-medium hover:text-orange-500 transition-colors">
              Benefits
            </Link>
            <Link to="/" className="btn-primary">
              Start Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/week/1-3" className="font-medium hover:text-orange-500 transition-colors">
                Week 1-3
              </Link>
              <Link to="/week/4-6" className="font-medium hover:text-orange-500 transition-colors">
                Week 4-6
              </Link>
              <Link to="/week/7" className="font-medium hover:text-orange-500 transition-colors">
                Week 7
              </Link>
              <Link to="/benefits" className="font-medium hover:text-orange-500 transition-colors">
                Benefits
              </Link>
              <Link to="/" className="btn-primary inline-block text-center w-full">
                Start Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;