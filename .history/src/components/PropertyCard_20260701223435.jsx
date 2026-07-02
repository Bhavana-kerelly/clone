import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  const { id, name, price, beds, baths, floor_area, land_area, location, cover_image } = property;

  return (
    <Link 
      to={`/property-details-sales/${id}`} 
      className="group block bg-[#fcf9f6] rounded overflow-hidden border border-dark-blue/5 card-shadow transition-all-300 hover:-translate-y-1 hover:shadow-xl hover:border-dark-blue/10"
    >
      {/* Property Image Cover */}
      <div className="relative aspect-[4/3] overflow-hidden bg-dark-blue/10">
        <img 
          src={cover_image || 'https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg'} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-transparent to-transparent opacity-65"></div>
        
        {/* Price tag over image */}
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-xs uppercase tracking-widest opacity-80 block font-semibold mb-0.5">Price</span>
          <span className="font-display text-xl font-bold tracking-wider">{price}</span>
        </div>
      </div>

      {/* Property Specifications Details */}
      <div className="p-6">
        {location && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage block mb-1">
            {location}
          </span>
        )}
        <h3 className="font-display text-lg text-dark-blue font-bold tracking-wide leading-tight group-hover:text-sage transition-colors duration-200 line-clamp-1 mb-4">
          {name}
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 border-t border-dark-blue/5 pt-4 text-dark-blue/80 text-xs">
          {beds && (
            <div className="flex flex-col">
              <span className="font-display text-base font-bold text-dark-blue">{beds}</span>
              <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Bedrooms</span>
            </div>
          )}
          {baths && (
            <div className="flex flex-col">
              <span className="font-display text-base font-bold text-dark-blue">{baths}</span>
              <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Bathrooms</span>
            </div>
          )}
          {(floor_area || land_area) && (
            <div className="flex flex-col col-span-1">
              <span className="font-display text-base font-bold text-dark-blue truncate">
                {floor_area ? floor_area.replace('Floor area', '').replace('Floor Area', '').trim() : 'N/A'}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-dark-blue/50">Floor Size</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
