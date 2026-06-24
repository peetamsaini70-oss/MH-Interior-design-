import React from 'react';
import { Home, Building2, UtensilsCrossed, Layers, Armchair, Compass, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 text-[#C5A059]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C5A059]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-[#C5A059]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#C5A059]" />;
      case 'Armchair': return <Armchair className="w-5 h-5 text-[#C5A059]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C5A059]" />;
      default: return <Home className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059]">
            Our Core Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            Compact & Luxury <span className="font-serif-luxury italic font-normal">Services</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            We deliver complete interior solutions across Amroha District. Click any box to inquire.
          </p>
        </div>

        {/* Small Compact Boxes Grid ("chota box chota ma add kro") */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.title)}
              className="group bg-white rounded-xl p-6 border border-[#EFECE6] hover:border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] group-hover:bg-[#1A1A1A] flex items-center justify-center transition-colors border border-[#EFECE6]">
                    {getIcon(srv.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                    {srv.title}
                  </h3>
                </div>
                
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
                <span>Inquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
