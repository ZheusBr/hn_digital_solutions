import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import TestimonialsSection from './components/TestimonialsSection';
import SkillsSection from './components/SkillsSection';
import ValuesSection from './components/ValuesSection';
import CallToActionSection from './components/CallToActionSection';

const AboutFounderStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim através do site e gostaria de conhecer mais sobre os serviços da HN Digital Soluções. Podemos conversar?');
    const phoneNumber = '5511999999999';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Nossa História - Da Mudança de Carreira à Transformação Digital | HN Digital Soluções</title>
        <meta 
          name="description" 
          content="Conheça a jornada de Henrique Nascimento: da mudança de carreira corporativa ao empreendedorismo digital. Uma história de reinvenção, aprendizado e paixão por transformar pequenos negócios através da tecnologia." 
        />
        <meta name="keywords" content="história da empresa, fundador, mudança de carreira, empreendedorismo digital, transformação pessoal, HN Digital" />
        <meta property="og:title" content="Nossa História - Da Mudança de Carreira à Transformação Digital" />
        <meta property="og:description" content="Uma jornada de reinvenção pessoal que se tornou a missão de transformar pequenos negócios através da presença digital." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hndigitalsolutions.com.br/about-founder-story" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection onWhatsAppClick={handleWhatsAppClick} />
          <TimelineSection />
          <TestimonialsSection />
          <SkillsSection />
          <ValuesSection />
          <CallToActionSection onWhatsAppClick={handleWhatsAppClick} />
        </main>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">HN Digital</h3>
                    <p className="text-sm text-gray-400">Soluções</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transformando pequenos negócios através de soluções digitais 
                  acessíveis e humanizadas.
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-semibold">Contato</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>contato@hndigitalsolutions.com.br</p>
                  <p>(11) 99999-9999</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h4 className="font-semibold">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-10 h-10 bg-whatsapp rounded-lg flex items-center justify-center hover:bg-whatsapp/90 transition-colors"
                  >
                    <span className="text-white text-lg">💬</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
                    <span className="text-white text-lg">📷</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} HN TI & Soluções. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutFounderStory;