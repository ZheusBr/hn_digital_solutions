import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Desenvolvimento Web",
      subtitle: "Sites & E-commerce",
      description: "Criamos sites responsivos e lojas virtuais que convertem visitantes em clientes.",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Integração com redes sociais",
        "Painel administrativo",
        "Certificado SSL incluído"
      ],
      pricing: {
        from: "R$ 1.500",
        popular: "R$ 2.800",
        premium: "R$ 4.500"
      },
      icon: "Code",
      color: "primary",
      deliveryTime: "15-30 dias",
      includes: "Hospedagem por 1 ano"
    },
    {
      id: 2,
      title: "Consultoria Digital",
      subtitle: "Estratégia & Crescimento",
      description: "Análise completa da sua presença digital com plano de ação personalizado.",
      features: [
        "Auditoria digital completa",
        "Estratégia de redes sociais",
        "Análise da concorrência",
        "Plano de marketing digital",
        "Acompanhamento mensal"
      ],
      pricing: {
        from: "R$ 800",
        popular: "R$ 1.200",
        premium: "R$ 2.000"
      },
      icon: "TrendingUp",
      color: "secondary",
      deliveryTime: "7-14 dias",
      includes: "Relatório detalhado"
    },
    {
      id: 3,
      title: "Manutenção & Suporte",
      subtitle: "Cuidado Contínuo",
      description: "Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente.",
      features: [
        "Atualizações de segurança",
        "Backup automático diário",
        "Monitoramento 24/7",
        "Suporte técnico prioritário",
        "Relatórios mensais"
      ],
      pricing: {
        from: "R$ 200",
        popular: "R$ 350",
        premium: "R$ 500"
      },
      icon: "Shield",
      color: "accent",
      deliveryTime: "Imediato",
      includes: "WhatsApp direto"
    }
  ];

  const handleWhatsAppClick = (service) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${service.title}. Gostaria de mais informações.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            Soluções Completas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Serviços que{' '}
            <span className="text-gradient-accent">Transformam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do planejamento à execução, oferecemos tudo que seu negócio precisa para brilhar no mundo digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-brand-sm border hover:shadow-brand-md transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === 'primary' ? 'bg-primary/10' :
                  service.color === 'secondary'? 'bg-secondary/10' : 'bg-accent/10'
                }`}>
                  <Icon 
                    name={service.icon} 
                    size={28} 
                    className={
                      service.color === 'primary' ? 'text-primary' :
                      service.color === 'secondary'? 'text-secondary' : 'text-accent'
                    } 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="px-8 pb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Section - Shows on Hover */}
              <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center p-8 transition-all duration-300 ${
                hoveredCard === service.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="text-center space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-4">Investimento</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Básico</span>
                        <span className="font-semibold text-foreground">{service.pricing.from}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Popular</span>
                        <span className="font-bold text-primary">{service.pricing.popular}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Premium</span>
                        <span className="font-semibold text-foreground">{service.pricing.premium}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Icon name="Clock" size={14} className="mr-2" />
                      {service.deliveryTime}
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Icon name="Gift" size={14} className="mr-2" />
                      {service.includes}
                    </div>
                  </div>

                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleWhatsAppClick(service)}
                    className="w-full whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MousePointer" size={16} className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada negócio é único. Vamos conversar sobre suas necessidades específicas e criar uma solução personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('Olá! Preciso de uma solução personalizada para meu negócio. Vamos conversar?');
                window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
              }}
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
              asChild
              iconName="BookOpen"
              iconPosition="left"
              iconSize={20}
            >
              <Link to="/resource-knowledge-base">
                Ver Recursos Gratuitos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;