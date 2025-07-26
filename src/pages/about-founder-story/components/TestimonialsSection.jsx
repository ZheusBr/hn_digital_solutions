import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      business: "Doces da Maria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `O Henrique não apenas criou meu site, ele transformou meu negócio. Antes eu vendia apenas no bairro, hoje recebo pedidos de toda a cidade. Ele entende as necessidades de quem está começando e oferece soluções que realmente funcionam.`,
      rating: 5,
      result: "300% aumento nas vendas"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      business: "Oficina do Carlos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Trabalhar com o Henrique foi uma das melhores decisões que tomei para minha oficina. Ele criou um sistema de agendamento online que organizou completamente meu negócio. Agora tenho mais tempo para focar no que sei fazer melhor.`,
      rating: 5,
      result: "50% mais agendamentos"
    },
    {
      id: 3,
      name: "Ana Costa",
      business: "Consultoria Jurídica",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `A experiência com a HN foi excepcional. O Henrique entendeu perfeitamente minhas necessidades como advogada e criou um site profissional que transmite confiança aos meus clientes. O suporte contínuo faz toda a diferença.`,
      rating: 5,
      result: "200% mais consultas"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#F59E0B" : "#E5E7EB"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Dizem Nossos <span className="text-gradient-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é uma parceria. Veja como transformamos negócios através 
            de soluções digitais personalizadas e atendimento humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-brand-md border p-8 hover:shadow-brand-lg transition-all duration-300 card-hover"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Result */}
              <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                  <span className="text-sm font-medium text-success">
                    Resultado: {testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ser o próximo case de sucesso?
          </p>
          <div className="inline-flex items-center space-x-2 text-primary font-medium">
            <Icon name="MessageCircle" size={20} />
            <span>Vamos conversar sobre seu projeto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;