"use client";

// import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "location", href: "/location" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Email", icon: Mail, href: "mailto:jokamucybertech2025@gmail.com" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo/Company Name Section */}
          <div className="space-y-4">
            <a href="/" className="flex items-center">
              {/* If you have a logo, replace this with your logo image */}
              <span className="text-2xl font-bold">Jokamu</span>
            </a>
            <p className="text-gray-400 text-sm text-left">
              Redefining the future of printing and digital services
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-6">
              {/* Mutomo Branch */}
              <div>
                <h4 className="font-medium text-white">Mutomo Branch</h4>
                <address className="not-italic text-gray-400 space-y-2">
                  <p>Mutomo Business District</p>
                  <p className="mt-2">
                    <a
                      href="mailto:jokamucybertech@gmail.com"
                      className="hover:text-white transition-colors flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      jokamucybertech@gmail.com
                    </a>
                  </p>
                </address>
              </div>

              {/* Wote Branch */}
              <div>
                <h4 className="font-medium text-white">Wote Branch</h4>
                <address className="not-italic text-gray-400 space-y-2">
                  <p>Wote Town</p>
                  <p className="mt-2">
                    <a
                      href="mailto:jokamucybertech2025@gmail.com"
                      className="hover:text-white transition-colors flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      jokamucybertech2025@gmail.com
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jokamu Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
