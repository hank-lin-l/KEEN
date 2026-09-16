import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGallery } from './components/BentoGallery';
import { ProductMatrix } from './components/ProductMatrix';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { MachineSpecModal } from './components/MachineSpecModal';
import { SensorDiagnosticModal } from './components/SensorDiagnosticModal';
import { ProductMachine } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductMachine | null>(null);
  const [isSensorModalOpen, setIsSensorModalOpen] = useState(false);
  const [consultationNotes, setConsultationNotes] = useState('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteForProduct = (productName: string) => {
    setConsultationNotes(`詢價指定機種：${productName}，請寄送完整技術規格書、CAD 圖檔與報價方案。`);
    scrollToSection('quote-section');
  };

  return (
    <div className="relative min-h-screen bg-[#10131a] text-[#e0e2eb] selection:bg-[#00f0ff] selection:text-[#00363a] overflow-x-hidden">
      {/* Top Header */}
      <Header
        onOpenQuote={() => scrollToSection('quote-section')}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="w-full pt-20">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Ambient Living Light Beams & Mesh Canvas */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1400px] h-[720px] pointer-events-none opacity-40 blur-[130px] rounded-full bg-gradient-to-tr from-[#00f0ff] via-[#32353c] to-[#fe6b00] -z-10" />
          <div className="absolute top-[480px] -left-64 w-[600px] h-[600px] pointer-events-none opacity-20 blur-[140px] rounded-full bg-[#00f0ff] -z-10" />
          <div className="absolute top-[1200px] -right-64 w-[700px] h-[700px] pointer-events-none opacity-25 blur-[160px] rounded-full bg-[#fe6b00] -z-10" />

          {/* 1. Hero Section */}
          <Hero
            onExploreMachines={() => scrollToSection('machinery-catalogue')}
            onConsultation={() => scrollToSection('quote-section')}
            onOpenSensorModal={() => setIsSensorModalOpen(true)}
          />

          {/* 2. Bento Craft Gallery */}
          <BentoGallery />

          {/* 3. Product Architecture & Machinery Matrix */}
          <ProductMatrix onSelectProduct={(p) => setSelectedProduct(p)} />

          {/* 4. Luxury Custom Engineering Consultation Form */}
          <ConsultationForm
            initialNotes={consultationNotes}
            key={consultationNotes}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onScrollToQuote={() => scrollToSection('quote-section')}
        onNavigate={scrollToSection}
      />

      {/* Modals */}
      <MachineSpecModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteForProduct}
      />

      <SensorDiagnosticModal
        isOpen={isSensorModalOpen}
        onClose={() => setIsSensorModalOpen(false)}
      />
    </div>
  );
}
