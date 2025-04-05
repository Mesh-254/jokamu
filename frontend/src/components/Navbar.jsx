"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import logo from '../assets/jokamu.png';

const menuItems = ["HOME", "SERVICES", "PRODUCTS",  "LOCATION"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-white text-black shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
            <img
              alt="logo"
              className="h-16 w-auto sm:h-16"
              src={logo || "/react.svg"}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-medium font-medium tracking-wide hover:text-gray-500 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed top-16 left-0 w-full bg-black text-white shadow-lg transition-transform transform duration-300 z-50">
            <div className="flex flex-col items-start space-y-6 px-6 py-4 border-t border-gray-700">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-medium tracking-wider hover:text-gray-500 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
