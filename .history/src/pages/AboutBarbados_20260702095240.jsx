import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Sunset, Compass, Sparkles, ArrowRight } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function AboutBarbados() {
  const allProperties = Object.values(propertiesData);
  const featuredProperties = allProperties.slice(0, 3);

  useEffect(() => {
    document.title = "About Barbados | Island Living & Real Estate Guide";
    window.scrollTo(0, 0);
  }, []);

  // Structural References for Scroll Layers
  const masterContainer = useRef(null);
  const heroRef = useRef(null);
  const cultureRef = useRef(null);
  const architectureRef = useRef(null);
  const lifestyleRef = useRef(null);
  const climateRef = useRef(null);

  // Apple Physics Engine Config
  const applePhysics = { stiffness: 90, damping: 28, mass: 1.2, restDelta: 0.0001 };
  const fluidEase = [0.16, 1, 0.3, 1];

  // ==========================================
  // KINETIC SCROLL ENGINE MATRIX
  // ==========================================
  
  // 1. Hero Viewport Tracking
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroImageScale = useSpring(useTransform(heroScroll, [0, 1], [1, 1.15]), applePhysics);
  const heroPanelScale = useSpring(useTransform(heroScroll, [0, 1], [1, 0.9]), applePhysics);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  // 2. Culture Viewport Tracking
  const { scrollYProgress: cultureScroll } = useScroll({
    target: cultureRef,
    offset: ["start end", "end start"]
  });
  const culturePanelScale = useSpring(useTransform(cultureScroll, [0.4, 0.9], [1, 0.92]), applePhysics);
  const cultureImageY = useSpring(useTransform(cultureScroll, [0, 1], [-100, 100]), applePhysics);

  // 3. Architecture Viewport Tracking
  const { scrollYProgress: archScroll } = useScroll({
    target: architectureRef,
    offset: ["start end", "end start"]
  });
  const archPanelScale = useSpring(useTransform(archScroll, [0.4, 0.9], [1, 0.92]), applePhysics);
  const archImageScale = useSpring(useTransform(archScroll, [0, 0.5], [1.15, 1]), applePhysics);

  // 4. Lifestyle Viewport Tracking
  const { scrollYProgress: lifeScroll } = useScroll({
    target: lifestyleRef,
    offset: ["start end", "end start"]
  });
  const lifestylePanelScale = useSpring(useTransform(lifeScroll, [0.4, 0.9], [1, 0.92]), applePhysics);
  const lifestyleImageY = useSpring(useTransform(lifeScroll, [0, 1], [-120, 120]), applePhysics);

  // 5. Climate Viewport Tracking
  const { scrollYProgress: climateScroll } = useScroll({
    target: climateRef,
    offset: ["start end", "end start"]
  });
  const climateImageScale = useSpring(useTransform(climateScroll, [0, 0.5], [1.2, 1]), applePhysics);

  // Global Stagger & Reveal Presets
  const containerReveal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const maskedTextReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: fluidEase } }
  };

  const simpleFadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: fluidEase } }
  };

  return (
    <div ref={masterContainer} className="bg-[#000] text-[#f5f5f7] antialiased selection:bg-[#0071e3] selection:text-white font-sans overflow-x-hidden relative">
      
      {/* 1. CINEMATIC HERO OVERLAY VIEWPORT */}
      <div className="relative h-screen w-full z-10" ref={heroRef}>
        <motion.div 
          style={{ scale: heroPanelScale }} 
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black rounded-b-[40px] origin-bottom shadow-2xl"
        >
          <motion.div style={{ scale: heroImageScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <img 
              src="https://framerusercontent.com/images/tYliNzBTUm5FERQkCY5A9aa9kw.jpg" 
              alt="Barbados beach view background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
          </motion.div>

          <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center px-6">
            <div className="overflow-hidden mb-2">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, ease: fluidEase }}
                className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#86868b] block"
              >
                Island Living
              </motion.span>
            </div>
            
            <div className="overflow-hidden mb-6 py-2">
              <motion.h1 
                initial={{ y: "110%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, delay: 0.1, ease: fluidEase }}
                className="text-5xl sm:text-8xl font-semibold tracking-tight text-white leading-none"
              >
                About Barbados
              </motion.h1>
            </div>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "64px" }}
              transition={{ duration: 1, delay: 0.4, ease: fluidEase }}
              className="h-[1px] bg-[#424245] my-4" 
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: fluidEase }}
              className="text-base sm:text-2xl text-[#c1c1c7] max-w-3xl font-light leading-relaxed tracking-wide"
            >
              Discover the unique culture, heritage, and beauty that make Barbados a true island paradise and the perfect destination for property buyers.
            </motion.p>
          </div>
        </motion.div>
      </div>


      {/* 2. CULTURE & HISTORY SEGMENT: DETACHED PARALLAX CHASSIS */}
      <motion.section 
        ref={cultureRef}
        style={{ scale: culturePanelScale }}
        className="relative min-h-screen bg-black z-20 flex items-center justify-center py-32 rounded-b-[40px] origin-bottom shadow-2xl border-t border-[#161617]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={containerReveal}
            className="lg:col-span-6 space-y-6"
          >
            <div className="overflow-hidden">
              <motion.span variants={maskedTextReveal} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                Heritage &amp; Heart
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                History &amp; Culture: <br/>The Soul of Barbados
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados is a land where history and culture intertwine, creating a vibrant tapestry of traditions, heritage, and warmth. From its early indigenous roots and British colonial influences to its present-day charm, the island’s story is felt across its landscapes, architecture, and ever-welcoming community.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados’s culture comes alive through annual festivals like Crop Over, a spirited celebration of music and dance that invites visitors to share in its joyful traditions. The island’s culinary scene blends Caribbean flavors with international finesse, while local artisans showcase craftsmanship inspired by the island’s natural beauty. Here, culture is not just observed—it is embraced, offering a truly immersive experience.
            </motion.p>
          </motion.div>
          
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-video bg-[#111] border border-[#222] relative shadow-2xl group">
            <motion.div style={{ y: cultureImageY }} className="absolute -inset-y-24 inset-x-0 w-full h-[calc(100%+192px)]">
              <img 
                src="https://framerusercontent.com/images/pfEJJ9QrAn3EpSoq0mBLAxo0.jpg" 
                alt="An old heritage building with a clock tower in Barbados" 
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* 3. ARCHITECTURE SEGMENT: CONTINUOUS DEPTH SCALE */}
      <motion.section 
        ref={architectureRef}
        style={{ scale: archPanelScale }}
        className="relative min-h-screen bg-[#1d1d1f] z-30 flex items-center justify-center py-32 rounded-b-[40px] origin-bottom shadow-2xl border-t border-[#333336]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <div className="order-2 lg:order-1 lg:col-span-7 rounded-3xl overflow-hidden aspect-video bg-black border border-[#333] shadow-2xl relative">
            <motion.img 
              style={{ scale: archImageScale }}
              src="https://framerusercontent.com/images/B7wY4tIh88yCyhIJKWO4rBfeBBo.jpg" 
              alt="Luxury Caribbean Architecture in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={containerReveal}
            className="order-1 lg:order-2 lg:col-span-5 space-y-6"
          >
            <div className="overflow-hidden">
              <motion.span variants={maskedTextReveal} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                Timeless Craftsmanship
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Architecture <br /> &amp; Design
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados's architecture is a fusion of colonial and Caribbean influences. From stately plantation houses and coral-stone buildings to modern villas that blend seamlessly with the environment, the island’s architecture echoes its rich history while embracing contemporary luxury.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Each property, whether traditional or avant-garde, reflects Barbados’s unique character, offering stunning homes that capture the essence of island elegance. High-fidelity construction, structural coral stones, and wide terraces designed for natural ventilation are hallmarks of luxury Barbados properties.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>


      {/* 4. LIFESTYLE SEGMENT: FLOATING DYNAMIC FRAME */}
      <motion.section 
        ref={lifestyleRef}
        style={{ scale: lifestylePanelScale }}
        className="relative min-h-screen bg-black z-40 flex items-center justify-center py-32 rounded-b-[40px] origin-bottom shadow-2xl border-t border-[#161617]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={containerReveal}
            className="lg:col-span-6 space-y-6"
          >
            <div className="overflow-hidden">
              <motion.span variants={maskedTextReveal} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                From Fairways to Fine Dining
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Lifestyle &amp; Recreation
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados offers a vast range of pursuits for all tastes. Play a round on world-class golf courses at Apes Hill or Sandy Lane, designed for challenge and beauty. For equestrian lovers, afternoon polo matches deliver thrilling spectacles. Head over to the Garrison Racecourse which showcases premier horseracing events that captivate and enthuse.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Luxury cruises on our glittering sea reveal secluded coves and stunning coral reefs, perfect for those who appreciate serene exploration. Meanwhile, fine dining establishments serve gourmet cuisine infused with local flavors, presenting unforgettable culinary experiences. You’ll never be short of things to do. The island offers a wealth of experiences to indulge in, ensuring each moment is beautiful.
            </motion.p>
          </motion.div>
          
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-video bg-[#111] border border-[#222] relative shadow-2xl group">
            <motion.div style={{ y: lifestyleImageY }} className="absolute -inset-y-24 inset-x-0 w-full h-[calc(100%+192px)]">
              <img 
                src="https://framerusercontent.com/images/yZOh20dxEg3fI9hFlBxGRkK6dl8.jpg" 
                alt="Golf course at Apes Hill Resort Barbados" 
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* 5. CLIMATE SEGMENT: MAGNITUDE EXPOSURE SLIDE */}
      <section 
        ref={climateRef}
        className="relative min-h-screen bg-[#1d1d1f] z-50 flex items-center justify-center py-32 shadow-2xl border-t border-[#333336]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <div className="order-2 lg:order-1 lg:col-span-7 rounded-3xl overflow-hidden aspect-video bg-black border border-[#333] shadow-2xl relative">
            <motion.img 
              style={{ scale: climateImageScale }}
              src="https://framerusercontent.com/images/KKQzHbC7qQPF6W0SeLLgQ9ok8E.jpg" 
              alt="Beach with palm trees in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={containerReveal}
            className="order-1 lg:order-2 lg:col-span-5 space-y-6"
          >
            <div className="overflow-hidden">
              <motion.span variants={maskedTextReveal} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                The Endless Summer
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Climate &amp; Weather
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados is a year-round tropical paradise with warm, sunny weather tempered by gentle trade winds. The average temperature ranges between 27°-30°C/80°-86°F. Equally, the ocean remains invitingly warm throughout the year, with temperatures ranging from 26-29°C (79-84°F).
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              From December to May, the island enjoys a dry season of clear skies and cool breezes, while the wetter summer season brings brief, refreshing showers that keep the lush landscapes vibrant. The idyllic climate ensures that you can bask in the sun on pristine beaches or indulge in outdoor leisure pursuits at any time of year.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* 6. FEATURED RESIDENCES BLOCK: IMMERSIVE FINALE */}
      <section className="py-40 bg-black z-50 relative border-t border-[#161617]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 border-b border-[#222] pb-10">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                Local Properties
              </span>
              <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-none">
                Featured Island Residences
              </h2>
            </div>
            <motion.div 
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-2 text-sm text-[#0071e3] font-medium cursor-pointer mt-6 md:mt-0 group"
            >
              <span className="tracking-tight text-base">View All Curated Portfolios</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerReveal}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProperties.map((p, index) => (
              <motion.div 
                key={p.id || index}
                variants={simpleFadeUp}
                whileHover={{ y: -10 }}
                className="bg-[#1c1c1e] rounded-3xl p-3 border border-[#2d2d30] transition-all duration-500 hover:border-[#444] shadow-2xl"
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