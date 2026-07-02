import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = propertiesData[id];

  // Scroll to top on mount or route change & set page title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (property) {
      document.title = `${property.name} | KVS Infra Development`;
    }
  }, [id, property]);

  if (!property) {
    return (
      <div className="bg-cream min-h-screen pt-36 pb-24 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-xl border border-dark-blue/5">
          <h2 className="font-display text-2xl font-bold text-dark-blue mb-4">Property Not Found</h2>
          <p className="text-sm text-dark-blue/60 mb-6 leading-relaxed">
            The property you are looking for does not exist or has been removed from our listings catalog.
          </p>
          <Link 
            to="/search-result-sales" 
            className="bg-dark-blue text-white hover:bg-sage hover:text-dark-blue px-6 py-3 rounded font-semibold text-xs uppercase tracking-wider transition-colors duration-300"
          >
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  // Combine cover image and gallery images for the slider
  const allImages = [property.cover_image, ...(property.gallery || [])].filter(Boolean);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [enquirySent, setEnquirySent] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState(`I am interested in learning more about ${property.name}. Please contact me.`);

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % allImages.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setFormName('');
      setFormEmail('');
    }, 6000);
  };

  // Find recommendations ("You May Also Like")
  // Let's filter other properties in the same parish location or just random ones
  const recommendations = Object.values(propertiesData)
    .filter(p => p.id !== property.id)
    // sort so those sharing location matches are first, or just slice
    .sort((a, b) => {
      const aLoc = a.location.toLowerCase();
      const bLoc = b.location.toLowerCase();
      const targetLoc = property.location.toLowerCase();
      
      const aMatch = aLoc.includes(targetLoc) || targetLoc.includes(aLoc);
      const bMatch = bLoc.includes(targetLoc) || targetLoc.includes(bLoc);
      
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. HERO SECTION WITH IMAGE SLIDER */}
      <section className="relative h-[65vh] sm:h-[75vh] bg-dark-blue overflow-hidden">
        {/* Main Active Image */}
        {allImages.length > 0 ? (
          <img 
            src={allImages[activeImageIdx]} 
            alt={`${property.name} - View ${activeImageIdx + 1}`}
            className="w-full h-full object-cover opacity-85 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-dark-blue/80 flex items-center justify-center text-white/50 text-sm">No images available</div>
        )}
        
        {/* Gallery Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/65 via-transparent to-dark-blue/15"></div>

        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-cream/45 hover:text-dark-blue transition-all cursor-pointer focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-cream/45 hover:text-dark-blue transition-all cursor-pointer focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicator Badge */}
        {allImages.length > 1 && (
          <div className="absolute bottom-6 right-6 bg-dark-blue/60 text-white px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
            {activeImageIdx + 1} / {allImages.length}
          </div>
        )}

        {/* Header Breadcrumbs */}
        <div className="absolute bottom-6 left-6 md:left-12 text-white">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-sage block mb-1">
            {property.location || 'KVS Infra Project'}
          </span>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            {property.name}
          </h1>
        </div>
      </section>

      {/* 2. GALLERY THUMBNAIL STRIP */}
      {allImages.length > 1 && (
        <section className="bg-dark-blue py-3 px-6 overflow-x-auto whitespace-nowrap flex gap-3 scrollbar-none justify-start md:justify-center border-b border-white/5">
          {allImages.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImageIdx(idx)}
              className={`inline-block w-20 h-14 rounded overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                idx === activeImageIdx ? 'border-sage scale-105 opacity-100 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
            </button>
          ))}
        </section>
      )}

      {/* 3. PROPERTY DETAIL VIEW CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: DESCRIPTION & SPECS */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          {/* Header Info Details */}
          <div className="bg-[#fcf9f6] rounded-lg border border-dark-blue/5 card-shadow p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-dark-blue/50 block mb-1">Project Pricing</span>
              <span className="font-display text-3xl sm:text-4xl font-bold text-dark-blue tracking-wide">{property.price}</span>
            </div>
            
            {/* Specs Strip */}
            <div className="flex gap-8 text-dark-blue border-l border-dark-blue/10 pl-6 sm:pl-8">
              {property.beds && (
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-dark-blue">{property.beds}</span>
                  <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Plots</span>
                </div>
              )}
              {property.baths && (
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-dark-blue">{property.baths}</span>
                  <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Infrastructure</span>
                </div>
              )}
              {(property.floor_area || property.land_area) && (
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold text-dark-blue truncate">
                    {property.floor_area ? property.floor_area.replace('Floor area', '').replace('Floor Area', '').replace('sq ft', '').trim() : 'N/A'}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Area</span>
                </div>
              )}
            </div>
          </div>

          {/* Description paragraphs */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-bold tracking-wide text-dark-blue border-b border-dark-blue/10 pb-4">
              Project Overview
            </h2>
            {property.description_paragraphs && property.description_paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm text-dark-blue/80 leading-relaxed text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Specs / Features Grid lists */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-2xl font-bold tracking-wide text-dark-blue border-b border-dark-blue/10 pb-4">
              Project Amenities &amp; Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interior Details */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="bg-[#fcf9f6] p-6 rounded-lg border border-dark-blue/5 card-shadow">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-sage mb-4 border-b border-dark-blue/5 pb-2">
                    Interior &amp; General Details
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs text-dark-blue/80">
                    {property.amenities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outdoor details */}
              {property.outdoor_details && property.outdoor_details.length > 0 && (
                <div className="bg-[#fcf9f6] p-6 rounded-lg border border-dark-blue/5 card-shadow">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-sage mb-4 border-b border-dark-blue/5 pb-2">
                    Outdoor &amp; Surrounding details
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs text-dark-blue/80">
                    {property.outdoor_details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other Features */}
              {property.features && property.features.length > 0 && (
                <div className="bg-[#fcf9f6] p-6 rounded-lg border border-dark-blue/5 card-shadow md:col-span-2">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-sage mb-4 border-b border-dark-blue/5 pb-2">
                    Premium Features &amp; Location specific amenities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-dark-blue/80">
                    {property.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR CONTACT FORM */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-[#2e4157] text-white p-6 sm:p-8 rounded-lg card-shadow border border-white/5 flex flex-col gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sage block mb-1">Enquire Today</span>
              <h2 className="font-display text-2xl font-bold tracking-wide">Request Details</h2>
              <div className="w-12 h-0.5 bg-sage mt-3"></div>
            </div>

            {enquirySent ? (
              <div className="py-8 text-center flex flex-col items-center gap-4 bg-white/5 rounded border border-white/10 p-6 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-sage" />
                <h3 className="font-semibold text-lg">Enquiry Submitted</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Thank you for your interest! A KVS Infra specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-white/60 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-white/60 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-white/60 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-sage resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="bg-cream text-dark-blue hover:bg-sage hover:text-dark-blue font-semibold text-xs uppercase tracking-wider py-3 rounded mt-2 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

            {/* Quick contact icons */}
            <div className="border-t border-white/15 pt-6 mt-2 flex flex-col gap-4 text-xs text-white/70">
              <a href="tel:+12462324444" className="flex items-center gap-3 hover:text-sage transition-colors">
                <Phone className="w-4 h-4 text-sage" />
                <span>Call Us: +91 98765 43210</span>
              </a>
              <a href="mailto:sean@stewartcorealty.com" className="flex items-center gap-3 hover:text-sage transition-colors">
                <Mail className="w-4 h-4 text-sage" />
                <span>Email: info@kvsinfra.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED LISTINGS GRID ("You May Also Like") */}
      <section className="py-24 border-t border-dark-blue/5 bg-[#2e415703]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
              Browse More
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-wide text-dark-blue mb-4">
              You May Also Like
            </h2>
            <div className="w-12 h-0.5 bg-sage"></div>
          </div>

          {/* Grid recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
