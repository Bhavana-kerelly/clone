import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Shield, Sunset, Compass, Sparkles, ArrowRight } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function AboutBarbados() {
  const allProperties = Object.values(propertiesData);
  const featuredProperties = allProperties.slice(0, 3);

  // Global Context Initialization
  useEffect(() => {
    document.title = "About Barbados | Island Living & Real Estate Guide";
    window.scrollTo(0, 0);
  }, []);

  // Spatial Animation Node References
  const viewportContainer = useRef(null);
  const heroWrapper = useRef(null);
  const cultureSection = useRef(null);
  const architectureSection = useRef(null);
  const lifestyleSection = useRef(null);
  const climateSection = useRef(null);

  // Apple Easing Curves (Kinetic Physics Specifications)
  const appleBezier = [0.16, 1, 0.3, 1];
  const fluidSpringConfig = { stiffness: 80, damping: 26, mass: 1, restDelta: 0.0001 };

  // 1. Apple Hero Cinematic Zoom Transformation Mechanics
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroWrapper,
    offset: ["start start", "end start"]
  });
  const rawHeroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);
  const heroImageScale = useSpring(rawHeroScale, fluidSpringConfig);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroTextY = useTransform(heroProgress, [0, 0.5], [0, -50]);

  // 2. High-Fidelity Apple Scroll-Through Parallax Tracks (All Original Sections)
  const { scrollYProgress: cultureProgress } = useScroll({
    target: cultureSection,
    offset: ["start end", "end start"]
  });
  const cultureImgY = useSpring(useTransform(cultureProgress, [0, 1], [-60, 60]), fluidSpringConfig);

  const { scrollYProgress: archProgress } = useScroll({
    target: architectureSection,
    offset: ["start end", "end start"]
  });
  const archImgScale = useSpring(useTransform(archProgress, [0, 0.5], [0.92, 1]), fluidSpringConfig);

  const { scrollYProgress: lifestyleProgress } = useScroll({
    target: lifestyleSection,
    offset: ["start end", "end start"]
  });
  const lifestyleImgY = useSpring(useTransform(lifestyleProgress, [0, 1], [-80, 80]), fluidSpringConfig);

  const { scrollYProgress: climateProgress } = useScroll({
    target: climateSection,
    offset: ["start end", "end start"]
  });
  const climateImgScale = useSpring(useTransform(climateProgress, [0, 0.5], [0.92, 1]), fluidSpringConfig);

  // Structural Entrance Sequences for Text Blocks
  const textRevealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: appleBezier }
    }
  };

  const globalStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div ref={viewportContainer} className="bg-[#000000] text-[#f5f5f7] antialiased selection:bg-[#0071e3] selection:text-white font-sans overflow-x-hidden">
      
      {/* SECTION 1: CATHEDRAL HERO WITH KINETIC DEPTH TRACKING */}
      <section ref={heroWrapper} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ scale: heroImageScale }} className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://framerusercontent.com/images/tYliNzBTUm5FERQkCY5A9aa9kw.jpg" 
            alt="Barbados beach view background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#000000] z-10" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleBezier }}
            className="text-[11px] font-semibold tracking-[0.4em] uppercase text-[#86868b] mb-4"
          >
            Island Living
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: appleBezier }}
            className="text-5xl sm:text-7xl font-semibold tracking-tight text-white"
          >
            About Barbados
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "48px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: appleBezier }}
            className="h-[1px] bg-[#424245] mt-6 mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: appleBezier }}
            className="text-base sm:text-xl text-[#e8e8ed] max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Discover the unique culture, heritage, and beauty that make Barbados a true island paradise and the perfect destination for property buyers.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: CULTURE & HISTORY SEGMENT - STRUCTURAL PARALLAX WINDOW */}
      <section ref={cultureSection} className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-30 bg-black">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={globalStagger}
          className="lg:col-span-6 space-y-6"
        >
          <motion.span variants={textRevealVariants} className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#86868b] block">
            Heritage &amp; Heart
          </motion.span>
          <motion.h2 variants={textRevealVariants} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
            History &amp; Culture: The Soul of Barbados
          </motion.h2>
          <motion.div variants={textRevealVariants} className="w-12 h-[1px] bg-[#424245]" />
          <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
            Barbados is a land where history and culture intertwine, creating a vibrant tapestry of traditions, heritage, and warmth. From its early indigenous roots and British colonial influences to its present-day charm, the island’s story is felt across its landscapes, architecture, and ever-welcoming community.
          </motion.p>
          <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
            Barbados’s culture comes alive through annual festivals like Crop Over, a spirited celebration of music and dance that invites visitors to share in its joyful traditions. The island’s culinary scene blends Caribbean flavors with international finesse, while local artisans showcase craftsmanship inspired by the island’s natural beauty. Here, culture is not just observed—it is embraced, offering a truly immersive experience.
          </motion.p>
        </motion.div>
        
        <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-video bg-[#1d1d1f] border border-[#2d2d30] relative shadow-2xl">
          <motion.div style={{ y: cultureImgY }} className="absolute -inset-y-16 inset-x-0 w-full h-[calc(100%+128px)]">
            <img 
              src="https://framerusercontent.com/images/pfEJJ9QrAn3EpSoq0mBLAxo0.jpg" 
              alt="An old heritage building with a clock tower in Barbados" 
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ARCHITECTURE SEGMENT - CINEMATIC CANVAS LAYERING */}
      <section ref={architectureSection} className="relative w-full py-36 bg-[#1d1d1f] border-y border-[#2d2d30] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 rounded-3xl overflow-hidden aspect-video bg-black border border-[#333336] shadow-2xl">
            <motion.img 
              style={{ scale: archImgScale }}
              src="https://framerusercontent.com/images/B7wY4tIh88yCyhIJKWO4rBfeBBo.jpg" 
              alt="Luxury Caribbean Architecture in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={globalStagger}
            className="order-1 lg:order-2 lg:col-span-5 space-y-6"
          >
            <motion.span variants={textRevealVariants} className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#86868b] block">
              Timeless Craftsmanship
            </motion.span>
            <motion.h2 variants={textRevealVariants} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              Architecture &amp; Design
            </motion.h2>
            <motion.div variants={textRevealVariants} className="w-12 h-[1px] bg-[#424245]" />
            <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados's architecture is a fusion of colonial and Caribbean influences. From stately plantation houses and coral-stone buildings to modern villas that blend seamlessly with the environment, the island’s architecture echoes its rich history while embracing contemporary luxury.
            </motion.p>
            <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Each property, whether traditional or avant-garde, reflects Barbados’s unique character, offering stunning homes that capture the essence of island elegance. High-fidelity construction, structural coral stones, and wide terraces designed for natural ventilation are hallmarks of luxury Barbados properties.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: LIFESTYLE SEGMENT - REVERSE PARALLAX CHASSIS */}
      <section ref={lifestyleSection} className="relative max-w-7xl mx-auto px-6 md:px-12 py-36 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-30 bg-black">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={globalStagger}
          className="lg:col-span-6 space-y-6"
        >
          <motion.span variants={textRevealVariants} className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#86868b] block">
            From Fairways to Fine Dining
          </motion.span>
          <motion.h2 variants={textRevealVariants} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
            Lifestyle &amp; Recreation
          </motion.h2>
          <motion.div variants={textRevealVariants} className="w-12 h-[1px] bg-[#424245]" />
          <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
            Barbados offers a vast range of pursuits for all tastes. Play a round on world-class golf courses at Apes Hill or Sandy Lane, designed for challenge and beauty. For equestrian lovers, afternoon polo matches deliver thrilling spectacles. Head over to the Garrison Racecourse which showcases premier horseracing events that captivate and enthuse.
          </motion.p>
          <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
            Luxury cruises on our glittering sea reveal secluded coves and stunning coral reefs, perfect for those who appreciate serene exploration. Meanwhile, fine dining establishments serve gourmet cuisine infused with local flavors, presenting unforgettable culinary experiences. You’ll never be short of things to do. The island offers a wealth of experiences to indulge in, ensuring each moment is beautiful.
          </motion.p>
        </motion.div>
        
        <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-video bg-[#1d1d1f] border border-[#2d2d30] relative shadow-2xl">
          <motion.div style={{ y: lifestyleImgY }} className="absolute -inset-y-20 inset-x-0 w-full h-[calc(100%+160px)]">
            <img 
              src="https://framerusercontent.com/images/yZOh20dxEg3fI9hFlBxGRkK6dl8.jpg" 
              alt="Golf course at Apes Hill Resort Barbados" 
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CLIMATE SEGMENT - FLUID GEOMETRIC EXPOSURE */}
      <section ref={climateSection} className="relative w-full py-36 bg-[#1d1d1f] border-t border-[#2d2d30] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 rounded-3xl overflow-hidden aspect-video bg-black border border-[#333336] shadow-2xl">
            <motion.img 
              style={{ scale: climateImgScale }}
              src="https://framerusercontent.com/images/KKQzHbC7qQPF6W0SeLLgQ9ok8E.jpg" 
              alt="Beach with palm trees in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={globalStagger}
            className="order-1 lg:order-2 lg:col-span-5 space-y-6"
          >
            <motion.span variants={textRevealVariants} className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#86868b] block">
              The Endless Summer
            </motion.span>
            <motion.h2 variants={textRevealVariants} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              Climate &amp; Weather
            </motion.h2>
            <motion.div variants={textRevealVariants} className="w-12 h-[1px] bg-[#424245]" />
            <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Barbados is a year-round tropical paradise with warm, sunny weather tempered by gentle trade winds. The average temperature ranges between 27°-30°C/80°-86°F. Equally, the ocean remains invitingly warm throughout the year, with temperatures ranging from 26-29°C (79-84°F).
            </motion.p>
            <motion.p variants={textRevealVariants} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              From December to May, the island enjoys a dry season of clear skies and cool breezes, while the wetter summer season brings brief, refreshing showers that keep the lush landscapes vibrant. The idyllic climate ensures that you can bask in the sun on pristine beaches or indulge in outdoor leisure pursuits at any time of year.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PORTFOLIO GRID: FEATURED PORTFOLIO DISPLAY */}
      <section className="py-36 max-w-7xl mx-auto px-6 md:px-12 bg-black">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b border-[#2d2d30] pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#86868b] block">
              Local Properties
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Featured Island Residences
            </h2>
          </div>
          <motion.div 
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 text-sm text-[#0071e3] font-medium cursor-pointer mt-4 md:mt-0 group"
          >
            <span>View All Curated Portfolios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Cinematic Property Chassis Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={globalStagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProperties.map((p, index) => (
            <motion.div 
              key={p.id || index}
              variants={textRevealVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: appleBezier }}
              className="bg-[#1d1d1f] rounded-3xl p-3 border border-[#2d2d30] transition-colors duration-300 hover:bg-[#252528] shadow-lg"
            >
              <PropertyCard property={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}