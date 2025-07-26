import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = ({ onWhatsAppClick, onInstagramClick, onEmailClick }) => {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business',
      description: 'Resposta imediata e consultoria gratuita',
      icon: 'MessageCircle',
      color: 'bg-whatsapp',
      textColor: 'text-whatsapp-foreground',
      features: [
        'Consultoria gratuita de 30 minutos',
        'Orçamento personalizado',
        'Suporte técnico rápido',
        'Acompanhamento de projetos'
      ],
      cta: 'Iniciar Conversa',
      onClick: onWhatsAppClick,
      badge: 'Mais Popular'
    },
    {
      id: 'instagram',
      title: 'Instagram Direct',
      description: 'Veja nosso trabalho e converse conosco',
      icon: 'Instagram',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      textColor: 'text-white',
      features: [
        'Portfólio visual atualizado',
        'Stories com dicas diárias',
        'Comunicação visual',
        'Feedback de clientes'
      ],
      cta: 'Seguir e Conversar',
      onClick: onInstagramClick,
      badge: 'Visual'
    },
    {
      id: 'email',
      title: 'E-mail Profissional',
      description: 'Para projetos detalhados e propostas formais',
      icon: 'Mail',
      color: 'bg-trust',
      textColor: 'text-trust-foreground',
      features: [
        'Propostas detalhadas',
        'Documentação técnica',
        'Contratos e acordos',
        'Relatórios de progresso'
      ],
      cta: 'Enviar E-mail',
      onClick: onEmailClick,
      badge: 'Formal'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha Sua Forma Preferida de Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos múltiplas opções para que você se sinta confortável ao entrar em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="relative bg-card rounded-2xl p-8 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 card-hover border"
            >
              {method.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {method.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={method.icon} size={32} className={method.textColor} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground">
                  {method.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {method.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="default"
                size="lg"
                onClick={method.onClick}
                className={`w-full touch-target ${
                  method.id === 'whatsapp' ?'whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground' 
                    : method.id === 'instagram' ?'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' :'bg-trust hover:bg-trust/90 text-trust-foreground'
                }`}
                iconName={method.icon}
                iconPosition="left"
                iconSize={18}
              >
                {method.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;