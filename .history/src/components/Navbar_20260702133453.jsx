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
  const isDarkPage = location.pathname.startsWith('/podcast-list/') || location.pathname.startsWith('/property-details-sales/');
  
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
    name: "About",
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
    name: "Leadership",
    path: "/podcasts",
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
        <Link to="/" className="flex items-center gap-3 group">
          <svg className={`w-8 h-8 transition-transform duration-300 group-hover:rotate-12 ${isDarkPage ? 'fill-sage' : 'fill-dark-blue'}`} viewBox="0 0 32 38" fill="none">
            <path d="M15.7498 37.0254C15.6536 37.0254 15.5573 36.9931 15.4932 36.9608L0.288693 28.328C0.032077 28.1663 -0.0641539 27.843 0.0962309 27.5843C0.256616 27.3257 0.577386 27.2287 0.834001 27.3903L15.7819 35.8615L30.4411 27.455V11.0301L15.8781 19.1455C15.7177 19.2425 15.5253 19.2425 15.3328 19.1455L0.288693 10.4804C0.0962309 10.3834 0 10.1894 0 9.99542C0 9.80143 0.0962309 9.60743 0.288693 9.51044L15.3328 1.0393C15.5894 0.877641 15.9102 0.974639 16.0706 1.26563C16.2309 1.52429 16.1347 1.84762 15.846 2.00928L1.63593 9.99542L15.5894 18.0462L30.6656 9.60744C30.826 9.51044 31.0505 9.51044 31.2109 9.60744C31.3713 9.70443 31.4675 9.89843 31.4675 10.0924V27.746C31.4675 27.94 31.3713 28.134 31.1788 28.231L15.9743 36.9608C15.9423 36.9931 15.846 37.0254 15.7498 37.0254Z" />
            <path d="M23.1275 22.5728V23.8337L22.1011 24.3834V23.1871L23.1275 22.5728Z" />
            <path d="M24.5709 21.7319V23.0576L23.5444 23.6072V22.3463L24.5709 21.7319Z" />
            <path d="M23.1275 24.3188V25.5152L22.1011 26.0971V24.9008L22.7426 24.5452L23.1275 24.3188Z" />
            <path d="M24.5709 23.543V24.6746L23.5444 25.2566V24.0926L24.5709 23.543Z" />
          </svg>
          <div className="flex flex-col">
  <span className="font-display text-xl tracking-widest font-semibold uppercase leading-none">
    KVS INFRA
  </span>

  <span className="text-[10px] tracking-[0.25em] uppercase leading-none mt-1 opacity-80">
    SHAPING LAND. CREATING VALUE.
  </span>
</div>
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
              href="tel:+12462324444" 
              className={`flex items-center gap-2 text-sm font-semibold transition-all ${
                isDarkPage ? 'text-sage hover:text-white' : 'text-dark-blue hover:text-dark-blue/70'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+1 246 232 4444</span>
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
        className={`fixed inset-0 top-[76px] z-40 bg-cream text-dark-blue flex flex-col justify-between p-8 border-t border-dark-blue/5 transition-all duration-300 lg:hidden ${
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
          <a href="tel:+12462324444" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue">
            <Phone className="w-5 h-5 text-sage" />
            <span>+1 246 232 4444</span>
          </a>
          <a href="mailto:sean@stewartcorealty.com" className="flex items-center gap-3 text-dark-blue/80 hover:text-dark-blue">
            <Mail className="w-5 h-5 text-sage" />
            <span>sean@stewartcorealty.com</span>
          </a>
          <p className="text-xs text-dark-blue/50 mt-4">
            &copy; 2026 Stewart &amp; Co Real Estate.
          </p>
        </div>
      </div>
    </nav>
  );
}
