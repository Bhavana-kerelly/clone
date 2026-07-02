import React, { useEffect, useRef } from 'react';
import { Headphones, Calendar, ArrowUpRight, Play, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import podcastsData from '../data/podcasts.json';

gsap.registerPlugin(ScrollTrigger);

export default function Podcasts() {
  const podcasts = Object.values(podcastsData);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    document.title = "Barbados Property Podcasts | Stewart & Co";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple Luxury Ingress
      gsap.fromTo(headerRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );

      // 2. 3D Cascade Fan-Out Scroll Animation
      const cards = stackRef.current.querySelectorAll('.kinetic-stack-card');
      
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 100, 
          rotationX: -20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: stackRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. 3D Focal Depth Isolation Matrix Engine
  const handleCardHover = (currentTarget) => {
    const parent = stackRef.current;
    const siblings = parent.querySelectorAll('.kinetic-stack-card');

    siblings.forEach((sibling) => {
      if (sibling !== currentTarget) {
        // Drop non-focused items into the background plane
        gsap.to(sibling, {
          opacity: 0.35,
          scale: 0.96,
          filter: 'blur(4px)',
          z: -40,
          duration: 0.5,
          ease: 'power2.out'
        });
      } else {
        // Pop the active card forward on the Z-axis
        gsap.to(currentTarget, {
          scale: 1.03,
          z: 60,
          transformPerspective: 1200,
          duration: 0.5,
          ease: 'power3.out'
        });
        
        // Elevate the internal glass details
        gsap.to(currentTarget.querySelector('.glass-depth-pill'), {
          z: 30,
          scale: 1.05,
          duration: 0.4
        });
      }
    });
  };

  const handleCardReset = () => {
    const parent = stackRef.current;
    const siblings = parent.querySelectorAll('.kinetic-stack-card');

    // Return all items back to their base coordinates smoothly
    siblings.forEach((sibling) => {
      gsap.to(sibling, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        z: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
      
      gsap.to(sibling.querySelector('.glass-depth-pill'), {
        z: 0,
        scale: 1,
        duration: 0.6
      });
    });
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-36 pb-32 text-dark-blue overflow-hidden selection:bg-[#c4a468] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Header */}
        <div ref={headerRef} className="text-center mb-28 flex flex-col items-center">
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

        {/* Unique Architectural Interlocking Stack */}
        <div 
          ref={stackRef} 
          className="flex flex-col gap-12 lg:gap-8 relative select-none"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {podcasts.map((podcast, idx) => (
            <div 
              key={podcast.id}
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={handleCardReset}
              className="kinetic-stack-card relative w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-8 items-center transition-all duration-500 will-change-transform"
              style={{ 
                transformStyle: 'preserve-3d',
                marginTop: idx > 0 ? '-2rem' : '0' // Overlapping design element
              }}
            >
              
              {/* Asymmetric Image/Media Block Frame */}
              <div className="relative w-full lg:w-2/5 aspect-[16/10] overflow-hidden rounded-2xl bg-dark-blue shadow-lg shrink-0">
                <img 
                  src={podcast.image || "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"} 
                  alt={podcast.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/40 to-transparent" />
                
                {/* Embedded Floating Glass Trigger Badge */}
                <div className="absolute bottom-4 left-4 glass-depth-pill bg-white/20 backdrop-blur-md border border-white/30 rounded-full py-2 px-4 flex items-center gap-2.5 shadow-md">
                  <div className="w-6 h-6 rounded-full bg-[#c4a468] flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-black fill-current ml-0.5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-white uppercase">{podcast.duration || '24 Min'}</span>
                </div>
              </div>

              {/* Comprehensive Meta Content Box Area */}
              <div className="flex-grow flex flex-col justify-between text-left h-full w-full py-1">
                <div>
                  
                  {/* Upper Meta String Line */}
                  <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#c4a468] uppercase mb-4">
                    <span className="flex items-center gap-1.5">
                      <Headphones className="w-3 h-3" />
                      Episode {idx + 1}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 opacity-60" />
                      {podcast.date || 'July 2026'}
                    </span>
                  </div>

                  {/* Structural Title Typography */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-dark-blue tracking-wide mb-4 hover:text-[#c4a468] transition-colors duration-300">
                    {podcast.title}
                  </h3>

                  {/* Deep Excerpt Block */}
                  <p className="text-xs sm:text-sm text-dark-blue/60 leading-relaxed font-light mb-6 text-justify lg:max-w-3xl">
                    {podcast.description || 'Join Sean Stewart as he breaks down structural regulations and premium asset deployment strategy across the Platinum Coast.'}
                  </p>
                </div>

                {/* Lower Boundary Base Panel Accent */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-blue/5 mt-auto">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-dark-blue/30">
                    Stewart & Co. Private Broadcast Channel
                  </span>
                  
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-dark-blue hover:text-[#c4a468] transition-colors duration-300">
                    <span>Listen to Session</span>
                    <span className="w-8 h-8 rounded-full border border-dark-blue/10 flex items-center justify-center bg-white shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
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