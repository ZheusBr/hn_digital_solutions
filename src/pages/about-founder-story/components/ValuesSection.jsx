import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const companyValues = [
    {
      id: 1,
      title: "Acessibilidade",
      description: "Soluções digitais de qualidade devem estar ao alcance de todos os negócios, independente do tamanho ou orçamento.",
      icon: "Heart",
      color: "bg-success",
      details: [
        "Preços justos e transparentes",
        "Planos flexíveis para cada necessidade",
        "Suporte contínuo e humanizado",
        "Tecnologia sem complexidade desnecessária"
      ]
    },
    {
      id: 2,
      title: "Parceria",
      description: "Não somos apenas fornecedores, somos parceiros estratégicos no crescimento do seu negócio digital.",
      icon: "Handshake",
      color: "bg-primary",
      details: [
        "Relacionamento de longo prazo",
        "Consultoria estratégica gratuita",
        "Acompanhamento pós-entrega",
        "Crescimento mútuo e sustentável"
      ]
    },
    {
      id: 3,
      title: "Crescimento",
      description: "Cada projeto é pensado para escalar junto com seu negócio, adaptando-se às suas necessidades futuras.",
      icon: "TrendingUp",
      color: "bg-accent",
      details: [
        "Soluções escaláveis e flexíveis",
        "Planejamento de longo prazo",
        "Otimização contínua de performance",
        "Integração com novas tecnologias"
      ]
    },
    {
      id: 4,
      title: "Empoderamento",
      description: "Capacitamos nossos clientes com conhecimento e ferramentas para que sejam independentes e confiantes.",
      icon: "Zap",
      color: "bg-warning",
      details: [
        "Treinamento para uso das ferramentas",
        "Documentação clara e acessível",
        "Suporte educativo, não apenas técnico",
        "Autonomia progressiva do cliente"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Valores da <span className="text-gradient-primary">Empresa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estes princípios guiam cada decisão, cada projeto e cada relacionamento 
            que construímos na HN TI & Soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {companyValues.map((value) => (
            <div
              key={value.id}
              className="group bg-white rounded-2xl shadow-brand-md border hover:shadow-brand-lg transition-all duration-500 overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value.icon} size={28} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Details */}
              <div className="px-8 pb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                    <span>Como aplicamos na prática:</span>
                  </h4>
                  
                  <ul className="space-y-3">
                    {value.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-2xl border p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Target" size={32} color="white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Democratizar o acesso à presença digital de qualidade, oferecendo soluções 
              tecnológicas acessíveis e humanizadas que transformem pequenos negócios em 
              referências digitais, sempre com foco no crescimento sustentável e na 
              parceria de longo prazo.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-brand-sm">
                <Icon name="Users" size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium text-foreground">Foco no Cliente</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-brand-sm">
                <Icon name="Lightbulb" size={16} color="var(--color-accent)" />
                <span className="text-sm font-medium text-foreground">Inovação</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-brand-sm">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-sm font-medium text-foreground">Confiabilidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;