import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onWhatsAppClick, onInstagramClick }) => {
  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary/90 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="MessageCircle" size={20} className="text-whatsapp" />
            <span className="text-sm font-medium">Resposta em até 2 horas</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-inter">
            Vamos Conversar Sobre Seu
            <span className="block text-gradient-accent bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Projeto Digital
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Consultoria gratuita, orçamentos personalizados e suporte especializado.
            <br className="hidden sm:block" />
            Escolha a forma mais confortável para você entrar em contato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              onClick={onWhatsAppClick}
              className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground touch-target w-full sm:w-auto"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={20}
            >
              Consultoria Gratuita no WhatsApp
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onInstagramClick}
              className="border-white/30 text-white hover:bg-white/10 touch-target w-full sm:w-auto"
              iconName="Instagram"
              iconPosition="left"
              iconSize={20}
            >
              Ver Portfólio no Instagram
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Seg-Sex: 8h às 18h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} />
              <span>Atendimento em todo Brasil</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>100% Seguro e Confiável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;