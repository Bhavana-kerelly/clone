import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowUpRight } from 'lucide-react';
import podcastsData from '../data/podcasts.json';

export default function PodcastDetail() {
  const { id } = useParams();
  const podcast = podcastsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (podcast) {
      document.title = `${podcast.name} | Stewart & Co Podcasts`;
    }
  }, [id, podcast]);

  if (!podcast) {
    return (
      <div className="bg-cream min-h-screen pt-36 pb-24 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-xl border border-dark-blue/5">
          <h2 className="font-display text-2xl font-bold text-dark-blue mb-4">Episode Not Found</h2>
          <p className="text-sm text-dark-blue/60 mb-6 leading-relaxed">
            The media podcast episode you are looking for does not exist or has been removed.
          </p>
          <Link 
            to="/podcasts" 
            className="bg-dark-blue text-white hover:bg-sage hover:text-dark-blue px-6 py-3 rounded font-semibold text-xs uppercase tracking-wider transition-colors duration-300"
          >
            Back to podcasts
          </Link>
        </div>
      </div>
    );
  }

  // Helper to convert standard youtube watch urls to embed urls
  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('embed/')) return url;
    
    // Check for youtube.com/watch?v=...
    const ytWatchRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube-nocookie\.com\/embed\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(ytWatchRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=0`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(podcast.video_url);

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. DARK HERO SECTION */}
      <section className="bg-dark-blue text-white pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <Link 
            to="/podcasts" 
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Podcast Episodes</span>
          </Link>
          
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight">
            {podcast.name}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-6 items-center text-xs uppercase tracking-wider text-white/60">
            {podcast.date && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sage" />
                <span>{podcast.date}</span>
              </span>
            )}
            {podcast.duration_info && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sage" />
                <span>{podcast.duration_info}</span>
              </span>
            )}
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-sage" />
              <span>Sean Stewart</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. MEDIA PLAYER & SYNOPSIS */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-10">
        
        {/* Video Player */}
        {embedUrl ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-black shadow-2xl border border-dark-blue/10">
            <iframe 
              src={embedUrl}
              title={podcast.name}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-dark-blue/20 flex flex-col items-center justify-center gap-4 text-dark-blue/60 border border-dark-blue/5 shadow-inner">
            <img src={podcast.cover_image} alt={podcast.name} className="w-full h-full object-cover opacity-20 absolute" />
            <span className="font-semibold text-lg relative z-10">Listen to Audio Podcast</span>
            <p className="text-xs text-dark-blue/40 max-w-sm text-center relative z-10">
              Audio streaming and player widget is available for this episode.
            </p>
          </div>
        )}

        {/* Synopsis Segment */}
        {podcast.synopsis && (
          <div className="bg-[#fcf9f6] p-8 rounded-lg border border-dark-blue/5 card-shadow">
            <h2 className="text-xs uppercase font-bold tracking-widest text-sage mb-3">Episode Synopsis</h2>
            <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
              {podcast.synopsis}
            </p>
          </div>
        )}

        {/* 3. INTERACTIVE TRANSCRIPT DIALOG */}
        {podcast.transcript && podcast.transcript.length > 0 && (
          <div className="flex flex-col gap-8">
            <div className="border-b border-dark-blue/10 pb-4 flex justify-between items-end">
              <h2 className="font-display text-2xl font-bold tracking-wide text-dark-blue">
                Written Transcript
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-widest text-dark-blue/40">Read time: ~12m</span>
            </div>

            {/* Speech bubbles / transcript grid */}
            <div className="flex flex-col gap-6">
              {podcast.transcript.map((line, idx) => {
                const isSean = line.speaker.toLowerCase().includes('sean');
                
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col p-5 rounded-lg border transition-all duration-300 ${
                      isSean 
                        ? 'bg-white border-dark-blue/5 mr-8 md:mr-16 card-shadow' 
                        : 'bg-sage/10 border-sage/10 ml-8 md:ml-16 shadow-sm'
                    }`}
                  >
                    {/* Speaker name */}
                    <span className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${
                      isSean ? 'text-dark-blue' : 'text-sage'
                    }`}>
                      {line.speaker}
                    </span>
                    {/* Speech text */}
                    <p className="text-sm text-dark-blue/85 leading-relaxed">
                      {line.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
