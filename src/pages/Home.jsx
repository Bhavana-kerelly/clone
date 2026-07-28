import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Check, ArrowRight, Compass, Home as HomeIcon, ShieldCheck, Building2, TrendingUp, Users, Flag, MapPin, Maximize } from 'lucide-react';
import propertiesData from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';
import HeroSection from '../components/HeroSection';
function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  const numValue = parseInt(value);
  const isNumber = !isNaN(numValue);

  useEffect(() => {
    if (!isNumber) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();
          
          const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easeOut * numValue));
              requestAnimationFrame(updateCounter);
            } else {
              setCount(numValue);
            }
          };
          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numValue, isNumber]);

  if (!isNumber) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBeds, setSearchBeds] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
  const projectScrollRef = useRef(null);
  const scrollProjects = (direction) => {
    if (projectScrollRef.current) {
      const scrollAmount = 400; // width of one card + gap
      projectScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Featured Properties list
  const featuredIds = [
    'kvs-meadows-tirupati',
    'kvs-green-county',
    'kvs-serenity-villas',
    'kvs-emerald-enclave',
    'kvs-royal-gardens',
    'kvs-heritage-greens',
    'kvs-noida-heights',
    'kvs-gurugram-elite'
  ];

  const featuredProperties = Object.values(propertiesData).filter(p => featuredIds.includes(p.id));

  // Testimonials
  const testimonials = [
    { text: "KVS Infra made the entire plot booking process transparent and simple. From site visit to registration, every step was handled with real professionalism.", author: "R.S.", image: "/images/client_rs.png" },
    { text: "We invested in KVS Meadows two years ago and the appreciation has been remarkable. The layout, roads, and drainage were exactly as promised.", author: "V.K.", image: "/images/client_vk.png" },
    { text: "The team's honesty about titles and documentation gave us complete confidence to buy our first plot in Tirupati.", author: "P.N.", image: "/images/client_pn.png" },
    { text: "From the initial consultation to the final registration, KVS Infra supported us at every stage of buying our villa.", author: "A.R.", image: "/images/client_ar.png" },
    { text: "KVS Infra's Chandragiri layout is beautifully planned. The open spaces and infrastructure quality are far above what we expected for the price.", author: "S.M.", image: "/images/client_sm.png" }
  ];

  useEffect(() => {
    document.title = "KVS Infra | Shaping Land. Creating Value.";
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result-sales?location=${searchLocation}&beds=${searchBeds}&price=${searchPrice}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="bg-[#07090E] text-[#F5F5F7] font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden">
      
      {/* 1. PREMIUM HERO — two-column cinematic slider */}
      <HeroSection />

      {/* 2. ABOUT US SECTION */}
      <div className="bg-white overflow-hidden">
      <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-[#07090E] mx-4 lg:mx-8 xl:mx-auto max-w-[1440px] my-16 md:my-24 rounded-[2rem] border-[4px] border-white overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.15)]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/kvs/about-section-bg.jpg"
            alt="City skyline"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/90 via-[#07090E]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Vision & Stats */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-white mb-2 tracking-tight leading-[1.1]">
                BUILT ON <span style={{ color: '#e63535' }}>VISION.</span><br/>
                DRIVEN BY <span style={{ color: '#e63535' }}>SCALE.</span>
              </h2>

              {/* Paragraph */}
              <p className="text-white/80 text-[1rem] md:text-[1.1rem] leading-relaxed max-w-2xl mt-6 mb-12">
                Since 2019, KVS Infra has been transforming strategic land into thriving communities across South India—creating sustainable developments designed for long-term value.
              </p>

              {/* Stats grid */}
              <div className="w-full">
                {/* Row 1 (3 items) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 max-w-3xl">
                  {/* Card 1 */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <Building2 className="w-8 h-8 text-[#e63535] mb-3 opacity-90" />
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        <AnimatedNumber value={25} suffix="+ Lakh" />
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white/80 mb-1">Sq.Ft.</span>
                    <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium mt-1">DEVELOPED & DELIVERED</span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <MapPin className="w-8 h-8 text-[#e63535] mb-3 opacity-90" />
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        <AnimatedNumber value={1500} suffix="+" />
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white/80 mb-1">Acres</span>
                    <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium mt-1">LAND BANK</span>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <TrendingUp className="w-8 h-8 text-[#e63535] mb-3 opacity-90" />
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        ₹<AnimatedNumber value={1000} suffix=" Cr" />
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white/80 mb-1">Group Turnover</span>
                    <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium mt-1">GROUP VALUE</span>
                  </div>
                </div>

                {/* Row 2 (2 items) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[32rem]">
                   {/* Card 4 */}
                   <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <MapPin className="w-8 h-8 text-[#e63535] mb-3 opacity-90" />
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        <AnimatedNumber value={4} suffix="+" />
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white/80 mb-1">Cities</span>
                    <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium mt-1">STRONG PRESENCE</span>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <Maximize className="w-8 h-8 text-[#e63535] mb-3 opacity-90" />
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold tracking-tight text-white">
                        Growing
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-white/80 mb-1">Metro Expansion</span>
                    <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium mt-1">FUTURE READY</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Timeline */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end relative h-full">
              
              <div className="flex flex-col gap-10 lg:gap-14 py-8 relative z-10 w-full max-w-[280px]">
                {/* Vertical Line */}
                <div className="absolute left-[1.4rem] top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#ff3b3b]/60 to-transparent -z-10"></div>
                
                {[
                  { icon: Flag, title: '2019', sub: 'Founded' },
                  { icon: Users, title: 'First 100', sub: 'Acres' },
                  { icon: Building2, title: '500+', sub: 'Projects' },
                  { icon: Maximize, title: 'Expansion', sub: 'Across South India' },
                  { icon: TrendingUp, title: 'Today', sub: 'And Beyond' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#e63535]/40 bg-[#07090E] flex items-center justify-center flex-shrink-0 group-hover:border-[#e63535] group-hover:shadow-[0_0_15px_rgba(230,53,53,0.3)] transition-all duration-500">
                      <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-white/80 transition-colors [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">{item.title}</h4>
                      <p className="text-white text-sm font-semibold [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">{item.sub}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>


        </div>
      </section>
      </div>

      {/* 3. LEADERSHIP SECTION */}
      <section className="pt-20 pb-16 px-6 sm:px-12 lg:px-20 bg-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-14 tracking-tight">
          Leadership
        </h2>

        {/* Two cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-4xl mx-auto">

          {[
            {
              name: 'CHEVIREDDY MOHITH REDDY',
              education: '(MS in London)',
              title: 'Managing Director',
              photo: '/logo.png',
              points: [
                'Over 7 years of experience in land development, project planning, and strategic land banking across Tirupati, Hyderabad, Chennai and Bangalore.',
                'Successfully acquired, developed and delivered 1,000+ acres of premium agricultural and non-agricultural land to MNCs and private investors.',
              ],
            },
            {
              name: 'CHEVVIREDDY HARSHITH',
              education: '(MS in London)',
              title: 'Executive Director',
              photo: '/logo.png',
              points: [
                'Leads business development, investor relations and expansion strategy for KVS Infra across new geographies.',
                'Drives digital initiatives, client engagement and marketing operations ensuring best-in-class customer experience.',
              ],
            },
          ].map(({ name, education, title, photo, points }) => (
            <div
              key={name}
              className="flex-1 max-w-sm mx-auto flex flex-col items-center text-center bg-[#f5f5f5] rounded-2xl px-8 pt-0 pb-10 relative"
            >
              {/* Circular photo — overflows card top */}
              <div
                className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-14 mb-5 bg-white flex-shrink-0"
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Name */}
              <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#7cb342' }}>
                {name}
              </p>
              
              {education && (
                <p className="text-[10px] font-bold tracking-widest mb-1" style={{ color: '#7cb342' }}>
                  {education}
                </p>
              )}

              {/* Title */}
              <p className="text-sm font-semibold text-gray-800 mb-5">{title}</p>

              {/* Bullet points */}
              <ul className="text-left text-sm text-gray-600 leading-relaxed space-y-3">
                {points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: '#1a2b5e' }}>
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-tight">
            Our Projects
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 rounded-full" style={{ background: '#e63535' }} />
        </div>

        {/* Horizontal scroll row with Navigation Buttons */}
        <div className="relative group max-w-full">
          {/* Left Navigation Button */}
          <button 
            onClick={() => scrollProjects('left')}
            className="absolute left-2 md:-left-4 top-[40%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md text-[#1a2b5e] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white border border-gray-100 hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 ml-[-2px]" />
          </button>

          {/* Right Navigation Button */}
          <button 
            onClick={() => scrollProjects('right')}
            className="absolute right-2 md:-right-4 top-[40%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md text-[#1a2b5e] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white border border-gray-100 hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 mr-[-2px]" />
          </button>

          <div
            ref={projectScrollRef}
            className="flex gap-5 overflow-x-auto pb-4 proj-scroll px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
          >
            <style>{`.proj-scroll::-webkit-scrollbar { display: none; }`}</style>

          {[
            { 
              name: 'CMR Gardens', 
              location: 'Tirupati-Chennai Highway', 
              details: 'TUDA Approved • ISO 9001 • Swimming Pool • Mini Cinema Theater',
              image: '/images/kvs/project-1.jpg' 
            },
            { 
              name: 'KVS Prakruti Vanam', 
              location: 'Tirupati', 
              details: 'Premium Gated Community • Eco-friendly Living • Modern Amenities',
              image: '/images/kvs/project-2.jpg' 
            },
            { 
              name: 'KVS Pudi', 
              location: 'Pudi, Tirupati', 
              details: 'Strategic Location • Clear Title • Vaastu Compliant',
              image: '/images/kvs/project-3.jpg' 
            },
            { 
              name: 'KVS Vakulamatha', 
              location: 'Tirupati', 
              details: 'Excellent Connectivity • Peaceful Environment • High Appreciation',
              image: '/images/kvs/project-4.jpg' 
            },
            { 
              name: 'KVS Harekrishna', 
              location: 'Near Tiruchanur Temple', 
              details: 'Premium Residential Plots • Club House • Swimming Pool • Open Air Theatre',
              image: '/images/kvs/project-5.jpg' 
            },
            { 
              name: 'KVS Manglam', 
              location: 'Tirupati', 
              details: 'Luxury Living • Integrated Township • 24/7 Security',
              image: '/images/kvs/project-6.jpg' 
            },
            { 
              name: 'Attibele Construction', 
              location: 'Attibele', 
              details: 'Premium Construction • Urban Infrastructure',
              image: '/images/kvs/project-7.jpg' 
            },
          ].map(({name, location, details, image}) => (
            <div
              key={name}
              className="proj-card group flex-shrink-0 w-72 h-[24rem] rounded-2xl flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 bg-white"
            >
              {/* Image Container */}
              <div className="w-full h-44 overflow-hidden relative flex-shrink-0">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-bold text-lg leading-tight group-hover:text-[#e63535] transition-colors">{name}</p>
                  <p className="text-white/90 text-xs mt-1.5 flex items-center gap-1 font-medium tracking-wide">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {location}
                  </p>
                </div>
              </div>
              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                <h4 className="text-[11px] font-bold tracking-widest text-[#1a2b5e] uppercase mb-3 border-b border-gray-100 pb-2">Project Highlights</h4>
                <ul className="text-[13px] text-gray-600 space-y-2.5 mb-4 flex-grow">
                  {details.split('•').map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e63535] mt-1.5 flex-shrink-0"></span>
                      <span className="leading-snug font-medium">{detail.trim()}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-full pt-3 border-t border-gray-100">
                  <span className="text-[#e63535] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Project <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Background */}
        <img
          src="/images/kvs/aerial-2.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f1923 0%, #1a2b5e 100%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Header */}
          <p className="text-xs font-bold tracking-[0.28em] uppercase mb-3" style={{ color: '#e63535' }}>
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-12">
            Trusted by Industry Leaders
          </h2>

          {/* Glassmorphism grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Aurobindo',  sub: 'Pharmaceuticals & Real Estate', logo: '/logos/autobind.png' },
              { name: 'TVS',        sub: 'Mobility & Infrastructure',     logo: '/logos/tvs.png' },
              { name: 'Ramky',      sub: 'Infrastructure & Development',  logo: '/logos/ramky.png' },
            ].map(({ name, sub, logo }) => (
              <div
                key={name}
                className="group relative flex flex-col items-center justify-center py-10 px-6 rounded-2xl cursor-default transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: '0 0 40px rgba(230,53,53,0.2)' }}
                />

                {/* Red accent line at top */}
                <div className="w-8 h-0.5 rounded-full mb-5" style={{ background: '#e63535' }} />

                {/* Client Logo */}
                {logo && (
                  <img 
                    src={logo} 
                    alt={`${name} logo`} 
                    className="h-20 w-auto max-w-[90%] object-contain p-3 mb-4 group-hover:scale-105 transition-transform duration-300 rounded-xl bg-white"
                  />
                )}

                {/* Client name */}
                <p className="text-2xl font-bold text-white tracking-wide group-hover:text-[#e63535] transition-colors duration-300">
                  {name}
                </p>

                {/* Sub-label */}
                <p className="text-xs text-white/45 mt-2 tracking-wide leading-snug">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES GRID */}

      {featuredProperties && featuredProperties.length > 0 && (
        <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto relative z-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="group relative h-[560px] rounded-[2.8rem] bg-[#0B0F19] overflow-hidden border border-white/[0.04] transition-all duration-[1000ms] cubic-bezier(0.16,1,0.3,1) hover:scale-[1.015] hover:border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.6)] cursor-pointer"
                style={{ 
                  perspective: '1200px',
                  animation: `apple-slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms both`
                }}
              >
                {/* Layer 1: Parallax Deep Background Image Asset */}
                <div className="absolute inset-0 z-0 origin-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:rotate-[0.5deg]">
                  <img 
                    src={property.image || "/images/kvs/hero.jpg"} 
                    alt={property.title} 
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                  />
                  {/* Layered Reactive Atmospheric Scrims */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-black/20 to-black/30 transition-all duration-700 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-100 group-hover:from-black/70 transition-all duration-700"></div>
                </div>

                {/* Layer 2: Floating UI Badges (Animate downward on card entry) */}
                <div className="absolute top-8 inset-x-8 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.18em] uppercase text-white bg-black/30 backdrop-blur-xl border border-white/[0.06] transition-all duration-500 transform group-hover:translate-y-[-2px] group-hover:bg-black/50">
                    {property.location || "Tirupati"}
                  </span>
                  {property.beds && (
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.15em] text-sage bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                      <span className="w-1 h-1 rounded-full bg-sage group-hover:bg-white transition-colors"></span>
                      <span>{property.beds} BHK</span>
                    </div>
                  )}
                </div>

                {/* Layer 3: Kinetic Content Interface Terminal */}
                <div className="absolute inset-x-8 bottom-8 z-20 text-left flex flex-col justify-end pointer-events-auto">
                  
                  {/* Accent Line Indicator */}
                  <div className="w-6 h-[2px] bg-sage mb-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-16 group-hover:bg-white"></div>
                  
                  <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-sage mb-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                    Featured Development
                  </span>
                  
                  {/* Title Fluid Shift */}
                  <h3 className="text-2xl sm:text-3xl font-extralight tracking-tight text-white mb-4 max-w-xs leading-[1.2] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    {property.name}
                  </h3>

                  {/* Value and Mechanical Interaction Grid Box */}
                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-5 mt-2 relative">
                    
                    {/* Sliding Value Metrics */}
                    <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      <span className="block text-[8px] uppercase font-bold tracking-[0.3em] text-white/30 mb-1">Starting Price</span>
                      <span className="text-xl font-light text-white tracking-wide">
                        {property.price ? property.price : "Price Upon Request"}
                      </span>
                    </div>

                    {/* The Cinematic "Wow-factor" Action Terminal Circle */}
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/10 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-[#07090E] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      {/* Outer Micro-Orbit Ring */}
                      <div className="absolute inset-[-4px] rounded-full border border-white/0 group-hover:border-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      
                      <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </div>
                  </div>
                </div>

                {/* Layer 4: Interactive Specular Shimmer Layer (Flashes across the card on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"></div>
                
                {/* Border Overlay Shield */}
                <div className="absolute inset-0 rounded-[2.8rem] border border-white/0 group-hover:border-white/[0.08] transition-all duration-700 pointer-events-none z-40"></div>
              </div>
            ))}
          </div>


          {/* Extra Engine Configurations */}
          <style>{`
            @keyframes apple-slide-up {
              0% { opacity: 0; transform: translateY(40px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes shimmer-text {
              0% { bg-position: 0% 50%; }
              50% { bg-position: 100% 50%; }
              100% { bg-position: 0% 50%; }
            }
          `}</style>
        </section>
      )}




      {/* Cinematic Engine Keyframes Style Segment */}
      <style>{`
        @keyframes apple-scale {
          0% { transform: scale(1.01); }
          100% { transform: scale(1.08); }
        }
        @keyframes apple-fade-up {
          0% { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .font-cursive {
          font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
}