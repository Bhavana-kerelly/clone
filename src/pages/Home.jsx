import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Check, ArrowRight, Compass, Home as HomeIcon, ShieldCheck, Building2, TrendingUp, Users } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Featured Properties list
  const featuredIds = [
    'kvs-meadows-tirupati',
    'kvs-green-county',
    'kvs-serenity-villas',
    'kvs-emerald-enclave',
    'kvs-royal-gardens',
    'kvs-heritage-greens',
    'kvs-noida-heights',
    'kvs-gurugram-elite'
  ];

  const featuredProperties = Object.values(propertiesData).filter(p => featuredIds.includes(p.id));

  // Testimonials
  const testimonials = [
    { text: "KVS Infra made the entire plot booking process transparent and simple. From site visit to registration, every step was handled with real professionalism.", author: "R.S.", image: "/images/client_rs.png" },
    { text: "We invested in KVS Meadows two years ago and the appreciation has been remarkable. The layout, roads, and drainage were exactly as promised.", author: "V.K.", image: "/images/client_vk.png" },
    { text: "The team's honesty about titles and documentation gave us complete confidence to buy our first plot in Tirupati.", author: "P.N.", image: "/images/client_pn.png" },
    { text: "From the initial consultation to the final registration, KVS Infra supported us at every stage of buying our villa.", author: "A.R.", image: "/images/client_ar.png" },
    { text: "KVS Infra's Chandragiri layout is beautifully planned. The open spaces and infrastructure quality are far above what we expected for the price.", author: "S.M.", image: "/images/client_sm.png" }
  ];

  useEffect(() => {
    document.title = "KVS Infra | Shaping Land. Creating Value.";
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result-sales?location=${searchLocation}&beds=${searchBeds}&price=${searchPrice}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="bg-[#07090E] text-[#F5F5F7] font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO CANVAS */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-28 pb-20 overflow-hidden">
        {/* Apple Atmospheric Space Backing */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/hero-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-100 animate-[apple-scale_30s_cubic-bezier(0.25,1,0.5,1)_infinite] opacity-40 filter brightness-90"
          />
          {/* Depth Scrims */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/80 via-transparent to-[#07090E]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-transparent to-[#07090E] opacity-60"></div>
          {/* Radial Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[140px] pointer-events-none"></div>
        </div>

        {/* Hero Interactive Deck */}
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 transform opacity-0 animate-[apple-fade-up_0.8s_0.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse"></span>
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-sage">
              KVS Infra
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-light tracking-tight leading-[1.05] mb-8 max-w-5xl opacity-0 animate-[apple-fade-up_1s_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Shaping land <br />
            <span className="font-serif italic font-normal text-sage font-cursive block sm:inline mt-2 sm:mt-0">creating value</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/60 max-w-2xl font-light leading-relaxed mb-16 px-4 opacity-0 animate-[apple-fade-up_1s_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            KVS Infra is a real estate development company specializing in residential projects, strategic land banking, land aggregation, and premium plotted communities. Since 2019, we have been creating long-term value through carefully planned developments, with a footprint expanding from Tirupati to Hyderabad, Chennai, and Bangalore.
          </p>

        </div>
      </section>

      {/* 2. SHOWCASE EXHIBITION ("Luxury Lives Here") */}
<section className="py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative z-20 overflow-hidden">
  
  {/* Header: Cinematic Reveal with Text Mask Tracking */}
  <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12 relative group/header">
    <div className="flex-1 max-w-xl text-left flex flex-col justify-center">
      <h2 className="text-6xl md:text-[5.5rem] font-light tracking-tight text-white mb-0 leading-[1.1]">
        Land Becomes
      </h2>
      <h2 className="text-6xl md:text-[6.5rem] font-serif italic font-normal text-sage font-cursive mb-8 leading-[1.1]">
        Legacy
      </h2>
      <p className="text-base md:text-lg text-white/80 max-w-md font-light leading-relaxed">
        We transform strategically located land into planned communities and investment opportunities, delivering <span className="text-sage font-medium">sustainable growth</span> and <span className="text-sage font-medium">lasting value</span> for generations.
      </p>
    </div>

    <div className="flex-1 w-full lg:max-w-[700px] relative">
      <div className="relative w-full h-[400px] md:h-[420px] rounded-[1.5rem] overflow-hidden border border-white/[0.05]">
        <img 
          src="/images/kvs/hero.jpg" 
          alt="Legacy Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14] via-[#0D0F14]/60 to-transparent"></div>
        
        <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-[240px] md:w-[260px] bg-[#141414]/60 backdrop-blur-md border border-white/[0.08] rounded-[2rem] flex flex-col">
          <div className="flex items-center gap-4 px-5 py-6 border-b border-white/[0.08]">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-white">
              <Building2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <span className="text-sm md:text-[15px] text-white font-light leading-tight">Strategic<br />Locations</span>
          </div>
          <div className="flex items-center gap-4 px-5 py-6 border-b border-white/[0.08]">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-white">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <span className="text-sm md:text-[15px] text-white font-light leading-tight">Sustainable<br />Growth</span>
          </div>
          <div className="flex items-center gap-4 px-5 py-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-white">
              <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </div>
            <span className="text-sm md:text-[15px] text-white font-light leading-tight">Lasting Value<br />for Generations</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Fluid Apple Spatial Canvas Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {featuredProperties.map((property, index) => (
      <div 
        key={property.id} 
        className="group relative h-[560px] rounded-[2.8rem] bg-[#0B0F19] overflow-hidden border border-white/[0.04] transition-all duration-[1000ms] cubic-bezier(0.16,1,0.3,1) hover:scale-[1.015] hover:border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.6)] cursor-pointer"
        style={{ 
          perspective: '1200px',
          animation: `apple-slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms both`
        }}
      >
        {/* Layer 1: Parallax Deep Background Image Asset */}
        <div className="absolute inset-0 z-0 origin-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:rotate-[0.5deg]">
          <img 
            src={property.image || "/images/kvs/hero.jpg"} 
            alt={property.title} 
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
          />
          {/* Layered Reactive Atmospheric Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-black/20 to-black/30 transition-all duration-700 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-100 group-hover:from-black/70 transition-all duration-700"></div>
        </div>

        {/* Layer 2: Floating UI Badges (Animate downward on card entry) */}
        <div className="absolute top-8 inset-x-8 z-20 flex items-center justify-between pointer-events-none">
          <span className="px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.18em] uppercase text-white bg-black/30 backdrop-blur-xl border border-white/[0.06] transition-all duration-500 transform group-hover:translate-y-[-2px] group-hover:bg-black/50">
            {property.location || "Tirupati"}
          </span>
          {property.beds && (
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.15em] text-sage bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
              <span className="w-1 h-1 rounded-full bg-sage group-hover:bg-white transition-colors"></span>
              <span>{property.beds} BHK</span>
            </div>
          )}
        </div>

        {/* Layer 3: Kinetic Content Interface Terminal */}
        <div className="absolute inset-x-8 bottom-8 z-20 text-left flex flex-col justify-end pointer-events-auto">
          
          {/* Accent Line Indicator */}
          <div className="w-6 h-[2px] bg-sage mb-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-16 group-hover:bg-white"></div>
          
          <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-sage mb-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
            Featured Development
          </span>
          
          {/* Title Fluid Shift */}
          <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight text-white mb-4 max-w-xs leading-[1.2] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
            {property.name}
          </h3>

          {/* Value and Mechanical Interaction Grid Box */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-5 mt-2 relative">
            
            {/* Sliding Value Metrics */}
            <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              <span className="block text-[8px] uppercase font-bold tracking-[0.3em] text-white/30 mb-1">Starting Price</span>
              <span className="text-xl font-light text-white tracking-wide">
                {property.price ? property.price : "Price Upon Request"}
              </span>
            </div>

            {/* The Cinematic "Wow-factor" Action Terminal Circle */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-[#07090E] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              {/* Outer Micro-Orbit Ring */}
              <div className="absolute inset-[-4px] rounded-full border border-white/0 group-hover:border-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          </div>
        </div>

        {/* Layer 4: Interactive Specular Shimmer Layer (Flashes across the card on hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"></div>
        
        {/* Border Overlay Shield */}
        <div className="absolute inset-0 rounded-[2.8rem] border border-white/0 group-hover:border-white/[0.08] transition-all duration-700 pointer-events-none z-40"></div>
      </div>
    ))}
  </div>


  {/* Extra Engine Configurations */}
  <style>{`
    @keyframes apple-slide-up {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer-text {
      0% { bg-position: 0% 50%; }
      50% { bg-position: 100% 50%; }
      100% { bg-position: 0% 50%; }
    }
  `}</style>
</section>

      {/* 3. ASYMMETRIC BENTO GRID SPLITS */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Left: For Buyers */}
          <div className="lg:col-span-7 relative min-h-[640px] flex items-end p-8 md:p-16 overflow-hidden group rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] shadow-2xl">
            {/* Asset Engine */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/kvs/aerial-1.jpg" 
                alt="KVS Infra land development corridor in Tirupati" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-xl text-left">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-sage">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-sage mb-3 block">Investment Guide</span>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-5">
                Growth <span className="font-serif italic font-normal text-sage font-cursive">Opportunities</span>
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-8 max-w-md">
                Discover strategically selected land opportunities designed for long-term appreciation, transparent planning, and sustainable investment growth.
              </p>
              <Link 
                to="/for-buyers" 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-sage transition-colors duration-300 cursor-pointer"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Right: About Barbados */}
          <div className="lg:col-span-5 relative min-h-[640px] flex items-end p-8 md:p-16 overflow-hidden group rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] shadow-2xl">
            {/* Asset Engine */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/kvs/aerial-2.jpg" 
                alt="KVS Infra project planning and infrastructure view" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-md text-left">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-sage">
                <HomeIcon className="w-5 h-5" />
              </div>
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-sage mb-3 block">Development Model</span>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-5">
                Our <span className="font-serif italic font-normal text-sage font-cursive">Development Strategy</span>
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-8">
                From strategic land acquisition to master-planned layouts, our development model is built to unlock value through disciplined planning and future-ready infrastructure.
              </p>
              <Link 
                to="/about-barbados" 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-sage transition-colors duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THEATER SCRIM TESTIMONIAL STAGE */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#07090E] via-white/[0.01] to-[#07090E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#1E293B]/20 rounded-full blur-[160px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-6 block">
            Client Perspectives
          </span>
          
          {/* Dynamic Window Engine */}
          <div className="min-h-[380px] sm:min-h-[320px] flex items-center justify-center relative w-full select-none">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] absolute w-full max-w-4xl px-4 transform flex flex-col items-center ${
                  idx === activeTestimonial 
                    ? 'opacity-100 scale-100 translate-y-0 filter blur-0' 
                    : 'opacity-0 scale-[0.95] translate-y-8 filter blur-md pointer-events-none'
                }`}
              >
                {t.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-sage/40 mb-6 shadow-xl shadow-black/50 transition-all duration-700">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                )}
                <blockquote className="font-serif text-2xl sm:text-4xl italic leading-snug text-white/90 font-light tracking-wide font-cursive">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center justify-center gap-3 mt-8">
                  <span className="h-[1px] w-6 bg-sage/30"></span>
                  <cite className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage not-italic">
                    Validated Portfolio Client {t.author}
                  </cite>
                  <span className="h-[1px] w-6 bg-sage/30"></span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Track */}
          <div className="flex items-center gap-6 mt-14">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                    idx === activeTestimonial ? 'w-6 bg-white' : 'w-1 bg-white/20'
                  }`}
                ></button>
              ))}
            </div>

            <button 
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE NEWSLETTER VAULT */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto relative z-20">
        <div className="relative bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.06] rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-3xl text-center flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-4 block">
            Intelligence Network
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6 max-w-2xl leading-tight">
            Stay Updated on Our <span className="font-serif italic font-normal text-sage font-cursive block sm:inline">latest developments</span>
          </h2>
          
          {/* Subscriptions Array Input Layout */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 mb-10 relative z-10 mt-4"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              className="flex-grow bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/[0.06] transition-all placeholder:text-white/30"
            />
            <button 
              type="submit"
              className="bg-white text-[#07090E] hover:bg-sage font-semibold text-sm px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer shadow-lg"
            >
              {subscribed ? (
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Subscribed</span>
                </div>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>

          {/* Privacy Footprint */}
          <div className="flex items-start gap-3 max-w-3xl text-left border-t border-white/[0.04] pt-8">
            <ShieldCheck className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
            <p className="text-[10px] text-white/30 leading-relaxed text-justify">
              Subscribe to receive updates about upcoming layouts, investment opportunities, and project launches from KVS Infra. You may unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Cinematic Engine Keyframes Style Segment */}
      <style>{`
        @keyframes apple-scale {
          0% { transform: scale(1.01); }
          100% { transform: scale(1.08); }
        }
        @keyframes apple-fade-up {
          0% { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
}