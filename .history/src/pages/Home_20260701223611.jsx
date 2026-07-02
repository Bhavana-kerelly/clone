import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Featured Properties list (as identified in live site)
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

  // Auto rotate testimonials & set page title
  useEffect(() => {
    document.title = "Luxury Real Estate in Barbados | Stewart & Co Real Estate";
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
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
    <div className="bg-cream">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-white px-6 md:px-12 py-24 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-dark-blue">
          <img 
            src="https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg" 
            alt="Real estate house hero image" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/40 via-dark-blue/35 to-[#f4efeb]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-8">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sage mb-4 animate-fade-in">
            Stewart &amp; Co Real Estate
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide leading-[1.1] mb-6 drop-shadow-sm max-w-4xl">
            Selling luxury property in Barbados
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed mb-12 opacity-95">
            With over 25 years in the industry, Stewart &amp; Co Real Estate has a wealth of knowledge and experience in Barbados' luxury real estate market. We help clients buy and sell properties with exceptional dedication and expertise.
          </p>

          {/* Search Box Widget */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-4xl bg-cream/90 backdrop-blur-md rounded-lg shadow-2xl p-4 md:p-6 text-dark-blue grid grid-cols-1 md:grid-cols-4 gap-4 items-end mt-4 border border-white/20"
          >
            {/* Parish Filter */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/60 mb-2">Location / Parish</label>
              <select 
                value={searchLocation} 
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-white/70 border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Location</option>
                <option value="St. James">St. James</option>
                <option value="St. Peter">St. Peter</option>
                <option value="Christ Church">Christ Church</option>
                <option value="Sandy Lane">Sandy Lane Estate</option>
              </select>
            </div>

            {/* Beds Filter */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/60 mb-2">Min Bedrooms</label>
              <select 
                value={searchBeds} 
                onChange={(e) => setSearchBeds(e.target.value)}
                className="w-full bg-white/70 border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Bedrooms</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
              </select>
            </div>

            {/* Price Max Filter */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/60 mb-2">Max Price</label>
              <select 
                value={searchPrice} 
                onChange={(e) => setSearchPrice(e.target.value)}
                className="w-full bg-white/70 border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Price</option>
                <option value="2000000">Under USD $2.0M</option>
                <option value="4000000">Under USD $4.0M</option>
                <option value="8000000">Under USD $8.0M</option>
              </select>
            </div>

            {/* Search Button */}
            <button 
              type="submit" 
              className="w-full bg-dark-blue text-white rounded py-2 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-sage hover:text-dark-blue transition-colors duration-300 shadow cursor-pointer text-sm"
            >
              <Search className="w-4 h-4" />
              <span>Search Properties</span>
            </button>
          </form>
        </div>
      </section>

      {/* 2. FEATURED LISTINGS SECTION ("Luxury Lives Here") */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Curated Listings
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-dark-blue mb-4">
            Luxury Lives Here
          </h2>
          <div className="w-20 h-0.5 bg-sage mb-6"></div>
          <p className="text-sm text-dark-blue/70 max-w-2xl leading-relaxed">
            Explore our collection of the finest villas, beachfront apartments, and private luxury residential estates on Barbados' Platinum Coast.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link 
            to="/search-result-sales" 
            className="border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white rounded py-3 px-8 font-semibold tracking-wider text-xs uppercase transition-all duration-300 cursor-pointer"
          >
            Explore All Listings
          </Link>
        </div>
      </section>

      {/* 3. GUIDE SEGMENT SPLITS ("For Buyers" & "About Barbados") */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
          {/* Split Left: For Buyers */}
          <div className="relative min-h-[550px] flex items-center justify-center text-white p-12 overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0 bg-dark-blue z-0">
              <img 
                src="https://framerusercontent.com/images/L6RthZY2p5GiyPwLyRpf5Iuohs.jpg" 
                alt="Barbados beach coastline" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-blue/30"></div>
            </div>
            <div className="relative z-10 max-w-md text-center flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sage mb-3">Resource Guide</span>
              <h2 className="font-display text-4xl font-bold tracking-wide mb-4">For Buyers</h2>
              <p className="text-sm text-white/95 leading-relaxed mb-8">
                Discover the ultimate guide to buying property in Barbados. We will support you through legal details, procedures, and taxes.
              </p>
              <Link 
                to="/for-buyers" 
                className="bg-cream text-dark-blue hover:bg-sage transition-colors duration-300 font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider cursor-pointer"
              >
                Discover Guide
              </Link>
            </div>
          </div>

          {/* Split Right: About Barbados */}
          <div className="relative min-h-[550px] flex items-center justify-center text-white p-12 overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0 bg-dark-blue z-0">
              <img 
                src="https://framerusercontent.com/images/l6CrVcBPyfR6P0JJBqJ1EMLdw4.jpg" 
                alt="Barbados guide view" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-blue/30"></div>
            </div>
            <div className="relative z-10 max-w-md text-center flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sage mb-3">Island Lifestyle</span>
              <h2 className="font-display text-4xl font-bold tracking-wide mb-4">About Barbados</h2>
              <p className="text-sm text-white/95 leading-relaxed mb-8">
                Learn everything you ever wanted to know about living, playing, dining, and building homes in the tropical paradise of Barbados.
              </p>
              <Link 
                to="/about-barbados" 
                className="bg-cream text-dark-blue hover:bg-sage transition-colors duration-300 font-semibold px-8 py-3 rounded text-xs uppercase tracking-wider cursor-pointer"
              >
                Explore Island
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SLIDER SECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#2e415705] border-y border-dark-blue/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-4">
            Testimonials
          </span>
          <div className="w-10 h-0.5 bg-sage mb-8"></div>

          {/* Slider Container */}
          <div className="min-h-[220px] flex items-center justify-center px-4 relative">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-700 ease-in-out absolute w-full ${
                  idx === activeTestimonial ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 pointer-events-none translate-x-4'
                }`}
              >
                <blockquote className="font-display text-lg sm:text-2xl italic leading-relaxed text-dark-blue font-light">
                  {t.text}
                </blockquote>
                <cite className="block text-xs uppercase tracking-[0.3em] font-semibold mt-6 text-sage not-italic">
                  &mdash; Client {t.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none ${
                  idx === activeTestimonial ? 'w-6 bg-dark-blue' : 'bg-dark-blue/20'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP SECTION */}
      <section className="py-24 px-6 md:px-12 bg-cream">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-3">
            Stay Informed
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-wide text-dark-blue mb-4 max-w-xl leading-tight">
            Keep yourself updated on the latest luxury property available
          </h2>
          <div className="w-12 h-0.5 bg-sage mb-8"></div>

          {/* Signup form */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              className="flex-grow bg-white border border-dark-blue/10 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
            />
            <button 
              type="submit"
              className="bg-dark-blue text-white hover:bg-sage hover:text-dark-blue font-semibold text-sm px-8 py-3 rounded transition-colors duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Subscribed</span>
                </>
              ) : (
                <span>Sign up</span>
              )}
            </button>
          </form>

          {/* Terms text */}
          <p className="text-[10px] text-dark-blue/40 leading-relaxed max-w-2xl text-justify">
            By providing Stewart&amp;Co your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. Message and data rates may apply.
          </p>
        </div>
      </section>
    </div>
  );
}
