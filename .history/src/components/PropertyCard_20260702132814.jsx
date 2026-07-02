import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function PropertyCard({ property }) {
  const { id, name, price, beds, baths, floor_area, land_area, location, cover_image } = property;
  const cardRef = useRef(null);

  // 3D Matrix Vector Coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-fluid spatial physics configs
  const kineticSpring = { damping: 25, stiffness: 120, mass: 0.8 };
  
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), kineticSpring);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-12, 12]), kineticSpring);
  const shimmerX = useSpring(useTransform(mouseX, [-200, 200], ["0%", "100%"]), kineticSpring);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const elementRect = cardRef.current.getBoundingClientRect();
    const halfWidth = elementRect.width / 2;
    const halfHeight = elementRect.height / 2;
    const computedX = e.clientX - elementRect.left - halfWidth;
    const computedY = e.clientY - elementRect.top - halfHeight;
    
    mouseX.set(computedX);
    mouseY.set(computedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full bg-[#1c1c1e] rounded-[28px] border border-[#2d2d30] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-shadow duration-500 hover:shadow-[0_40px_90px_rgba(0,113,227,0.18)] hover:border-[#444] group"
      >
        <Link 
          to={`/property-details-sales/${id}`} 
          className="block w-full h-full relative"
        >
          {/* Dynamic Mirror Refraction Gloss Overlay */}
          <motion.div 
            style={{ left: shimmerX }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent z-40 pointer-events-none mix-blend-overlay w-1/2 -skew-x-12 filter blur-md"
          />

          {/* Property Image Chassis Portal */}
          <div 
            className="relative aspect-[4/3] overflow-hidden bg-black/40 border-b border-[#2d2d30]"
            style={{ transform: "translateZ(20px)" }} // Elevates layer off card backing
          >
            <img 
              src={cover_image || 'https://framerusercontent.com/images/HShh91vuIwRlSwYw9lAjYX7yg.jpg'} 
              alt={name} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-[0.9]"
            />
            {/* Dark Linear Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-85 z-10" />
            
            {/* Price Tag Capsule Floating Frame */}
            <div 
              className="absolute bottom-5 left-5 text-white z-20"
              style={{ transform: "translateZ(15px)" }} // Extra step forward inside nested space
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#86868b] block font-semibold mb-1">Price</span>
              <span className="text-2xl font-semibold tracking-tight text-white">{price}</span>
            </div>
          </div>

          {/* Property Specification Copy Block */}
          <div 
            className="p-6 relative z-30"
            style={{ transform: "translateZ(30px)" }} // Projects typography forward toward client perspective
          >
            {location && (
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0071e3] block mb-2">
                {location}
              </span>
            )}
            
            <h3 className="text-lg text-white font-medium tracking-tight group-hover:text-[#0071e3] transition-colors duration-300 line-clamp-1 mb-5">
              {name}
            </h3>

            {/* Micro Specs Architectural Data Ribbon */}
            <div className="grid grid-cols-3 gap-3 border-t border-[#2d2d30] pt-4 text-[#86868b]">
              {beds && (
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-white tracking-tight">{beds}</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#86868b]/70 font-medium mt-0.5">Bedrooms</span>
                </div>
              )}
              {baths && (
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-white tracking-tight">{baths}</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#86868b]/70 font-medium mt-0.5">Bathrooms</span>
                </div>
              )}
              {(floor_area || land_area) && (
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-white tracking-tight truncate">
                    {floor_area ? floor_area.replace('Floor area', '').replace('Floor Area', '').trim() : 'N/A'}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#86868b]/70 font-medium mt-0.5">Floor Size</span>
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}