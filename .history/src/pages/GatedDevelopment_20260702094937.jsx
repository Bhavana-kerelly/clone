import React, { useEffect, useRef } from 'react';
import { Landmark, Award, Shield, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import propertiesData from '../data/properties.json';

gsap.registerPlugin(ScrollTrigger);

export default function GatedDevelopment() {
  const allProperties = Object.values(propertiesData);
  
  // Filter properties belonging to Gated Developments
  const developmentProperties = allProperties.filter(p => 
    p.id.includes('vistara') || 
    p.id.includes('apes-hill') || 
    p.id.includes('porters-place') || 
    p.id.includes('royal-westmoreland') || 
    p.id.includes('schooner-bay')
  ).slice(0, 6);

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const infoGridRef = useRef(null);
  const featureStripRef = useRef(null);
  const listingsRef = useRef(null);

  useEffect(() => {
    document.title = "Luxury Gated Developments in Barbados | Stewart & Co";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple Hero Cinematic Zoom Sequence
      gsap.fromTo(heroImgRef.current, 
        { scale: 1.15 },
        { 
          scale: 1, 
          duration: 2.2, 
          ease: 'power3.out' 
        }
      );

      gsap.fromTo(heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: 'power4.out' }
      );

      // 2. Bento Grid Elements Scroll Reveal
      const cards = infoGridRef.current.querySelectorAll('.bento-block');
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Horizontal Features Stagger Reveal
      gsap.fromTo(featureStripRef.current.children,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureStripRef.current,
            start: 'top 85%'
          }
        }
      );

      // 4. Apple Scroll-Driven Dynamic Parallax for Listings
      const listItems = listingsRef.current.querySelectorAll('.premium-split-row');
      
      listItems.forEach((item) => {
        const img = item.querySelector('.parallax-target-img');
        
        // Push image slightly higher initially, then glide downwards as the page scrolls
        gsap.fromTo(img, 
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom', // starts when top of card hits bottom of viewport
              end: 'bottom top',   // ends when bottom of card leaves top of viewport
              scrub: true          // hooks animation directly to the scrollbar movement
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-cream min-h-screen text-dark-blue selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="https://framerusercontent.com/images/cb2qjlC0mEOI9CG9t6EdMxwNw.webp" 
            alt="Vistara gated luxury villa background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/20 via-dark-blue/40 to-[#0b121f]"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            Luxury Communities
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            Gated <span className="font-serif italic font-normal text-[#c4a468]">Developments</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/70 max-w-2xl font-light leading-relaxed">
            Explore premium master-planned gated resort communities in Barbados, offering exclusive amenities, 24-hour security, and unmatched island lifestyle.
          </p>
        </div>
      </section>

      {/* 2. DESCRIPTION BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col gap-20 relative z-10 -mt-16">
        
        <div ref={infoGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apes Hill */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-10 rounded-2xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Golf &amp; Country Club</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Apes Hill Barbados</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              Situated 1,000 feet above sea level, Apes Hill offers spectacular sea views over the West and East coasts. This eco-luxury community features a world-class 18-hole championship golf course, tennis/paddle courts, a wellness center, nature trails, and luxurious villas tailored to modern Caribbean design.
            </p>
          </div>

          {/* Porters Place */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-10 rounded-2xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Exclusive Boutique Community</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Porters Place Residences</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              Located in St. James, Porters Place is a modern residential community consisting of beautifully designed 3 and 4-bedroom villas. Offering open-plan layouts, private pools, and lush tropical gardens, this secure retreat is just minutes from the sandy beaches of the Platinum Coast.
            </p>
          </div>

          {/* Vistara Residences */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-10 rounded-2xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Contemporary Luxury</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Vistara Villa Series</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              Vistara (featuring Vistara Edge, Lush, Serenity, and Oasis) represents the peak of contemporary real estate development in Barbados. These multi-storey residences combine clean architectural styling, private pool decks, and energy-efficient facilities for sustainable tropical living.
            </p>
          </div>

          {/* Royal Westmoreland */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-10 rounded-2xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">World-Renowned Estate</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Royal Westmoreland</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              One of the most established gated communities in the Caribbean, Royal Westmoreland spans over 750 acres of immaculate landscape. With an 18-hole Robert Trent Jones Jr. golf course, private beach club access at Mullins Bay, tennis courts, and grand estates, it is a haven for international celebrities and high-net-worth buyers.
            </p>
          </div>
        </div>

        {/* Community benefits strip */}
        <div ref={featureStripRef} className="bg-dark-blue text-white rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">24-Hour Gated Security</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Complete peace of mind with continuous patrol and secure access.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">World-Class Golf &amp; Sports</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Privilege access to private golf courses, paddle courts, and gyms.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Landmark className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">Concierge &amp; Management</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Lock-up-and-leave convenience with full maintenance and rental support.</p>
          </div>
        </div>
      </section>

      {/* 3. LIST OF PROPERTIES WITH SCROLL-DRIVEN PARALLAX */}
      <section className="py-28 border-t border-dark-blue/5 bg-gradient-to-b from-[#2e415703] to-cream px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c4a468] mb-3">
            Community Real Estate
          </span>
          <h2 className="font-display text-4xl font-light text-dark-blue tracking-tight">
            Residences In Gated Developments
          </h2>
          <div className="w-16 h-[1px] bg-[#c4a468] mt-4"></div>
        </div>

        {/* Unique Architectural Presentation Grid Framework */}
        <div ref={listingsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {developmentProperties.map(p => (
            <div key={p.id} className="premium-split-row relative flex flex-col group cursor-pointer">
              
              {/* Media Container Box Layer (Overflow hidden lets internal parallax work) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-dark-blue mb-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 border border-dark-blue/5 z-20 pointer-events-none group-hover:border-[#c4a468]/40 transition-colors duration-500 rounded-xl" />
                
                <div className="absolute top-4 left-4 mix-blend-difference font-mono text-[10px] tracking-widest text-white/40 z-20">
                  EST-{p.id.toUpperCase().slice(0, 6)}
                </div>

                {/* Parallax Target Image (Slightly larger height to prevent bounding cuts during transform) */}
                <img 
                  src={p.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"} 
                  alt={p.name}
                  className="parallax-target-img absolute inset-0 w-full h-[125%] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 will-change-transform"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-transparent to-transparent opacity-50 z-10 pointer-events-none" />
              </div>

              {/* Text Meta Container Frame */}
              <div className="flex flex-col text-left px-1 z-10 bg-transparent">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#c4a468] uppercase">
                    {p.location}
                  </span>
                  <div className="h-[1px] flex-grow bg-dark-blue/10 mx-4 group-hover:bg-[#c4a468]/30 transition-colors duration-500" />
                  <span className="text-[10px] text-dark-blue/60 font-semibold tracking-wider">
                    {p.beds} BD / {p.baths} BA
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-dark-blue group-hover:text-[#c4a468] tracking-wide mb-3 transition-colors duration-300 line-clamp-1">
                  {p.name || p.title}
                </h3>

                <div className="flex items-center justify-between pt-2 border-t border-dark-blue/5">
                  <span className="font-sans font-normal text-sm text-dark-blue/70 tracking-wide">
                    {p.price}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-dark-blue/10 flex items-center justify-center bg-white group-hover:bg-[#c4a468] group-hover:border-[#c4a468] shadow-sm transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-dark-blue group-hover:text-white transition-colors" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}