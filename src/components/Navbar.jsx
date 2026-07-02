import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

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

  // Determine navbar background color based on scroll and current route
  const darkPages = [
    '/',
    '/search-result-sales',
    '/property-details-sales',
    '/gated-development',
    '/about-barbados',
    '/about-us',
    '/podcasts',
    '/podcast-list',
    '/for-buyers',
    '/contact'
  ];

  const isDarkPage = darkPages.some((route) => location.pathname === route || location.pathname.startsWith(route));
  
  const navBg = scrolled 
    ? (isDarkPage ? 'glass-nav-dark shadow-lg border-b border-dark-blue/10 text-white' : 'glass-nav shadow-lg border-b border-dark-blue/5 text-dark-blue')
    : (isDarkPage ? 'bg-transparent text-white' : 'bg-transparent text-dark-blue');

  const activeClass = ({ isActive }) => 
    `font-semibold transition-colors duration-200 ${
      isActive 
        ? (isDarkPage ? 'text-sage border-b-2 border-sage' : 'text-dark-blue border-b-2 border-dark-blue') 
        : (isDarkPage ? 'text-white/80 hover:text-white' : 'text-dark-blue/70 hover:text-dark-blue')
    } pb-1`;
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
    name: "Business Model",
    path: "/about-barbados",
  },
  {
    name: "Projects",
    path: "/gated-development",
  },

  {
    name: "Growth",
    path: "/for-buyers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="KVS Infra logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={activeClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l pl-6 border-dark-blue/10 dark:border-white/10">
            <a 
              href="tel:+919876543210" 
              className={`flex items-center gap-2 text-sm font-semibold transition-all ${
                isDarkPage ? 'text-sage hover:text-white' : 'text-dark-blue hover:text-dark-blue/70'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
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
          <a href="tel:+919876543210" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue">
            <Phone className="w-5 h-5 text-sage" />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@kvsinfra.com" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue">
            <Mail className="w-5 h-5 text-sage" />
            <span>info@kvsinfra.com</span>
          </a>
          <p className="text-xs text-dark-blue/50 mt-4">
            &copy; 2026 KVS Infra Pvt. Ltd.
          </p>
        </div>
      </div>
    </nav>
  );
}
