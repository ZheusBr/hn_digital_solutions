import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      id: 1,
      title: "Novo Projeto",
      description: "Criar um novo projeto para cliente",
      icon: "Plus",
      color: "bg-blue-500",
      action: () => console.log('Novo projeto')
    },
    {
      id: 2,
      title: "Backup Sites",
      description: "Executar backup de todos os sites",
      icon: "Download",
      color: "bg-green-500",
      action: () => console.log('Backup sites')
    },
    {
      id: 3,
      title: "Relatório Mensal",
      description: "Gerar relatório do mês atual",
      icon: "FileText",
      color: "bg-purple-500",
      action: () => console.log('Relatório mensal')
    },
    {
      id: 4,
      title: "Enviar Propostas",
      description: "Enviar propostas pendentes",
      icon: "Send",
      color: "bg-orange-500",
      action: () => console.log('Enviar propostas')
    }
  ];

  const systemStatus = [
    {
      id: 1,
      service: "Servidor Principal",
      status: "online",
      uptime: "99.9%",
      lastCheck: "2 min atrás"
    },
    {
      id: 2,
      service: "Backup Automático",
      status: "online",
      uptime: "100%",
      lastCheck: "5 min atrás"
    },
    {
      id: 3,
      service: "WhatsApp API",
      status: "online",
      uptime: "98.5%",
      lastCheck: "1 min atrás"
    },
    {
      id: 4,
      service: "Monitoramento Sites",
      status: "warning",
      uptime: "95.2%",
      lastCheck: "10 min atrás"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Ações Rápidas */}
      <div className="bg-white rounded-lg shadow-brand-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-foreground">Ações Rápidas</h3>
          <p className="text-sm text-muted-foreground">Acesso rápido às principais funcionalidades</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={action.action}
                className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={action.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{action.title}</h4>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Status do Sistema */}
      <div className="bg-white rounded-lg shadow-brand-sm border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Status do Sistema</h3>
              <p className="text-sm text-muted-foreground">Monitoramento em tempo real</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Todos os sistemas operacionais</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {systemStatus.map((system) => (
              <div key={system.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 ${getStatusBg(system.status)} rounded-full`}></div>
                  <div>
                    <h4 className="font-medium text-foreground">{system.service}</h4>
                    <p className="text-sm text-muted-foreground">Última verificação: {system.lastCheck}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${getStatusColor(system.status)}`}>
                    {system.status === 'online' ? 'Online' : 
                     system.status === 'warning' ? 'Atenção' : 'Offline'}
                  </p>
                  <p className="text-sm text-muted-foreground">Uptime: {system.uptime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lembretes e Tarefas */}
      <div className="bg-white rounded-lg shadow-brand-sm border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Lembretes Importantes</h3>
            <Button variant="ghost" size="sm" iconName="Plus">
              Adicionar
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Icon name="AlertTriangle" size={20} className="text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-yellow-800">Renovação SSL - Clínica Vida</h4>
                <p className="text-sm text-yellow-700">Certificado SSL expira em 15 dias</p>
                <p className="text-xs text-yellow-600 mt-1">Vencimento: 10/08/2025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Icon name="Calendar" size={20} className="text-blue-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-blue-800">Reunião com João Oliveira</h4>
                <p className="text-sm text-blue-700">Apresentação do projeto Padaria São João</p>
                <p className="text-xs text-blue-600 mt-1">Hoje às 14:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <Icon name="CheckCircle" size={20} className="text-green-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-green-800">Backup Mensal Concluído</h4>
                <p className="text-sm text-green-700">Todos os sites foram salvos com sucesso</p>
                <p className="text-xs text-green-600 mt-1">Concluído hoje às 03:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;