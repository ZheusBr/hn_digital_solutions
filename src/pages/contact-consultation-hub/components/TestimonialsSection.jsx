import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      business: 'Restaurante Sabor Caseiro',
      location: 'São Paulo, SP',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `A HN Digital transformou completamente nosso negócio! Antes tínhamos apenas o WhatsApp, agora temos um site lindo que trouxe 60% mais pedidos. O atendimento foi excepcional, sempre disponíveis para tirar dúvidas.`,
      results: [
        { metric: 'Aumento em pedidos', value: '60%' },
        { metric: 'Novos clientes/mês', value: '150+' },
        { metric: 'Tempo de projeto', value: '3 semanas' }
      ],
      projectType: 'Site + E-commerce'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      business: 'Consultoria Financeira CM',
      location: 'Rio de Janeiro, RJ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Profissionalismo e qualidade excepcionais! A HN entendeu perfeitamente minha necessidade de transmitir confiança e seriedade. O site ficou elegante e já trouxe vários clientes qualificados.`,
      results: [
        { metric: 'Leads qualificados', value: '40+' },
        { metric: 'Taxa de conversão', value: '25%' },
        { metric: 'ROI em 2 meses', value: '300%' }
      ],
      projectType: 'Site Institucional'
    },
    {
      id: 3,
      name: 'Ana Costa',
      business: 'Boutique Ana Bella',
      location: 'Belo Horizonte, MG',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Superou todas as expectativas! O e-commerce ficou lindo e funcional. As vendas online cresceram 200% em apenas 2 meses. A equipe é muito atenciosa e sempre pronta para ajudar.`,
      results: [
        { metric: 'Crescimento vendas', value: '200%' },
        { metric: 'Ticket médio', value: '+45%' },
        { metric: 'Satisfação clientes', value: '98%' }
      ],
      projectType: 'E-commerce Completo'
    },
    {
      id: 4,
      name: 'Roberto Santos',
      business: 'Clínica Odontológica Santos',
      location: 'Curitiba, PR',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: `Trabalho impecável! O site transmite exatamente a confiança que precisávamos. Os agendamentos online facilitaram muito nossa rotina e aumentaram nossa base de pacientes.`,
      results: [
        { metric: 'Novos pacientes', value: '80+' },
        { metric: 'Agendamentos online', value: '70%' },
        { metric: 'Redução ligações', value: '50%' }
      ],
      projectType: 'Site + Sistema de Agendamento'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação digital e crescimento de negócios
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-lg border mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-4">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {currentTestimonial.business}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {currentTestimonial.location}
                </p>
                
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  <Icon name="Briefcase" size={14} />
                  <span>{currentTestimonial.projectType}</span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {currentTestimonial.text}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-brand-sm"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-brand-sm"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;