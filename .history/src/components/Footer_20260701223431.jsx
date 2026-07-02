import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <span className="font-display text-6xl text-sage font-light leading-none">25</span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold tracking-wider uppercase text-sage">Years Experience</span>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                In selling and renting luxury residential property in Barbados.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <span className="font-display text-6xl text-sage font-light leading-none">3</span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold tracking-wider uppercase text-sage">Countries of Practice</span>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                With global market insight and localized Caribbean knowledge.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <span className="font-display text-6xl text-sage font-light leading-none">1</span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold tracking-wider uppercase text-sage">Goal Focus</span>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                To ensure a transparent, seamless, and pleasant transaction for all parties concerned.
              </p>
            </div>
          </div>
        </div>

        {/* Brand & Links Block */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-16">
          {/* Logo & Contact details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 fill-sage" viewBox="0 0 32 38" fill="none">
                <path d="M15.7498 37.0254C15.6536 37.0254 15.5573 36.9931 15.4932 36.9608L0.288693 28.328C0.032077 28.1663 -0.0641539 27.843 0.0962309 27.5843C0.256616 27.3257 0.577386 27.2287 0.834001 27.3903L15.7819 35.8615L30.4411 27.455V11.0301L15.8781 19.1455C15.7177 19.2425 15.5253 19.2425 15.3328 19.1455L0.288693 10.4804C0.0962309 10.3834 0 10.1894 0 9.99542C0 9.80143 0.0962309 9.60743 0.288693 9.51044L15.3328 1.0393C15.5894 0.877641 15.9102 0.974639 16.0706 1.26563C16.2309 1.52429 16.1347 1.84762 15.846 2.00928L1.63593 9.99542L15.5894 18.0462L30.6656 9.60744C30.826 9.51044 31.0505 9.51044 31.2109 9.60744C31.3713 9.70443 31.4675 9.89843 31.4675 10.0924V27.746C31.4675 27.94 31.3713 28.134 31.1788 28.231L15.9743 36.9608C15.9423 36.9931 15.846 37.0254 15.7498 37.0254Z" />
                <path d="M23.1275 22.5728V23.8337L22.1011 24.3834V23.1871L23.1275 22.5728Z" />
                <path d="M24.5709 21.7319V23.0576L23.5444 23.6072V22.3463L24.5709 21.7319Z" />
                <path d="M23.1275 24.3188V25.5152L22.1011 26.0971V24.9008L22.7426 24.5452L23.1275 24.3188Z" />
                <path d="M24.5709 23.543V24.6746L23.5444 25.2566V24.0926L24.5709 23.543Z" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-widest font-semibold uppercase leading-none text-sage">
                  Stewart &amp; Co
                </span>
                <span className="text-xs tracking-[0.25em] uppercase leading-none mt-1 opacity-70">
                  Real Estate
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mt-2">
              A boutique real estate agency in Barbados providing professional buyer guidance, seller positioning, and expert market knowledge for luxury property listings on the island.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70 mt-4">
              <a href="mailto:sean@stewartcorealty.com" className="flex items-center gap-3 hover:text-sage transition-colors">
                <Mail className="w-4 h-4 text-sage" />
                <span>sean@stewartcorealty.com</span>
              </a>
              <a href="tel:+12462324444" className="flex items-center gap-3 hover:text-sage transition-colors">
                <Phone className="w-4 h-4 text-sage" />
                <span>+1 246 232 4444</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage shrink-0 mt-1" />
                <span>St. James, Platinum Coast, Barbados</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-sage">Navigation</span>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/search-result-sales" className="hover:text-white transition-colors">Properties Directory</Link>
              <Link to="/gated-development" className="hover:text-white transition-colors">Featured Developments</Link>
              <Link to="/about-barbados" className="hover:text-white transition-colors">Barbados Living Guide</Link>
              <Link to="/about-us" className="hover:text-white transition-colors">About Stewart &amp; Co</Link>
              <Link to="/podcasts" className="hover:text-white transition-colors">Video &amp; Audio Podcasts</Link>
            </div>
          </div>

          {/* Guidelines / Resources */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-sage">Guides &amp; Policy</span>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link to="/for-buyers" className="hover:text-white transition-colors">For Property Buyers</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Schedule Consultation</Link>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>&copy; {new Date().getFullYear()} Stewart &amp; Co Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
