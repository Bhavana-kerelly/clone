import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Check, ArrowRight, Compass, Home as HomeIcon, ShieldCheck } from 'lucide-react';
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
    'aspire-barbados-luxury-beachfront-condos',
    'vistara-edge',
    'vistara-lush',
    'vistara-serenity',
    'vistara-oasis',
    'sandalo',
    'porters-place-6',
    'schooner-bay-303'
  ];

  const featuredProperties = Object.values(propertiesData).filter(p => featuredIds.includes(p.id));

  // Testimonials
  const testimonials = [
    { text: "Dear Sean,…I want to thank you from the bottom of my heart for all your time, patience, good advice, and company, you really made a dreary task quite an enjoyable experience.", author: "MR" },
    { text: "Sean...I want to thank you personally and on behalf of my family for all you have done for us. You have really been perfect for us in helping our transition into a property in the UK.", author: "CB" },
    { text: "Thank you Sean - your integrity and professionalism have assisted greatly in securing the sale.", author: "KC" },
    { text: "Thank you Sean. F and I could not have hoped to find a property consultant that could have assisted us more with this whole process.", author: "DM" },
    { text: "...All of this happened only because of the professionality, seriousness and honest approach Sean has manifested. He has always effortlessly gone into supporting us with info and facts and delivering on every promise made.", author: "DB" }
  ];

  useEffect(() => {
    document.title = "Luxury Real Estate in Barbados | Stewart & Co Real Estate";
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
          <img 
            src="https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg" 
            alt="Real estate house hero image" 
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
              Stewart &amp; Co Real Estate
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-light tracking-tight leading-[1.05] mb-8 max-w-5xl opacity-0 animate-[apple-fade-up_1s_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Selling luxury property <br />
            <span className="font-serif italic font-normal text-sage font-cursive block sm:inline mt-2 sm:mt-0">in Barbados</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/60 max-w-2xl font-light leading-relaxed mb-16 px-4 opacity-0 animate-[apple-fade-up_1s_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            With over 25 years in the industry, Stewart &amp; Co Real Estate has a wealth of knowledge and experience in Barbados' luxury real estate market. We help clients buy and sell properties with exceptional dedication and expertise.
          </p>

          {/* Search Engine Dock */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-5xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl rounded-[2.5rem] p-3 md:p-4 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 items-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] opacity-0 animate-[apple-fade-up_1.2s_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          >
            {/* Field Block: Location */}
            <div 
              className={`p-4 rounded-[1.8rem] text-left transition-all duration-300 cursor-pointer ${focusedField === 'location' ? 'bg-white/[0.07] shadow-inner' : 'hover:bg-white/[0.03]'}`}
              onClick={() => setFocusedField('location')}
            >
              <span className="block text-[9px] uppercase font-bold tracking-widest text-white/40 mb-1.5">Parish Selection</span>
              <div className="relative">
                <select 
                  value={searchLocation} 
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onFocus={() => setFocusedField('location')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-none p-0 text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer pr-6"
                >
                  <option value="" className="bg-[#0F121D]">Any Location</option>
                  <option value="St. James" className="bg-[#0F121D]">St. James</option>
                  <option value="St. Peter" className="bg-[#0F121D]">St. Peter</option>
                  <option value="Christ Church" className="bg-[#0F121D]">Christ Church</option>
                  <option value="Sandy Lane" className="bg-[#0F121D]">Sandy Lane Estate</option>
                </select>
                <ChevronRight className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-white/30 pointer-events-none" />
              </div>
            </div>

            {/* Field Block: Beds */}
            <div 
              className={`p-4 rounded-[1.8rem] text-left transition-all duration-300 cursor-pointer ${focusedField === 'beds' ? 'bg-white/[0.07] shadow-inner' : 'hover:bg-white/[0.03]'}`}
              onClick={() => setFocusedField('beds')}
            >
              <span className="block text-[9px] uppercase font-bold tracking-widest text-white/40 mb-1.5">Configured Beds</span>
              <div className="relative">
                <select 
                  value={searchBeds} 
                  onChange={(e) => setSearchBeds(e.target.value)}
                  onFocus={() => setFocusedField('beds')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-none p-0 text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer pr-6"
                >
                  <option value="" className="bg-[#0F121D]">Any Bedrooms</option>
                  <option value="3" className="bg-[#0F121D]">3+ Beds</option>
                  <option value="4" className="bg-[#0F121D]">4+ Beds</option>
                  <option value="5" className="bg-[#0F121D]">5+ Beds</option>
                </select>
                <ChevronRight className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-white/30 pointer-events-none" />
              </div>
            </div>

            {/* Field Block: Max Price */}
            <div 
              className={`p-4 rounded-[1.8rem] text-left transition-all duration-300 cursor-pointer ${focusedField === 'price' ? 'bg-white/[0.07] shadow-inner' : 'hover:bg-white/[0.03]'}`}
              onClick={() => setFocusedField('price')}
            >
              <span className="block text-[9px] uppercase font-bold tracking-widest text-white/40 mb-1.5">Valuation Ceiling</span>
              <div className="relative">
                <select 
                  value={searchPrice} 
                  onChange={(e) => setSearchPrice(e.target.value)}
                  onFocus={() => setFocusedField('price')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-none p-0 text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer pr-6"
                >
                  <option value="" className="bg-[#0F121D]">Any Price</option>
                  <option value="2000000" className="bg-[#0F121D]">Under USD $2.0M</option>
                  <option value="4000000" className="bg-[#0F121D]">Under USD $4.0M</option>
                  <option value="8000000" className="bg-[#0F121D]">Under USD $8.0M</option>
                </select>
                <ChevronRight className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-white/30 pointer-events-none" />
              </div>
            </div>

            {/* Action Execution Core */}
            <div className="p-2">
              <button 
                type="submit" 
                className="w-full bg-white text-[#07090E] rounded-[1.5rem] py-4 px-6 font-medium flex items-center justify-center gap-3 hover:bg-sage hover:text-[#07090E] transition-all duration-500 shadow-md active:scale-[0.98] cursor-pointer text-sm font-semibold tracking-wide"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search Showcase</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. SHOWCASE EXHIBITION ("Luxury Lives Here") */}
<section className="py-36 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative z-20">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/[0.06] pb-12">
    <div className="max-w-2xl text-left">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3 block">
        Curated Masterpieces
      </span>
      <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-0">
        Luxury Lives <span className="font-serif italic font-normal text-sage font-cursive">Here</span>
      </h2>
    </div>
    <p className="text-sm md:text-base text-white/50 max-w-md font-light leading-relaxed mt-6 md:mt-0">
      Explore our collection of the finest villas, beachfront apartments, and private luxury residential estates on Barbados' Platinum Coast.
    </p>
  </div>

  {/* Fluid Apple-Bento Display Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {featuredProperties.map((property, index) => (
      <div 
        key={property.id} 
        className="group relative h-[520px] rounded-[2.5rem] bg-[#121620] border border-white/[0.06] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] cursor-pointer"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Immersive Background Asset Engine */}
        <div className="absolute inset-0 z-0">
          <img 
            src={property.image || "https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg"} 
            alt={property.title} 
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          {/* Layered cinematic protection scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Floating Top Header Badges */}
        <div className="absolute top-6 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-wider uppercase text-white bg-black/20 backdrop-blur-md border border-white/[0.08]">
            {property.location || "St. James"}
          </span>
          {property.beds && (
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-medium tracking-wider text-sage bg-white/[0.06] backdrop-blur-md border border-white/[0.08]">
              {property.beds} Bedrooms
            </span>
          )}
        </div>

        {/* Content Panel Terminal */}
        <div className="absolute inset-x-6 bottom-6 z-20 text-left flex flex-col justify-end">
          {/* Subtle Accent Script Row */}
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-sage mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
            Exclusive Listing
          </span>
          
          {/* Main Title Block */}
          <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-3 max-w-xs leading-tight transition-transform duration-500 group-hover:-translate-y-1">
            {property.title}
          </h3>

          {/* Value and Arrow Interactive Tray */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2 overflow-hidden">
            <div className="transform translate-y-0 transition-transform duration-500">
              <span className="block text-[9px] uppercase font-bold tracking-widest text-white/40 mb-0.5">Investment Value</span>
              <span className="text-lg font-medium text-white tracking-wide">
                {property.price ? `USD $${property.price}` : "Price Upon Request"}
              </span>
            </div>

            {/* Micro-Interaction Button */}
            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white border border-white/10 group-hover:border-transparent flex items-center justify-center text-white group-hover:text-[#07090E] transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md">
              <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Peripheral Shimmer Shield */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-white/[0.08] transition-all duration-500 pointer-events-none z-30"></div>
      </div>
    ))}
  </div>

  {/* View All Terminal Button */}
  <div className="flex justify-center mt-28">
    <Link 
      to="/search-result-sales" 
      className="group inline-flex items-center gap-3 px-10 py-5 bg-white/[0.02] hover:bg-white text-white hover:text-[#07090E] border border-white/10 rounded-full font-medium tracking-wide text-xs uppercase transition-all duration-500 shadow-xl cursor-pointer"
    >
      <span>Explore All Listings</span>
      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
    </Link>
  </div>
</section>

      {/* 3. ASYMMETRIC BENTO GRID SPLITS */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bento Left: For Buyers */}
          <div className="lg:col-span-7 relative min-h-[640px] flex items-end p-8 md:p-16 overflow-hidden group rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] shadow-2xl">
            {/* Asset Engine */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://framerusercontent.com/images/L6RthZY2p5GiyPwLyRpf5Iuohs.jpg" 
                alt="Barbados beach coastline" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-xl text-left">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-sage">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-sage mb-3 block">Resource Guide</span>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-5">
                For <span className="font-serif italic font-normal text-sage font-cursive">Buyers</span>
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-8 max-w-md">
                Discover the ultimate guide to buying property in Barbados. We will support you through legal details, procedures, and taxes.
              </p>
              <Link 
                to="/for-buyers" 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-sage transition-colors duration-300 cursor-pointer"
              >
                <span>Discover Guide</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Right: About Barbados */}
          <div className="lg:col-span-5 relative min-h-[640px] flex items-end p-8 md:p-16 overflow-hidden group rounded-[2.5rem] bg-white/[0.01] border border-white/[0.06] shadow-2xl">
            {/* Asset Engine */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://framerusercontent.com/images/l6CrVcBPyfR6P0JJBqJ1EMLdw4.jpg" 
                alt="Barbados guide view" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-md text-left">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-sage">
                <HomeIcon className="w-5 h-5" />
              </div>
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-sage mb-3 block">Island Lifestyle</span>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-5">
                About <span className="font-serif italic font-normal text-sage font-cursive">Barbados</span>
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-8">
                Learn everything you ever wanted to know about living, playing, dining, and building homes in the tropical paradise of Barbados.
              </p>
              <Link 
                to="/about-barbados" 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-sage transition-colors duration-300 cursor-pointer"
              >
                <span>Explore Island</span>
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
          <div className="min-h-[280px] sm:min-h-[220px] flex items-center justify-center relative w-full select-none">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] absolute w-full max-w-4xl px-4 transform ${
                  idx === activeTestimonial 
                    ? 'opacity-100 scale-100 translate-y-0 filter blur-0' 
                    : 'opacity-0 scale-[0.95] translate-y-8 filter blur-md pointer-events-none'
                }`}
              >
                <blockquote className="font-serif text-2xl sm:text-4xl italic leading-snug text-white/90 font-light tracking-wide font-cursive">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center justify-center gap-3 mt-10">
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
            Keep yourself updated on the latest luxury <span className="font-serif italic font-normal text-sage font-cursive block sm:inline">property available</span>
          </h2>
          
          {/* Subscriptions Array Input Layout */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 mb-10 relative z-10 mt-4"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your private email address"
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
                <span>Access Network</span>
              )}
            </button>
          </form>

          {/* Privacy Footprint */}
          <div className="flex items-start gap-3 max-w-3xl text-left border-t border-white/[0.04] pt-8">
            <ShieldCheck className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
            <p className="text-[10px] text-white/30 leading-relaxed text-justify">
              By providing Stewart &amp; Co your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. Message and data rates may apply.
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