import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Logo navy colour — matches the KVS dark navy in logo.png
  const LOGO_COLOR = '#1a2b5e';

  const activeClass = ({ isActive }) =>
    isActive
      ? 'font-semibold pb-1 transition-colors duration-200 border-b-2'
      : 'font-semibold pb-1 transition-colors duration-200 hover:opacity-70';
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Projects",
    path: "/gated-development",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100 ${scrolled ? 'py-2' : 'py-4'}`}
      style={{ color: LOGO_COLOR }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="KVS Infra logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={activeClass}
                style={{ color: LOGO_COLOR }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>



        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 rounded-full hover:bg-dark-blue/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 top-[76px] z-40 bg-dark-blue text-white flex flex-col justify-between p-8 border-t border-dark-blue/5 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-2xl font-display">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="hover:translate-x-2 transition-transform duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info in Mobile Menu */}
        <div className="flex flex-col gap-4 border-t border-dark-blue/10 pt-6">
          <a href="tel:+919247999799" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue">
            <Phone className="w-5 h-5 text-sage" />
            <span>+91 9247999799</span>
          </a>
          <a href="mailto:info@kvsgroup.co.in" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue mt-2">
            <Mail className="w-5 h-5 text-sage" />
            <span>info@kvsgroup.co.in</span>
          </a>
          <p className="text-xs text-dark-blue/50 mt-4">
            &copy; 2026 KVS Infra Pvt. Ltd.
          </p>
        </div>
      </div>
    </nav>
  );
}
