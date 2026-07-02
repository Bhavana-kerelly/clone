import React, { useEffect } from 'react';
import { Shield, Sunset, Compass, Sparkles } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function AboutBarbados() {
  const allProperties = Object.values(propertiesData);
  const featuredProperties = allProperties.slice(0, 3); // Take top 3 for display

  useEffect(() => {
    document.title = "About Barbados | Island Living & Real Estate Guide";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/tYliNzBTUm5FERQkCY5A9aa9kw.jpg" 
            alt="Barbados beach view background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-dark-blue/45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            Island Living
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            About Barbados
          </h1>
          <div className="w-12 h-0.5 bg-sage mt-4 mb-6"></div>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Discover the unique culture, heritage, and beauty that make Barbados a true island paradise and the perfect destination for property buyers.
          </p>
        </div>
      </section>

      {/* 2. CULTURE & HISTORY SEGMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2 block">
            Heritage &amp; Heart
          </span>
          <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
            History &amp; Culture: The Soul of Barbados
          </h2>
          <div className="w-12 h-0.5 bg-sage mb-6"></div>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify mb-4">
            Barbados is a land where history and culture intertwine, creating a vibrant tapestry of traditions, heritage, and warmth. From its early indigenous roots and British colonial influences to its present-day charm, the island’s story is felt across its landscapes, architecture, and ever-welcoming community.
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Barbados’s culture comes alive through annual festivals like Crop Over, a spirited celebration of music and dance that invites visitors to share in its joyful traditions. The island’s culinary scene blends Caribbean flavors with international finesse, while local artisans showcase craftsmanship inspired by the island’s natural beauty. Here, culture is not just observed—it is embraced, offering a truly immersive experience.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden card-shadow aspect-video bg-dark-blue/10">
          <img 
            src="https://framerusercontent.com/images/pfEJJ9QrAn3EpSoq0mBLAxo0.jpg" 
            alt="An old heritage building with a clock tower in Barbados" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. ARCHITECTURE SEGMENT */}
      <section className="bg-[#2e415703] border-y border-dark-blue/5 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden card-shadow aspect-video bg-dark-blue/10">
            <img 
              src="https://framerusercontent.com/images/B7wY4tIh88yCyhIJKWO4rBfeBBo.jpg" 
              alt="Luxury Caribbean Architecture in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2 block">
              Timeless Craftsmanship
            </span>
            <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
              Architecture &amp; Design
            </h2>
            <div className="w-12 h-0.5 bg-sage mb-6"></div>
            <p className="text-sm text-dark-blue/80 leading-relaxed text-justify mb-4">
              Barbados's architecture is a fusion of colonial and Caribbean influences. From stately plantation houses and coral-stone buildings to modern villas that blend seamlessly with the environment, the island’s architecture echoes its rich history while embracing contemporary luxury.
            </p>
            <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
              Each property, whether traditional or avant-garde, reflects Barbados’s unique character, offering stunning homes that capture the essence of island elegance. High-fidelity construction, structural coral stones, and wide terraces designed for natural ventilation are hallmarks of luxury Barbados properties.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LIFESTYLE SEGMENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2 block">
            From Fairways to Fine Dining
          </span>
          <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
            Lifestyle &amp; Recreation
          </h2>
          <div className="w-12 h-0.5 bg-sage mb-6"></div>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify mb-4">
            Barbados offers a vast range of pursuits for all tastes. Play a round on world-class golf courses at Apes Hill or Sandy Lane, designed for challenge and beauty. For equestrian lovers, afternoon polo matches deliver thrilling spectacles. Head over to the Garrison Racecourse which showcases premier horseracing events that captivate and enthuse.
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Luxury cruises on our glittering sea reveal secluded coves and stunning coral reefs, perfect for those who appreciate serene exploration. Meanwhile, fine dining establishments serve gourmet cuisine infused with local flavors, presenting unforgettable culinary experiences. You’ll never be short of things to do. The island offers a wealth of experiences to indulge in, ensuring each moment is beautiful.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden card-shadow aspect-video bg-dark-blue/10">
          <img 
            src="https://framerusercontent.com/images/yZOh20dxEg3fI9hFlBxGRkK6dl8.jpg" 
            alt="Golf course at Apes Hill Resort Barbados" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 5. CLIMATE SEGMENT */}
      <section className="bg-[#2e415703] border-y border-dark-blue/5 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden card-shadow aspect-video bg-dark-blue/10">
            <img 
              src="https://framerusercontent.com/images/KKQzHbC7qQPF6W0SeLLgQ9ok8E.jpg" 
              alt="Beach with palm trees in Barbados" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2 block">
              The Endless Summer
            </span>
            <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
              Climate &amp; Weather
            </h2>
            <div className="w-12 h-0.5 bg-sage mb-6"></div>
            <p className="text-sm text-dark-blue/80 leading-relaxed text-justify mb-4">
              Barbados is a year-round tropical paradise with warm, sunny weather tempered by gentle trade winds. The average temperature ranges between 27°-30°C/80°-86°F. Equally, the ocean remains invitingly warm throughout the year, with temperatures ranging from 26-29°C (79-84°F).
            </p>
            <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
              From December to May, the island enjoys a dry season of clear skies and cool breezes, while the wetter summer season brings brief, refreshing showers that keep the lush landscapes vibrant. The idyllic climate ensures that you can bask in the sun on pristine beaches or indulge in outdoor leisure pursuits at any time of year.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROPERTIES BLOCK */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Local Properties
          </span>
          <h2 className="font-display text-3xl font-bold text-dark-blue mb-4">
            Featured Island Residences
          </h2>
          <div className="w-12 h-0.5 bg-sage"></div>
        </div>

        {/* Grid listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
