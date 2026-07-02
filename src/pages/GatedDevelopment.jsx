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
    document.title = "KVS Infra Projects | Plotted Communities & Growth Corridors";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple Hero Scale & Fade Reveal
      gsap.fromTo(heroImgRef.current, 
        { scale: 1.2, opacity: 0 },
        { 
          scale: 1, 
          opacity: 0.35,
          duration: 2.5, 
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)' 
        }
      );

      gsap.fromTo(heroRef.current.children,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6, stagger: 0.12, ease: 'power4.out' }
      );

      // 2. Apple-Style Alternating Side Reveal for Bento Blocks
      const bentoBlocks = infoGridRef.current.querySelectorAll('.bento-block');
      bentoBlocks.forEach((block, index) => {
        const xOffset = index % 2 === 0 ? -40 : 40;
        gsap.fromTo(block,
          { x: xOffset, y: 50, opacity: 0, scale: 0.96 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 3. Icon Feature Strip Continuous Zoom Ingress
      gsap.fromTo(featureStripRef.current.children,
        { y: 30, opacity: 0, rotationX: -15 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: featureStripRef.current,
            start: 'top 88%'
          }
        }
      );

      // 4. Dual-Axis Apple Scroll Parallax Sandwich Hook for Cards
      const listItems = listingsRef.current.querySelectorAll('.premium-split-row');
      
      listItems.forEach((item) => {
        const img = item.querySelector('.parallax-target-img');
        const textDeck = item.querySelector('.parallax-text-deck');
        
        // Background Image scrolls slower downwards
        gsap.fromTo(img, 
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );

        // Text Content details glide upward against the image frame scroll direction
        gsap.fromTo(textDeck,
          { yPercent: 10 },
          {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Micro 3D Element Parallax Tracking Matrix for Cards on Cursor Hover
  const handleItemMouseMove = (e, target) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(target.querySelector('.media-box-container'), {
      rotateY: x * 0.03,
      rotateX: -y * 0.03,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleItemMouseLeave = (target) => {
    gsap.to(target.querySelector('.media-box-container'), {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power3.out'
    });
  };

  return (
    <div ref={containerRef} className="bg-dark-blue min-h-screen text-white overflow-hidden selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="https://framerusercontent.com/images/cb2qjlC0mEOI9CG9t6EdMxwNw.webp" 
            alt="KVS Infra plotted development and gated community layout" 
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/10 via-dark-blue/40 to-[#0b121f]"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            Development Portfolio
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            Structured <span className="font-serif italic font-normal text-[#c4a468]">Projects</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/70 max-w-2xl font-light leading-relaxed">
            Explore KVS Infra’s planned developments across Tirupati, Chandragiri, and Delhi NCR, designed for long-term value, infrastructure readiness, and secure community living.
          </p>
        </div>
      </section>

      {/* 2. DESCRIPTION BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col gap-24 relative z-10 -mt-20">
        
        <div ref={infoGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apes Hill */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">High-Growth Corridor</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">KVS Meadows</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              Positioned for strong future appreciation, KVS Meadows brings well-planned plots, road access, and a disciplined development approach to Tirupati’s expanding growth belt.
            </p>
          </div>

          {/* Porters Place */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Planned Community Living</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">KVS Green County</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              KVS Green County brings a balanced mix of open spaces, road planning, and practical amenities to buyers seeking a calm, well-connected lifestyle near major corridors.
            </p>
          </div>

          {/* Vistara Residences */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Premium Layouts</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">KVS Serenity Villas</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              Serenity Villas are designed for modern buyers who want quality construction, clear access, and a refined community feel within a well-managed development framework.
            </p>
          </div>

          {/* Royal Westmoreland */}
          <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
            <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">Institutional Growth</span>
            <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">KVS Noida Heights</h2>
            <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
              KVS Noida Heights reflects the company’s expansion into Delhi NCR, combining planned access, strong location value, and a long-term investment mindset.
            </p>
          </div>
        </div>

        {/* Community benefits strip */}
        <div ref={featureStripRef} className="bg-dark-blue text-white rounded-3xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">24-Hour Gated Security</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Complete peace of mind with continuous patrol and secure access.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">World-Class Golf &amp; Sports</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Privilege access to private golf courses, paddle courts, and gyms.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
              <Landmark className="w-5 h-5 text-[#c4a468]" />
            </div>
            <span className="font-semibold text-base tracking-wide">Concierge &amp; Management</span>
            <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Lock-up-and-leave convenience with full maintenance and rental support.</p>
          </div>
        </div>
      </section>

      {/* 3. LIST OF PROPERTIES WITH SCROLL-DRIVEN PARALLAX SANDWICH */}
      <section className="py-32 border-t border-dark-blue/5 bg-gradient-to-b from-[#2e415703] to-cream px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c4a468] mb-3">
            Community Real Estate
          </span>
          <h2 className="font-display text-4xl font-light text-dark-blue tracking-tight">
            Residences In Gated Developments
          </h2>
          <div className="w-16 h-[1px] bg-[#c4a468] mt-4"></div>
        </div>

        {/* Unique Architectural Presentation Grid Framework */}
        <div ref={listingsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {developmentProperties.map(p => (
            <div 
              key={p.id} 
              className="premium-split-row relative flex flex-col group cursor-pointer"
              onMouseMove={(e) => handleItemMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleItemMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* Media Container Box Layer */}
              <div className="media-box-container relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0e1624] mb-8 shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out">
                <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none group-hover:border-[#c4a468]/40 transition-colors duration-500 rounded-2xl" />
                
                <div className="absolute top-5 left-5 mix-blend-difference font-mono text-[10px] tracking-widest text-white/40 z-20">
                  EST-{p.id.toUpperCase().slice(0, 6)}
                </div>

                {/* Parallax Target Image */}
                <img 
                  src={p.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"} 
                  alt={p.name}
                  className="parallax-target-img absolute inset-0 w-full h-[130%] object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out will-change-transform group-hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/20 to-transparent opacity-60 z-10 pointer-events-none" />
              </div>

              {/* Text Meta Container Parallax Deck */}
              <div className="parallax-text-deck flex flex-col text-left px-1 z-10 bg-transparent will-change-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#c4a468] uppercase">
                    {p.location}
                  </span>
                  <div className="h-[1px] flex-grow bg-dark-blue/10 mx-4 group-hover:bg-[#c4a468]/30 transition-colors duration-500" />
                  <span className="text-[10px] text-dark-blue/60 font-semibold tracking-wider">
                    {p.beds} BD / {p.baths} BA
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-dark-blue group-hover:text-[#c4a468] tracking-wide mb-4 transition-colors duration-300 line-clamp-1">
                  {p.name || p.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-dark-blue/5">
                  <span className="font-sans font-normal text-base text-dark-blue/70 tracking-wide">
                    {p.price}
                  </span>
                  <span className="w-9 h-9 rounded-full border border-dark-blue/10 flex items-center justify-center bg-white group-hover:bg-[#c4a468] group-hover:border-[#c4a468] shadow-md transition-all duration-500">
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