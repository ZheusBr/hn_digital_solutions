import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterBar = ({ 
  activeCategory, 
  onCategoryChange, 
  activeBudget, 
  onBudgetChange,
  activeTimeline,
  onTimelineChange,
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onClearFilters
}) => {
  const categories = [
    { value: 'all', label: 'Todos os Projetos' },
    { value: 'restaurantes', label: 'Restaurantes' },
    { value: 'consultorios', label: 'Consultórios' },
    { value: 'lojas-online', label: 'Lojas Online' },
    { value: 'servicos-profissionais', label: 'Serviços Profissionais' },
    { value: 'educacao', label: 'Educação' },
    { value: 'saude-bem-estar', label: 'Saúde & Bem-estar' }
  ];

  const budgetRanges = [
    { value: 'all', label: 'Todos os Orçamentos' },
    { value: '1000-3000', label: 'R$ 1.000 - R$ 3.000' },
    { value: '3000-5000', label: 'R$ 3.000 - R$ 5.000' },
    { value: '5000-10000', label: 'R$ 5.000 - R$ 10.000' },
    { value: '10000+', label: 'R$ 10.000+' }
  ];

  const timelineOptions = [
    { value: 'all', label: 'Todos os Prazos' },
    { value: '1-2-weeks', label: '1-2 semanas' },
    { value: '3-4-weeks', label: '3-4 semanas' },
    { value: '1-2-months', label: '1-2 meses' },
    { value: '3-months+', label: '3+ meses' }
  ];

  const hasActiveFilters = activeCategory !== 'all' || activeBudget !== 'all' || activeTimeline !== 'all' || searchTerm;

  return (
    <div className="bg-card rounded-xl shadow-brand-sm p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Buscar projetos por nome, cliente ou tecnologia..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Select
          label="Categoria"
          options={categories}
          value={activeCategory}
          onChange={onCategoryChange}
          className="w-full"
        />

        <Select
          label="Orçamento"
          options={budgetRanges}
          value={activeBudget}
          onChange={onBudgetChange}
          className="w-full"
        />

        <Select
          label="Prazo"
          options={timelineOptions}
          value={activeTimeline}
          onChange={onTimelineChange}
          className="w-full"
        />

        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">Visualização</label>
          <div className="flex rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`flex-1 px-3 py-2 flex items-center justify-center transition-colors ${
                viewMode === 'grid' ?'bg-primary text-primary-foreground' :'bg-background hover:bg-muted'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`flex-1 px-3 py-2 flex items-center justify-center transition-colors ${
                viewMode === 'list' ?'bg-primary text-primary-foreground' :'bg-background hover:bg-muted'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters & Clear */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Filtros ativos:</span>
            {activeCategory !== 'all' && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {categories.find(c => c.value === activeCategory)?.label}
              </span>
            )}
            {activeBudget !== 'all' && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {budgetRanges.find(b => b.value === activeBudget)?.label}
              </span>
            )}
            {activeTimeline !== 'all' && (
              <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                {timelineOptions.find(t => t.value === activeTimeline)?.label}
              </span>
            )}
            {searchTerm && (
              <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full">
                "{searchTerm}"
              </span>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
          >
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;