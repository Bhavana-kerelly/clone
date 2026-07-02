import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Headphones } from 'lucide-react';
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

  // Dynamic Pointer Tracking Matrix for 3D Kinetic Tilt
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Smooth out spring physics values to feel weighty and physical
  const physicsConfig = { damping: 30, stiffness: 90, mass: 1.2 };
  const tiltX = useSpring(useTransform(cardY, [-300, 300], [10, -10]), physicsConfig);
  const tiltY = useSpring(useTransform(cardX, [-500, 500], [-12, 12]), physicsConfig);
  const glintX = useSpring(useTransform(cardX, [-500, 500], ["0%", "100%"]), physicsConfig);

  const handlePointerMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    cardX.set(mouseX);
    cardY.set(mouseY);
  };

  const handlePointerLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  if (!podcast) {
    return (
      <div className="bg-[#000] min-h-screen pt-36 pb-24 flex items-center justify-center selection:bg-[#0071e3]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md bg-[#1c1c1e] p-10 rounded-[28px] border border-[#2d2d30] shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Episode Not Found</h2>
          <p className="text-sm text-[#86868b] mb-8 leading-relaxed">
            The media podcast episode you are looking for does not exist or has been removed.
          </p>
          <Link 
            to="/podcasts" 
            className="inline-flex items-center justify-center bg-[#0071e3] text-white hover:bg-[#147ce5] px-6 py-3 rounded-full font-medium text-xs tracking-wide transition-colors duration-300"
          >
            Back to podcasts
          </Link>
        </motion.div>
      </div>
    );
  }

  // Helper to convert standard youtube watch urls to embed urls
  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('embed/')) return url;
    
    const ytWatchRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube-nocookie\.com\/embed\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(ytWatchRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=0`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(podcast.video_url);

  // Animation Variant Sets for Text Blocks
  const revealContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const textNodeReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#000] min-h-screen text-[#f5f5f7] antialiased selection:bg-[#0071e3] selection:text-white pb-32 overflow-x-hidden">
      
      {/* 1. CINEMATIC BACKGROUND BLUR GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#0071e3] blur-[140px] opacity-20" />
        <div className="absolute top-[5%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#86868b] blur-[120px] opacity-10" />
      </div>

      {/* 2. PREMIUM HERO PORTAL */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealContainer}
          className="max-w-5xl mx-auto flex flex-col gap-6"
        >
          <motion.div variants={textNodeReveal}>
            <Link 
              to="/podcasts" 
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#86868b] hover:text-[#0071e3] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>All Podcast Episodes</span>
            </Link>
          </motion.div>
          
          <motion.h1 
            variants={textNodeReveal}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-4xl"
          >
            {podcast.name}
          </motion.h1>

          {/* Metadata Grid */}
          <motion.div 
            variants={textNodeReveal}
            className="flex flex-wrap gap-6 items-center text-xs font-medium tracking-wide text-[#86868b] border-t border-[#2d2d30] pt-6 mt-2"
          >
            {podcast.date && (
              <span className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2 rounded-full border border-[#2d2d30]">
                <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                <span className="text-white">{podcast.date}</span>
              </span>
            )}
            {podcast.duration_info && (
              <span className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2 rounded-full border border-[#2d2d30]">
                <Clock className="w-3.5 h-3.5 text-[#0071e3]" />
                <span className="text-white">{podcast.duration_info}</span>
              </span>
            )}
            <span className="flex items-center gap-2 bg-[#1c1c1e] px-4 py-2 rounded-full border border-[#2d2d30]">
              <User className="w-3.5 h-3.5 text-[#0071e3]" />
              <span className="text-white">Sean Stewart</span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE 3D COMPONENT CANVAS AREA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex flex-col gap-12 relative z-20">
        
        {/* Dynamic 3D Matrix Stage */}
        <div 
          className="w-full relative z-30"
          style={{ perspective: "1000px" }} // Activates pure spatial CSS depth mapping
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
            className="w-full aspect-video rounded-[32px] overflow-hidden bg-[#1c1c1e] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-[#333336] relative transition-shadow duration-300 hover:shadow-[0_45px_120px_rgba(0,113,227,0.15)]"
          >
            {/* Dynamic Ambient Reflective Shimmer Overlays */}
            <motion.div 
              style={{ left: glintX }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-40 pointer-events-none mix-blend-overlay w-1/2 -skew-x-12 filter blur-sm"
            />

            {embedUrl ? (
              <iframe 
                src={embedUrl}
                title={podcast.name}
                className="w-full h-full relative z-10 border-0"
                style={{ transform: "translateZ(20px)" }} // Throws the layer forward inside the 3D grid container
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full relative flex flex-col items-center justify-center gap-4 text-center px-6 overflow-hidden">
                <img 
                  src={podcast.cover_image} 
                  alt={podcast.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 filter blur-sm scale-105" 
                />
                <div 
                  className="w-16 h-16 rounded-full bg-[#2c2c2e] border border-[#444] flex items-center justify-center relative z-20 shadow-xl"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Headphones className="w-6 h-6 text-[#0071e3]" />
                </div>
                <span className="font-semibold text-xl text-white relative z-20" style={{ transform: "translateZ(30px)" }}>
                  Listen to Audio Podcast
                </span>
                <p className="text-xs text-[#86868b] max-w-sm relative z-20" style={{ transform: "translateZ(20px)" }}>
                  Audio streaming and player widget is available for this episode.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Synopsis Segment */}
        {podcast.synopsis && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1c1c1e]/60 backdrop-blur-xl p-8 sm:p-10 rounded-[28px] border border-[#2d2d30] shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-[4px] h-0 bg-[#0071e3] transition-all duration-500 group-hover:h-full" />
            <h2 className="text-xs uppercase font-semibold tracking-widest text-[#86868b] mb-4">Episode Synopsis</h2>
            <p className="text-sm sm:text-base text-[#d2d2d7] leading-relaxed text-justify font-light">
              {podcast.synopsis}
            </p>
          </motion.div>
        )}

        {/* 4. WRITTEN TRANSCRIPT TIMELINE CHASSIS */}
        {podcast.transcript && podcast.transcript.length > 0 && (
          <div className="flex flex-col gap-8 mt-4">
            <div className="border-b border-[#2d2d30] pb-6 flex justify-between items-end">
              <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-white">
                Written Transcript
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#86868b] bg-[#1c1c1e] border border-[#2d2d30] px-3 py-1 rounded-full">
                Read time: ~12m
              </span>
            </div>

            {/* Structured Conversational Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={revealContainer}
              className="flex flex-col gap-6"
            >
              {podcast.transcript.map((line, idx) => {
                const isSean = line.speaker.toLowerCase().includes('sean');
                
                return (
                  <motion.div 
                    key={idx} 
                    variants={textNodeReveal}
                    whileHover={{ scale: 1.01, backgroundColor: isSean ? "#1c1c1f" : "rgba(28,28,30,0.4)" }}
                    className={`flex flex-col p-6 rounded-[22px] border transition-all duration-300 ${
                      isSean 
                        ? 'bg-[#1c1c1e] border-[#2d2d30] mr-6 md:mr-20 shadow-md' 
                        : 'bg-[#1c1c1e]/30 border-[#2d2d30]/50 ml-6 md:ml-20 shadow-sm'
                    }`}
                  >
                    {/* Speaker Avatar Metadata */}
                    <span className={`text-[10px] uppercase font-bold tracking-widest mb-3 inline-block ${
                      isSean ? 'text-[#0071e3]' : 'text-[#86868b]'
                    }`}>
                      {line.speaker}
                    </span>
                    
                    {/* Conversational prose */}
                    <p className="text-sm sm:text-base text-[#e8e8ed] leading-relaxed font-light">
                      {line.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}