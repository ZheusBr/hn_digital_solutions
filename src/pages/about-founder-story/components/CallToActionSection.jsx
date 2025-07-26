import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToActionSection = ({ onWhatsAppClick }) => {
  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Resposta rápida e atendimento personalizado",
      action: "Iniciar Conversa",
      color: "bg-whatsapp",
      onClick: onWhatsAppClick
    },
    {
      icon: "Mail",
      title: "E-mail",
      description: "Para propostas detalhadas e orçamentos",
      action: "Enviar E-mail",
      color: "bg-primary",
      onClick: () => window.location.href = 'mailto:contato@hndigitalsolutions.com.br'
    },
    {
      icon: "Calendar",
      title: "Reunião Online",
      description: "Consultoria gratuita de 30 minutos",
      action: "Agendar Reunião",
      color: "bg-accent",
      onClick: onWhatsAppClick
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Vamos Transformar Seu Negócio{' '}
                <span className="text-gradient-primary">Juntos?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada grande transformação digital começa com uma conversa. Estou aqui 
                para entender suas necessidades, desafios e objetivos, oferecendo 
                soluções personalizadas que realmente fazem a diferença.
              </p>
            </div>

            {/* Personal Touch */}
            <div className="bg-white rounded-xl shadow-brand-sm border p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="Henrique Nascimento"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Henrique Nascimento</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Acredito que cada negócio tem um potencial único. Meu papel é 
                    ajudar você a descobrir e potencializar esse diferencial através 
                    da presença digital estratégica."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Escolha a melhor forma de contato:
              </h3>
              
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <button
                    key={index}
                    onClick={method.onClick}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-brand-sm border hover:shadow-brand-md transition-all duration-300 text-left group"
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-primary">
                      <span className="text-sm font-medium">{method.action}</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Workspace moderno com computador e plantas"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Consultoria Gratuita</h3>
                <p className="text-white/90 mb-4">
                  30 minutos para entender seu negócio e apresentar soluções personalizadas.
                </p>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">Disponível de segunda a sexta, 9h às 18h</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-brand-md p-6 border">
              <div className="text-center">
                <p className="text-2xl font-bold text-success">24h</p>
                <p className="text-sm text-muted-foreground">Tempo médio de resposta</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-brand-md p-6 border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-brand-md border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar sua transformação digital?
            </h3>
            <p className="text-muted-foreground mb-6">
              Não deixe para amanhã o que pode transformar seu negócio hoje. 
              Vamos conversar sobre suas necessidades e objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppClick}
                className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Falar no WhatsApp Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'mailto:contato@hndigitalsolutions.com.br'}
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
              >
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;