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
    document.title = "Guide for Property Buyers in Barbados | Stewart & Co";
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
    <div ref={containerRef} className="bg-cream min-h-screen text-dark-blue selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="https://framerusercontent.com/images/L6RthZY2p5GiyPwLyRpf5Iuohs.jpg" 
            alt="Barbados beach coastline background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/20 via-dark-blue/50 to-cream"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            Property Acquisition
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            Guide For <span className="font-serif italic font-normal text-[#c4a468]">Buyers</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Discover the ultimate guidelines to purchasing luxury real estate in Barbados. Stewart &amp; Co will assist you throughout the entire transaction process.
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
            <h2 className="font-serif text-2xl font-normal text-dark-blue mb-3">Introduction</h2>
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              There are no restrictions on foreign nationals buying property in Barbados. Non-residents enjoy the same rights as residents, including the ability to purchase beachfront land, luxury estates, and townhouses. However, specific legal steps and financial structures must be followed to ensure compliance with local regulations.
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
              1. Retaining a Local Attorney
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              Both the buyer and the seller must retain separate local attorneys to handle the transaction. The buyer’s attorney is responsible for conducting title searches, verifying that the property is free of liens or encumbrances, checking planning permissions, and drafting/reviewing the Agreement of Sale.
            </p>
            <div className="bg-[#c4a468]/5 border border-[#c4a468]/20 rounded-xl p-5 mt-2">
              <p className="text-sm text-dark-blue font-medium leading-relaxed">
                Attorney fees typically range from <span className="text-[#c4a468] font-semibold">1% to 2%</span> of the purchase price, plus 17.5% VAT (Value Added Tax).
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
              2. The Transaction Stages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage A: Deposit</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Once a verbal offer is accepted, the seller's attorney drafts the Agreement of Sale. Upon signing, the buyer pays a 10% deposit, which is held in escrow by the seller's attorney.
              </p>
            </div>
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage B: Exchange</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Both parties sign and exchange the Sale Agreement. The transaction is then legally binding, subject to the buyer's attorney completing clear title searches.
              </p>
            </div>
            <div className="bg-white/80 border border-white p-6 rounded-2xl shadow-sm hover:border-[#c4a468]/30 transition-all duration-300">
              <span className="text-[10px] font-mono font-bold text-[#c4a468] uppercase tracking-widest block mb-2">Stage C: Completion</span>
              <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed font-light">
                Within 3 to 6 months, the remaining 90% balance is paid, the conveyance deed is signed, and ownership transfers. The buyer is responsible for registering the deed.
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
              3. Ownership Methods &amp; Corporate Vehicles
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
              Buyers can purchase property personally or through an offshore holding company (such as a BVI or St. Lucia IBC). Utilizing an offshore holding company can offer tax efficiencies, simplify future sales (by transferring company shares rather than conveying physical land), and bypass local Property Transfer Taxes and Stamp Duties.
            </p>
            <div className="bg-[#c4a468]/5 border border-[#c4a468]/20 rounded-xl p-5 mt-2">
              <p className="text-sm text-dark-blue font-medium leading-relaxed">
                We highly recommend consulting with a local tax professional and attorney to choose the best ownership vehicle for your specific situation.
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
              4. Transfer Taxes, Fees &amp; Outgoings
            </h2>
          </div>
          <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
            When buying property, most transfer taxes are paid by the seller, but the buyer faces ongoing expenses. Here is a breakdown:
          </p>
          
          {/* Apple-Style Glass Breakdown Table Spec */}
          <div className="bg-white/90 border border-white/50 rounded-2xl p-6 mt-2 shadow-sm">
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Buyer Attorney Fees</span>
                <span className="font-light text-dark-blue/70">1% to 2% + 17.5% VAT</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Annual Land Tax</span>
                <span className="font-light text-dark-blue/70">0.1% to 1.0% (capped based on land value)</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-3">
                <span className="font-medium text-dark-blue">Exchange Control Registration</span>
                <span className="font-light text-dark-blue/70">Required for all foreign currency brought into Barbados</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-medium text-dark-blue">Communal / HOA Service Charges</span>
                <span className="font-light text-dark-blue/70">Varies by development (e.g. Apes Hill, Sandy Lane)</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}