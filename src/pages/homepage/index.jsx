import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PortfolioCarousel from './components/PortfolioCarousel';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramFeed from './components/InstagramFeed';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HN Digital Soluções - Transformação Digital para Pequenos Negócios</title>
        <meta 
          name="description" 
          content="Criamos sites, e-commerce e soluções digitais que transformam pequenos negócios. Consultoria gratuita via WhatsApp. Resultados comprovados em São Paulo e todo Brasil." 
        />
        <meta name="keywords" content="desenvolvimento web, e-commerce, sites responsivos, marketing digital, consultoria digital, pequenos negócios, São Paulo" />
        <meta property="og:title" content="HN Digital Soluções - Soluções Digitais que Entendem Sua Jornada" />
        <meta property="og:description" content="Da mudança de carreira à transformação do seu negócio. Criamos presenças digitais que conectam, convertem e crescem junto com você." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hndigital.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hndigital.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Founder Story */}
          <HeroSection />
          
          {/* Dynamic Portfolio Carousel */}
          <PortfolioCarousel />
          
          {/* Interactive Services Section */}
          <ServicesSection />
          
          {/* Client Success Stories */}
          <TestimonialsSection />
          
          {/* Instagram Feed Integration */}
          <InstagramFeed />
          
          {/* Final CTA Section */}
          <CTASection />
        </main>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => {
              const message = encodeURIComponent('Olá! Gostaria de uma consultoria gratuita sobre presença digital');
              window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
            }}
            className="w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full shadow-brand-lg flex items-center justify-center whatsapp-pulse transition-all duration-300 hover:scale-110"
            aria-label="Conversar no WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-white hover:bg-muted border shadow-brand-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
            aria-label="Voltar ao topo"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;