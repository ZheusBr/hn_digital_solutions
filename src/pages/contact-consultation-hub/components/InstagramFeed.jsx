import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InstagramFeed = ({ onInstagramClick }) => {
  const [posts, setPosts] = useState([]);

  // Mock Instagram posts data
  const mockPosts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop',
      caption: 'Novo site para cliente do ramo alimentício! 🍕 Design moderno e responsivo que aumentou as vendas em 40%',
      likes: 127,
      comments: 23,
      timestamp: '2 horas atrás'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop',
      caption: 'Dica do dia: A velocidade do seu site impacta diretamente no SEO! ⚡ Vamos otimizar juntos?',
      likes: 89,
      comments: 15,
      timestamp: '1 dia atrás'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=400&fit=crop',
      caption: 'Cliente satisfeito = nossa maior conquista! 🎉 Obrigado pela confiança, @clientefeliz',
      likes: 156,
      comments: 31,
      timestamp: '2 dias atrás'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=400&fit=crop',
      caption: 'Transformação digital não é só sobre tecnologia, é sobre pessoas! 💡 #DigitalTransformation',
      likes: 203,
      comments: 42,
      timestamp: '3 dias atrás'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop',
      caption: 'Processo de criação: do wireframe ao site final! 🎨 Transparência em cada etapa',
      likes: 94,
      comments: 18,
      timestamp: '4 dias atrás'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
      caption: 'Reunião de alinhamento com novo cliente! 🤝 Projetos incríveis vêm por aí',
      likes: 78,
      comments: 12,
      timestamp: '5 dias atrás'
    }
  ];

  useEffect(() => {
    // Simulate loading Instagram posts
    const timer = setTimeout(() => {
      setPosts(mockPosts);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePostClick = (post) => {
    // Open Instagram post (mock URL)
    window.open(`https://instagram.com/p/${post.id}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Icon name="Instagram" size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                @hndigitalsolutions
              </h2>
              <p className="text-sm text-muted-foreground">
                Acompanhe nosso trabalho no Instagram
              </p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja nossos projetos mais recentes, dicas diárias e bastidores do desenvolvimento
          </p>

          <Button
            variant="default"
            size="lg"
            onClick={onInstagramClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white touch-target"
            iconName="Instagram"
            iconPosition="left"
            iconSize={20}
          >
            Seguir no Instagram
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handlePostClick(post)}
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs opacity-80">{post.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instagram Stats */}
        <div className="bg-card rounded-2xl p-8 shadow-brand-md border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground">Seguidores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projetos Mostrados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Engajamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;