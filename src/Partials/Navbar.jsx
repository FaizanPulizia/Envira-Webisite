import React, { useState } from "react";
import Logo from "../assets/15.svg";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-gray-100 border-b-4 border-[#00bf63]">
      <div className="text-xl mx-6 px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
      <a href="/" className="cursor-pointer">
        <img src={Logo} alt="AVCO Energy Logo" className="w-32" />
      </a>
    </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-700 hover:text-[#00bf63]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon (close menu)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger menu
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 z-10 lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent shadow-lg lg:shadow-none px-6 lg:px-0 py-4 lg:py-0`}
        >
          <li>
            <a
              href="about"
              className="block text-gray-700 hover:text-[#00bf63] font-medium"
            >
              About Us
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block text-gray-700 hover:text-[#00bf63] font-medium flex items-center"
            >
              Rooftop Solar
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-md mt-2 py-2 w-40 border border-gray-200">
                <li>
                  <a
                    href="solar-rooftop"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Solar Rooftop
                  </a>
                </li>
                <li>
                  <a
                    href="solar-carport"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Solar Carport
                  </a>
                </li>
                <li>
                  <a
                    href="floating-solar"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Floating Solar
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="open-access"
              className="block text-gray-700 hover:text-[#00bf63] font-medium"
            >
              Open Access
            </a>
          </li>
          <li>
            <a
              href="contact"
              className="block text-gray-700 hover:text-[#00bf63] font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
