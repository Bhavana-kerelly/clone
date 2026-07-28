import React, { useState, useEffect } from 'react';
import { Mail, MapPin, CheckCircle, Clock, Phone, Globe } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact KVS Infra | Land & Development";
    window.scrollTo(0, 0);
  }, []);

  const [formSent, setFormSent] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello KVS Infra,

My name is ${formName}. 
Phone: ${formPhone}
Email: ${formEmail}

Message: ${formMsg}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/919247999799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMsg('');
    }, 6000);
  };

  return (
    <div className="bg-[#1e2a3a] min-h-screen pt-32 pb-24 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            GET IN TOUCH
          </span>
          <div className="w-12 h-[1px] bg-sage/60"></div>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* LEFT SECTION: CONTACT INFO CARDS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Primary Details Card */}
            <div className="relative bg-[#132238] border border-white/[0.06] p-10 rounded-[2rem] shadow-2xl flex flex-col gap-8 overflow-hidden flex-1 justify-between">
              
              {/* Architectural Overlay Fade */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] opacity-65 pointer-events-none">
                <img 
                  src="/images/kvs/project-5.jpg" 
                  alt="" 
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#132238] to-transparent"></div>
              </div>

              {/* Header Text */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#c4a468] block mb-2">GET IN TOUCH</span>
                <h2 className="font-display text-3xl font-light leading-tight">
                  Connect with the <br />
                  <span className="font-serif italic font-normal text-[#c4a468]">KVS Infra</span> Team
                </h2>
                <div className="w-12 h-[1px] bg-[#c4a468]/50 mt-4"></div>
              </div>

              {/* Main Intro */}
              <div className="relative z-10 flex flex-col gap-4 text-xs text-white/70 leading-relaxed font-light">
                <p>
                  Whether you're exploring residential projects, plotted developments, agricultural land, strategic investment opportunities, or upcoming projects, our experienced team is here to guide you every step of the way.
                </p>
                <p>
                  Reach out for project details, site visits, investment guidance, or any questions you may have.
                </p>
              </div>

              {/* Contact Icons Column */}
              <div className="relative z-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8">
                
                {/* Phone 1 */}
                <a href="tel:+919247999799" className="flex items-center gap-4 group text-left">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sage group-hover:bg-[#c4a468]/20 transition-all duration-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block font-bold mb-0.5">PHONE</span>
                    <span className="text-xs font-medium text-white/90 group-hover:text-sage transition-colors">+91 9247999799</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@kvsgroup.co.in" className="flex items-center gap-4 group text-left">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sage group-hover:bg-[#c4a468]/20 transition-all duration-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block font-bold mb-0.5">EMAIL</span>
                    <span className="text-xs font-medium text-white/90 group-hover:text-sage transition-colors">info@kvsgroup.co.in</span>
                  </div>
                </a>

                {/* Website */}
                <a href="https://www.kvsgroup.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group text-left">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sage group-hover:bg-[#c4a468]/20 transition-all duration-300 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block font-bold mb-0.5">WEBSITE</span>
                    <span className="text-xs font-medium text-white/90 group-hover:text-sage transition-colors">www.kvsgroup.co.in</span>
                  </div>
                </a>

                {/* Address / Headquarters */}
                <div className="flex items-start gap-4 text-left">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sage shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block font-bold mb-1">ADDRESS</span>
                    <span className="text-[11px] font-medium text-white/90 block mb-2 leading-tight">
                      <strong className="text-white/50 block text-[9px] mb-0.5 uppercase tracking-wider font-bold">Corporate</strong>
                      Auro Galaxy, Hyderabad
                    </span>
                    <span className="text-[11px] font-medium text-white/90 block leading-tight">
                      <strong className="text-white/50 block text-[9px] mb-0.5 uppercase tracking-wider font-bold">Registered</strong>
                      1-4, Thummalagunta, Tirupati Rural, Tirupati District-517502
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Response Time Card */}
            <div className="bg-[#132238]/60 border border-white/[0.06] p-8 rounded-[1.5rem] shadow-xl flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-sage shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">RESPONSE TIME</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  We value prompt and transparent communication. Our team reviews all enquiries daily and typically responds within 24 business hours. For urgent assistance or project visits, our representatives will contact you at the earliest opportunity.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SECTION: WHITE CONTACT FORM CARD */}
          <div className="lg:col-span-2 bg-white p-12 rounded-[2rem] shadow-2xl flex flex-col justify-center">
            {formSent ? (
              <div className="py-24 text-center flex flex-col items-center gap-5 animate-[apple-scale_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <CheckCircle className="w-20 h-20 text-sage" />
                <h2 className="font-serif text-3xl font-normal text-dark-blue">Message Sent Successfully</h2>
                <p className="text-xs sm:text-sm text-dark-blue/60 leading-relaxed max-w-sm font-light">
                  Thank you for contacting KVS Infra. Our team will get back to you shortly regarding your enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-dark-blue">
                {/* Intro Title */}
                <div className="text-left mb-2">
                  <h2 className="font-serif text-3xl font-normal text-[#132238] tracking-tight">Let's Start the Conversation</h2>
                  <div className="w-12 h-[1px] bg-sage mt-4"></div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-[#132238]/60 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-5 py-4 text-xs text-dark-blue placeholder-slate-400 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage focus:bg-white transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col text-left">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-[#132238]/60 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-5 py-4 text-xs text-dark-blue placeholder-slate-400 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#132238]/60 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-5 py-4 text-xs text-dark-blue placeholder-slate-400 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-[#132238]/60 mb-2">Message Details</label>
                  <textarea 
                    required
                    rows={5}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Tell us about your investment goals, preferred project, site visit request, or any questions you have."
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-5 py-4 text-xs text-dark-blue placeholder-slate-400 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage focus:bg-white transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Newsletter Consent check */}
                <div className="flex gap-3 items-start mt-1 text-left">
                  <input 
                    type="checkbox"
                    id="newsletterConsent"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    className="w-4 h-4 rounded text-[#132238] border-[#e2e8f0] focus:ring-[#132238] mt-0.5 cursor-pointer accent-[#132238]"
                  />
                  <label htmlFor="newsletterConsent" className="text-[10px] text-[#132238]/70 leading-relaxed cursor-pointer select-none">
                    I agree to receive project updates, investment opportunities, and communication from KVS Infra. I understand that I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="bg-[#1e2a3a] hover:bg-[#132238] text-white font-semibold text-[10px] uppercase tracking-widest py-4.5 rounded-xl mt-4 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 text-sage" />
                  <span>Talk to Our Investment Advisors</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
