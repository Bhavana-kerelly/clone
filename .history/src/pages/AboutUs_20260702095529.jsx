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

  useEffect(() => {
    document.title = "About Stewart & Co Real Estate | Barbados Real Estate";
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

      // 3. Apple Hardware Reveal for Glassmorphism Testimonial Cards
      const reviewCards = reviewsSectionRef.current.querySelectorAll('.review-glass-card');
      gsap.fromTo(reviewCards,
        { y: 80, opacity: 0, rotationX: -10, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'cubic-bezier(0.25, 1, 0.5, 1)',
          scrollTrigger: {
            trigger: reviewsSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    { text: "Dear Sean,…I want to thank you from the bottom of my heart for all your time, patience, good advice, and company, you really made a dreary task quite an enjoyable experience.", author: "MR" },
    { text: "Sean...I want to thank you personally and on behalf of my family for all you have done for us. You have really been perfect for us in helping our transition into a property in the UK.", author: "CB" },
    { text: "Thank you Sean - your integrity and professionalism have assisted greatly in securing the sale.", author: "KC" },
    { text: "Thank you Sean. F and I could not have hoped to find a property consultant that could have assisted us more with this whole process.", author: "DM" },
    { text: "...All of this happened only because of the professionality, seriousness and honest approach Sean has manifested. He has always effortlessly gone into supporting us with info and facts and delivering on every promise made.", author: "DB" }
  ];

  return (
    <div ref={containerRef} className="bg-cream min-h-screen text-dark-blue overflow-hidden selection:bg-[#c4a468] selection:text-white">
      
      {/* 1. HERO HEADER WITH CINEMATIC DEPTH SCROLL */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImgRef}
            src="https://framerusercontent.com/images/sp6xPnKADyG1xIhRbtH9H9syU4.jpg" 
            alt="Stewart & Co office background" 
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/10 via-dark-blue/40 to-cream"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4">
            Boutique Agency
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extralight tracking-tight leading-none text-white mb-6">
            About Stewart &amp; <span className="font-serif italic font-normal text-[#c4a468]">Co.</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent mb-6"></div>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
            Committed to connecting you with exceptional properties in Barbados. Stewart &amp; Co Real Estate provides personalized, premium service for buyers and renters every step of the way.
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
              alt="Sean Stewart - Principal of Stewart & Co" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            
            {/* Apple Luxury Frosted Glassmorphism Banner Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-xl border border-white/30 p-6 rounded-xl text-white text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#c4a468] block font-bold mb-1">Founder / Broker</span>
              <span className="font-serif text-2xl font-normal text-dark-blue">Sean Stewart</span>
            </div>
          </div>
        </div>

        {/* Profile Details Container Frame */}
        <div ref={profileTextRef} className="flex flex-col gap-6 text-left will-change-transform">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c4a468]">
            Agency Leadership
          </span>
          <h2 className="font-display text-4xl font-light text-dark-blue tracking-tight leading-none">
            About <span className="font-serif italic font-normal text-[#c4a468]">Sean</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c4a468] mb-2"></div>
          
          <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
            Sean Stewart, the founder of Stewart &amp; Co. Real Estate, is a veteran real estate broker with over 25 years of experience in the luxury residential market. His career spans three countries, giving him a rare global view of property investments alongside extensive local knowledge of Barbados' Platinum Coast.
          </p>
          <p className="text-sm sm:text-base text-dark-blue/80 leading-relaxed font-light text-justify">
            Sean operates with a single core philosophy: to ensure a transparent, seamless, and pleasant transaction for all parties concerned. Known for his reliability, honesty, and professional integrity, he acts as an expert personal advisor for overseas property buyers seeking a retreat or investment in Barbados.
          </p>

          {/* Premium Glassmorphism Credentials Panel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 border-t border-dark-blue/5 pt-8">
            <div className="bg-white/50 backdrop-blur-lg border border-white/60 p-6 rounded-2xl flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-white border border-dark-blue/5 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#c4a468]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-dark-blue block tracking-wide">Bespoke Guidance</span>
                <p className="text-[11px] sm:text-xs text-dark-blue/60 mt-1.5 leading-relaxed font-light">
                  Every client receives customized strategies tailored to their lifestyle preferences.
                </p>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-lg border border-white/60 p-6 rounded-2xl flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 rounded-full bg-white border border-dark-blue/5 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#c4a468]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-dark-blue block tracking-wide">Transparent Operations</span>
                <p className="text-[11px] sm:text-xs text-dark-blue/60 mt-1.5 leading-relaxed font-light">
                  Full disclosure, clear legal processes, and honest estimations of fees/outgoings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS FROSTED REVEAL GRID FRAME */}
      <section ref={reviewsSectionRef} className="py-32 border-t border-dark-blue/5 bg-gradient-to-b from-[#2e415703] to-cream relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c4a468] mb-3">
              Reviews
            </span>
            <h2 className="font-display text-4xl font-light tracking-tight text-dark-blue">
              What Our Clients Say
            </h2>
            <div className="w-16 h-[1px] bg-[#c4a468] mt-4"></div>
          </div>

          {/* Frosted Glass Layout Container Mesh */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="review-glass-card group relative bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_35px_70px_rgba(0,0,0,0.05)] hover:border-[#c4a468]/30 hover:-translate-y-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-6 right-6 opacity-[0.06] group-hover:opacity-15 group-hover:text-[#c4a468] transition-all duration-500 pointer-events-none">
                  <Quote className="w-12 h-12 transform -scale-x-100" />
                </div>

                <p className="text-xs sm:text-sm text-dark-blue/80 italic font-light leading-relaxed text-justify mb-8 relative z-10">
                  "{t.text}"
                </p>
                
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a468] block border-t border-dark-blue/5 pt-4 relative z-10">
                  &mdash; Client {t.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}