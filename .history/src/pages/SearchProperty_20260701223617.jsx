import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function SearchProperty() {
  const routerLocation = useLocation();
  const allProperties = Object.values(propertiesData);

  // States for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParish, setSelectedParish] = useState('');
  const [selectedBeds, setSelectedBeds] = useState('');
  const [selectedBaths, setSelectedBaths] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  // Parse URL search parameters & set page title
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

  // Filter properties logic
  const filteredProperties = allProperties.filter((property) => {
    // 1. Text Search (Matches title, name, location or description)
    const matchText = searchTerm === '' || 
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.title.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Parish Location Filter
    const matchParish = selectedParish === '' || 
      property.location.toLowerCase().includes(selectedParish.toLowerCase());

    // 3. Bedrooms Filter (property.beds is text e.g. "03", parsed as int)
    const bedCount = parseInt(property.beds, 10) || 0;
    const matchBeds = selectedBeds === '' || bedCount >= parseInt(selectedBeds, 10);

    // 4. Bathrooms Filter
    const bathCount = parseInt(property.baths, 10) || 0;
    const matchBaths = selectedBaths === '' || bathCount >= parseInt(selectedBaths, 10);

    // 5. Price Max Filter
    // Format property.price e.g. "USD $3,950,000" or "From USD $3,455,000.00"
    // Extract numerical digits only
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

  // Get active filters count
  const activeFiltersCount = 
    (searchTerm !== '' ? 1 : 0) +
    (selectedParish !== '' ? 1 : 0) +
    (selectedBeds !== '' ? 1 : 0) +
    (selectedBaths !== '' ? 1 : 0) +
    (selectedPrice !== '' ? 1 : 0);

  return (
    <div className="bg-cream min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Title Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Luxury Listings
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-dark-blue mb-4">
            Search Properties
          </h1>
          <div className="w-16 h-0.5 bg-sage"></div>
        </div>

        {/* Filter Widget Bar */}
        <div className="bg-[#fcf9f6] rounded-lg border border-dark-blue/5 card-shadow p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Search Input */}
            <div className="flex flex-col text-left lg:col-span-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Search Text</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Villas, beach, location..."
                  className="w-full bg-white border border-dark-blue/10 rounded pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
                />
                <Search className="w-4 h-4 text-dark-blue/30 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Parish Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Parish / Area</label>
              <select 
                value={selectedParish}
                onChange={(e) => setSelectedParish(e.target.value)}
                className="w-full bg-white border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Parish</option>
                <option value="St. James">St. James</option>
                <option value="St. Peter">St. Peter</option>
                <option value="Christ Church">Christ Church</option>
                <option value="Sandy Lane">Sandy Lane Estate</option>
                <option value="Apes Hill">Apes Hill</option>
              </select>
            </div>

            {/* Beds Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Min Bedrooms</label>
              <select 
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="w-full bg-white border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Beds</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>

            {/* Baths Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Min Bathrooms</label>
              <select 
                value={selectedBaths}
                onChange={(e) => setSelectedBaths(e.target.value)}
                className="w-full bg-white border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Baths</option>
                <option value="1">1+ Bathrooms</option>
                <option value="2">2+ Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>
            </div>

            {/* Price Max Select */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Max Price</label>
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-white border border-dark-blue/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sage"
              >
                <option value="">Any Price</option>
                <option value="1500000">Max USD $1.5M</option>
                <option value="2500000">Max USD $2.5M</option>
                <option value="4000000">Max USD $4.0M</option>
                <option value="6000000">Max USD $6.0M</option>
                <option value="10000000">Max USD $10.0M</option>
              </select>
            </div>
          </div>

          {/* Active filter badges / Reset */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-dark-blue/5 gap-4">
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="text-dark-blue/50 font-semibold uppercase tracking-wider mr-2">Active Filters:</span>
                {searchTerm && (
                  <span className="bg-dark-blue/5 text-dark-blue rounded px-3 py-1 flex items-center gap-1.5 font-medium">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}><X className="w-3.5 h-3.5 hover:text-sage" /></button>
                  </span>
                )}
                {selectedParish && (
                  <span className="bg-dark-blue/5 text-dark-blue rounded px-3 py-1 flex items-center gap-1.5 font-medium">
                    Parish: {selectedParish}
                    <button onClick={() => setSelectedParish('')}><X className="w-3.5 h-3.5 hover:text-sage" /></button>
                  </span>
                )}
                {selectedBeds && (
                  <span className="bg-dark-blue/5 text-dark-blue rounded px-3 py-1 flex items-center gap-1.5 font-medium">
                    Beds: {selectedBeds}+
                    <button onClick={() => setSelectedBeds('')}><X className="w-3.5 h-3.5 hover:text-sage" /></button>
                  </span>
                )}
                {selectedBaths && (
                  <span className="bg-dark-blue/5 text-dark-blue rounded px-3 py-1 flex items-center gap-1.5 font-medium">
                    Baths: {selectedBaths}+
                    <button onClick={() => setSelectedBaths('')}><X className="w-3.5 h-3.5 hover:text-sage" /></button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="bg-dark-blue/5 text-dark-blue rounded px-3 py-1 flex items-center gap-1.5 font-medium">
                    Max Price: USD ${(parseInt(selectedPrice, 10) / 1000000).toFixed(1)}M
                    <button onClick={() => setSelectedPrice('')}><X className="w-3.5 h-3.5 hover:text-sage" /></button>
                  </span>
                )}
              </div>
              <button 
                onClick={handleResetFilters}
                className="text-xs font-semibold text-sage hover:text-dark-blue underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-xs text-dark-blue/60 font-semibold uppercase tracking-wider mb-6">
          <span>Showing {filteredProperties.length} Properties</span>
          {filteredProperties.length !== allProperties.length && (
            <span>filtered from {allProperties.length} total</span>
          )}
        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.slice(0, visibleCount).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#fcf9f6] border border-dark-blue/5 rounded-lg flex flex-col items-center">
            <span className="text-sm text-dark-blue/50 mb-4 font-semibold uppercase tracking-wider">No matching properties found</span>
            <button 
              onClick={handleResetFilters}
              className="bg-dark-blue text-white hover:bg-sage hover:text-dark-blue px-6 py-2 rounded text-xs uppercase tracking-wider font-semibold cursor-pointer transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={handleLoadMore}
              className="border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white rounded py-3 px-8 font-semibold tracking-wider text-xs uppercase transition-all duration-300 cursor-pointer"
            >
              Load More Listings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
