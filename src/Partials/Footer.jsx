import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Import social media icons
import Logo from "../assets/15.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Call-to-Action Banner */}
      <div className="absolute ml-[25vw] -mt-[28vw] md:-mt-[5vw] bg-gradient-to-r from-teal-400 to-lime-300 py-8 w-1/2 justify-center text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 animate-fade-down">
          Ready to discuss your project?
        </h2>
        <button
          className="bg-white text-teal-500 font-semibold px-8 py-3 rounded-full animate-fade-down shadow-md hover:bg-gray-100 transition"
          onClick={() => navigate("/contact")}
        >
          GET IN TOUCH
        </button>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-100 text-[#00bf63] pt-32 pb-12">
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center">
            <Link to="/" className="cursor-pointer">
              <img src={Logo} alt="AVCO Energy Logo" className="w-52 " />
            </Link>
            <div className="flex space-x-4 mt-4">
              {/* Facebook Icon */}
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a> */}
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/enviraenergies/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/enviraenergies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/floating-solar" className="flex items-center hover:text-gray-300">
                  Floating Solar Plants <span className="ml-2">➔</span>
                </Link>
              </li>
              <li>
                <Link to="/open-access" className="flex items-center hover:text-gray-300">
                  Open Access <span className="ml-2">➔</span>
                </Link>
              </li>
              <li>
                <Link to="/solar-rooftop" className="flex items-center hover:text-gray-300">
                  Rooftop Solar <span className="ml-2">➔</span>
                </Link>
              </li>
              <li>
                <Link to="/solar-carport" className="flex items-center hover:text-gray-300">
                  Solar Carport <span className="ml-2">➔</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="flex items-center hover:text-gray-300">
                  About Envira <span className="ml-2">➔</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-gray-300">
                  Contact Us <span className="ml-2">➔</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
                  <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
                  <ul className="space-y-2">
                    <li>+91 9136811775
                    </li>
                    <li>
                      <a href="mailto:info@avcoenergy.in" className="hover:text-gray-300">
                      contact@enviraenergies.com

                      </a>
                    </li>
                    <li>
                    The Capital, G-Block, BKC, Mumbai, 400103</li>
                  </ul>
                </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;