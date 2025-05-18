import { Link } from "react-router-dom";
import { MessageCircle, PhoneCall } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              TechTutorz Placement Bootcamp
            </h3>
            <p className="text-gray-600 mb-4">
              Master aptitude, technical skills, and soft skills to secure your
              dream job. Join our intensive bootcamp.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/stage/1"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Stage 1
                </Link>
              </li>
              <li>
                <Link
                  to="/stage/2"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Stage 2
                </Link>
              </li>
              <li>
                <Link
                  to="/stage/3"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Stage 3
                </Link>
              </li>
              <li>
                <Link
                  to="/benefits"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Additional Benefits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  <a href="mailto:techtutorz72@gmail.com">
                    techtutorz72@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  <a href="tel:+918180937833">8180937833</a> /
                  <a href="tel:+919135917111">9135917111</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {year} TechTutorz Placement Bootcamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
