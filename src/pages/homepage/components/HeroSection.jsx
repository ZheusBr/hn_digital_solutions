import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de uma consultoria gratuita sobre presença digital');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Transformação Digital Personalizada
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Soluções Digitais que{' '}
                <span className="text-gradient-primary">Entendem</span>{' '}
                Sua Jornada
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Da mudança de carreira à transformação do seu negócio. Criamos presenças digitais que conectam, convertem e crescem junto com você.
              </p>
            </div>

            {/* Founder Story Snippet */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-brand-sm border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">História do Fundador</p>
                  <p className="text-foreground leading-relaxed">
                    "Após uma mudança radical de carreira, descobri que a tecnologia não é apenas sobre código - é sobre conectar pessoas e realizar sonhos."
                  </p>
                  <Link 
                    to="/about-founder-story"
                    className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium mt-3 transition-colors"
                  >
                    Conheça minha história
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground touch-target"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Consultoria Gratuita
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="touch-target"
                iconName="Briefcase"
                iconPosition="left"
                iconSize={20}
              >
                <Link to="/interactive-portfolio-gallery">
                  Ver Portfólio
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Resposta em 2h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-warning" />
                <span>5.0 Avaliação</span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-brand-lg p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipe HN Digital trabalhando em projetos"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Projeto Recente</h3>
                      <p className="text-sm text-muted-foreground">E-commerce Completo</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-success">+150%</p>
                      <p className="text-xs text-muted-foreground">Vendas Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">+12 clientes satisfeitos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;