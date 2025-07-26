import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurante Sabor Brasileiro",
      category: "E-commerce",
      beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: {
        sales: "+200%",
        traffic: "+150%",
        conversion: "+85%"
      },
      description: "Transformação completa de presença digital com foco em delivery e reservas online.",
      client: "Maria Silva",
      testimonial: "O HN Digital revolucionou nosso negócio. Agora temos pedidos online 24h por dia!"
    },
    {
      id: 2,
      title: "Clínica Bem Estar",
      category: "Website Institucional",
      beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: {
        appointments: "+120%",
        leads: "+180%",
        retention: "+95%"
      },
      description: "Sistema completo de agendamento online e gestão de pacientes.",
      client: "Dr. João Santos",
      testimonial: "Profissionalismo excepcional. Nossos agendamentos triplicaram em 3 meses."
    },
    {
      id: 3,
      title: "Loja Fashion Style",
      category: "E-commerce",
      beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      afterImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: {
        revenue: "+300%",
        customers: "+250%",
        engagement: "+160%"
      },
      description: "Plataforma de moda online com integração completa de redes sociais.",
      client: "Ana Costa",
      testimonial: "Superou todas as expectativas! Agora vendemos para todo o Brasil."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentItem = portfolioItems[currentSlide];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Resultados Comprovados
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transformações que{' '}
            <span className="text-gradient-primary">Impactam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos clientes alcançaram resultados extraordinários com soluções digitais personalizadas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Before/After Images */}
              <div className="relative h-96 lg:h-auto">
                <div className="absolute inset-0 grid grid-cols-2 gap-1">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-error/90 text-error-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Antes
                    </div>
                    <Image
                      src={currentItem.beforeImage}
                      alt={`${currentItem.title} - Antes`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Depois
                    </div>
                    <Image
                      src={currentItem.afterImage}
                      alt={`${currentItem.title} - Depois`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                      {currentItem.category}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {currentItem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentItem.results).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-muted/50 rounded-xl">
                        <div className="text-2xl font-bold text-success mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key === 'sales' && 'Vendas'}
                          {key === 'traffic' && 'Tráfego'}
                          {key === 'conversion' && 'Conversão'}
                          {key === 'appointments' && 'Agendamentos'}
                          {key === 'leads' && 'Leads'}
                          {key === 'retention' && 'Retenção'}
                          {key === 'revenue' && 'Receita'}
                          {key === 'customers' && 'Clientes'}
                          {key === 'engagement' && 'Engajamento'}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground italic mb-3">
                          "{currentItem.testimonial}"
                        </p>
                        <p className="text-sm font-medium text-primary">
                          — {currentItem.client}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-brand-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-brand-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-primary w-8' :'bg-muted-foreground/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            iconName="Eye"
            iconPosition="left"
            iconSize={20}
          >
            <Link to="/interactive-portfolio-gallery">
              Ver Todos os Projetos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;