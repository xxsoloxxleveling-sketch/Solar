import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputContainerClass = (name: string) => `
    relative transition-all duration-500
    ${focusedField === name ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
  `;

  const inputClass = `
    w-full bg-transparent border-b border-white/10 py-4 text-white font-sans outline-none
    focus:border-gold transition-colors duration-500 placeholder-transparent
  `;

  const labelClass = (name: string, value: string) => `
    absolute left-0 transition-all duration-300 pointer-events-none text-xs uppercase tracking-widest
    ${focusedField === name || value ? '-top-4 text-gold text-[10px]' : 'top-4 text-gray-500'}
  `;

  return (
    <div className="py-32 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* Form Section */}
        <div>
          <h4 className="text-gold font-sans tracking-[0.3em] text-xs uppercase mb-4">Concierge Service</h4>
          <h2 className="font-display text-5xl text-white mb-6">Request a Private Consultation</h2>
          <p className="text-gray-400 font-sans leading-relaxed mb-12 max-w-md">
            Our team of energy architects typically responds within 24 hours.
            We invite you to discuss your vision for energy independence.
          </p>

          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className={inputContainerClass('name')}>
                <input
                  type="text"
                  id="name"
                  className={inputClass}
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
                <label htmlFor="name" className={labelClass('name', '')}>Full Name</label>
              </div>

              <div className={inputContainerClass('phone')}>
                <input
                  type="tel"
                  id="phone"
                  className={inputClass}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
                <label htmlFor="phone" className={labelClass('phone', '')}>Phone Number</label>
              </div>
            </div>

            <div className={inputContainerClass('email')}>
              <input
                type="email"
                id="email"
                className={inputClass}
                onFocus={() => setFocusedField('email')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
              />
              <label htmlFor="email" className={labelClass('email', '')}>Email Address</label>
            </div>

            <div className={inputContainerClass('message')}>
              <textarea
                id="message"
                rows={1}
                className={`${inputClass} resize-none h-auto min-h-[50px]`}
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
              />
              <label htmlFor="message" className={labelClass('message', '')}>Tell us about your property</label>
            </div>

            <button className="group flex items-center gap-6 text-white font-sans tracking-[0.2em] uppercase text-xs hover:text-gold transition-colors duration-500 pt-8">
              <span>Send Request</span>
              <div className="w-12 h-[1px] bg-white/30 group-hover:bg-gold transition-colors duration-500"></div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="flex flex-col justify-between space-y-16 lg:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4 text-gold">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Global HQ</span>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-7">
                100 Innovation Drive<br />
                Silicon Valley, CA 94025<br />
                United States
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 text-gold">
                <Phone className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Private Line</span>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-7">
                +1 (888) 555-0199<br />
                Mon-Fri, 9am - 6pm PST
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 text-gold">
                <Mail className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Concierge</span>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-7">
                concierge@aryiansolar.com
              </p>
            </div>
          </div>

          {/* Minimal Map */}
          <div className="relative w-full h-64 bg-[#111] border border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08385118469227!3d37.42199997982461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(80%) contrast(120%)' }}
              allowFullScreen={false}
              loading="lazy"
              title="Map"
            ></iframe>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-3 h-3 bg-gold rounded-full animate-ping absolute top-0 left-0"></div>
              <div className="w-3 h-3 bg-gold rounded-full relative shadow-[0_0_20px_rgba(212,175,55,0.6)]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;