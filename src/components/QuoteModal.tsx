import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, PhoneCall, MessageCircle } from 'lucide-react';
import { InquiryFormData } from '../types';
import { CONTACT_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    serviceInterest: initialService || 'Complete Home Interiors',
    city: 'Amroha',
    message: ''
  });

  if (!isOpen) return null;

  const servicesList = [
    'Complete Home Interiors',
    'Modular Kitchens',
    'False Ceiling & Lighting',
    'Luxury Living Rooms',
    'Commercial & Office',
    '3D Design & Renovation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#EFECE6]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#1A1A1A] text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <h3 className="text-lg font-bold tracking-wide uppercase font-heading">
              Request Free Consultation
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] font-heading">Thank You, {formData.fullName}!</h4>
              <p className="text-gray-600 text-sm max-w-sm mx-auto">
                We have received your inquiry for <span className="font-semibold text-black">{formData.serviceInterest}</span>. Our team in Amroha will contact you shortly via WhatsApp or Phone.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp Now
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-colors rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-500 pb-1">
                Share your requirements with MH Interior Design studio. Or call us directly at <a href={CONTACT_INFO.phoneTel} className="font-bold text-[#C5A059]">{CONTACT_INFO.phoneDisplay}</a>
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 96902 88828"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    placeholder="Amroha / Moradabad / Joya"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Interested Service</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Project Note (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="E.g., Need false ceiling and modular kitchen for 3 BHK in Amroha..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C5A059] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1A1A1A] transition-all duration-300 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Quick Footer */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#EFECE6] flex items-center justify-between text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5 font-semibold text-[#1A1A1A]">
            <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" /> {CONTACT_INFO.phoneDisplay}
          </span>
          <span className="uppercase tracking-wider text-[10px]">Amroha District</span>
        </div>

      </div>
    </div>
  );
};
