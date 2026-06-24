import React, { useState, useEffect } from 'react';
import { Sparkles, PhoneCall, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { HERO_DATA, CONTACT_INFO } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_DATA.heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-white overflow-hidden border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Location & Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-[#1A1A1A] text-xs font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Amroha District Studio</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                <span>100% Turnkey Execution</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.08]">
              Turning Your Houses Into <span className="font-serif-luxury italic font-normal gold-gradient-text block mt-1">Dream Homes.</span>
            </h1>

            {/* Subtitle Tagline */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500">
              <span>Modern</span>
              <span className="text-[#C5A059]">•</span>
              <span>Minimalist</span>
              <span className="text-[#C5A059]">•</span>
              <span className="text-[#1A1A1A]">Luxury</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 max-w-lg font-normal leading-relaxed">
              {HERO_DATA.description}
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#C5A059] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#C5A059] group-hover:text-white" />
                <span>Get Free Consultation</span>
              </button>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={CONTACT_INFO.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FAF8F5] hover:bg-gray-100 text-[#1A1A1A] border border-[#EFECE6] text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#C5A059]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Imagery Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              {HERO_DATA.heroImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="Amroha Luxury Interior Design Project"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100 scale-105 transition-transform duration-[5000ms]' : 'opacity-0 scale-100'
                  }`}
                />
              ))}

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-[#C5A059]">MH Interior Design</div>
                  <div className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Amroha District Luxury Showcase</div>
                </div>
                <div className="flex gap-1">
                  {HERO_DATA.heroImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentImageIndex ? 'w-5 bg-[#C5A059]' : 'w-1.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Stats Strip */}
        <div className="mt-12 pt-8 border-t border-[#EFECE6]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {HERO_DATA.stats.map((st) => (
              <div key={st.label} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFECE6]">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1A1A1A] gold-gradient-text inline-block">
                  {st.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-gray-500 mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
