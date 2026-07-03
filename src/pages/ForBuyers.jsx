import React, { useEffect, useRef } from 'react';
import { FileText, Scale, Landmark, Info, DollarSign, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ForBuyers() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const deckRef = useRef(null);

  useEffect(() => {
    document.title = "KVS Infra Growth Opportunities | Land & Partnerships";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple Premium Hero Scale & Ingress
      gsap.fromTo(heroImgRef.current, 
        { scale: 1.2 },
        { 
          scale: 1, 
          duration: 2.5, 
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)' 
        }
      );

      gsap.fromTo(heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.12, ease: 'power4.out' }
      );

      // 2. Apple-Style 3D Layer Layer-Scrub Parallax Setup
      const layers = deckRef.current.querySelectorAll('.kinetic-3d-layer');
      
      layers.forEach((layer, index) => {
        if (index === layers.length - 1) return; // Skip last element transition

        gsap.to(layer, {
          scrollTrigger: {
            trigger: layer,
            start: 'top 25%',
            end: 'bottom top',
            scrub: true,
            pin: true,
            pinSpacing: false
          },
          scale: 0.9,
          rotationX: 12,
          yPercent: -20,
          opacity: 0.25,
          filter: 'blur(8px)',
          transformPerspective: 1500,
          ease: 'none'
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-dark-blue min-h-screen text-white selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="/images/kvs/growth-hero.jpg" 
            alt="KVS Infra growth corridor and plotted development backdrop" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/20 via-dark-blue/50 to-cream"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            YOUR INVESTMENT JOURNEY
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            From Vision to <span className="font-serif italic font-normal text-[#c4a468]">Ownership</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Every KVS Infra project is designed with transparency, strategic planning, and long-term value. From selecting the right opportunity to securing your investment, our experienced team ensures every step is simple, informed, and dependable.
          </p>
        </div>
      </section>

      {/* 2. CORE CONTENT PROCESS - KINETIC 3D DECK TRACK */}
      <section ref={deckRef} className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-32 relative z-20">
        
        {/* Intro Layer */}
        <div className="kinetic-3d-layer w-full bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-6 items-start transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-white border border-dark-blue/5 flex items-center justify-center shrink-0 shadow-sm">
            <Info className="w-5 h-5 text-[#c4a468]" />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-2xl font-normal text-dark-blue mb-3">The KVS Advantage</h2>
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              KVS Infra combines strategic land acquisition, thoughtful planning, legal clarity, and infrastructure development into one integrated process. Whether you're investing for future appreciation or purchasing land for your family, every project is built on trust, quality, and long-term value.
            </p>
          </div>
        </div>

        {/* Step 1: Legal Representation */}
        <div className="kinetic-3d-layer w-full bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left">
          <div className="flex items-center gap-4 border-b border-dark-blue/5 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-dark-blue/5 flex items-center justify-center shadow-sm">
              <Scale className="w-5 h-5 text-[#c4a468]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-dark-blue tracking-wide">
              1. Discover the Right Opportunity
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              We begin by understanding your investment goals and helping you identify projects that align with your budget, location preferences, and long-term objectives.
            </p>
            <div className="bg-[#c4a468]/5 border border-[#c4a468]/20 rounded-xl p-5 mt-2">
              <p className="text-sm text-dark-blue font-medium leading-relaxed">
                Our advisors provide complete project insights, location advantages, future growth potential, and documentation support so every investment decision is made with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: The Purchase Process */}
        <div className="kinetic-3d-layer w-full bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left">
          <div className="flex items-center gap-4 border-b border-dark-blue/5 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-dark-blue/5 flex items-center justify-center shadow-sm">
              <FileText className="w-5 h-5 text-[#c4a468]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-dark-blue tracking-wide">
              2. Secure Your Investment
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage A — Project Selection</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Explore carefully planned developments with clear layouts, strategic locations, and verified project information.
              </p>
            </div>
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage B — Documentation</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Receive complete guidance for documentation, approvals, booking procedures, and ownership verification.
              </p>
            </div>
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage C — Registration & Support</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Our team assists throughout the registration process and continues providing post-purchase support whenever required.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Ownership Structures */}
        <div className="kinetic-3d-layer w-full bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left">
          <div className="flex items-center gap-4 border-b border-dark-blue/5 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-dark-blue/5 flex items-center justify-center shadow-sm">
              <Landmark className="w-5 h-5 text-[#c4a468]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-dark-blue tracking-wide">
              3. Building Long-Term Value
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              Every KVS Infra development is planned to maximize future appreciation through strategic locations, organized infrastructure, and disciplined project execution. Whether you're investing today or planning for the next generation, our projects are designed to grow with your ambitions.
            </p>
            <div className="bg-[#c4a468]/5 border border-[#c4a468]/20 rounded-xl p-5 mt-2">
              <p className="text-sm text-dark-blue font-medium leading-relaxed">
                Our commitment extends beyond the sale by ensuring transparency, quality development, and continuous customer support throughout your ownership journey.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4: Outgoings & Taxes */}
        <div className="kinetic-3d-layer w-full bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col gap-6 text-left">
          <div className="flex items-center gap-4 border-b border-dark-blue/5 pb-5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-dark-blue/5 flex items-center justify-center shadow-sm">
              <DollarSign className="w-5 h-5 text-[#c4a468]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-dark-blue tracking-wide">
              4. Why Invest with KVS Infra?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
            When choosing a land investment partner, confidence comes from transparency, planning, and execution. KVS Infra focuses on delivering projects that create sustainable value.
          </p>
          
          {/* Apple-Style Glass Breakdown Table Spec */}
          <div className="bg-white/90 border border-white/50 rounded-2xl p-6 mt-2 shadow-sm">
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Strategic Locations</span>
                <span className="font-light text-dark-blue/70 text-right">Positioned in emerging high-growth corridors</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Clear Documentation</span>
                <span className="font-light text-dark-blue/70 text-right">Transparent legal and ownership process</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Planned Infrastructure</span>
                <span className="font-light text-dark-blue/70 text-right">Roads, utilities, and organized layouts</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Long-Term Appreciation</span>
                <span className="font-light text-dark-blue/70 text-right">Projects selected for future value growth</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Customer Support</span>
                <span className="font-light text-dark-blue/70 text-right">Guidance before, during, and after purchase</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-medium text-dark-blue">Trusted Development</span>
                <span className="font-light text-dark-blue/70 text-right">Disciplined execution with investor-focused planning</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}