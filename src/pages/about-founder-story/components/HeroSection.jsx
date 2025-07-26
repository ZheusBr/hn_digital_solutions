import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Da Mudança de Carreira à{' '}
                <span className="text-gradient-primary">Sua Transformação Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Uma jornada de reinvenção pessoal que se tornou a missão de transformar 
                pequenos negócios através da presença digital autêntica e acessível.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Conversar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
                iconName="ArrowDown"
                iconPosition="right"
                iconSize={20}
              >
                Conhecer a História
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Henrique Nascimento - Fundador da HN Digital Soluções"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-brand-md p-6 border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Projetos Entregues</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-brand-md p-6 border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;