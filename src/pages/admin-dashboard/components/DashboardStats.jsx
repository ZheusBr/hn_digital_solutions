import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      title: "Projetos Ativos",
      value: "12",
      change: "+3",
      changeType: "increase",
      icon: "Briefcase",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Clientes Ativos",
      value: "28",
      change: "+5",
      changeType: "increase",
      icon: "Users",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Mensagens WhatsApp",
      value: "47",
      change: "+12",
      changeType: "increase",
      icon: "MessageCircle",
      color: "bg-whatsapp"
    },
    {
      id: 4,
      title: "Sites em Manutenção",
      value: "15",
      change: "0",
      changeType: "neutral",
      icon: "Settings",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white rounded-lg shadow-brand-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
              <div className="flex items-center mt-2">
                {stat.changeType === 'increase' && (
                  <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                )}
                {stat.changeType === 'decrease' && (
                  <Icon name="TrendingDown" size={16} className="text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 
                  stat.changeType === 'decrease' ? 'text-red-600' : 'text-muted-foreground'
                }`}>
                  {stat.change} este mês
                </span>
              </div>
            </div>
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <Icon name={stat.icon} size={24} className="text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;