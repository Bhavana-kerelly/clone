import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Sunset, Compass, Sparkles, ArrowRight } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function AboutBarbados() {
  const investmentCards = [
    {
      id: "agri-land",
      category: "PREMIUM AGRICULTURAL LAND",
      title: "Organic Farming Estates",
      image: "https://framerusercontent.com/images/mx0s3eDJVX9CBqHghr0yqggQwqE.jpg",
      stats: ["Large Scale", "Plantation Ready", "Long-Term Growth"]
    },
    {
      id: "plotted-dev",
      category: "PLOTTED DEVELOPMENTS",
      title: "Premium Investment Layouts",
      image: "https://framerusercontent.com/images/xwVTohGHrB5SqEPyPY0FP0rK90.jpg",
      stats: ["DTCP/RERA Ready", "High Appreciation", "Infrastructure Ready"]
    },
    {
      id: "strategic-land",
      category: "FUTURE GROWTH CORRIDORS",
      title: "Strategic Land Banking",
      image: "https://framerusercontent.com/images/aFfytqBXE4Ij15DDnKo79GQdbss.jpg",
      stats: ["Metro Expansion", "Institutional Grade", "Future Ready"]
    }
  ];

  useEffect(() => {
    document.title = "KVS Infra Business Model | Growth Strategy";
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
              alt="KVS Infra plotted development and master plan" 
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
                Growth Platform
              </motion.span>
            </div>
            
            <div className="overflow-hidden mb-6 py-2">
              <motion.h1 
                initial={{ y: "110%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, delay: 0.1, ease: fluidEase }}
                className="text-5xl sm:text-8xl font-semibold tracking-tight text-white leading-none"
              >
                Business Model
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
              Discover how KVS Infra creates long-term value through land aggregation, infrastructure planning, and plotted projects in high-demand corridors.
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
                Land &amp; Opportunity
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Strategic Land: <br/>The Engine of Value
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              KVS Infra identifies and develops strategically located land with strong appreciation potential and long-term investment value. Every acquisition is backed by market research, legal due diligence, and a disciplined approach to ensure sustainable growth for investors and communities alike.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Our focus extends beyond land ownership—we create opportunities. Through thoughtful planning, transparent execution, and future-ready development, we transform raw land into valuable assets that support residential, commercial, and institutional growth.
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
                Planned Infrastructure
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Layout <br /> &amp; Design
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Every layout is designed with functionality, accessibility, and long-term value at its core. Wide internal roads, efficient drainage systems, green open spaces, and well-planned utility corridors ensure every development meets modern infrastructure standards.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Our planning philosophy prioritizes livability and investment security. By integrating thoughtful design with regulatory compliance, we create layouts that enhance community appeal while maximizing the long-term potential of every property.
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
                From Land to Lifestyle
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Lifestyle &amp; Recreation
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              Modern communities are built around more than just infrastructure. KVS Infra incorporates landscaped open spaces, recreational zones, and community-focused amenities that promote healthier, more connected lifestyles for residents and families.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              From green parks and walking pathways to thoughtfully allocated social spaces, every project is planned to create environments where people can live, interact, and thrive while enjoying lasting quality of life.
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
                FUTURE-READY DEVELOPMENT
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2 variants={maskedTextReveal} className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
                Sustainable Growth
              </motion.h2>
            </div>
            <motion.div variants={simpleFadeUp} className="w-16 h-[1px] bg-[#424245]" />
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              KVS Infra embraces responsible development practices that balance economic progress with environmental stewardship. Every project is planned with efficient resource utilization, sustainable infrastructure, and long-term community value in mind.
            </motion.p>
            <motion.p variants={simpleFadeUp} className="text-sm sm:text-base text-[#86868b] leading-relaxed text-justify">
              By preserving natural landscapes where possible and integrating modern infrastructure with thoughtful planning, we create developments that remain resilient, valuable, and beneficial for future generations.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* 6. FEATURED INVESTMENT BLOCK: IMMERSIVE FINALE */}
      <section className="py-40 bg-black z-50 relative border-t border-[#161617]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 border-b border-[#222] pb-10">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">
                CURATED LAND PORTFOLIO
              </span>
              <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-none">
                Featured Investment Opportunities
              </h2>
            </div>
            <motion.div 
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-2 text-sm text-[#0071e3] font-medium cursor-pointer mt-6 md:mt-0 group"
            >
              <span className="tracking-tight text-base">Explore All Projects</span>
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
            {investmentCards.map((card, index) => (
              <motion.div 
                key={card.id || index}
                variants={simpleFadeUp}
                whileHover={{ y: -10 }}
                className="bg-[#1c1c1e] rounded-[28px] overflow-hidden border border-[#2d2d30] transition-all duration-500 hover:border-[#444] shadow-[0_20px_50px_rgba(0,0,0,0.4)] group w-full"
              >
                <div className="block w-full h-full relative">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40 border-b border-[#2d2d30]">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-85 z-10" />
                  </div>
                  <div className="p-6 relative z-30">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0071e3] block mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-lg text-white font-medium tracking-tight transition-colors duration-300 line-clamp-1 mb-5">
                      {card.title}
                    </h3>
                    <div className="grid grid-cols-3 gap-3 border-t border-[#2d2d30] pt-4 text-[#86868b]">
                      {card.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-xs font-semibold text-white tracking-tight leading-tight">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}