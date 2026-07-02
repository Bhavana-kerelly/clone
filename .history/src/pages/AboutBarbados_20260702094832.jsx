import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Sunset, Compass, Sparkles, ArrowRight } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function AboutBarbados() {
  const allProperties = Object.values(propertiesData);
  const featuredProperties = allProperties.slice(0, 3);

  // Global Page Titles & Positioning
  useEffect(() => {
    document.title = "About Barbados | Island Living & Real Estate Guide";
    window.scrollTo(0, 0);
  }, []);

  // Refs for Scroll Animations
  const heroRef = useRef(null);
  const architectureRef = useRef(null);

  // 1. Hero Scroll Transformations
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, 100]);

  // 2. Architecture Section Sticky Interactive Progress
  const { scrollYProgress: archScroll } = useScroll({
    target: architectureRef,
    offset: ["start end", "end start"]
  });
  const archImgScale = useTransform(archScroll, [0, 0.5], [0.85, 1]);
  const smoothArchScale = useSpring(archImgScale, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Animation Variant Presets for Apple-like Fluidity
  const appleEase = [0.16, 1, 0.3, 1]; // Custom ultra-smooth cubic bezier

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: appleEase }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-[#000000] text-[#f5f5f7] font-sans antialiased selection:bg-[#0071e3] selection:text-white overflow-x-hidden">
      
      {/* 1. APPLE HERO: IMMERSIVE PARALLAX GRAPHIC */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: heroScale }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://framerusercontent.com/images/tYliNzBTUm5FERQkCY5A9aa9kw.jpg" 
            alt="Barbados beach view background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#000000]"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-[#86868b] mb-4"
          >
            Island Living
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: appleEase }}
            className="text-5xl sm:text-7xl font-semibold tracking-tight text-white mb-6"
          >
            Barbados.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: appleEase }}
            className="text-lg sm:text-2xl text-[#86868b] max-w-2xl font-light leading-relaxed"
          >
            Discover the unique culture, heritage, and beauty that make Barbados a true island paradise and the perfect destination for property buyers.
          </motion.p>
        </motion.div>

        {/* Subtle Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-20"></div>
      </section>


      {/* 2. THE BENTO GRID: CULTURE & LIFESTYLE */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 z-30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Hero Card - Culture (Spans 2 columns) */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-[#1d1d1f] min-h-[500px] flex flex-col justify-end p-8 sm:p-12 border border-[#333336] transition-all duration-500 hover:border-[#424245]"
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <img 
                src="https://framerusercontent.com/images/pfEJJ9QrAn3EpSoq0mBLAxo0.jpg" 
                alt="Heritage Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-[#1d1d1f]/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-2 block">Heritage & Heart</span>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">The Soul of Barbados</h3>
              <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-4">
                Barbados is a land where history and culture intertwine, creating a vibrant tapestry of traditions, heritage, and warmth. From its early indigenous roots to its present-day charm, the island’s story is woven into ever-welcoming communities.
              </p>
              <p className="text-sm text-[#86868b] leading-relaxed hidden sm:block">
                Barbados’s culture comes alive through annual festivals like Crop Over, a spirited celebration of music and dance that invites visitors to share in its joyful traditions.
              </p>
            </div>
          </motion.div>

          {/* Sub Card - Climate */}
          <motion.div 
            variants={fadeInUp}
            className="group relative rounded-3xl overflow-hidden bg-[#1d1d1f] p-8 border border-[#333336] flex flex-col justify-between transition-all duration-500 hover:border-[#424245]"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#86868b] mb-2 block">The Endless Summer</span>
              <h3 className="text-xl font-semibold text-white mb-4">Climate & Weather</h3>
              <p className="text-sm text-[#86868b] leading-relaxed">
                A year-round tropical paradise with warm, sunny weather tempered by gentle trade winds. The average temperature ranges cleanly between 27°-30°C.
              </p>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden h-48 relative">
              <img 
                src="https://framerusercontent.com/images/KKQzHbC7qQPF6W0SeLLgQ9ok8E.jpg" 
                alt="Barbados Coastline" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
          </motion.div>

          {/* Full Width Card - Lifestyle */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden bg-[#1d1d1f] p-8 sm:p-12 border border-[#333336] transition-all duration-500 hover:border-[#424245]"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#86868b] block">From Fairways to Fine Dining</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Lifestyle & Recreation</h3>
              <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                Play a round on world-class golf courses at Apes Hill or Sandy Lane, designed for challenge and beauty. For equestrian lovers, afternoon polo matches deliver thrilling spectacles, while the Garrison Racecourse showcases premier horseracing events.
              </p>
              <p className="text-sm text-[#86868b] leading-relaxed">
                Luxury cruises on our glittering sea reveal secluded coves and stunning coral reefs, perfect for those who appreciate serene, architectural exploration.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video relative">
              <img 
                src="https://framerusercontent.com/images/yZOh20dxEg3fI9hFlBxGRkK6dl8.jpg" 
                alt="Golf Course" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* 3. STICKY INTERACTIVE SCROLL: ARCHITECTURE */}
      <section ref={architectureRef} className="py-32 bg-[#000000] border-t border-[#222224]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: appleEase }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#86868b] block">
              Timeless Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
              Architecture <br /> &amp; Design
            </h2>
            <div className="w-12 h-[1px] bg-[#424245]"></div>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados's architecture is a high-fidelity fusion of colonial and Caribbean influences. From stately plantation houses and local coral-stone structures to modern villas that blend seamlessly with nature, the island’s builds embrace contemporary luxury.
            </p>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Each property reflects Barbados’s unique character. Structural native coral stones and wide open terraces designed for natural cross-ventilation remain structural hallmarks of luxury Barbados properties.
            </p>
          </motion.div>

          <div className="lg:col-span-7 w-full overflow-hidden flex justify-center">
            <motion.div 
              style={{ scale: smoothArchScale }}
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#1d1d1f] shadow-2xl border border-[#333336]"
            >
              <img 
                src="https://framerusercontent.com/images/B7wY4tIh88yCyhIJKWO4rBfeBBo.jpg" 
                alt="Luxury Caribbean Architecture in Barbados" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </section>


      {/* 4. PREMIUM DISPLAY: FEATURED RESIDENCES */}
      <section className="py-32 bg-[#1d1d1f] border-t border-[#333336]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#86868b] block">
                Local Properties
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Featured Island Residences
              </h2>
            </div>
            <motion.a 
              href="#properties"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-sm font-medium text-[#0071e3] mt-4 md:mt-0 group gap-1"
            >
              Explore all current portfolios 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Luxury Animated Listing Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProperties.map((p, index) => (
              <motion.div 
                key={p.id || index}
                variants={fadeInUp}
                className="hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#000000] rounded-3xl p-2 border border-[#333336]"
              >
                <PropertyCard property={p} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}