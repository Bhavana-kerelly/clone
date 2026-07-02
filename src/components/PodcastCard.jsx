import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function PodcastCard({ podcast }) {
  const { id, name, date, duration_info, synopsis, cover_image } = podcast;

  return (
    <Link 
      to={`/podcast-list/${id}`} 
      className="group block bg-[#fcf9f6] rounded border border-dark-blue/5 overflow-hidden card-shadow transition-all-300 hover:-translate-y-1 hover:shadow-xl hover:border-dark-blue/10"
    >
      <div className="relative aspect-video overflow-hidden bg-dark-blue/10">
        <img 
          src={cover_image || 'https://framerusercontent.com/images/PJ8vXtWNqkjWv3IGQogCl1EDIHI.jpg'} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Play icon overlay on hover */}
        <div className="absolute inset-0 bg-dark-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-cream text-dark-blue rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between min-h-[220px]">
        <div>
          {/* Metadata */}
          <div className="flex gap-4 items-center text-[10px] uppercase tracking-wider text-dark-blue/50 mb-3">
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-sage" />
                <span>{date}</span>
              </span>
            )}
            {duration_info && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-sage" />
                <span>{duration_info.replace('Watch', '').replace('Read', '').replace('|', '').trim()}</span>
              </span>
            )}
          </div>

          {/* Heading title */}
          <h3 className="font-display text-lg text-dark-blue font-bold tracking-wide leading-snug group-hover:text-sage transition-colors duration-200 line-clamp-2 mb-3">
            {name}
          </h3>

          {/* Synopsis */}
          {synopsis && (
            <p className="text-xs text-dark-blue/60 leading-relaxed line-clamp-3">
              {synopsis}
            </p>
          )}
        </div>

        {/* Read More Call */}
        <div className="mt-4 border-t border-dark-blue/5 pt-4 flex items-center justify-between text-xs font-semibold text-sage">
          <span className="uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-200">
            Listen &amp; Read Transcript
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
