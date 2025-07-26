import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResource = ({ resource }) => {
  const handleDownload = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = resource.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getResourceIcon = (type) => {
    const icons = {
      'checklist': 'CheckSquare',
      'calculator': 'Calculator',
      'template': 'FileText',
      'guide': 'BookOpen',
      'video': 'Play'
    };
    return icons[type] || 'Download';
  };

  const getResourceColor = (type) => {
    const colors = {
      'checklist': 'bg-green-50 border-green-200 text-green-700',
      'calculator': 'bg-blue-50 border-blue-200 text-blue-700',
      'template': 'bg-purple-50 border-purple-200 text-purple-700',
      'guide': 'bg-orange-50 border-orange-200 text-orange-700',
      'video': 'bg-red-50 border-red-200 text-red-700'
    };
    return colors[type] || 'bg-gray-50 border-gray-200 text-gray-700';
  };

  return (
    <div className={`border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-brand-md ${getResourceColor(resource.type)}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
            <Icon name={getResourceIcon(resource.type)} size={24} />
          </div>
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
          <p className="text-sm opacity-80 mb-4">{resource.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs opacity-70">
              <span>{resource.fileSize}</span>
              <span>{resource.downloads} downloads</span>
            </div>
            
            <Button
              variant="default"
              size="sm"
              onClick={handleDownload}
              iconName="Download"
              iconPosition="left"
              className="bg-white/20 hover:bg-white/30 text-current border-current/20"
            >
              Baixar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableResource;