import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield, Globe, Layers } from 'lucide-react';

export default function Footer() {
  // 3D Motion Grid Trackers for the Architectural Card
  const brandCardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightX, setLightX] = useState(50);
  const [lightY, setLightY] = useState(50);

  const handleMouseMove = (e) => {
    if (!brandCardRef.current) return;
    const card = brandCardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Core spatial offset calculations
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Restricting deflection ceiling to 10 degrees for elegant motion profiles
    setRotateX(-y / (rect.height / 20));
    setRotateY(x / (rect.width / 20));

    // Calculate light source reflections for the specular overlay
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
    <footer className="relative min-h-[90vh] flex items-center justify-center bg-[#111622] text-[#1C2D42] pt-28 pb-14 px-4 sm:px-6 md:px-12 overflow-hidden selection:bg-[#1C2D42]/10 selection:text-[#1C2D42]">
      
      {/* 1. REAL ESTATE ASSET LAYER - Cinematic Blur Plate */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg" 
          alt="Barbados Luxury Estate Background View" 
          className="w-full h-full object-cover scale-105 filter contrast-[1.1] brightness-90 saturate-[0.9]"
        />
        {/* Layered Atmospheric Scrims & Frosted Glass Walls */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/70 mix-blend-normal backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-[#FAF8F5]"></div>
        {/* Sun-Drenched Ambient Radial Overlay */}
        <div className="absolute bottom-0 right-1/3 w-[800px] h-[500px] bg-sage/20 rounded-full blur-[160px] pointer-events-none"></div>
      </div>

      {/* Main Structural Matrix Container */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* 2. DYNAMIC FLOATING METRIC DECKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 border-b border-[#1C2D42]/10">
          
          {/* Card Module 1 */}
          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/80 hover:border-white hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(28,45,66,0.08)]">
            <div className="flex flex-col gap-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight tracking-tighter text-[#1C2D42] transition-transform duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-[#1C2D42] to-sage bg-clip-text">
                  25
                </span>
                <Layers className="w-5 h-5 text-[#1C2D42]/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1C2D42]/50 block group-hover:text-sage transition-colors">
                  Years Experience
                </span>
                <p className="text-sm text-[#1C2D42]/70 font-light leading-relaxed">
                  In selling and renting luxury residential property in Barbados.
                </p>
              </div>
            </div>
          </div>

          {/* Card Module 2 */}
          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/80 hover:border-white hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(28,45,66,0.08)]">
            <div className="flex flex-col gap-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight tracking-tighter text-[#1C2D42] transition-transform duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-[#1C2D42] to-sage bg-clip-text">
                  3
                </span>
                <Globe className="w-5 h-5 text-[#1C2D42]/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1C2D42]/50 block group-hover:text-sage transition-colors">
                  Countries of Practice
                </span>
                <p className="text-sm text-[#1C2D42]/70 font-light leading-relaxed">
                  With global market insight and localized Caribbean knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Card Module 3 */}
          <div className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/80 hover:border-white hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(28,45,66,0.08)]">
            <div className="flex flex-col gap-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-7xl font-extralight tracking-tighter text-[#1C2D42] transition-transform duration-700 group-hover:scale-105 origin-left inline-block bg-gradient-to-r from-[#1C2D42] to-sage bg-clip-text">
                  1
                </span>
                <Shield className="w-5 h-5 text-[#1C2D42]/20 group-hover:text-sage group-hover:rotate-12 transition-all duration-500" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1C2D42]/50 block group-hover:text-sage transition-colors">
                  Goal Focus
                </span>
                <p className="text-sm text-[#1C2D42]/70 font-light leading-relaxed">
                  To ensure a transparent, seamless, and pleasant transaction for all parties concerned.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3. ARCHITECTURAL LINKS & INTERACTIVE CANVAS CORE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24 items-start">
          
          {/* Asymmetric 3D Spatial Brand Card Box */}
          <div className="lg:col-span-5 perspective-1000 w-full">
            <div 
              ref={brandCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                backgroundImage: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.7) 0%, transparent 65%)`
              }}
              className="w-full bg-white/50 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 md:p-10 transition-all duration-200 shadow-[0_40px_80px_rgba(28,45,66,0.06)] relative overflow-hidden group/card"
            >
              <div className="flex items-center gap-4 mb-8" style={{ transform: 'translateZ(40px)' }}>
                <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] flex items-center justify-center p-2.5 shadow-sm transition-transform duration-700 group-hover/card:rotate-[360deg]">
                  <svg className="w-full h-full fill-white" viewBox="0 0 32 38">
                    <path d="M15.7498 37.0254C15.6536 37.0254 15.5573 36.9931 15.4932 36.9608L0.288693 28.328C0.032077 28.1663 -0.0641539 27.843 0.0962309 27.5843C0.256616 27.3257 0.577386 27.2287 0.834001 27.3903L15.7819 35.8615L30.4411 27.455V11.0301L15.8781 19.1455C15.7177 19.2425 15.5253 19.2425 15.3328 19.1455L0.288693 10.4804C0.0962309 10.3834 0 10.1894 0 9.99542C0 9.80143 0.0962309 9.60743 0.288693 9.51044L15.3328 1.0393C15.5894 0.877641 15.9102 0.974639 16.0706 1.26563C16.2309 1.52429 16.1347 1.84762 15.846 2.00928L1.63593 9.99542L15.5894 18.0462L30.6656 9.60744C30.826 9.51044 31.0505 9.51044 31.2109 9.60744C31.3713 9.70443 31.4675 9.89843 31.4675 10.0924V27.746C31.4675 27.94 31.3713 28.134 31.1788 28.231L15.9743 36.9608C15.9423 36.9931 15.846 37.0254 15.7498 37.0254Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-2xl tracking-widest font-normal uppercase leading-none text-[#1C2D42]">
                    Stewart <span className="font-serif italic font-normal text-sage font-cursive tracking-normal">&amp; Co</span>
                  </h4>
                  <span className="text-[9px] tracking-[0.35em] uppercase leading-none mt-1.5 block text-[#1C2D42]/40 font-bold">
                    Real Estate Portfolio
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#1C2D42]/60 leading-relaxed font-light mb-8 max-w-sm" style={{ transform: 'translateZ(25px)' }}>
                A boutique real estate agency in Barbados providing professional buyer guidance, seller positioning, and expert market knowledge for luxury property listings on the island.
              </p>

              <div className="flex flex-col gap-4 border-t border-[#1C2D42]/10 pt-8 text-sm" style={{ transform: 'translateZ(15px)' }}>
                <a href="mailto:sean@stewartcorealty.com" className="group/link flex items-center justify-between text-[#1C2D42]/80 hover:text-sage transition-colors duration-300">
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-4 h-4 text-[#1C2D42]/30 group-hover/link:text-sage transition-colors" />
                    <span className="font-medium">sean@stewartcorealty.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>
                
                <a href="tel:+12462324444" className="group/link flex items-center justify-between text-[#1C2D42]/80 hover:text-sage transition-colors duration-300">
                  <div className="flex items-center gap-3.5">
                    <Phone className="w-4 h-4 text-[#1C2D42]/30 group-hover/link:text-sage transition-colors" />
                    <span className="font-medium">+1 246 232 4444</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>

                <div className="flex items-start gap-3.5 text-[#1C2D42]/80">
                  <MapPin className="w-4 h-4 text-[#1C2D42]/30 mt-0.5" />
                  <span className="font-light">St. James, Platinum Coast, Barbados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Modular Link Configurations */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-16 pt-6">
            {/* Quick Links Vector */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage">
                Navigation
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-[#1C2D42]/60">
                <Link to="/" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Home</Link>
                <Link to="/search-result-sales" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Properties Directory</Link>
                <Link to="/gated-development" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Featured Developments</Link>
                <Link to="/about-barbados" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Barbados Living Guide</Link>
                <Link to="/about-us" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">About Stewart &amp; Co</Link>
                <Link to="/podcasts" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Video &amp; Audio Podcasts</Link>
              </div>
            </div>

            {/* Guidelines / Resources */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage">
                Guides &amp; Policy
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-[#1C2D42]/60">
                <Link to="/for-buyers" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">For Property Buyers</Link>
                <Link to="/contact" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Schedule Consultation</Link>
                <a href="#" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Privacy Policy</a>
                <a href="#" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Cookie Preferences</a>
                <a href="#" className="hover:text-[#1C2D42] hover:translate-x-2 transition-all duration-500 inline-block">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>

        {/* 4. BASE SUB-LEVEL TRAYS */}
        <div className="border-t border-[#1C2D42]/10 pt-12 flex flex-col sm:flex-row justify-between items-center text-[11px] font-light text-[#1C2D42]/40 gap-6">
          <p className="tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} Stewart &amp; Co Real Estate. Engineered for excellence. All rights reserved.
          </p>
          <div className="flex gap-8 tracking-wider uppercase text-[10px] font-bold">
            <a href="#" className="hover:text-[#1C2D42] transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-[#1C2D42] transition-colors duration-300">Cookies</a>
            <a href="#" className="hover:text-[#1C2D42] transition-colors duration-300">Security</a>
          </div>
        </div>

      </div>

      {/* Font Stack Fix Segment */}
      <style>{`
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </footer>
  );
}