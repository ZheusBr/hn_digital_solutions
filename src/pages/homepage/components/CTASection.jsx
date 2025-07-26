import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de uma consultoria gratuita sobre presença digital para meu negócio. Vamos conversar?');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5511999999999', '_self');
  };

  const benefits = [
    {
      icon: "Clock",
      title: "Resposta Rápida",
      description: "Retornamos seu contato em até 2 horas"
    },
    {
      icon: "Shield",
      title: "Consultoria Gratuita",
      description: "Primeira análise sem custo algum"
    },
    {
      icon: "Users",
      title: "Atendimento Personalizado",
      description: "Cada projeto é único e especial"
    },
    {
      icon: "TrendingUp",
      title: "Resultados Garantidos",
      description: "Foco total no crescimento do seu negócio"
    }
  ];

  const contactMethods = [
    {
      method: "WhatsApp",
      icon: "MessageCircle",
      primary: true,
      action: handleWhatsAppClick,
      description: "Resposta imediata",
      color: "whatsapp"
    },
    {
      method: "Telefone",
      icon: "Phone",
      primary: false,
      action: handleCallClick,
      description: "(11) 99999-9999",
      color: "primary"
    },
    {
      method: "Instagram",
      icon: "Instagram",
      primary: false,
      action: () => window.open('https://instagram.com/hnti_solucoes', '_blank'),
      description: "@hnti_solucoes",
      color: "pink"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} className="mr-2" />
            Transforme Seu Negócio Hoje
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para Decolar no
            <br />
            <span className="text-accent">Mundo Digital?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Não deixe seus concorrentes saírem na frente. Comece sua transformação digital hoje mesmo com quem entende do seu negócio.
          </p>

          {/* Urgency Indicator */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-white text-sm mb-8">
            <Icon name="Clock" size={16} className="mr-2" />
            <span className="font-medium">Apenas 3 vagas disponíveis este mês</span>
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="default"
            size="xl"
            onClick={handleWhatsAppClick}
            className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-brand-lg touch-target text-lg px-8 py-4"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={24}
          >
            Consultoria Gratuita no WhatsApp
          </Button>
          
          <Button
            variant="outline"
            size="xl"
            asChild
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-brand-lg touch-target text-lg px-8 py-4"
            iconName="Briefcase"
            iconPosition="left"
            iconSize={24}
          >
            <Link to="/interactive-portfolio-gallery">
              Ver Nossos Projetos
            </Link>
          </Button>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={contact.action}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                contact.color === 'whatsapp' ? 'bg-whatsapp/20' :
                contact.color === 'pink'? 'bg-pink-500/20' : 'bg-white/20'
              }`}>
                <Icon 
                  name={contact.icon} 
                  size={28} 
                  className={
                    contact.color === 'whatsapp' ? 'text-whatsapp' :
                    contact.color === 'pink'? 'text-pink-300' : 'text-white'
                  } 
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {contact.method}
              </h3>
              <p className="text-white/80 text-sm">
                {contact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-white/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} />
              <span>5.0 Avaliação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span>+100 Clientes</span>
            </div>
          </div>
        </div>

        {/* Final Urgency Message */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              ⚡ Oferta Especial para Novos Clientes
            </h3>
            <p className="text-white/90 mb-4">
              Primeira consultoria gratuita + 20% de desconto no primeiro projeto para quem entrar em contato hoje.
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent text-sm font-medium">
              <Icon name="Clock" size={16} />
              <span>Válido até o final do mês</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;