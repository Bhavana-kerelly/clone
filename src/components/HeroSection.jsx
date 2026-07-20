import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SLIDES = [
  { 
    src: '/images/kvs/hero-slide-4.jpg',
    heading: 'Transforming Land Into Premium Communities',
    subheading: 'From strategic land acquisition and premium layout development to residential communities and commercial opportunities, KVS Infra creates destinations designed for lasting value.'
  },
  {
    src: '/images/kvs/hero-slide-5.jpg',
    heading: 'Elevating Everyday Living',
    subheading: 'Premium residential communities thoughtfully designed with world-class amenities, modern architecture, and exceptional quality for a better lifestyle.'
  },
  {
    src: '/images/kvs/hero-slide-6.jpg',
    heading: 'Strategic Land. Infinite Possibilities.',
    subheading: 'From land acquisition to infrastructure-ready developments, we create destinations where businesses and communities thrive.'
  }
];

const DISPLAY_TIME   = 4000;  // ms each image shown
const SLIDE_DURATION = 0.9;   // seconds for GSAP transition

export default function HeroSection() {
  const slidesRef    = useRef([]);
  const currentRef   = useRef(0);
  const isAnimating  = useRef(false);
  const intervalRef  = useRef(null);
  const isPaused     = useRef(false);
  const [activeDot, setActiveDot] = useState(0);

  /* ── go to a specific slide ─────────────────────────────────────────── */
  const goTo = (next) => {
    if (isAnimating.current) return;
    const slides = slidesRef.current;
    const curr   = currentRef.current;
    if (next === curr) return;

    isAnimating.current = true;

    const currSlide = slides[curr];
    const nextSlide = slides[next];

    /* Place next slide off-right, ensure it's on top */
    gsap.set(nextSlide, { xPercent: 100, opacity: 1, zIndex: 2 });
    gsap.set(currSlide, { zIndex: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(currSlide, { xPercent: 100, zIndex: 0, opacity: 1 });
        currentRef.current = next;
        setActiveDot(next);
        isAnimating.current = false;
      },
    });

    /* Next slides in from right */
    tl.to(nextSlide, {
      xPercent: 0,
      duration: SLIDE_DURATION,
      ease: 'power2.inOut',
    }, 0);

    /* Current slides left + fades slightly */
    tl.to(currSlide, {
      xPercent: -28,
      opacity: 0.28,
      duration: SLIDE_DURATION,
      ease: 'power2.inOut',
    }, 0);
  };

  /* ── advance to next ────────────────────────────────────────────────── */
  const advance = () => {
    if (isPaused.current || isAnimating.current) return;
    const next = (currentRef.current + 1) % SLIDES.length;
    goTo(next);
  };

  /* ── start / clear interval ─────────────────────────────────────────── */
  const startLoop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, DISPLAY_TIME);
  };

  const stopLoop = () => clearInterval(intervalRef.current);

  /* ── hover handlers ─────────────────────────────────────────────────── */
  const handleEnter = () => { isPaused.current = true;  stopLoop(); };
  const handleLeave = () => { isPaused.current = false; startLoop(); };

  /* ── dot click ──────────────────────────────────────────────────────── */
  const handleDot = (i) => {
    if (isAnimating.current) return;
    stopLoop();
    goTo(i);
    startLoop();
  };

  /* ── init ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const slides = slidesRef.current;

    /* All slides off-right, first one visible */
    gsap.set(slides, { xPercent: 100, opacity: 1, zIndex: 0 });
    gsap.set(slides[0], { xPercent: 0, zIndex: 1 });

    startLoop();

    return () => {
      stopLoop();
      gsap.killTweensOf(slides);
    };
  }, []); // eslint-disable-line

  return (
    <section
      className="hfs-root"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* ── Slides ──────────────────────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="hfs-slide"
          ref={(el) => (slidesRef.current[i] = el)}
          style={{ zIndex: i === 0 ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={`KVS Infra showcase ${i + 1}`}
            className="hfs-img"
            draggable={false}
          />
          <div className="hfs-vignette" />
          
          {slide.heading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 mt-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6 max-w-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                {slide.heading}
              </h1>
              {slide.subheading && (
                <p className="text-sm md:text-lg lg:text-xl text-white max-w-3xl font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mx-auto">
                  {slide.subheading}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* ── Dots ────────────────────────────────────────────────────── */}
      <div className="hfs-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hfs-dot ${i === activeDot ? 'hfs-dot--active' : ''}`}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Styles ──────────────────────────────────────────────────── */}
      <style>{`
        /* Root */
        .hfs-root {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        /* Slides fill viewport */
        .hfs-slide {
          position: absolute;
          inset: 0;
          will-change: transform, opacity;
          overflow: hidden;
        }

        /* Image covers slide */
        .hfs-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          user-select: none;
          pointer-events: none;
        }

        /* Subtle bottom vignette */
        .hfs-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.5) 0%,
            transparent 55%
          );
          pointer-events: none;
        }

        /* ── Dots container ───────────────────────────────────────── */
        .hfs-dots {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
        }

        /* Individual dot */
        .hfs-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.35s ease, transform 0.35s ease, width 0.35s ease;
          flex-shrink: 0;
        }

        /* Active dot — elongated pill */
        .hfs-dot--active {
          width: 28px;
          border-radius: 100px;
          background: #ffffff;
          transform: none;
        }

        .hfs-dot:not(.hfs-dot--active):hover {
          background: rgba(255,255,255,0.7);
          transform: scale(1.2);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hfs-dots {
            bottom: 20px;
            gap: 8px;
            padding: 8px 16px;
          }
          .hfs-dot { width: 7px; height: 7px; }
          .hfs-dot--active { width: 22px; }
        }
      `}</style>
    </section>
  );
}
