import React, { useEffect, useRef } from 'react';
import { Headphones, Calendar, ArrowUpRight, Play, Volume2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import podcastsData from '../data/podcasts.json';

gsap.registerPlugin(ScrollTrigger);

export default function Podcasts() {
  const podcasts = Object.values(podcastsData);

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    document.title = "Barbados Property Podcasts | Stewart & Co";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple Premium Header Sequence
      gsap.fromTo(headerRef.current.children,
        { y: 50, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.15, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );

      // 2. 3D Spatial Scroll Reveal for Podcast Elements
      const items = gridRef.current.querySelectorAll('.podcast-3d-wrapper');
      gsap.fromTo(items,
        { 
          opacity: 0, 
          y: 80, 
          rotationX: -25, 
          transformPerspective: 1200 
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Spatial 3D Calculations for Element Hover Engine
  const handle3DMouseMove = (e, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply strict 3D physical coordinates directly to hardware layers
    gsap.to(currentTarget.querySelector('.card-3d-body'), {
      rotateY: x * 0.05,
      rotateX: -y * 0.05,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });

    gsap.to(currentTarget.querySelector('.floating-badge'), {
      translateZ: 40,
      z: 40,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handle3DMouseLeave = (currentTarget) => {
    gsap.to(currentTarget.querySelector('.card-3d-body'), {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.to(currentTarget.querySelector('.floating-badge'), {
      translateZ: 0,
      z: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-36 pb-24 text-dark-blue overflow-hidden selection:bg-[#c4a468] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Header */}
        <div ref={headerRef} className="text-center mb-24 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-3">
            Stewart &amp; Co Media
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extralight tracking-tight text-dark-blue leading-none mb-6">
            Barbados Property <span className="font-serif italic font-normal text-[#c4a468]">Podcasts</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#c4a468] mb-6"></div>
          <p className="text-sm sm:text-base text-dark-blue/70 max-w-2xl font-light leading-relaxed">
            Listen and read expert conversations on designing, developing, buying, and financing real estate in Barbados. Hosted by Sean Stewart.
          </p>
        </div>

        {/* 3D Kinetic Architectural Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {podcasts.map((podcast) => (
            <div 
              key={podcast.id} 
              className="podcast-3d-wrapper relative w-full h-full group cursor-pointer"
              onMouseMove={(e) => handle3DMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handle3DMouseLeave(e.currentTarget)}
              style={{ perspective: '1000px' }}
            >
              
              {/* Core 3D Transforming Body Frame */}
              <div 
                className="card-3d-body w-full bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(196,164,104,0.12)] group-hover:border-[#c4a468]/30 flex flex-col justify-between transition-shadow duration-500"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                  
                  {/* Aspect Media Layer Frame */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-dark-blue mb-6 shadow-inner">
                    <img 
                      src={podcast.image || "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"} 
                      alt={podcast.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/50 via-transparent to-transparent opacity-80" />
                    
                    {/* Apple Hardware Rounded Frosted Glass Play Hub */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#c4a468] group-hover:scale-110 group-hover:border-[#c4a468] transition-all duration-500 shadow-xl">
                        <Play className="w-4 h-4 text-white group-hover:text-black fill-current ml-0.5 transition-colors" />
                      </div>
                    </div>

                    {/* Sound Equalizer Interactive Micro-Graphic Bars */}
                    <div className="absolute bottom-3 right-4 flex items-end gap-0.5 h-3 pointer-events-none z-20">
                      <div className="w-[1.5px] bg-white/60 rounded-full h-full animate-[pulse_0.8s_infinite_alternate]" />
                      <div className="w-[1.5px] bg-white/60 rounded-full h-[60%] animate-[pulse_0.5s_infinite_alternate_0.2s]" />
                      <div className="w-[1.5px] bg-white/60 rounded-full h-[80%] animate-[pulse_0.7s_infinite_alternate_0.1s]" />
                    </div>
                  </div>

                  {/* Metadata Row Structure */}
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#c4a468] uppercase mb-3">
                    <span className="flex items-center gap-1.5 bg-[#c4a468]/10 px-2.5 py-1 rounded-full text-xs font-sans tracking-normal text-dark-blue">
                      <Headphones className="w-3 h-3 text-[#c4a468]" />
                      {podcast.duration || '24 min'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 opacity-60" />
                      {podcast.date || 'July 2026'}
                    </span>
                  </div>

                  {/* Title Header Scaling View */}
                  <h3 className="font-serif text-xl font-normal text-dark-blue group-hover:text-[#c4a468] tracking-wide mb-4 transition-colors duration-300 line-clamp-2 leading-snug">
                    {podcast.title}
                  </h3>

                  {/* Narrative Block Segment */}
                  <p className="text-xs text-dark-blue/60 leading-relaxed font-light mb-6 text-justify line-clamp-3">
                    {podcast.description || 'Join Sean Stewart as he breaks down structural regulations and premium asset deployment strategy across the Platinum Coast.'}
                  </p>
                </div>

                {/* Card CTA Dynamic Base Line */}
                <div 
                  className="flex items-center justify-between pt-4 border-t border-dark-blue/5"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <span className="text-xs font-medium tracking-wider text-dark-blue/40 uppercase group-hover:text-dark-blue transition-colors">
                    Access Episode
                  </span>
                  <div className="w-8 h-8 rounded-full border border-dark-blue/10 flex items-center justify-center bg-white group-hover:bg-[#c4a468] group-hover:border-[#c4a468] shadow-sm transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-dark-blue group-hover:text-white transition-colors" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}