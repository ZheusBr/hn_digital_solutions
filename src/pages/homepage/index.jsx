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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de uma consultoria gratuita sobre presença digital');
    window.open(`https://wa.me/5513978125566?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/hn.ti.solucoes?igsh=M244eGhhMW54OXM2', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>HN TI & SOLUÇÕES - Transformação Digital para Pequenos Negócios</title>
        <meta 
          name="description" 
          content="Criamos sites, e-commerce e soluções digitais que transformam pequenos negócios. Consultoria gratuita via WhatsApp. Resultados comprovados em São Paulo e todo Brasil." 
        />
        <meta name="keywords" content="desenvolvimento web, e-commerce, sites responsivos, marketing digital, consultoria digital, pequenos negócios, São Paulo" />
        <meta property="og:title" content="HN TI & SOLUÇÕES - Soluções Digitais que Entendem Sua Jornada" />
        <meta property="og:description" content="Da mudança de carreira à transformação do seu negócio. Criamos presenças digitais que conectam, convertem e crescem junto com você." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hntisolucoes.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hntisolucoes.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Founder Story */}
          <HeroSection onWhatsAppClick={handleWhatsAppClick} />
          
          {/* Dynamic Portfolio Carousel */}
          <PortfolioCarousel />
          
          {/* Interactive Services Section */}
          <ServicesSection />
          
          {/* Client Success Stories */}
          <TestimonialsSection />
          
          {/* Instagram Feed Integration */}
          <InstagramFeed onInstagramClick={handleInstagramClick} />
          
          {/* Final CTA Section */}
          <CTASection onWhatsAppClick={handleWhatsAppClick} />
        </main>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsAppClick}
            className="w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full shadow-brand-lg flex items-center justify-center whatsapp-pulse transition-all duration-300 hover:scale-110"
            aria-label="Conversar no WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>

        {/* Instagram Floating Button */}
        <div className="fixed bottom-24 right-6 z-50">
          <button
            onClick={handleInstagramClick}
            className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-brand-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Seguir no Instagram"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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