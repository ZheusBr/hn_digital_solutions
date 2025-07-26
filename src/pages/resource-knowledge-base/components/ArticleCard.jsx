import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article }) => {
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`Confira este artigo: ${article.title} - ${window.location.origin}/resource-knowledge-base`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      'primeiros-passos': 'bg-blue-100 text-blue-700',
      'marketing-digital': 'bg-green-100 text-green-700',
      'manutencao-sites': 'bg-orange-100 text-orange-700',
      'seo-otimizacao': 'bg-purple-100 text-purple-700',
      'redes-sociais': 'bg-pink-100 text-pink-700',
      'seguranca-web': 'bg-red-100 text-red-700'
    };
    return colors[categoryId] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-card rounded-xl shadow-brand-sm hover:shadow-brand-md transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.categoryId)}`}>
            {article.category}
          </span>
        </div>
        {article.isNew && (
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              Novo
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{article.readTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{article.views}</span>
            </div>
          </div>
          <span>{article.publishDate}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            iconName="BookOpen"
            iconPosition="left"
            className="flex-1 mr-2"
          >
            Ler Mais
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWhatsAppShare}
            iconName="Share2"
            className="px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;