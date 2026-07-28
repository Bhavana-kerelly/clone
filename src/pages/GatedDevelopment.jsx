import React, { useEffect, useRef } from 'react';
import { Landmark, Award, Shield, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import propertiesData from '../data/properties.json';

gsap.registerPlugin(ScrollTrigger);

export default function GatedDevelopment() {
  const allProperties = Object.values(propertiesData);
  
  // Custom Project Portfolio Data
  const developmentProjects = [
    {
      id: "cmr-gardens",
      location: "Tirupati-Chennai Highway",
      name: "CMR Gardens",
      badge: "TUDA Approved",
      stats: "ISO 9001 • Swimming Pool",
      image: "/images/kvs/project-1.jpg"
    },
    {
      id: "kvs-prakruti-vanam",
      location: "Tirupati",
      name: "KVS Prakruti Vanam",
      badge: "Premium Community",
      stats: "Eco-friendly • Modern Amenities",
      image: "/images/kvs/project-2.jpg"
    },
    {
      id: "kvs-pudi",
      location: "Pudi, Tirupati",
      name: "KVS Pudi",
      badge: "Strategic Location",
      stats: "Clear Title • Vaastu Compliant",
      image: "/images/kvs/project-3.jpg"
    },
    {
      id: "kvs-vakulamatha",
      location: "Tirupati",
      name: "KVS Vakulamatha",
      badge: "High Appreciation",
      stats: "Excellent Connectivity",
      image: "/images/kvs/project-4.jpg"
    },
    {
      id: "kvs-harekrishna",
      location: "Near Tiruchanur Temple",
      name: "KVS Harekrishna",
      badge: "Premium Plots",
      stats: "Club House • Swimming Pool",
      image: "/images/kvs/project-5.jpg"
    },
    {
      id: "kvs-manglam",
      location: "Tirupati",
      name: "KVS Manglam",
      badge: "Luxury Living",
      stats: "Integrated Township",
      image: "/images/kvs/project-6.jpg"
    },
    {
      id: "attibele-construction",
      location: "Attibele",
      name: "Attibele Construction",
      badge: "Urban Infrastructure",
      stats: "Premium Construction",
      image: "/images/kvs/project-7.jpg"
    }
  ];

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
      
      {/* HERO & GRID WRAPPER (Shares a continuous background photo) */}
      <div className="relative w-full bg-dark-blue overflow-hidden">
        {/* Continuous Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="/images/kvs/projects-hero.jpg" 
            alt="KVS Infra plotted development and gated community layout" 
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/15 via-dark-blue/10 to-[#0b121f]"></div>
        </div>

        {/* 1. HERO HEADER */}
        <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center px-6 md:px-12 text-white z-10">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
              Development Portfolio
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
              Structured <span className="font-serif italic font-normal text-[#c4a468]">Projects</span>
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
            <p className="text-sm sm:text-lg text-white/70 max-w-2xl font-light leading-relaxed">
              Explore KVS Infra’s planned developments across Tirupati, Hyderabad, Chennai, and Bangalore, designed for long-term value, infrastructure readiness, and secure community living.
            </p>
          </div>
        </section>

        {/* 2. DESCRIPTION BENTO GRID SECTION */}
        <section className="relative w-full py-24 -mt-20 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
            
            <div ref={infoGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Apes Hill */}
              <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
                <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">INVESTMENT FOCUS</span>
                <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Strategic Land Banking</h2>
                <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
                  Acquire premium land parcels positioned in emerging growth corridors with strong long-term appreciation potential.
                </p>
              </div>

              {/* Porters Place */}
              <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
                <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">LAND CATEGORIES</span>
                <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Agricultural & Plotted Land</h2>
                <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
                  Offering agricultural, non-agricultural, and plotted developments designed for diverse investment needs.
                </p>
              </div>

              {/* Vistara Residences */}
              <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
                <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">DEVELOPMENT APPROACH</span>
                <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Future-Ready Infrastructure</h2>
                <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
                  Projects are planned with organized layouts, road connectivity, and scalable development for sustainable growth.
                </p>
              </div>

              {/* Royal Westmoreland */}
              <div className="bento-block group relative bg-white border border-dark-blue/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-10 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-[#c4a468]/30">
                <span className="text-[10px] font-bold text-[#c4a468] uppercase tracking-widest">VISION</span>
                <h2 className="font-display text-3xl font-light text-dark-blue tracking-tight group-hover:text-[#c4a468] transition-colors duration-300">Institutional-Grade Developments</h2>
                <p className="text-xs sm:text-sm text-dark-blue/70 leading-relaxed text-justify font-light">
                  Building high-quality real estate assets backed by strategic planning and long-term investment value.
                </p>
              </div>
            </div>

            {/* Community benefits strip */}
            <div ref={featureStripRef} className="bg-dark-blue/80 border border-white/5 backdrop-blur-md text-white rounded-3xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
              
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-[#c4a468]" />
                </div>
                <span className="font-semibold text-base tracking-wide">Strategic Locations</span>
                <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Projects located in high-growth corridors with excellent future appreciation potential.</p>
              </div>
              
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-[#c4a468]" />
                </div>
                <span className="font-semibold text-base tracking-wide">Verified Land Assets</span>
                <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Clear documentation, planned developments, and transparent investment opportunities.</p>
              </div>
              
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                  <Landmark className="w-5 h-5 text-[#c4a468]" />
                </div>
                <span className="font-semibold text-base tracking-wide">Long-Term Investment Value</span>
                <p className="text-xs text-white/60 max-w-xs font-light leading-relaxed">Focused on land banking and sustainable appreciation for individual and institutional investors.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. LIST OF PROPERTIES WITH SCROLL-DRIVEN PARALLAX SANDWICH */}
      <section className="py-32 border-t border-dark-blue/5 bg-gradient-to-b from-[#2e415703] to-cream px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c4a468] mb-3">
            PROJECT PORTFOLIO
          </span>
          <h2 className="font-display text-4xl font-light text-dark-blue tracking-tight">
            Featured Land Developments
          </h2>
          <div className="w-16 h-[1px] bg-[#c4a468] mt-4"></div>
        </div>

        {/* Unique Architectural Presentation Grid Framework */}
        <div ref={listingsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {developmentProjects.map(p => (
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
                
                <div className="absolute top-5 left-5 mix-blend-difference font-mono text-[10px] tracking-widest text-white/40 z-20 uppercase">
                  PRJ-{p.id.slice(0, 4)}
                </div>

                {/* Parallax Target Image */}
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="parallax-target-img absolute inset-0 w-full h-[130%] object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out will-change-transform group-hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/20 to-transparent opacity-60 z-10 pointer-events-none" />
              </div>

              {/* Text Meta Container Parallax Deck */}
              <div className="parallax-text-deck flex flex-col text-left px-1 z-10 bg-transparent will-change-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#c4a468] uppercase line-clamp-1 flex-1">
                    {p.location}
                  </span>
                  <div className="h-[1px] w-6 bg-dark-blue/10 mx-2 group-hover:bg-[#c4a468]/30 transition-colors duration-500" />
                  <span className="text-[10px] text-dark-blue/60 font-semibold tracking-wider flex-1 text-right line-clamp-1">
                    {p.stats}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-dark-blue group-hover:text-[#c4a468] tracking-wide mb-4 transition-colors duration-300 line-clamp-1">
                  {p.name}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-dark-blue/5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#c4a468]/30 bg-[#c4a468]/10 text-xs font-semibold text-dark-blue/80 tracking-wide transition-colors duration-300 group-hover:bg-[#c4a468]/20">
                    {p.badge}
                  </span>
                  <span className="w-9 h-9 flex-shrink-0 rounded-full border border-dark-blue/10 flex items-center justify-center bg-white group-hover:bg-[#c4a468] group-hover:border-[#c4a468] shadow-md transition-all duration-500">
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