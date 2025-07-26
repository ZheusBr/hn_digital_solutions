import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      business: "Restaurante Sabor Brasileiro",
      location: "São Paulo, SP",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      quote: "O HN Digital revolucionou nosso negócio. Antes tínhamos apenas o balcão físico, agora recebemos pedidos online 24 horas por dia. Em 6 meses, nossas vendas aumentaram 200% e conseguimos contratar mais 3 funcionários!",
      results: {
        metric1: { label: "Vendas", value: "+200%" },
        metric2: { label: "Pedidos Online", value: "150/dia" },
        metric3: { label: "Novos Clientes", value: "+300" }
      },
      rating: 5,
      date: "Janeiro 2025"
    },
    {
      id: 2,
      name: "Dr. João Santos",
      business: "Clínica Bem Estar",
      location: "Rio de Janeiro, RJ",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      quote: "Profissionalismo excepcional! O sistema de agendamento online que desenvolveram transformou nossa clínica. Os pacientes adoram a praticidade e nossos agendamentos triplicaram. A equipe do HN entende realmente as necessidades de um consultório médico.",
      results: {
        metric1: { label: "Agendamentos", value: "+300%" },
        metric2: { label: "Satisfação", value: "98%" },
        metric3: { label: "Tempo Economizado", value: "15h/semana" }
      },
      rating: 5,
      date: "Dezembro 2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      business: "Loja Fashion Style",
      location: "Belo Horizonte, MG",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      videoThumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      quote: "Superou todas as minhas expectativas! Tinha uma pequena loja física e sonhava em vender online. O HN Digital não só criou uma loja virtual linda, mas me ensinou como gerenciar tudo. Hoje vendo para o Brasil inteiro e meu faturamento cresceu 400%!",
      results: {
        metric1: { label: "Faturamento", value: "+400%" },
        metric2: { label: "Alcance", value: "Todo Brasil" },
        metric3: { label: "Produtos Vendidos", value: "2.500/mês" }
      },
      rating: 5,
      date: "Novembro 2024"
    }
  ];

  const handleVideoPlay = (testimonial) => {
    // Simulate video play - in real implementation, this would open a video modal
    alert(`Reproduzindo depoimento em vídeo de ${testimonial.name}`);
  };

  const handleWhatsAppContact = (testimonial) => {
    const message = encodeURIComponent(`Olá! Vi o depoimento da ${testimonial.name} e gostaria de saber mais sobre como vocês podem ajudar meu negócio.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-6">
            <Icon name="Heart" size={16} className="mr-2" />
            Clientes Satisfeitos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Histórias de{' '}
            <span className="text-gradient-primary">Sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos clientes transformaram seus negócios e alcançaram resultados extraordinários.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video/Image Side */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src={testimonials[activeTestimonial].videoThumbnail}
                alt={`${testimonials[activeTestimonial].business} - Caso de sucesso`}
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  onClick={() => handleVideoPlay(testimonials[activeTestimonial])}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-brand-md transition-all duration-200 hover:scale-110"
                >
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                </button>
              </div>

              {/* Business Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-foreground">
                    {testimonials[activeTestimonial].business}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].date}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Icon name="Quote" size={32} className="text-primary/20 absolute -top-2 -left-2" />
                  <blockquote className="text-lg text-foreground leading-relaxed pl-8">
                    {testimonials[activeTestimonial].quote}
                  </blockquote>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.values(testimonials[activeTestimonial].results).map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-xl font-bold text-success mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-semibold text-foreground">
                        {testimonials[activeTestimonial].name}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Proprietário(a)
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWhatsAppContact(testimonials[activeTestimonial])}
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Quero o mesmo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                index === activeTestimonial
                  ? 'bg-primary text-primary-foreground shadow-brand-sm'
                  : 'bg-white hover:bg-muted text-foreground'
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <div className="font-medium text-sm">{testimonial.name}</div>
                <div className="text-xs opacity-80">{testimonial.business}</div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-brand-sm">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para ser o próximo caso de sucesso?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a centenas de empresários que já transformaram seus negócios com nossas soluções digitais.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const message = encodeURIComponent('Olá! Vi os depoimentos dos seus clientes e quero transformar meu negócio também. Vamos conversar?');
              window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
            }}
            className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={20}
          >
            Começar Minha Transformação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;