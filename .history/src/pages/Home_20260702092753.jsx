import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Check, ArrowUpRight } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Auto rotate testimonials, set page title & handle scroll tracking
  useEffect(() => {
    document.title = "Luxury Real Estate in Barbados | Stewart & Co Real Estate";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // Slightly prolonged for premium readability

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
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
    <div className="bg-[#FAF8F5] font-sans antialiased selection:bg-dark-blue/10 selection:text-dark-blue overflow-x-hidden">
      
      {/* 1. HERO SECTION (Apple Cinema-inspired Viewport) */}
      <section className="relative min-h-[98vh] flex items-center justify-center text-white px-4 sm:px-6 md:px-12 py-24 overflow-hidden">
        {/* Cinematic Asset Container */}
        <div className="absolute inset-0 z-0 bg-[#0F172A]">
          <img 
            src="https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg" 
            alt="Real estate house hero image" 
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_ease-out_infinite_alternate] opacity-80"
          />
          {/* Multi-layered atmospheric vignette scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-dark-blue/40 to-dark-blue/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FAF8F5]"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-6 px-2">
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-sage/90 mb-4 inline-block translate-y-4 animate-[fade-in-up_0.8s_ease-out_forwards]">
            Stewart &amp; Co Real Estate
          </span>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-[5.5rem] font-light tracking-tight leading-[1.05] mb-6 max-w-4xl opacity-0 translate-y-8 animate-[fade-in-up_1s_0.2s_ease-out_forwards]">
            Selling luxury property <br className="hidden md:inline" />
            <span className="font-serif italic font-normal text-sage block md:inline mt-2 md:mt-0 font-cursive tracking-normal">in Barbados</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-14 px-4 opacity-0 translate-y-8 animate-[fade-in-up_1s_0.4s_ease-out_forwards]">
            With over 25 years in the industry, Stewart &amp; Co Real Estate has a wealth of knowledge and experience in Barbados' luxury real estate market. We help clients buy and sell properties with exceptional dedication and expertise.
          </p>

          {/* Search Box Widget (Apple Modular Glass Card) */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-4xl bg-[#FAF8F5]/80 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] p-4 md:p-6 text-dark-blue grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end mt-2 border border-white/40 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] opacity-0 translate-y-8 animate-[fade-in-up_1s_0.6s_ease-out_forwards]"
          >
            {/* Parish Filter */}
            <div className="flex flex-col text-left group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-dark-blue/50 mb-2 pl-1 transition-colors group-hover:text-dark-blue">Location / Parish</label>
              <div className="relative">
                <select 
                  value={searchLocation} 
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-md border border-dark-blue/5 rounded-2xl px-4 py-3 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <option value="">Any Location</option>
                  <option value="St. James">St. James</option>
                  <option value="St. Peter">St. Peter</option>
                  <option value="Christ Church">Christ Church</option>
                  <option value="Sandy Lane">Sandy Lane Estate</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-blue/40 text-xs">▼</div>
              </div>
            </div>

            {/* Beds Filter */}
            <div className="flex flex-col text-left group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-dark-blue/50 mb-2 pl-1 transition-colors group-hover:text-dark-blue">Min Bedrooms</label>
              <div className="relative">
                <select 
                  value={searchBeds} 
                  onChange={(e) => setSearchBeds(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-md border border-dark-blue/5 rounded-2xl px-4 py-3 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <option value="">Any Bedrooms</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-blue/40 text-xs">▼</div>
              </div>
            </div>

            {/* Price Max Filter */}
            <div className="flex flex-col text-left group">
              <label className="text-[10px] uppercase font-bold tracking-widest text-dark-blue/50 mb-2 pl-1 transition-colors group-hover:text-dark-blue">Max Price</label>
              <div className="relative">
                <select 
                  value={searchPrice} 
                  onChange={(e) => setSearchPrice(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-md border border-dark-blue/5 rounded-2xl px-4 py-3 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <option value="">Any Price</option>
                  <option value="2000000">Under USD $2.0M</option>
                  <option value="4000000">Under USD $4.0M</option>
                  <option value="8000000">Under USD $8.0M</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-blue/40 text-xs">▼</div>
              </div>
            </div>

            {/* Search Button */}
            <button 
              type="submit" 
              className="w-full bg-[#1C2D42] text-white rounded-2xl py-3 px-6 font-medium flex items-center justify-center gap-2 hover:bg-[#2C3E55] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(28,45,66,0.15)] cursor-pointer text-sm tracking-wide"
            >
              <Search className="w-4 h-4 text-sage" />
              <span>Search Estates</span>
            </button>
          </form>
        </div>
      </section>

      {/* 2. FEATURED LISTINGS SECTION ("Luxury Lives Here") */}
      <section className="py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            Curated Listings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-dark-blue mb-4">
            Luxury Lives <span className="font-serif italic font-normal text-sage font-cursive">Here</span>
          </h2>
          <div className="w-12 h-[1px] bg-dark-blue/10 mb-6"></div>
          <p className="text-base text-dark-blue/60 max-w-xl font-light leading-relaxed">
            Explore our collection of the finest villas, beachfront apartments, and private luxury residential estates on Barbados' Platinum Coast.
          </p>
        </div>

        {/* Listings Grid with Custom Hover Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProperties.map(property => (
            <div key={property.id} className="transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-20">
          <Link 
            to="/search-result-sales" 
            className="group flex items-center gap-2 border border-dark-blue/20 bg-white text-dark-blue hover:bg-dark-blue hover:text-white rounded-full py-4 px-10 font-medium tracking-wide text-xs uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Explore All Listings</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. GUIDE SEGMENT SPLITS ("For Buyers" & "About Barbados") */}
      <section className="py-6 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl overflow-hidden">
          {/* Split Left: For Buyers */}
          <div className="relative min-h-[600px] flex items-center justify-center text-white p-8 md:p-16 overflow-hidden group rounded-3xl shadow-sm">
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-[#0F172A] z-0">
              <img 
                src="https://framerusercontent.com/images/L6RthZY2p5GiyPwLyRpf5Iuohs.jpg" 
                alt="Barbados beach coastline" 
                className="w-full h-full object-cover opacity-65 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/30 to-black/20"></div>
            </div>
            
            <div className="relative z-10 max-w-md text-center flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-sage/90 mb-4">Resource Guide</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-5">
                For <span className="font-serif italic font-normal text-sage font-cursive">Buyers</span>
              </h2>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-10">
                Discover the ultimate guide to buying property in Barbados. We will support you through legal details, procedures, and taxes.
              </p>
              <Link 
                to="/for-buyers" 
                className="bg-white/95 backdrop-blur-md text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300 font-medium px-8 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer"
              >
                Discover Guide
              </Link>
            </div>
          </div>

          {/* Split Right: About Barbados */}
          <div className="relative min-h-[600px] flex items-center justify-center text-white p-8 md:p-16 overflow-hidden group rounded-3xl shadow-sm">
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-[#0F172A] z-0">
              <img 
                src="https://framerusercontent.com/images/l6CrVcBPyfR6P0JJBqJ1EMLdw4.jpg" 
                alt="Barbados guide view" 
                className="w-full h-full object-cover opacity-65 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/30 to-black/20"></div>
            </div>
            
            <div className="relative z-10 max-w-md text-center flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-sage/90 mb-4">Island Lifestyle</span>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-5">
                About <span className="font-serif italic font-normal text-sage font-cursive">Barbados</span>
              </h2>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-10">
                Learn everything you ever wanted to know about living, playing, dining, and building homes in the tropical paradise of Barbados.
              </p>
              <Link 
                to="/about-barbados" 
                className="bg-white/95 backdrop-blur-md text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300 font-medium px-8 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-md active:scale-95 cursor-pointer"
              >
                Explore Island
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SLIDER SECTION (Immersive Editorial Stage) */}
      <section className="py-36 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#FAF8F5] via-[#2e4157]/05 to-[#FAF8F5] border-y border-dark-blue/[0.03]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage mb-4">
            Testimonials
          </span>
          <div className="w-12 h-[1px] bg-dark-blue/10 mb-12"></div>

          {/* Slider Container */}
          <div className="min-h-[260px] sm:min-h-[200px] flex items-center justify-center px-2 relative w-full">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-1000 ease-in-out absolute w-full px-4 transform ${
                  idx === activeTestimonial 
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 scale-[0.97] -translate-y-4 pointer-events-none'
                }`}
              >
                <blockquote className="font-serif text-xl sm:text-3xl italic leading-relaxed text-dark-blue/90 font-light tracking-wide font-cursive">
                  "{t.text}"
                </blockquote>
                <cite className="block text-[11px] uppercase tracking-[0.3em] font-bold mt-8 text-sage not-italic transition-colors">
                  &mdash; Client {t.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Dots Indicator (Apple Interactive Dots) */}
          <div className="flex gap-3 mt-12 relative z-20">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none cursor-pointer ${
                  idx === activeTestimonial ? 'w-8 bg-dark-blue' : 'w-2 bg-dark-blue/15 hover:bg-dark-blue/30'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP SECTION (Premium Minimal Glass Card) */}
      <section className="py-32 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_24px_48px_-15px_rgba(0,0,0,0.04)] border border-dark-blue/[0.02] text-center flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage mb-4">
            Stay Informed
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-light tracking-tight text-dark-blue mb-5 max-w-xl leading-tight">
            Keep yourself updated on the latest luxury <span className="font-serif italic font-normal text-sage font-cursive">property available</span>
          </h2>
          <div className="w-12 h-[1px] bg-dark-blue/10 mb-10"></div>

          {/* Signup Form */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-8"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              className="flex-grow bg-[#FAF8F5] border border-dark-blue/5 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white transition-all duration-300"
            />
            <button 
              type="submit"
              className="bg-dark-blue text-white hover:bg-[#2C3E55] active:scale-[0.98] font-medium text-sm px-8 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-sm cursor-pointer"
            >
              {subscribed ? (
                <div className="flex items-center gap-2 animate-[scale-up_0.3s_ease-out]">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Subscribed</span>
                </div>
              ) : (
                <span>Sign up</span>
              )}
            </button>
          </form>

          {/* Terms text */}
          <p className="text-[10px] text-dark-blue/40 leading-relaxed max-w-2xl text-center font-light">
            By providing Stewart &amp; Co your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails. This consent isn’t necessary for purchasing any products or services and you may opt out at any time.
          </p>
        </div>
      </section>

      {/* Embedding Custom Keyframe Injector for Apple Motion effects directly onto CSS Layer */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02) translate3d(0,0,0); }
          100% { transform: scale(1.07) translate3d(0,-10px,0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-up {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        /* Elegant fallback for cursive if serif italic needs extra styling */
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
}