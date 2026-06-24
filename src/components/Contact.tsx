import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { InquiryFormData } from '../types';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    serviceInterest: 'Complete Home Interiors',
    city: 'Amroha',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    'Complete Home Interiors',
    'Modular Kitchens',
    'False Ceiling & Lighting',
    'Luxury Living Rooms',
    'Commercial & Office',
    '3D Design & Renovation'
  ];

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] border-b border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059]">
            Connect With Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            Get In <span className="font-serif-luxury italic font-normal">Touch</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Visit our studio in Amroha District or send us a WhatsApp message for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Direct Contact Info Card */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">MH Interior Design</span>
              <h3 className="text-2xl font-bold tracking-tight">Amroha Studio Desk</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We turn houses into dream homes with bespoke Vastu layout planning and flawless turnkey execution.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <a 
                href={CONTACT_INFO.phoneTel}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#C5A059] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-black/20 flex items-center justify-center text-[#C5A059] group-hover:text-white transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase font-semibold">Call Studio Direct</div>
                  <div className="text-base font-bold tracking-wide text-white">{CONTACT_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] transition-all group border border-[#25D366]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-300 group-hover:text-white/90 uppercase font-semibold">Instant Chat</div>
                  <div className="text-base font-bold tracking-wide text-white">WhatsApp Inquiry</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Studio Location</div>
                  <div className="text-sm font-bold text-white">{CONTACT_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Email Us</div>
                  <div className="text-sm font-bold text-white">{CONTACT_INFO.email}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1 text-[#C5A059]">
                <Sparkles className="w-3.5 h-3.5" /> Amroha Flagship
              </span>
              <span>Open Mon - Sat</span>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-[#EFECE6]">
            <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A] mb-2 font-heading">
              Request Free Consultation
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the compact form below. Our design consultants will get back to you with custom 3D layout suggestions.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#1A1A1A]">Inquiry Received!</h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold text-black">{formData.fullName}</span>. We will contact you at <span className="font-semibold text-black">{formData.phone}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#C5A059] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96902 88828"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Service Needed *</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="Amroha / Joya / Moradabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Requirements / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your home (e.g., 3 BHK apartment, need false ceiling and modular kitchen)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C5A059] hover:bg-[#1A1A1A] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> <span>Submit Consultation Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
