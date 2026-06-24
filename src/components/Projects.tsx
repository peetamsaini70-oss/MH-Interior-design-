import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Villa', 'Modular Kitchen', 'False Ceiling', 'Living Room', 'Residential'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter || (selectedFilter === 'Residential' && (p.category === 'Villa' || p.category === 'Living Room')));

  return (
    <section id="projects" className="py-20 bg-white border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Heading & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059]">
              Amroha Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Featured <span className="font-serif-luxury italic font-normal">Projects</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#FAF8F5] p-1.5 rounded-xl border border-[#EFECE6]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj: ProjectItem) => (
            <div
              key={proj.id}
              onClick={() => onOpenQuoteModal(`Project Inquiry: ${proj.title}`)}
              className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EFECE6] cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">
                  {proj.category}
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center text-[10px] text-[#C5A059] font-bold tracking-wider uppercase mb-0.5">
                    <MapPin className="w-3 h-3 mr-1 inline" /> {proj.location}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-[#C5A059] transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100 flex-grow">
                <span className="text-xs text-gray-500 font-medium truncate">{proj.description}</span>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] inline-flex items-center flex-shrink-0 ml-2">
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
