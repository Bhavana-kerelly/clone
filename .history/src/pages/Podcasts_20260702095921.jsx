import React, { useEffect } from 'react';
import podcastsData from '../data/podcasts.json';
import PodcastCard from '../components/PodcastCard';

export default function Podcasts() {
  const podcasts = Object.values(podcastsData);

  useEffect(() => {
    document.title = "Barbados Property Podcasts | Stewart & Co";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Stewart &amp; Co Media
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-dark-blue mb-4">
            Barbados Property Podcasts
          </h1>
          <div className="w-16 h-0.5 bg-sage mb-6"></div>
          <p className="text-sm text-dark-blue/70 max-w-2xl leading-relaxed">
            Listen and read expert conversations on designing, developing, buying, and financing real estate in Barbados. Hosted by Sean Stewart.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
}
