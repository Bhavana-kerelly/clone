import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Headphones, Radio, Sparkles } from 'lucide-react';
import podcastsData from '../data/podcasts.json';

export default function PodcastDetail() {
  const { id } = useParams();
  const podcast = podcastsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (podcast) {
      document.title = `${podcast.name} | KVS Infra Insights`;
    }
  }, [id, podcast]);

  // Spatial Node References
  const stageViewport = useRef(null);
  const soundstageFrame = useRef(null);

  // 3D Mouse Tracking Kinematics
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const hyperSpring = { damping: 35, stiffness: 100, mass: 1 };
  const stageRotateX = useSpring(useTransform(pointerY, [-300, 300], [8, -8]), hyperSpring);
  const stageRotateY = useSpring(useTransform(pointerX, [-500, 500], [-10, 10]), hyperSpring);
  const glintTranslateX = useSpring(useTransform(pointerX, [-500, 500], ["-20%", "120%"]), hyperSpring);

  const handlePointerMovement = (e) => {
    const frame = e.currentTarget.getBoundingClientRect();
    const centerX = e.clientX - frame.left - frame.width / 2;
    const centerY = e.clientY - frame.top - frame.height / 2;
    pointerX.set(centerX);
    pointerY.set(centerY);
  };

  const handlePointerReset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  // Scroll Linked Depth Vector Mapping
  const { scrollYProgress } = useScroll({
    target: stageViewport,
    offset: ["start start", "end end"]
  });

  const ambientGlowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const coreStageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  if (!podcast) {
    return (
      <div className="bg-[#000000] min-h-screen pt-36 pb-24 flex items-center justify-center selection:bg-[#0071e3]">
        <motion.div 
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md bg-[#1c1c1e] p-12 rounded-[38px] border border-[#2d2d30] shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
        >
          <div className="w-16 h-16 bg-[#2c2c2e] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#3a3a3d]">
            <Radio className="w-8 h-8 text-[#0071e3]" />
          </div>
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Episode Not Found</h2>
          <p className="text-sm text-[#86868b] mb-8 leading-relaxed font-light">
            The media podcast episode you are looking for does not exist or has been removed.
          </p>
          <Link 
            to="/podcasts" 
            className="inline-flex h-12 items-center justify-center bg-[#0071e3] text-white hover:bg-[#147ce5] px-8 rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#0071e3]/20"
          >
            Back to podcasts
          </Link>
        </motion.div>
      </div>
    );
  }

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

  // Layout Grid Entrance Profiles
  const sequentialReveal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const genericNodeReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={stageViewport} className="bg-[#000000] text-[#f5f5f7] antialiased selection:bg-[#0071e3] selection:text-white pb-48 overflow-x-hidden relative">
      
      {/* ADVANCED CHROMATIC FIELD OSCILLATORS (DYNAMIC BACKSTAGE GLOWS) */}
      <motion.div style={{ scale: ambientGlowScale }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0 opacity-50">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#0071e3] blur-[160px] opacity-25 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[10%] right-[5%] w-[550px] h-[550px] rounded-full bg-[#bf5af2] blur-[180px] opacity-15 animate-pulse" style={{ animationDuration: '12s' }} />
      </motion.div>

      {/* STAGE HEADER HEADER PLATFORM */}
      <section className="relative pt-44 pb-12 px-6 md:px-12 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={sequentialReveal}
          className="max-w-6xl mx-auto flex flex-col gap-6"
        >
          <motion.div variants={genericNodeReveal} className="overflow-hidden">
            <Link 
              to="/podcasts" 
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b] hover:text-[#0071e3] transition-colors group"
            >
              <span className="w-6 h-6 rounded-full bg-[#1c1c1e] border border-[#2d2d30] flex items-center justify-center transition-transform group-hover:-translate-x-1">
                <ArrowLeft className="w-3 h-3 text-white" />
              </span>
              <span>All Leadership Insights</span>
            </Link>
          </motion.div>
          
          <div className="overflow-hidden py-2">
            <motion.h1 
              variants={genericNodeReveal}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] max-w-5xl"
            >
              {podcast.name}
            </motion.h1>
          </div>

          {/* Premium Metadata Capsule Bars */}
          <motion.div 
            variants={genericNodeReveal}
            className="flex flex-wrap gap-4 items-center text-xs font-medium tracking-wide text-[#86868b] border-t border-[#2d2d30]/70 pt-8 mt-4"
          >
            {podcast.date && (
              <span className="flex items-center gap-2 bg-[#1c1c1e]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#2d2d30]">
                <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                <span className="text-[#e8e8ed]">{podcast.date}</span>
              </span>
            )}
            {podcast.duration_info && (
              <span className="flex items-center gap-2 bg-[#1c1c1e]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#2d2d30]">
                <Clock className="w-3.5 h-3.5 text-[#bf5af2]" />
                <span className="text-[#e8e8ed]">{podcast.duration_info}</span>
              </span>
            )}
            <span className="flex items-center gap-2 bg-[#1c1c1e]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#2d2d30]">
              <User className="w-3.5 h-3.5 text-[#ff453a]" />
              <span className="text-[#e8e8ed]">KVS Infra Team</span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* MAIN SPATIAL THEATRE AREA */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col gap-20 relative z-20">
        
        {/* INTERACTIVE 3D GLASS STAGE MECHANICS */}
        <motion.div 
          style={{ scale: coreStageScale }}
          className="w-full relative z-30"
        >
          <div 
            className="w-full h-full select-none cursor-grab active:cursor-grabbing"
            style={{ perspective: "1200px" }}
            onPointerMove={handlePointerMovement}
            onPointerLeave={handlePointerReset}
          >
            <motion.div
              ref={soundstageFrame}
              style={{ rotateX: stageRotateX, rotateY: stageRotateY, transformStyle: "preserve-3d" }}
              className="w-full aspect-video rounded-[40px] overflow-hidden bg-[#1c1c1e] shadow-[0_45px_130px_rgba(0,0,0,0.95)] border border-[#333336] relative group transition-all duration-300"
            >
              {/* Dynamic Matrix Ray Overlay */}
              <motion.div 
                style={{ left: glintTranslateX }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-40 pointer-events-none mix-blend-overlay w-1/3 -skew-x-20 filter blur-xl"
              />

              {embedUrl ? (
                <iframe 
                  src={embedUrl}
                  title={podcast.name}
                  className="w-full h-full relative z-10 border-0"
                  style={{ transform: "translateZ(30px)" }} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full relative flex flex-col items-center justify-center gap-6 text-center px-6 overflow-hidden">
                  <img 
                    src={podcast.cover_image} 
                    alt={podcast.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-15 filter grayscale blur-md scale-105" 
                  />
                  <div 
                    className="w-20 h-20 rounded-3xl bg-black/60 border border-[#444] flex items-center justify-center relative z-20 shadow-2xl backdrop-blur-xl"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <Headphones className="w-8 h-8 text-[#0071e3] animate-pulse" />
                  </div>
                  <span className="font-semibold text-2xl text-white relative z-20 tracking-tight" style={{ transform: "translateZ(35px)" }}>
                    Listen to Audio Podcast
                  </span>
                  <p className="text-sm text-[#86868b] max-w-sm relative z-20 font-light" style={{ transform: "translateZ(20px)" }}>
                    Audio streaming and player widget is available for this episode.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* EPISODE SYNOPSIS - FLOATING STRUCTURAL BRACKET */}
        {podcast.synopsis && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, z: -30 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1c1c1e]/40 backdrop-blur-2xl p-10 sm:p-14 rounded-[36px] border border-[#2d2d30] shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3a3a3d] to-transparent" />
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-4 h-4 text-[#bf5af2]" />
              <h2 className="text-xs uppercase font-bold tracking-[0.25em] text-[#86868b]">Episode Synopsis</h2>
            </div>
            <p className="text-base sm:text-xl text-[#d2d2d7] leading-relaxed text-justify font-light tracking-wide">
              {podcast.synopsis}
            </p>
          </motion.div>
        )}

        {/* INTERACTIVE TEXT WRITTEN TRANSCRIPT SECTION */}
        {podcast.transcript && podcast.transcript.length > 0 && (
          <div className="flex flex-col gap-12 mt-10">
            <div className="border-b border-[#2d2d30] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#86868b] block">Audio Logs</span>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                  Written Transcript
                </h2>
              </div>
              <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#86868b] bg-[#1c1c1e] border border-[#2d2d30] px-4 py-2 rounded-full h-8 flex items-center">
                Read time: ~12m
              </span>
            </div>

            {/* HIGH-FIDELITY TRACK KINETIC CHASSIS */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={sequentialReveal}
              className="flex flex-col gap-8 relative"
            >
              {/* Central Alignment Wire Geometry */}
              <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-gradient-to-b from-[#2d2d30] via-[#2d2d30]/20 to-transparent z-0" />

              {podcast.transcript.map((line, idx) => {
                const isSean = line.speaker.toLowerCase().includes('sean');
                
                return (
                  <motion.div 
                    key={idx} 
                    variants={genericNodeReveal}
                    whileHover={{ scale: 1.02 }}
                    className={`flex flex-col p-8 rounded-[28px] border backdrop-blur-xl transition-all duration-500 z-10 w-full md:w-[calc(50%-24px)] relative ${
                      isSean 
                        ? 'bg-[#1c1c1e]/70 border-[#3a3a3d] md:self-start shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                        : 'bg-[#0a0a0c]/80 border-[#2d2d30]/70 md:self-end md:ml-auto shadow-sm'
                    }`}
                  >
                    {/* Anchor Pin Node */}
                    <div className={`absolute w-3 h-3 rounded-full border-2 bg-black top-9 hidden md:block z-20 ${
                      isSean ? '-right-[31px] border-[#0071e3]' : '-left-[31px] border-[#bf5af2]'
                    }`} />

                    {/* Speaker Metadata Badge Component */}
                    <span className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-4 inline-block ${
                      isSean ? 'text-[#0071e3]' : 'text-[#bf5af2]'
                    }`}>
                      {line.speaker}
                    </span>
                    
                    {/* Speech Text Node */}
                    <p className="text-base text-[#e8e8ed] leading-relaxed font-light tracking-wide">
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