import React from 'react';
import Icon from '../../../components/AppIcon';

const BusinessInfo = () => {
  const businessDetails = [
    {
      icon: 'Clock',
      title: 'Horário de Atendimento',
      details: [
        'Segunda a Sexta: 8h às 18h',
        'Sábado: 9h às 14h',
        'Domingo: Emergências apenas'
      ]
    },
    {
      icon: 'MapPin',
      title: 'Área de Atendimento',
      details: [
        'Todo território nacional',
        'Atendimento 100% remoto',
        'Reuniões por videoconferência'
      ]
    },
    {
      icon: 'MessageCircle',
      title: 'Tempo de Resposta',
      details: [
        'WhatsApp: até 2 horas',
        'E-mail: até 24 horas',
        'Formulário: até 4 horas'
      ]
    },
    {
      icon: 'Shield',
      title: 'Segurança e Privacidade',
      details: [
        'LGPD compliance',
        'SSL em todas comunicações',
        'Dados protegidos'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Google Partner',
      description: 'Certificação em Google Ads e Analytics',
      icon: 'Award'
    },
    {
      name: 'Meta Business',
      description: 'Especialista em Facebook e Instagram Ads',
      icon: 'Star'
    },
    {
      name: 'CNPJ Ativo',
      description: 'Empresa regularizada e confiável',
      icon: 'CheckCircle'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Informações da Empresa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência e confiabilidade em todos os nossos processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {businessDetails.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-brand-sm hover:shadow-brand-md transition-all duration-300 border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={item.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                    <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Registration Info */}
        <div className="bg-card rounded-2xl p-8 shadow-brand-md border mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                HN TI & Soluções Digitais
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Building" size={18} className="text-primary" />
                  <span className="text-foreground">CNPJ: 12.345.678/0001-90</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span className="text-foreground">São Paulo, SP - Brasil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span className="text-foreground">contato@hndigital.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span className="text-foreground">+55 (11) 99999-9999</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
                <Icon name="Shield" size={18} />
                <span className="font-medium">Empresa Verificada</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empresa regularizada junto à Receita Federal,
                <br />
                com certificações digitais e compliance LGPD
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certificações e Parcerias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-brand-sm border hover:shadow-brand-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={28} className="text-accent" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;