import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectOverview = () => {
  const projects = [
    {
      id: 1,
      name: "Site Padaria São João",
      client: "João Oliveira",
      status: "em_desenvolvimento",
      progress: 75,
      deadline: "15/08/2025",
      priority: "alta",
      lastUpdate: "Hoje"
    },
    {
      id: 2,
      name: "E-commerce Moda Feminina",
      client: "Ana Costa",
      status: "revisao_cliente",
      progress: 90,
      deadline: "20/08/2025",
      priority: "media",
      lastUpdate: "Ontem"
    },
    {
      id: 3,
      name: "Site Clínica Vida",
      client: "Dr. Carlos Santos",
      status: "concluido",
      progress: 100,
      deadline: "10/08/2025",
      priority: "baixa",
      lastUpdate: "3 dias atrás"
    },
    {
      id: 4,
      name: "Portal Imobiliária Prime",
      client: "Roberto Silva",
      status: "planejamento",
      progress: 25,
      deadline: "30/08/2025",
      priority: "alta",
      lastUpdate: "Hoje"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'planejamento': return 'bg-yellow-100 text-yellow-800';
      case 'em_desenvolvimento': return 'bg-blue-100 text-blue-800';
      case 'revisao_cliente': return 'bg-orange-100 text-orange-800';
      case 'concluido': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'planejamento': return 'Planejamento';
      case 'em_desenvolvimento': return 'Em Desenvolvimento';
      case 'revisao_cliente': return 'Revisão Cliente';
      case 'concluido': return 'Concluído';
      default: return 'Indefinido';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta': return 'text-red-500';
      case 'media': return 'text-yellow-500';
      case 'baixa': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-brand-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Projetos em Andamento</h3>
          <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
            Novo Projeto
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-foreground">{project.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Flag" size={16} className={getPriorityColor(project.priority)} />
                  <span className="text-sm text-muted-foreground">{project.lastUpdate}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-muted-foreground">Cliente: {project.client}</p>
                <p className="text-sm text-muted-foreground">Prazo: {project.deadline}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">Progresso</span>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" iconName="Eye">
                    Ver
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Edit">
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;