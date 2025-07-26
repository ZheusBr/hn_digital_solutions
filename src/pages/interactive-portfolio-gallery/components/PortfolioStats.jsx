import React from 'react';
import Icon from '../../../components/AppIcon';

const PortfolioStats = ({ projects, filteredProjects }) => {
  const stats = [
    {
      icon: 'Briefcase',
      label: 'Projetos Concluídos',
      value: projects.length,
      color: 'text-primary'
    },
    {
      icon: 'Users',
      label: 'Clientes Satisfeitos',
      value: projects.length,
      color: 'text-success'
    },
    {
      icon: 'TrendingUp',
      label: 'Taxa de Sucesso',
      value: '98%',
      color: 'text-accent'
    },
    {
      icon: 'Award',
      label: 'Avaliação Média',
      value: '4.9★',
      color: 'text-warning'
    }
  ];

  const categoryStats = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  const topCategories = Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 4);

  return (
    <div className="bg-card rounded-xl shadow-brand-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Estatísticas do Portfólio</h2>
        <div className="text-sm text-muted-foreground">
          Mostrando {filteredProjects.length} de {projects.length} projetos
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Distribution */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Distribuição por Categoria</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {topCategories.map(([category, count], index) => (
            <div key={index} className="bg-muted rounded-lg p-4">
              <div className="text-lg font-bold text-primary mb-1">{count}</div>
              <div className="text-sm text-muted-foreground capitalize">{category}</div>
              <div className="w-full bg-border rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(count / projects.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;