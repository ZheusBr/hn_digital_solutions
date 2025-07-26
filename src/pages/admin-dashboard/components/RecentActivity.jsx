import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "project_update",
      title: "Projeto Padaria São João atualizado",
      description: "Nova seção de produtos adicionada ao site",
      timestamp: "2 horas atrás",
      icon: "FileText",
      color: "text-blue-500"
    },
    {
      id: 2,
      type: "client_message",
      title: "Nova mensagem de Maria Silva",
      description: "Solicitação de alteração no menu principal",
      timestamp: "4 horas atrás",
      icon: "MessageSquare",
      color: "text-green-500"
    },
    {
      id: 3,
      type: "payment_received",
      title: "Pagamento recebido",
      description: "R$ 1.200,00 - Desenvolvimento site Clínica Vida",
      timestamp: "6 horas atrás",
      icon: "CreditCard",
      color: "text-emerald-500"
    },
    {
      id: 4,
      type: "maintenance_alert",
      title: "Backup automático concluído",
      description: "15 sites em manutenção - backup realizado com sucesso",
      timestamp: "8 horas atrás",
      icon: "Shield",
      color: "text-orange-500"
    },
    {
      id: 5,
      type: "new_lead",
      title: "Novo lead via WhatsApp",
      description: "João Santos interessado em site para restaurante",
      timestamp: "1 dia atrás",
      icon: "UserPlus",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-brand-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Atividades Recentes</h3>
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            Ver todas
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0`}>
                <Icon name={activity.icon} size={18} className={activity.color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;