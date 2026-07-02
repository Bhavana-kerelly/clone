import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Globe, Layers, ChevronRight, Link as LinkIcon, Camera, MessageCircle, Video } from 'lucide-react';
export default function Footer() {
  // 3D Perspective Matrix Tracking States
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  // Active Interactive Highlight tracking for links
  const [activeTab, setActiveTab] = useState(null);

  // Real-time Scroll Parallax Vector Engine
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the footer is into the viewport window
      if (rect.top < viewportHeight) {
        const distanceToTop = viewportHeight - rect.top;
        setParallaxY(distanceToTop * 0.18); // Vector velocity scale coefficient
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Coordinate Mapping Math on Mouse Entry
  const handleGlobalMouseMove = (e) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Core centers mapping
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Normalized offset coordinate vectors (-1 to 1)
    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);

    setCoords({ x: nx, y: ny });
  };

  // Safe structural tilt constants
  const tiltX = (coords.y * -4).toFixed(2); // Maximum 4 degrees vertical tilt
  const tiltY = (coords.x * 4).toFixed(2);  // Maximum 4 degrees horizontal tilt

  // Specular reflection matrix mapping
  const lightPositionX = ((coords.x + 1) * 50).toFixed(1);
  const lightPositionY = ((coords.y + 1) * 50).toFixed(1);

  return (
    <footer
      ref={containerRef}
      onClassName="bg-[#04060A]"
      onMouseMove={handleGlobalMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-[#05080E] text-white selection:bg-sage/20 selection:text-sage"
      style={{ perspective: '2000px' }}
    >

      {/* LAYER 1: CINEMATIC MULTI-AXIS PARALLAX VIEWPORT LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[125%] -top-[15%] transition-transform duration-[400ms] ease-out will-change-transform"
          style={{
            transform: `translateY(${parallaxY}px) scale(1.05)`,
            backgroundImage: `url('https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        {/* Apple Luxury Atmospheric Glass Coatings */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-[#05080E]/90 to-[#05080E]/70 backdrop-blur-2xl mix-blend-normal"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#05080E]"></div>

        {/* Kinetic Light Beam Generator */}
        <div
          className="absolute w-[900px] h-[600px] rounded-full blur-[180px] opacity-40 transition-all duration-[1000ms] mix-blend-screen pointer-events-none"
          style={{
            top: `${lightPositionY}%`,
            left: `${lightPositionX}%`,
            background: 'radial-gradient(circle, rgba(175,190,174,0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* LAYER 2: INTERACTIVE 3D KINETIC ARCHITECTURAL CANVAS */}
      <div
        className="w-full max-w-7xl mx-auto relative z-10 will-change-transform"
        style={{
          transform: isHovered ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)` : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >

        {/* SECTION A: GLOWING GLASS-DECK METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24 border-b border-white/[0.05]" style={{ transform: 'translateZ(40px)' }}>

          {/* Deck Block 1 */}
          <div className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/10 rounded-[2.5rem] p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-7xl font-extralight tracking-tight bg-gradient-to-r from-sage via-white to-sage bg-[length:200%_auto] bg-clip-text text-transparent group-hover:bg-position-x-100 transition-all duration-1000">
                  25+
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sage group-hover:rotate-12 transition-transform duration-500">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-2">PROJECTS & DEVELOPMENTS</h5>
                <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                  Successfully delivering plotted developments, land aggregation, and infrastructure-led projects across high-growth investment corridors.
                </p>
              </div>
            </div>
          </div>

          {/* Deck Block 2 */}
          <div className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/10 rounded-[2.5rem] p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-7xl font-extralight tracking-tight bg-gradient-to-r from-sage via-white to-sage bg-[length:200%_auto] bg-clip-text text-transparent group-hover:bg-position-x-100 transition-all duration-1000">
                  3+
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sage group-hover:rotate-12 transition-transform duration-500">
                  <Globe className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-2">STRATEGIC GROWTH CORRIDORS</h5>
                <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                  Expanding across Tirupati, Chandragiri, and Delhi NCR with carefully selected locations for long-term appreciation.
                </p>
              </div>
            </div>
          </div>

          {/* Deck Block 3 */}
          <div className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/10 rounded-[2.5rem] p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-7xl font-extralight tracking-tight bg-gradient-to-r from-sage via-white to-sage bg-[length:200%_auto] bg-clip-text text-transparent group-hover:bg-position-x-100 transition-all duration-1000">
                  100%
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sage group-hover:rotate-12 transition-transform duration-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-2">COMMITMENT TO TRUST</h5>
                <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                  Delivering transparent processes, clear documentation, disciplined execution, and lasting value for every investor.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION B: TRANSLUCENT NAVIGATION STAGE HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24 items-start">

          {/* Real Estate Micro-Identity Core Block */}
          <div className="lg:col-span-5 flex flex-col items-start text-left" style={{ transform: 'translateZ(60px)' }}>
            <div className="flex items-center gap-4 mb-6 group/logo cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white text-[#05080E] flex items-center justify-center p-3 shadow-xl transition-all duration-700 group-hover/logo:bg-sage group-hover/logo:scale-105">
                <svg className="w-full h-full fill-current" viewBox="0 0 32 38">
                  <path d="M15.7498 37.0254C15.6536 37.0254 15.5573 36.9931 15.4932 36.9608L0.288693 28.328C0.032077 28.1663 -0.0641539 27.843 0.0962309 27.5843C0.256616 27.3257 0.577386 27.2287 0.834001 27.3903L15.7819 35.8615L30.4411 27.455V11.0301L15.8781 19.1455C15.7177 19.2425 15.5253 19.2425 15.3328 19.1455L0.288693 10.4804C0.0962309 10.3834 0 10.1894 0 9.99542C0 9.80143 0.0962309 9.60743 0.288693 9.51044L15.3328 1.0393C15.5894 0.877641 15.9102 0.974639 16.0706 1.26563C16.2309 1.52429 16.1347 1.84762 15.846 2.00928L1.63593 9.99542L15.5894 18.0462L30.6656 9.60744C30.826 9.51044 31.0505 9.51044 31.2109 9.60744C31.3713 9.70443 31.4675 9.89843 31.4675 10.0924V27.746C31.4675 27.94 31.3713 28.134 31.1788 28.231L15.9743 36.9608C15.9423 36.9931 15.846 37.0254 15.7498 37.0254Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-3xl tracking-[0.05em] font-light uppercase leading-none text-white">
                  KVS <span className="font-serif italic font-normal text-sage font-cursive tracking-normal">Infra</span>
                </h4>
                <span className="text-[9px] tracking-[0.4em] uppercase leading-none mt-2 block text-white/30 font-bold">
                  SHAPING LAND. CREATING VALUE.
                </span>
              </div>
            </div>

            <p className="text-sm text-white/40 leading-relaxed font-light mb-8 max-w-sm">
              KVS Infra is a trusted real estate development company specializing in strategic land banking, plotted developments, and investment-focused communities. We create projects designed for sustainable growth, transparent ownership, and long-term value creation.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-sage hover:border-sage/50 transition-all duration-300 hover:-translate-y-1">
                <LinkIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-sage hover:border-sage/50 transition-all duration-300 hover:-translate-y-1">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-sage hover:border-sage/50 transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-sage hover:border-sage/50 transition-all duration-300 hover:-translate-y-1">
                <Video className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Vector Access Points */}
            <div className="flex flex-col gap-4 w-full max-w-sm text-sm border-t border-white/[0.05] pt-8">
              <a href="mailto:info@kvsinfra.com" className="group/link flex items-center justify-between text-white/60 hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 opacity-40 group-hover/link:opacity-100 text-sage transition-opacity" />
                  <span className="font-light">info@kvsinfra.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-60 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
              </a>

              <a href="tel:+919876543210" className="group/link flex items-center justify-between text-white/60 hover:text-white transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 opacity-40 group-hover/link:opacity-100 text-sage transition-opacity" />
                  <span className="font-light">+91 98765 43210</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-60 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
              </a>

              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 opacity-40 text-sage" />
                <span className="font-light">Tirupati, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Right Links Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:pl-16 font-light" style={{ transform: 'translateZ(50px)' }}>

            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-sage">COMPANY</span>
              <div className="flex flex-col gap-4 text-sm text-white/40">
                {['Home', 'About Us', 'Our Projects', 'Investment Opportunities', 'Leadership', 'Contact Us', 'Quick Links'].map((item, index) => (
                  <Link
                    key={index}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    onMouseEnter={() => setActiveTab(`nav-${index}`)}
                    onMouseLeave={() => setActiveTab(null)}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2 group/item"
                  >
                    <ChevronRight className={`w-3 h-3 text-sage transition-all duration-300 ${activeTab === `nav-${index}` ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-sage">RESOURCES</span>
              <div className="flex flex-col gap-4 text-sm text-white/40">
                {['Why Invest with KVS Infra', 'Schedule a Site Visit', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                  <Link
                    key={index}
                    to="#"
                    onMouseEnter={() => setActiveTab(`policy-${index}`)}
                    onMouseLeave={() => setActiveTab(null)}
                    className="hover:text-white transition-all duration-300 flex items-center gap-2 group/item"
                  >
                    <ChevronRight className={`w-3 h-3 text-sage transition-all duration-300 ${activeTab === `policy-${index}` ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SECTION C: RADIAL BOUNDARY SUB FOOTER TERMINAL */}
        <div className="border-t border-white/[0.05] pt-12 mt-4 flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-white/30 gap-6" style={{ transform: 'translateZ(30px)' }}>
          <p className="tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} KVS Infra. All Rights Reserved. Designed to create sustainable land investments and long-term value.
          </p>
          <div className="flex gap-8 uppercase font-medium tracking-widest text-[9px]">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>

      </div>

      {/* Typography Serif Italic Configuration Engine */}
      <style>{`
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </footer>
  );
}