import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Award, Shield, User, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const profileSectionRef = useRef(null);
  const profileCardRef = useRef(null);
  const profileTextRef = useRef(null);
  const reviewsSectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    document.title = "About KVS Infra | Land Development & Growth";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Apple-Grade Hero Ingress & Scroll Zoom Setup
      gsap.fromTo(heroImgRef.current,
        { scale: 1.25, filter: 'blur(10px)' },
        {
          scale: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }
      );

      gsap.fromTo(heroRef.current.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: 'power4.out' }
      );

      // Hero Scroll-linked deep-zoom
      gsap.to(heroImgRef.current, {
        scale: 1.1,
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // 2. Dual-Axis Asynchronous Parallax for Profile Section
      gsap.fromTo(profileCardRef.current,
        { yPercent: 10, scale: 0.95, opacity: 0 },
        {
          yPercent: -10,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: profileSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );

      gsap.fromTo(profileTextRef.current,
        { yPercent: 5, opacity: 0.5 },
        {
          yPercent: -5,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: profileSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );

      // 3. Apple Launch Velocity Continuous Ribbon Slider Loop
      const track = trackRef.current;
      const cards = track.querySelectorAll('.review-glass-card');
      
      // Compute width matrix metrics to establish seamless wrapping bounds
      let totalWidth = 0;
      cards.forEach(card => {
        totalWidth += card.offsetWidth + 32; // width plus padding gaps
      });

      // Set explicit parent flex wrapper footprint parameters
      gsap.set(track, { width: totalWidth * 2 });

      // Build continuous sliding base timeline execution
      const loop = gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        duration: 35,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

      // Hook scroll skew acceleration matrices directly onto the track frame
      ScrollTrigger.create({
        trigger: reviewsSectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity() * 0.003;
          gsap.to(loop, { timeScale: 1 + Math.abs(velocity), duration: 0.4, ease: 'power2.out' });
        }
      });

      // Provide responsive mouse suspension overrides on track bounding areas
      track.addEventListener('mouseenter', () => gsap.to(loop, { timeScale: 0.15, duration: 0.8 }));
      track.addEventListener('mouseleave', () => gsap.to(loop, { timeScale: 1, duration: 1.2 }));

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    { text: "KVS Infra made our land investment simple and transparent. The team's integrity and professional advice made the process an enjoyable experience.", author: "M.R." },
    { text: "I want to thank KVS Infra personally for helping my family secure our first residential plot in Hyderabad. The layout and infrastructure are perfect.", author: "C.B." },
    { text: "Thank you to the KVS team—your legal transparency and professionalism assisted greatly in our plot registration.", author: "K.C." },
    { text: "We could not have hoped to find a better real estate partner. They supported us at every stage of buying our villa plots.", author: "D.M." },
    { text: "We invested in KVS Green County and the appreciation has been remarkable. Their honest approach and prompt delivery exceeded our expectations.", author: "D.B." }
  ];

  // Double up listings pool internally to build seamless rolling horizon parameters
  const infiniteLoopPool = [...testimonials, ...testimonials];

  return (
    <div ref={containerRef} className="bg-dark-blue min-h-screen text-white overflow-hidden selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER WITH CINEMATIC DEPTH SCROLL */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="/images/kvs/about-hero.jpg" 
            alt="KVS Infra development site and infrastructure planning" 
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/10 via-dark-blue/40 to-cream"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            Development Platform
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            About <span className="font-serif italic font-normal text-[#c4a468]">KVS Infra</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            KVS Infra creates value by identifying land, shaping layouts, and delivering plotted communities with clear infrastructure, transparent documentation, and a disciplined approach to growth.
          </p>
        </div>
      </section>

      {/* 2. INTERLOCKING PROFILE SECTION */}
      <section ref={profileSectionRef} className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Profile Interactive 3D Frame Layer */}
        <div ref={profileCardRef} className="relative flex justify-center lg:justify-start will-change-transform">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden bg-dark-blue/5 border border-white/40 shadow-[0_30px_70px_rgba(0,0,0,0.08)] group">
            <img 
              src="https://framerusercontent.com/images/LXBNzM4Rz0JscKaKSl5mB0eGPM.jpg" 
              alt="KVS Infra leadership team reviewing a development layout" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            
            {/* Apple Luxury Frosted Glassmorphism Banner Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-xl border border-white/30 p-6 rounded-xl text-white text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c4a468] block font-bold mb-1">Managing Director</span>
              <span className="font-serif text-2xl font-normal text-dark-blue">Chevireddy Mohith Reddy</span>
            </div>
          </div>
        </div>

        {/* Profile Details Container Frame */}
        <div ref={profileTextRef} className="flex flex-col gap-6 text-left will-change-transform">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c4a468]">
            Leadership
          </span>
          <h2 className="font-display text-4xl font-light tracking-tight leading-none">
            Managing Director: <span className="font-serif italic font-normal text-[#c4a468] block sm:inline">Chevireddy Mohith Reddy</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c4a468] mb-2"></div>
          
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light text-justify">
            Under the vision of our Managing Director, Chevireddy Mohith Reddy, KVS Infra has established a robust customer base, successfully acquiring, developing, and selling over 1,000+ acres of premium agricultural and non-agricultural land to multinational corporations (MNCs) and private investors. Starting from Tirupati, we are expanding our horizons and building our footprints across Hyderabad, Chennai, and Bangalore with high-value residential and plotted projects.
          </p>

          {/* Premium Glassmorphism Credentials Panel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 border-t border-dark-blue/5 pt-8">
            <div className="bg-white/50 backdrop-blur-lg border border-white/60 p-6 rounded-2xl flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-white border border-dark-blue/5 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#c4a468]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-dark-blue block tracking-wide">Bespoke Planning</span>
                <p className="text-[11px] sm:text-xs text-dark-blue/60 mt-1.5 leading-relaxed font-light">
                  Every client receives tailored project guidance aligned with their land, location, and investment goals.
                </p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-lg border border-white/60 p-6 rounded-2xl flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-white border border-dark-blue/5 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#c4a468]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-dark-blue block tracking-wide">Transparent Delivery</span>
                <p className="text-[11px] sm:text-xs text-dark-blue/60 mt-1.5 leading-relaxed font-light">
                  Full disclosure, clear approvals, and honest updates at every stage of the project journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS - APPLE-INSPIRED INFINITE VELOCITY CAROUSEL */}
      <section ref={reviewsSectionRef} className="py-36 border-t border-dark-blue/5 bg-gradient-to-b from-[#2e415703] to-cream relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="text-center flex flex-col items-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c4a468] mb-3">
              Reviews
            </span>
            <h2 className="font-display text-4xl font-light tracking-tight text-dark-blue">
              What Our Clients Say
            </h2>
            <div className="w-16 h-[1px] bg-[#c4a468] mt-4"></div>
          </div>
        </div>

        {/* Endless Cinematic Ribbon View Frame */}
        <div className="relative w-full flex overflow-hidden py-10 select-none">
          {/* Linear Mask Blur Shader for Luxury Smooth Clipping Edges */}
          <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-cream via-cream/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-cream via-cream/50 to-transparent z-20 pointer-events-none" />

          {/* Core Animation Flex Line Array */}
          <div ref={trackRef} className="flex gap-8 whitespace-nowrap will-change-transform">
            {infiniteLoopPool.map((t, idx) => (
              <div 
                key={idx}
                className="review-glass-card inline-block w-[420px] shrink-0 whitespace-normal bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(196,164,104,0.15)] hover:border-[#c4a468] hover:bg-white/70 group"
              >
                <div className="flex flex-col h-full justify-between relative">
                  {/* Decorative Glass Quote Mark Icon */}
                  <div className="absolute -top-3 -right-2 opacity-[0.04] group-hover:opacity-10 group-hover:text-[#c4a468] transition-all duration-500 pointer-events-none">
                    <Quote className="w-14 h-14 transform -scale-x-100" />
                  </div>

                  <p className="text-sm sm:text-base text-dark-blue/80 italic font-light leading-relaxed text-justify mb-8 relative z-10 tracking-wide">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 border-t border-dark-blue/5 pt-5 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-dark-blue/5 flex items-center justify-center border border-dark-blue/5 group-hover:bg-[#c4a468]/10 group-hover:border-[#c4a468]/30 transition-all duration-500">
                      <User className="w-3.5 h-3.5 text-dark-blue/40 group-hover:text-[#c4a468] transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a468] block">
                      Verified Client {t.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}