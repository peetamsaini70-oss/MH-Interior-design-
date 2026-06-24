import React from 'react';
import { ArrowUp, Instagram, Youtube, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#C5A059] text-white flex items-center justify-center font-serif-luxury font-bold text-xl rounded">
                MH
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-widest text-base uppercase text-white">
                  MH Interior
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-medium">
                  Design Amroha
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Turning your houses into dream homes. Modern, Minimalist & Luxury Interiors crafted with precision across Amroha District.
            </p>

            <div className="flex space-x-3 pt-1">
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.youtubeUrl} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Compact Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Amroha Portfolio</a></li>
              <li><a href="#whyus" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Consultation</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4">Expertise</h3>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>Complete Home Interiors</li>
              <li>Modular Kitchen Design</li>
              <li>Gypsum False Ceilings</li>
              <li>Luxury Living Rooms</li>
              <li>Commercial & Showroom</li>
              <li>3D Vastu Layouts</li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4">Amroha Studio</h3>
            <div className="space-y-3 text-xs text-gray-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href={CONTACT_INFO.phoneTel} className="hover:text-white font-semibold text-gray-200">{CONTACT_INFO.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>© {new Date().getFullYear()} MH Interior Design Amroha. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
