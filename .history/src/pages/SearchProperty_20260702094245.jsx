import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function SearchProperty() {
  const routerLocation = useLocation();
  const allProperties = Object.values(propertiesData);

  // Layout & Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParish, setSelectedParish] = useState('');
  const [selectedBeds, setSelectedBeds] = useState('');
  const [selectedBaths, setSelectedBaths] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  // Animation DOM references
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const gridRef = useRef(null);
  const tickerRef = useRef(null);

  useEffect(() => {
    document.title = "Search Luxury Properties for Sale | Stewart & Co";
    const params = new URLSearchParams(routerLocation.search);
    const loc = params.get('location');
    const b = params.get('beds');
    const p = params.get('price');
    
    if (loc) setSelectedParish(loc);
    if (b) setSelectedBeds(b);
    if (p) setSelectedPrice(p);
  }, [routerLocation]);

  // Initial Page Load Animation Sequence
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.fromTo(headerRef.current.children, 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
      )
      .fromTo(filterRef.current, 
        { y: 40, opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1 }, 
        "-=0.8"
      );

      // Endless marquee animation loop
      gsap.to(tickerRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 25,
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Soft stagger effect when the property grid matches recalculate
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.property-card-wrapper');
    if (cards.length === 0) return;

    gsap.fromTo(cards, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
    );
  }, [searchTerm, selectedParish, selectedBeds, selectedBaths, selectedPrice, visibleCount]);

  // Dynamic 3D Mouse Parallax Effect on the core filter deck
  const handleMouseMove = (e) => {
    if (!filterRef.current) return;
    const rect = filterRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(filterRef.current, {
      rotateY: x * 0.02,
      rotateX: -y * 0.03,
      transformPerspective: 1000,
      transformOrigin: "center center",
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!filterRef.current) return;
    gsap.to(filterRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  };

  // Filter properties logic
  const filteredProperties = allProperties.filter((property) => {
    const matchText = searchTerm === '' || 
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchParish = selectedParish === '' || 
      property.location.toLowerCase().includes(selectedParish.toLowerCase());

    const bedCount = parseInt(property.beds, 10) || 0;
    const matchBeds = selectedBeds === '' || bedCount >= parseInt(selectedBeds, 10);

    const bathCount = parseInt(property.baths, 10) || 0;
    const matchBaths = selectedBaths === '' || bathCount >= parseInt(selectedBaths, 10);

    const digits = property.price.replace(/[^0-9]/g, '');
    const priceNum = parseInt(digits, 10) || 0;
    const limitPrice = parseInt(selectedPrice, 10);
    const matchPrice = selectedPrice === '' || priceNum <= limitPrice;

    return matchText && matchParish && matchBeds && matchBaths && matchPrice;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedParish('');
    setSelectedBeds('');
    setSelectedBaths('');
    setSelectedPrice('');
    setVisibleCount(9);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const activeFiltersCount = 
    (searchTerm !== '' ? 1 : 0) +
    (selectedParish !== '' ? 1 : 0) +
    (selectedBeds !== '' ? 1 : 0) +
    (selectedBaths !== '' ? 1 : 0) +
    (selectedPrice !== '' ? 1 : 0);

  return (
    <div ref={containerRef} className="bg-[#0b121f] text-white min-h-screen pt-32 pb-24 relative overflow-hidden selection:bg-sage selection:text-dark-blue">
      
      {/* 3D Ambient Loop Grid Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Endless Cinematic Loop Marquee */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] z-0 select-none">
        <div ref={tickerRef} className="inline-block text-[15vw] font-black uppercase tracking-widest text-white">
          STEWART & CO. LUXURY PROPERTIES — STEWART & CO. LUXURY PROPERTIES —&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Elite Cinematic Header */}
        <div ref={headerRef} className="text-center mb-20 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4 block">
            Curated Spaces
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-light tracking-tight text-white mb-6 max-w-3xl leading-none">
            Discover Your <span className="italic font-serif font-normal text-[#c4a468]">Legacy</span> Home
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent"></div>
        </div>

        {/* Dynamic Interactive 3D Card Filter Widget */}
        <div 
          ref={filterRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-[#131c2e]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-shadow duration-300 hover:border-[#c4a468]/30"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end" style={{ transform: 'translateZ(30px)' }}>
            
            {/* Search Input */}
            <div className="flex flex-col text-left lg:col-span-1">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Search Text</label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Villas, beach, location..."
                  className="w-full bg-[#1c2638] border border-white/5 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c4a468] focus:ring-1 focus:ring-[#c4a468] transition-all duration-300"
                />
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 group-focus-within:text-[#c4a468] transition-colors" />
              </div>
            </div>

            {/* Parish Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Parish / Area</label>
              <select 
                value={selectedParish}
                onChange={(e) => setSelectedParish(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Parish</option>
                <option value="St. James" className="bg-[#131c2e]">St. James</option>
                <option value="St. Peter" className="bg-[#131c2e]">St. Peter</option>
                <option value="Christ Church" className="bg-[#131c2e]">Christ Church</option>
                <option value="Sandy Lane" className="bg-[#131c2e]">Sandy Lane Estate</option>
                <option value="Apes Hill" className="bg-[#131c2e]">Apes Hill</option>
              </select>
            </div>

            {/* Beds Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Min Bedrooms</label>
              <select 
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Beds</option>
                <option value="1" className="bg-[#131c2e]">1+ Bedrooms</option>
                <option value="2" className="bg-[#131c2e]">2+ Bedrooms</option>
                <option value="3" className="bg-[#131c2e]">3+ Bedrooms</option>
                <option value="4" className="bg-[#131c2e]">4+ Bedrooms</option>
                <option value="5" className="bg-[#131c2e]">5+ Bedrooms</option>
              </select>
            </div>

            {/* Baths Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Min Bathrooms</label>
              <select 
                value={selectedBaths}
                onChange={(e) => setSelectedBaths(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Baths</option>
                <option value="1" className="bg-[#131c2e]">1+ Bathrooms</option>
                <option value="2" className="bg-[#131c2e]">2+ Bathrooms</option>
                <option value="3" className="bg-[#131c2e]">3+ Bathrooms</option>
                <option value="4" className="bg-[#131c2e]">4+ Bathrooms</option>
              </select>
            </div>

            {/* Price Max Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Max Price</label>
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Price</option>
                <option value="1500000" className="bg-[#131c2e]">Max USD $1.5M</option>
                <option value="2500000" className="bg-[#131c2e]">Max USD $2.5M</option>
                <option value="4000000" className="bg-[#131c2e]">Max USD $4.0M</option>
                <option value="6000000" className="bg-[#131c2e]">Max USD $6.0M</option>
                <option value="10000000" className="bg-[#131c2e]">Max USD $10.0M</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center justify-between mt-8 pt-6 border-t border-white/5 gap-4" style={{ transform: 'translateZ(20px)' }}>
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="text-slate-400 font-semibold uppercase tracking-wider mr-2">Active Spec:</span>
                {searchTerm && (
                  <span className="bg-[#1c2638] text-[#c4a468] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 font-medium">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}><X className="w-3.5 h-3.5 hover:text-white transition-colors" /></button>
                  </span>
                )}
                {selectedParish && (
                  <span className="bg-[#1c2638] text-[#c4a468] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 font-medium">
                    {selectedParish}
                    <button onClick={() => setSelectedParish('')}><X className="w-3.5 h-3.5 hover:text-white transition-colors" /></button>
                  </span>
                )}
                {selectedBeds && (
                  <span className="bg-[#1c2638] text-[#c4a468] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 font-medium">
                    {selectedBeds}+ Beds
                    <button onClick={() => setSelectedBeds('')}><X className="w-3.5 h-3.5 hover:text-white transition-colors" /></button>
                  </span>
                )}
                {selectedBaths && (
                  <span className="bg-[#1c2638] text-[#c4a468] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 font-medium">
                    {selectedBaths}+ Baths
                    <button onClick={() => setSelectedBaths('')}><X className="w-3.5 h-3.5 hover:text-white transition-colors" /></button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="bg-[#1c2638] text-[#c4a468] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 font-medium">
                    &lt; USD ${(parseInt(selectedPrice, 10) / 1000000).toFixed(1)}M
                    <button onClick={() => setSelectedPrice('')}><X className="w-3.5 h-3.5 hover:text-white transition-colors" /></button>
                  </span>
                )}
              </div>
              <button 
                onClick={handleResetFilters}
                className="text-xs font-semibold text-slate-400 hover:text-[#c4a468] transition-colors tracking-wider uppercase underline underline-offset-4 cursor-pointer"
              >
                Reset Suite
              </button>
            </div>
          )}
        </div>

        {/* Meta Stats View */}
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Showing {filteredProperties.length} curated Estates
          </span>
          {filteredProperties.length !== allProperties.length && (
            <span>Filtered Out of {allProperties.length} Global Units</span>
          )}
        </div>

        {/* Interactive Responsive Grid Frame */}
        {filteredProperties.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProperties.slice(0, visibleCount).map((property) => (
              <div key={property.id} className="property-card-wrapper transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden group">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          /* High-end Blank State Frame */
          <div className="text-center py-24 bg-[#131c2e]/40 border border-white/5 rounded-2xl flex flex-col items-center backdrop-blur-sm">
            <span className="text-sm text-slate-400 mb-6 font-medium tracking-wide">No private listings match your current filter parameters.</span>
            <button 
              onClick={handleResetFilters}
              className="bg-transparent text-white border border-white/20 hover:border-[#c4a468] hover:text-[#c4a468] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold cursor-pointer transition-all duration-300"
            >
              Clear Preferences
            </button>
          </div>
        )}

        {/* Load More Trigger CTA */}
        {filteredProperties.length > visibleCount && (
          <div className="flex justify-center mt-20">
            <button 
              onClick={handleLoadMore}
              className="group flex items-center gap-3 bg-[#131c2e] border border-white/10 text-white hover:border-[#c4a468] rounded-full py-4 px-10 font-medium tracking-widest text-xs uppercase transition-all duration-500 cursor-pointer shadow-lg"
            >
              Load More Real Estate
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#c4a468] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}