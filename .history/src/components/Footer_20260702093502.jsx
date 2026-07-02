import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield, Globe, Layers } from 'lucide-react';

export default function Footer() {
  // 3D Mouse Tracker States for the Brand Card
  const brandCardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightX, setLightX] = useState(50);
  const [lightY, setLightY] = useState(50);

  const handleMouseMove = (e) => {
    if (!brandCardRef.current) return;
    const card = brandCardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate coordinates relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Map to subtle tilt values (max 8 degrees for fluid Apple aesthetic)
    setRotateX(-y / (rect.height / 16));
    setRotateY(x / (rect.width / 16));

    // Map light position for the specular highlight gloss layer
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setLightX(px);
    setLightY(py);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setLightX(50);
    setLightY(50);
  };

  return (
    <footer className="bg-[#07090E] text-[#FAF8F5] pt-24 pb-12 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/[0.04] selection:bg-white/20">
      {/* Immersive Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sage/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-900/10 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. DYNAMIC 3D METRIC STAGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 border-b border-white/[0.06]">
          
          {/* Metric 1 */}
          <div className="group relative bg-white/[0.01] border border-white/[0.04] rounded-3xl p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight text-sage tracking-tighter transition-all duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-sage to-white bg-clip-text text-transparent">
                  25
                </span>
                <Layers className="w-5 h-5 text-white/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 block group-hover:text-sage transition-colors">
                  Years Experience
                </span>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  In selling and renting luxury residential property in Barbados.
                </p>
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="group relative bg-white/[0.01] border border-white/[0.04] rounded-3xl p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight text-sage tracking-tighter transition-all duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-sage to-white bg-clip-text text-transparent">
                  3
                </span>
                <Globe className="w-5 h-5 text-white/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 block group-hover:text-sage transition-colors">
                  Countries of Practice
                </span>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  With global market insight and localized Caribbean knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="group relative bg-white/[0.01] border border-white/[0.04] rounded-3xl p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight text-sage tracking-tighter transition-all duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-sage to-white bg-clip-text text-transparent">
                  1
                </span>
                <Shield className="w-5 h-5 text-white/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 block group-hover:text-sage transition-colors">
                  Goal Focus
                </span>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  To ensure a transparent, seamless, and pleasant transaction for all parties concerned.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. ARCHITECTURAL LINKS & INTERACTIVE CANVAS BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 items-start">
          
          {/* Interactive 3D Brand Card Deck */}
          <div className="lg:col-span-5 perspective-1000 w-full">
            <div 
              ref={brandCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                backgroundImage: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
              }}
              className="w-full bg-white/[0.02] border border-white/[0.07] rounded-[2.5rem] p-8 md:p-10 transition-all duration-200 shadow-2xl relative overflow-hidden group/card"
            >
              {/* Dynamic border highlighting inside the 3D grid context */}
              <div className="absolute inset-0 border border-transparent group-hover/card:border-white/10 rounded-[2.5rem] pointer-events-none transition-colors duration-500"></div>

              <div className="flex items-center gap-4 mb-8" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2.5 transition-transform duration-500 group-hover/card:rotate-[360deg]">
                  <svg className="w-full h-full fill-sage" viewBox="0 0 32 38">
                    <path d="M15.7498 37.0254C15.6536 37.0254 15.5573 36.9931 15.4932 36.9608L0.288693 28.328C0.032077 28.1663 -0.0641539 27.843 0.0962309 27.5843C0.256616 27.3257 0.577386 27.2287 0.834001 27.3903L15.7819 35.8615L30.4411 27.455V11.0301L15.8781 19.1455C15.7177 19.2425 15.5253 19.2425 15.3328 19.1455L0.288693 10.4804C0.0962309 10.3834 0 10.1894 0 9.99542C0 9.80143 0.0962309 9.60743 0.288693 9.51044L15.3328 1.0393C15.5894 0.877641 15.9102 0.974639 16.0706 1.26563C16.2309 1.52429 16.1347 1.84762 15.846 2.00928L1.63593 9.99542L15.5894 18.0462L30.6656 9.60744C30.826 9.51044 31.0505 9.51044 31.2109 9.60744C31.3713 9.70443 31.4675 9.89843 31.4675 10.0924V27.746C31.4675 27.94 31.3713 28.134 31.1788 28.231L15.9743 36.9608C15.9423 36.9931 15.846 37.0254 15.7498 37.0254Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-2xl tracking-widest font-light uppercase leading-none text-white">
                    Stewart <span className="font-serif italic font-normal text-sage font-cursive tracking-normal">&amp; Co</span>
                  </h4>
                  <span className="text-[9px] tracking-[0.35em] uppercase leading-none mt-1.5 block text-white/40">
                    Real Estate Portfolio
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/50 leading-relaxed font-light mb-8 max-w-sm" style={{ transform: 'translateZ(20px)' }}>
                A boutique real estate agency in Barbados providing professional buyer guidance, seller positioning, and expert market knowledge for luxury property listings on the island.
              </p>

              <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-sm" style={{ transform: 'translateZ(15px)' }}>
                <a href="mailto:sean@stewartcorealty.com" className="group/link flex items-center justify-between text-white/70 hover:text-sage transition-colors duration-300">
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-4 h-4 text-white/30 group-hover/link:text-sage transition-colors" />
                    <span className="font-light">sean@stewartcorealty.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>
                
                <a href="tel:+12462324444" className="group/link flex items-center justify-between text-white/70 hover:text-sage transition-colors duration-300">
                  <div className="flex items-center gap-3.5">
                    <Phone className="w-4 h-4 text-white/30 group-hover/link:text-sage transition-colors" />
                    <span className="font-light">+1 246 232 4444</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>

                <div className="flex items-start gap-3.5 text-white/70">
                  <MapPin className="w-4 h-4 text-white/30 mt-0.5" />
                  <span className="font-light">St. James, Platinum Coast, Barbados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Hub Lists */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-12 pt-4">
            {/* Quick Links Vector */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage">
                Navigation
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-white/50">
                <Link to="/" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Home</span>
                </Link>
                <Link to="/search-result-sales" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Properties Directory</span>
                </Link>
                <Link to="/gated-development" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Featured Developments</span>
                </Link>
                <Link to="/about-barbados" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Barbados Living Guide</span>
                </Link>
                <Link to="/about-us" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>About Stewart &amp; Co</span>
                </Link>
                <Link to="/podcasts" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Video &amp; Audio Podcasts</span>
                </Link>
              </div>
            </div>

            {/* Guidelines / Resources */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage">
                Guides &amp; Policy
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-white/50">
                <Link to="/for-buyers" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>For Property Buyers</span>
                </Link>
                <Link to="/contact" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Schedule Consultation</span>
                </Link>
                <a href="#" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Privacy Policy</span>
                </a>
                <a href="#" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Cookie Preferences</span>
                </a>
                <a href="#" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span>Terms of Service</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 3. SUB-LEVEL TERMINAL FOOTPRINT */}
        <div className="border-t border-white/[0.05] pt-10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-light text-white/30 gap-6">
          <p className="tracking-wide">
            &copy; {new Date().getFullYear()} Stewart &amp; Co Real Estate. Engineered for excellence. All rights reserved.
          </p>
          <div className="flex gap-8 tracking-wider uppercase text-[10px] font-medium">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Security</a>
          </div>
        </div>

      </div>

      {/* Font Fix Utility Layer */}
      <style>{`
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </footer>
  );
}