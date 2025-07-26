import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PortfolioCard = ({ project, onViewDetails, onWhatsAppContact }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Vi o projeto ${project.title} no seu portfólio e gostaria de discutir algo similar para meu negócio.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    onWhatsAppContact(project);
  };

  return (
    <div className="bg-card rounded-xl shadow-brand-sm hover:shadow-brand-md transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <button
              onClick={() => onViewDetails(project)}
              className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="Eye" size={16} className="text-gray-700" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-8 h-8 bg-whatsapp hover:bg-whatsapp/90 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="MessageCircle" size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < project.rating ? "fill-current" : ""}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-success">
              {project.results.trafficIncrease}
            </div>
            <div className="text-xs text-muted-foreground">Tráfego</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-accent">
              {project.results.conversionRate}
            </div>
            <div className="text-xs text-muted-foreground">Conversão</div>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Timeline and Budget */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="DollarSign" size={14} />
            <span>{project.budgetRange}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            Ver Detalhes
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleWhatsAppClick}
            className="bg-whatsapp hover:bg-whatsapp/90 text-white"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={14}
          >
            Contatar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;