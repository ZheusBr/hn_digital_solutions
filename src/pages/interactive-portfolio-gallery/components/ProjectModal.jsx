import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Vi o projeto ${project.title} no seu portfólio e gostaria de discutir algo similar para meu negócio. Especificamente interessado em: ${project.keyFeatures.slice(0, 2).join(', ')}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-2xl shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <p className="text-muted-foreground">{project.client} • {project.category}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Antes</h3>
              <Image
                src={project.beforeImage}
                alt={`${project.title} - Antes`}
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Depois</h3>
              <Image
                src={project.image}
                alt={`${project.title} - Depois`}
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">História do Cliente</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.clientStory}
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">Desafios Enfrentados</h3>
              <ul className="space-y-2 mb-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="AlertCircle" size={16} className="text-warning mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-4">Soluções Implementadas</h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Project Stats */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Resultados Alcançados</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">
                      {project.results.trafficIncrease}
                    </div>
                    <div className="text-sm text-muted-foreground">Aumento no Tráfego</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      {project.results.conversionRate}
                    </div>
                    <div className="text-sm text-muted-foreground">Taxa de Conversão</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {project.results.socialEngagement}
                    </div>
                    <div className="text-sm text-muted-foreground">Engajamento Social</div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Recursos Principais</h4>
                  <ul className="space-y-1">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <Icon name="Zap" size={12} className="text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground">Prazo</h4>
                    <p className="text-muted-foreground">{project.timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Orçamento</h4>
                    <p className="text-muted-foreground">{project.budgetRange}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-4">
              <Image
                src={project.testimonial.avatar}
                alt={project.testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <blockquote className="text-foreground italic mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{project.testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${i < project.testimonial.rating ? "text-warning fill-current" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Projetos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.relatedProjects.map((related, index) => (
                <div key={index} className="bg-muted rounded-lg p-4">
                  <Image
                    src={related.image}
                    alt={related.title}
                    className="w-full h-24 object-cover rounded-md mb-3"
                  />
                  <h4 className="font-medium text-foreground text-sm mb-1">{related.title}</h4>
                  <p className="text-xs text-muted-foreground">{related.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Interessado em um Projeto Similar?
            </h3>
            <p className="text-white/90 mb-4">
              Vamos conversar sobre como podemos transformar seu negócio digital
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="default"
                onClick={handleWhatsAppClick}
                className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
              >
                Conversar no WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                iconName="ArrowLeft"
                iconPosition="left"
                iconSize={16}
              >
                Voltar ao Portfólio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;