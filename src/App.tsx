import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [initialModalService, setInitialModalService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setInitialModalService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] selection:bg-[#C5A059] selection:text-white">
      
      {/* Consultation Modal Triggered Anywhere */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={initialModalService}
      />

      {/* 1. Header Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Services Section (Compact Small Boxes) */}
        <Services onSelectService={(srv) => handleOpenQuoteModal(srv)} />

        {/* 4. Featured Portfolio Projects */}
        <Projects onOpenQuoteModal={(proj) => handleOpenQuoteModal(proj)} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}
