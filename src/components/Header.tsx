import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-[#EFECE6]' 
          : 'bg-white/90 sm:bg-transparent py-4 sm:py-5 border-b sm:border-b-0 border-[#EFECE6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Emblem */}
        <a href="#home" className="flex items-center">
          <BrandLogo className="w-10 h-10 sm:w-11 sm:h-11" />
        </a>

        {/* Desktop Minimal Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold text-gray-700 hover:text-[#C5A059] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Phone & Quote Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={CONTACT_INFO.phoneTel}
            className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] hover:text-[#C5A059] transition-colors bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-[#EFECE6]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center px-5 py-2.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#C5A059] transition-all duration-300 shadow-sm"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile triggers */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={CONTACT_INFO.phoneTel}
            className="p-2 bg-[#FAF8F5] text-[#1A1A1A] rounded-lg border border-[#EFECE6] flex items-center justify-center"
            aria-label="Call Now"
          >
            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
          </a>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-3 py-1.5 bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-wider rounded"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-lg transition-colors ml-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EFECE6] px-6 pt-4 pb-8 space-y-4 animate-fadeIn shadow-xl">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#C5A059] py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 space-y-2.5">
            <a
              href={CONTACT_INFO.phoneTel}
              className="w-full py-3 bg-[#FAF8F5] border border-[#EFECE6] text-[#1A1A1A] font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" /> {CONTACT_INFO.phoneDisplay}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#C5A059] text-white font-bold text-xs uppercase tracking-widest rounded shadow-md"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
