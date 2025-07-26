import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
          selectedCategory === 'all' ?'bg-primary text-primary-foreground shadow-brand-sm' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
        }`}
      >
        <Icon name="Grid3X3" size={16} />
        <span>Todos</span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
            selectedCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-brand-sm'
              : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <Icon name={category.icon} size={16} />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;