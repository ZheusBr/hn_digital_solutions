import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "2021",
      title: "A Decisão de Mudar",
      description: `Depois de anos no mercado corporativo, percebi que minha paixão estava em outro lugar. A pandemia me fez refletir sobre o que realmente importava: ajudar pessoas e negócios a crescerem através da tecnologia.\n\nFoi um momento de coragem e incerteza, mas também de muita esperança.`,
      icon: "Lightbulb",
      color: "bg-warning"
    },
    {
      id: 2,
      year: "2022",
      title: "Aprendendo Desenvolvimento Web",
      description: `Mergulhei de cabeça no mundo do desenvolvimento web. Cursos online, projetos pessoais, noites em claro estudando React, JavaScript e design responsivo.\n\nCada linha de código era um passo mais próximo do meu objetivo: criar soluções digitais que realmente fizessem diferença.`,
      icon: "Code",
      color: "bg-primary"
    },
    {
      id: 3,
      year: "2022",
      title: "Primeiro Cliente e Primeira Vitória",
      description: `Maria, dona de uma pequena confeitaria, precisava de um site para vender seus bolos online. Ver o sorriso dela quando as primeiras vendas chegaram através do site foi o momento que confirmou minha escolha.\n\nNão era apenas sobre código - era sobre transformar vidas e negócios.`,
      icon: "Heart",
      color: "bg-success"
    },
    {
      id: 4,
      year: "2023",
      title: "Nascimento da HN TI & Soluções",
      description: `Com mais clientes chegando através de indicações, formalizei a empresa. O foco sempre foi claro: soluções digitais acessíveis para pequenos negócios, com atendimento humanizado.\n\nCada projeto é tratado como se fosse meu próprio negócio.`,
      icon: "Building",
      color: "bg-accent"
    },
    {
      id: 5,
      year: "2024",
      title: "Crescimento e Impacto",
      description: `Hoje, já são mais de 50 projetos entregues, dezenas de pequenos negócios transformados digitalmente. Cada site, cada sistema, cada consultoria é uma oportunidade de fazer a diferença.\n\nO futuro é ainda mais promissor, com novos serviços e parcerias estratégicas.`,
      icon: "TrendingUp",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Minha Jornada de <span className="text-gradient-primary">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada passo desta jornada foi guiado pela paixão de ajudar pequenos negócios 
            a alcançarem seu potencial através da presença digital.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`hidden md:flex w-16 h-16 ${event.color} rounded-full items-center justify-center shadow-brand-md relative z-10`}>
                  <Icon name={event.icon} size={24} color="white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-brand-sm border p-8 hover:shadow-brand-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`md:hidden w-12 h-12 ${event.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={event.icon} size={20} color="white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {event.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;