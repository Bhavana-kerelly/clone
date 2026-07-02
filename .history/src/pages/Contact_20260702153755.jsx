import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';

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
    <div className="bg-cream min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-2">
            Get In Touch
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-wide text-dark-blue mb-4">
            Contact KVS Infra.
          </h1>
          <div className="w-16 h-0.5 bg-sage"></div>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* LEFT SECTION: CONTACT INFO CARD */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-[#2e4157] text-white p-8 rounded-lg card-shadow border border-white/5 flex flex-col gap-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sage block mb-1">Direct Line</span>
                <h2 className="font-display text-2xl font-bold tracking-wide">KVS Infra Team</h2>
                <div className="w-12 h-0.5 bg-sage mt-3"></div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed text-justify">
                Whether you are exploring a plotted project, evaluating a growth corridor, or requesting project details, the KVS Infra team is available to help you make a confident decision.
              </p>

              <div className="flex flex-col gap-4 text-xs text-white/80 border-t border-white/10 pt-6 mt-2">
                <a href="mailto:info@kvsinfra.com" className="flex items-center gap-3 hover:text-sage transition-colors">
                  <Mail className="w-4 h-4 text-sage" />
                  <span>info@kvsinfra.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-sage transition-colors">
                  <Phone className="w-4 h-4 text-sage" />
                  <span>+91 98765 43210</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <span>Tirupati, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Office hours card */}
            <div className="bg-[#fcf9f6] p-8 rounded-lg border border-dark-blue/5 card-shadow flex gap-4 items-start">
              <Clock className="w-6 h-6 text-sage shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-dark-blue mb-1">Response Time</h3>
                <p className="text-xs text-dark-blue/60 leading-relaxed text-justify">
                  We value prompt communication. We review all website requests daily and aim to reply within 24 hours (Eastern Standard Time).
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: CONTACT FORM CARD */}
          <div className="lg:col-span-3 bg-[#fcf9f6] p-8 rounded-lg border border-dark-blue/5 card-shadow">
            {formSent ? (
              <div className="py-16 text-center flex flex-col items-center gap-4 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-sage" />
                <h2 className="font-display text-2xl font-bold text-dark-blue">Message Sent Successfully</h2>
                <p className="text-xs sm:text-sm text-dark-blue/60 leading-relaxed max-w-sm">
                  Thank you for contacting KVS Infra. Our team will get back to you shortly regarding your enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-dark-blue">
                {/* Intro Title */}
                <div>
                  <h2 className="font-display text-xl font-bold tracking-wide">Send a Message</h2>
                  <div className="w-10 h-0.5 bg-sage mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-dark-blue/10 rounded px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-sage"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col text-left">
                    <label className="text-[9px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. +1 246 000 0000"
                      className="w-full bg-white border border-dark-blue/10 rounded px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-sage"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full bg-white border border-dark-blue/10 rounded px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label className="text-[9px] uppercase font-bold tracking-wider text-dark-blue/50 mb-2">Message Details</label>
                  <textarea 
                    required
                    rows={6}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Describe how we can help you..."
                    className="w-full bg-white border border-dark-blue/10 rounded px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-sage resize-none"
                  ></textarea>
                </div>

                {/* Newsletter Consent check */}
                <div className="flex gap-3 items-start mt-2">
                  <input 
                    type="checkbox"
                    id="newsletterConsent"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    className="w-4 h-4 rounded text-sage border-dark-blue/10 focus:ring-sage mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="newsletterConsent" className="text-[10px] text-dark-blue/50 leading-relaxed cursor-pointer select-none">
                    I consent to receiving project updates and marketing communications from KVS Infra. I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="bg-dark-blue text-white hover:bg-sage hover:text-dark-blue font-semibold text-xs uppercase tracking-wider py-3.5 rounded mt-2 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
