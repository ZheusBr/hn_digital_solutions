import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock Instagram posts data
  const mockPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "🚀 Novo projeto finalizado! E-commerce completo para nosso cliente do ramo alimentício. Resultado: +200% em vendas online! #WebDevelopment #Ecommerce #DigitalTransformation",
      likes: 127,
      comments: 23,
      timestamp: "2 horas atrás",
      type: "image"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "💡 Dica do dia: Seu site precisa carregar em menos de 3 segundos! Veja como otimizamos a performance dos nossos projetos. #WebPerformance #SEO #DigitalTips",
      likes: 89,
      comments: 15,
      timestamp: "1 dia atrás",
      type: "carousel"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "🎉 Cliente satisfeito é nossa maior recompensa! Obrigado Maria Silva pelo feedback incrível. Seu restaurante está bombando online! #ClienteSatisfeito #Testimonial",
      likes: 156,
      comments: 31,
      timestamp: "2 dias atrás",
      type: "image"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "📱 Responsividade é fundamental! 70% dos acessos vêm do mobile. Todos nossos projetos são mobile-first. #ResponsiveDesign #MobileFirst #WebDesign",
      likes: 94,
      comments: 18,
      timestamp: "3 dias atrás",
      type: "video"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "🔧 Nos bastidores: Desenvolvendo um sistema de agendamento personalizado. A tecnologia a serviço do seu negócio! #BehindTheScenes #CustomDevelopment",
      likes: 73,
      comments: 12,
      timestamp: "4 dias atrás",
      type: "image"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      caption: "💼 Reunião de planejamento com novo cliente. Cada projeto é único e merece uma estratégia personalizada. #ClientMeeting #Strategy #BusinessGrowth",
      likes: 112,
      comments: 27,
      timestamp: "5 dias atrás",
      type: "image"
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/hnti_solucoes', '_blank');
  };

  const handlePostClick = (post) => {
    // In real implementation, this would open Instagram post
    window.open('https://instagram.com/hnti_solucoes', '_blank');
  };

  const formatCaption = (caption) => {
    // Truncate caption for display
    return caption.length > 100 ? caption.substring(0, 100) + '...' : caption;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-medium mb-6">
              <Icon name="Instagram" size={16} className="mr-2" />
              Carregando Feed...
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square bg-muted animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-medium mb-6">
            <Icon name="Instagram" size={16} className="mr-2" />
            @hnti_solucoes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Acompanhe nosso{' '}
            <span className="text-gradient-accent">Dia a Dia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja os bastidores dos nossos projetos, dicas valiosas e celebre o sucesso dos nossos clientes.
          </p>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleInstagramClick}
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
            iconName="Instagram"
            iconPosition="left"
            iconSize={20}
          >
            Seguir no Instagram
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square bg-white rounded-xl overflow-hidden shadow-brand-sm hover:shadow-brand-md transition-all duration-300 cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <Image
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Post Type Indicator */}
              <div className="absolute top-3 right-3">
                {post.type === 'carousel' && (
                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Copy" size={12} className="text-foreground" />
                  </div>
                )}
                {post.type === 'video' && (
                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={12} className="text-foreground" />
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center space-y-2">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs px-2 leading-tight">
                    {formatCaption(post.caption)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Conteúdo Exclusivo
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    @hnti_solucoes
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  🎯 Dicas diárias de marketing digital
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Bastidores dos projetos em desenvolvimento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Cases de sucesso dos nossos clientes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Dicas práticas para pequenos negócios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Tendências do mercado digital</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  iconName="Instagram"
                  iconPosition="left"
                  iconSize={18}
                >
                  Seguir Agora
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const message = encodeURIComponent('Olá! Vi vocês no Instagram e gostaria de saber mais sobre os serviços.');
                    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
                  }}
                  className="border-pink-200 text-pink-600 hover:bg-pink-50"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={18}
                >
                  Conversar
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {posts.slice(0, 4).map((post, index) => (
                  <div
                    key={post.id}
                    className={`relative rounded-xl overflow-hidden ${
                      index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt="Instagram preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs leading-tight">
                        {formatCaption(post.caption)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;