import React from 'react';
import { ShieldCheck, Clock, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="whyus" className="py-20 bg-white border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059]">
            Why Choose MH Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            The Amroha <span className="font-serif-luxury italic font-normal">Standard</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EFECE6] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group bg-white shadow-xs"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#EFECE6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-base font-bold text-[#1A1A1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
