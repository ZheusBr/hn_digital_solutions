import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`Confira este artigo interessante: ${article.title} - ${window.location.origin}/resource-knowledge-base`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden shadow-brand-lg">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-8 lg:p-12 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-white/20 rounded-full p-2">
              <Icon name="Star" size={20} className="text-white" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Artigo em Destaque
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-lg opacity-90 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="opacity-80" />
              <span className="text-sm opacity-80">{article.readTime} min</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="opacity-80" />
              <span className="text-sm opacity-80">{article.publishDate}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              iconName="BookOpen"
              iconPosition="left"
            >
              Ler Artigo Completo
            </Button>
            
            <Button
              variant="ghost"
              onClick={handleWhatsAppShare}
              className="text-white border-white/30 hover:bg-white/10"
              iconName="Share2"
              iconPosition="left"
            >
              Compartilhar
            </Button>
          </div>
        </div>
        
        <div className="relative h-64 lg:h-auto">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;