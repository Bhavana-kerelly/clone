import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import propertiesData from '../data/properties.json';

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
    document.title = "Search KVS Infra Projects | Land & Development";
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
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
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

  // Micro 3D element tracking logic for individual property frames
  const handleItemCardParallax = (e, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(currentTarget.querySelector('.parallax-shutter'), {
      x: x * 0.06,
      y: y * 0.06,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(currentTarget.querySelector('.parallax-content'), {
      x: -x * 0.03,
      y: -y * 0.03,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleItemCardLeave = (currentTarget) => {
    gsap.to(currentTarget.querySelector('.parallax-shutter'), { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
    gsap.to(currentTarget.querySelector('.parallax-content'), { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
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
    <div ref={containerRef} className="bg-[#0b121f] text-white min-h-screen pt-32 pb-24 relative overflow-hidden selection:bg-[#c4a468] selection:text-black">
      
      {/* 3D Ambient Loop Grid Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Endless Cinematic Loop Marquee */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] z-0 select-none">
        <div ref={tickerRef} className="inline-block text-[15vw] font-black uppercase tracking-widest text-white">
          KVS INFRA PROJECTS — KVS INFRA PROJECTS —&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Elite Cinematic Header */}
        <div ref={headerRef} className="text-center mb-20 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#c4a468] mb-4 block">
            Curated Development Pipeline
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-light tracking-tight text-white mb-6 max-w-3xl leading-none">
            Discover KVS <span className="italic font-serif font-normal text-[#c4a468]">Infra</span> Opportunities
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c4a468] to-transparent"></div>
        </div>

        {/* Dynamic Interactive 3D Card Filter Widget */}
        <div 
          ref={filterRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bg-[#131c2e]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-shadow duration-300 hover:border-[#c4a468]/30"
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
                  placeholder="plots, location, corridor..."
                  className="w-full bg-[#1c2638] border border-white/5 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c4a468] focus:ring-1 focus:ring-[#c4a468] transition-all duration-300"
                />
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 group-focus-within:text-[#c4a468] transition-colors" />
              </div>
            </div>

            {/* Parish Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Region / Corridor</label>
              <select 
                value={selectedParish}
                onChange={(e) => setSelectedParish(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Region</option>
                <option value="Tirupati" className="bg-[#131c2e]">Tirupati</option>
                <option value="Chandragiri" className="bg-[#131c2e]">Chandragiri</option>
                <option value="Hyderabad" className="bg-[#131c2e]">Hyderabad</option>
                <option value="Chennai" className="bg-[#131c2e]">Chennai</option>
                <option value="Bangalore" className="bg-[#131c2e]">Bangalore</option>
              </select>
            </div>

            {/* Beds Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Plot Configuration</label>
              <select 
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Configuration</option>
                <option value="1" className="bg-[#131c2e]">1+ Plot</option>
                <option value="2" className="bg-[#131c2e]">2+ Plots</option>
                <option value="3" className="bg-[#131c2e]">3+ Plots</option>
                <option value="4" className="bg-[#131c2e]">4+ Plots</option>
              </select>
            </div>

            {/* Baths Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Infrastructure Grade</label>
              <select 
                value={selectedBaths}
                onChange={(e) => setSelectedBaths(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Grade</option>
                <option value="1" className="bg-[#131c2e]">Standard</option>
                <option value="2" className="bg-[#131c2e]">Premium</option>
                <option value="3" className="bg-[#131c2e]">Institutional</option>
              </select>
            </div>

            {/* Price Max Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">Budget</label>
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-[#1c2638] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c4a468] transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#131c2e]">Any Budget</option>
                <option value="1500000" className="bg-[#131c2e]">Up to ₹1.5M</option>
                <option value="2500000" className="bg-[#131c2e]">Up to ₹2.5M</option>
                <option value="4000000" className="bg-[#131c2e]">Up to ₹4.0M</option>
                <option value="6000000" className="bg-[#131c2e]">Up to ₹6.0M</option>
                <option value="10000000" className="bg-[#131c2e]">Up to ₹10.0M</option>
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

        {/* Unique Architectural Presentation Layout Grid */}
        {filteredProperties.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filteredProperties.slice(0, visibleCount).map((property) => (
              <div 
                key={property.id} 
                className="property-card-wrapper relative flex flex-col group cursor-pointer"
                onMouseMove={(e) => handleItemCardParallax(e, e.currentTarget)}
                onMouseLeave={(e) => handleItemCardLeave(e.currentTarget)}
              >
                {/* Visual Shutter Layer Container */}
                <div className="parallax-shutter relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#121b2d] mb-6 shadow-2xl transition-transform duration-300 ease-out">
                  
                  {/* Subtle Top-Border Frame Edge Accent */}
                  <div className="absolute inset-0 border border-white/5 z-20 pointer-events-none group-hover:border-[#c4a468]/40 transition-colors duration-500" />
                  
                  {/* Index Counter Graphic Badge */}
                  <div className="absolute top-4 left-4 mix-blend-difference font-mono text-xs tracking-widest text-white/40 z-20">
                    PRP-{property.id.toString().padStart(3, '0')}
                  </div>

                  {/* Property Main Image View */}
                  <img 
                    src={property.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"} 
                    alt={property.name}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  
                  {/* Dynamic Dark Gradient Blending Mesh Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b121f] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                </div>

                {/* Typography Information Deck */}
                <div className="parallax-content flex flex-col text-left transition-transform duration-300 ease-out px-1">
                  
                  {/* Location & Parish Tagline Line */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#c4a468] uppercase">
                      {property.location}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/10 mx-4 group-hover:bg-[#c4a468]/30 transition-colors duration-500" />
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider">
                      {property.beds} BD / {property.baths} BA
                    </span>
                  </div>

                  {/* Estate Title Text */}
                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#c4a468] tracking-wide mb-3 transition-colors duration-300 line-clamp-1">
                    {property.name || property.title}
                  </h3>

                  {/* Price Tag Frame Line */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="font-sans font-light text-sm text-slate-300 tracking-wide">
                      {property.price}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c4a468] group-hover:border-[#c4a468] transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-black transition-colors" />
                    </span>
                  </div>
                </div>
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
          <div className="flex justify-center mt-24">
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