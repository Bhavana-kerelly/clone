import React, { useEffect } from 'react';
import { Mail, Phone, Award, Shield, User } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Stewart & Co Real Estate | Barbados Real Estate";
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    { text: "Dear Sean,…I want to thank you from the bottom of my heart for all your time, patience, good advice, and company, you really made a dreary task quite an enjoyable experience.", author: "MR" },
    { text: "Sean...I want to thank you personally and on behalf of my family for all you have done for us. You have really been perfect for us in helping our transition into a property in the UK.", author: "CB" },
    { text: "Thank you Sean - your integrity and professionalism have assisted greatly in securing the sale.", author: "KC" },
    { text: "Thank you Sean. F and I could not have hoped to find a property consultant that could have assisted us more with this whole process.", author: "DM" },
    { text: "...All of this happened only because of the professionality, seriousness and honest approach Sean has manifested. He has always effortlessly gone into supporting us with info and facts and delivering on every promise made.", author: "DB" }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/sp6xPnKADyG1xIhRbtH9H9syU4.jpg" 
            alt="Stewart & Co office background" 
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-dark-blue/45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            Boutique Agency
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            About Stewart &amp; Co.
          </h1>
          <div className="w-12 h-0.5 bg-sage mt-4 mb-6"></div>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Committed to connecting you with exceptional properties in Barbados. Stewart &amp; Co Real Estate provides personalized, premium service for buyers and renters every step of the way.
          </p>
        </div>
      </section>

      {/* 2. ABOUT SEAN SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image card */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden bg-dark-blue/10 card-shadow border border-dark-blue/5">
            <img 
              src="https://framerusercontent.com/images/LXBNzM4Rz0JscKaKSl5mB0eGPM.jpg" 
              alt="Sean Stewart - Principal of Stewart & Co" 
              className="w-full h-full object-cover"
            />
            {/* Overlay banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-blue/80 to-transparent p-6 text-white text-left">
              <span className="text-[9px] uppercase tracking-widest text-sage block font-bold mb-1">Founder / Broker</span>
              <span className="font-display text-2xl font-bold">Sean Stewart</span>
            </div>
          </div>
        </div>

        {/* Profile Details text */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage">
            Agency Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-blue leading-tight">
            About Sean
          </h2>
          <div className="w-12 h-0.5 bg-sage mb-2"></div>
          
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Sean Stewart, the founder of Stewart &amp; Co. Real Estate, is a veteran real estate broker with over 25 years of experience in the luxury residential market. His career spans three countries, giving him a rare global view of property investments alongside extensive local knowledge of Barbados' Platinum Coast.
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Sean operates with a single core philosophy: to ensure a transparent, seamless, and pleasant transaction for all parties concerned. Known for his reliability, honesty, and professional integrity, he acts as an expert personal advisor for overseas property buyers seeking a retreat or investment in Barbados.
          </p>

          {/* Credentials Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border-t border-dark-blue/10 pt-6">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-sage shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-dark-blue block">Bespoke Guidance</span>
                <p className="text-[11px] text-dark-blue/60 mt-1 leading-relaxed">
                  Every client receives customized strategies tailored to their lifestyle preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-sage shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-dark-blue block">Transparent Operations</span>
                <p className="text-[11px] text-dark-blue/60 mt-1 leading-relaxed">
                  Full disclosure, clear legal processes, and honest estimations of fees/outgoings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS LISTING GRID */}
      <section className="py-20 border-t border-dark-blue/5 bg-[#2e415703]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
              Reviews
            </span>
            <h2 className="font-display text-3xl font-bold tracking-wide text-dark-blue mb-4">
              What Our Clients Say
            </h2>
            <div className="w-12 h-0.5 bg-sage"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#fcf9f6] p-8 rounded border border-dark-blue/5 card-shadow flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-dark-blue/80 italic leading-relaxed text-justify mb-6">
                  {t.text}
                </p>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sage block border-t border-dark-blue/5 pt-4">
                  &mdash; Client {t.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
