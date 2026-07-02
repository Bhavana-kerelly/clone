import React, { useEffect } from 'react';
import { Landmark, Award, Shield, Check } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function GatedDevelopment() {
  const allProperties = Object.values(propertiesData);
  
  // Filter properties belonging to Gated Developments
  const developmentProperties = allProperties.filter(p => 
    p.id.includes('vistara') || 
    p.id.includes('apes-hill') || 
    p.id.includes('porters-place') || 
    p.id.includes('royal-westmoreland') || 
    p.id.includes('schooner-bay')
  ).slice(0, 6);

  useEffect(() => {
    document.title = "Luxury Gated Developments in Barbados | Stewart & Co";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/cb2qjlC0mEOI9CG9t6EdMxwNw.webp" 
            alt="Vistara gated luxury villa background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-dark-blue/45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            Luxury Communities
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            Gated Developments
          </h1>
          <div className="w-12 h-0.5 bg-sage mt-4 mb-6"></div>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Explore premium master-planned gated resort communities in Barbados, offering exclusive amenities, 24-hour security, and unmatched island lifestyle.
          </p>
        </div>
      </section>

      {/* 2. DESCRIPTION SECTION OF DEVELOPMENTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col gap-16">
        
        {/* Grid description of major developments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apes Hill */}
          <div className="bg-[#fcf9f6] p-8 rounded border border-dark-blue/5 card-shadow flex flex-col gap-4">
            <span className="text-[10px] font-bold text-sage uppercase tracking-wider">Golf &amp; Country Club</span>
            <h2 className="font-display text-2xl font-bold text-dark-blue">Apes Hill Barbados</h2>
            <p className="text-xs text-dark-blue/70 leading-relaxed text-justify">
              Situated 1,000 feet above sea level, Apes Hill offers spectacular sea views over the West and East coasts. This eco-luxury community features a world-class 18-hole championship golf course, tennis/paddle courts, a wellness center, nature trails, and luxurious villas tailored to modern Caribbean design.
            </p>
          </div>

          {/* Porters Place */}
          <div className="bg-[#fcf9f6] p-8 rounded border border-dark-blue/5 card-shadow flex flex-col gap-4">
            <span className="text-[10px] font-bold text-sage uppercase tracking-wider">Exclusive Boutique Community</span>
            <h2 className="font-display text-2xl font-bold text-dark-blue">Porters Place Residences</h2>
            <p className="text-xs text-dark-blue/70 leading-relaxed text-justify">
              Located in St. James, Porters Place is a modern residential community consisting of beautifully designed 3 and 4-bedroom villas. Offering open-plan layouts, private pools, and lush tropical gardens, this secure retreat is just minutes from the sandy beaches of the Platinum Coast.
            </p>
          </div>

          {/* Vistara Residences */}
          <div className="bg-[#fcf9f6] p-8 rounded border border-dark-blue/5 card-shadow flex flex-col gap-4">
            <span className="text-[10px] font-bold text-sage uppercase tracking-wider">Contemporary Luxury</span>
            <h2 className="font-display text-2xl font-bold text-dark-blue">Vistara Villa Series</h2>
            <p className="text-xs text-dark-blue/70 leading-relaxed text-justify">
              Vistara (featuring Vistara Edge, Lush, Serenity, and Oasis) represents the peak of contemporary real estate development in Barbados. These multi-storey residences combine clean architectural styling, private pool decks, and energy-efficient facilities for sustainable tropical living.
            </p>
          </div>

          {/* Royal Westmoreland */}
          <div className="bg-[#fcf9f6] p-8 rounded border border-dark-blue/5 card-shadow flex flex-col gap-4">
            <span className="text-[10px] font-bold text-sage uppercase tracking-wider">World-Renowned Estate</span>
            <h2 className="font-display text-2xl font-bold text-dark-blue">Royal Westmoreland</h2>
            <p className="text-xs text-dark-blue/70 leading-relaxed text-justify">
              One of the most established gated communities in the Caribbean, Royal Westmoreland spans over 750 acres of immaculate landscape. With an 18-hole Robert Trent Jones Jr. golf course, private beach club access at Mullins Bay, tennis courts, and grand estates, it is a haven for international celebrities and high-net-worth buyers.
            </p>
          </div>
        </div>

        {/* Community benefits strip */}
        <div className="bg-dark-blue text-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 text-sage" />
            <span className="font-semibold text-sm">24-Hour Gated Security</span>
            <p className="text-xs text-white/60">Complete peace of mind with continuous patrol and secure access.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="w-8 h-8 text-sage" />
            <span className="font-semibold text-sm">World-Class Golf &amp; Sports</span>
            <p className="text-xs text-white/60">Privilege access to private golf courses, paddle courts, and gyms.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Landmark className="w-8 h-8 text-sage" />
            <span className="font-semibold text-sm">Concierge &amp; Property Management</span>
            <p className="text-xs text-white/60">Lock-up-and-leave convenience with full maintenance and rental support.</p>
          </div>
        </div>
      </section>

      {/* 3. LIST OF PROPERTIES INSIDE DEVELOPMENTS */}
      <section className="py-24 border-t border-dark-blue/5 bg-[#2e415703] px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Community Real Estate
          </span>
          <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
            Residences In Gated Developments
          </h2>
          <div className="w-12 h-0.5 bg-sage"></div>
        </div>

        {/* Grid listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentProperties.map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
