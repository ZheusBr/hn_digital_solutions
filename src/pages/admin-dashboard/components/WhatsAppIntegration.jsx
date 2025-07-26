import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppIntegration = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const conversations = [
    {
      id: 1,
      client: "Maria Silva",
      lastMessage: "Obrigada pelo orçamento! Quando podemos começar?",
      timestamp: "10:30",
      unread: 2,
      status: "online",
      phone: "+55 11 99999-1234"
    },
    {
      id: 2,
      client: "João Santos",
      lastMessage: "Preciso de um site para meu restaurante",
      timestamp: "09:15",
      unread: 0,
      status: "offline",
      phone: "+55 11 99999-5678"
    },
    {
      id: 3,
      client: "Ana Costa",
      lastMessage: "As alterações ficaram perfeitas!",
      timestamp: "Ontem",
      unread: 0,
      status: "online",
      phone: "+55 11 99999-9012"
    },
    {
      id: 4,
      client: "Carlos Oliveira",
      lastMessage: "Quando será a próxima manutenção?",
      timestamp: "Ontem",
      unread: 1,
      status: "offline",
      phone: "+55 11 99999-3456"
    }
  ];

  const scheduledMessages = [
    {
      id: 1,
      client: "Roberto Silva",
      message: "Lembrete: Backup mensal do seu site será realizado amanhã",
      scheduledFor: "27/07/2025 09:00",
      type: "maintenance"
    },
    {
      id: 2,
      client: "Fernanda Lima",
      message: "Sua mensalidade de manutenção vence em 3 dias",
      scheduledFor: "29/07/2025 10:00",
      type: "payment"
    }
  ];

  const handleOpenWhatsApp = (phone, message = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-brand-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-whatsapp rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">WhatsApp Business</h3>
              <p className="text-sm text-muted-foreground">Gerencie conversas com clientes</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Online</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversas Recentes */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Conversas Recentes</h4>
            <div className="space-y-3">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="relative">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Icon name="User" size={18} className="text-muted-foreground" />
                      </div>
                      {conversation.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground text-sm">{conversation.client}</p>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-whatsapp rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => handleOpenWhatsApp('5511999999999', 'Olá! Como posso ajudá-lo hoje?')}
            >
              Abrir WhatsApp Web
            </Button>
          </div>

          {/* Mensagens Agendadas */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-foreground">Mensagens Agendadas</h4>
              <Button variant="ghost" size="sm" iconName="Plus">
                Agendar
              </Button>
            </div>
            <div className="space-y-3">
              {scheduledMessages.map((message) => (
                <div key={message.id} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground text-sm">{message.client}</p>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={message.type === 'maintenance' ? 'Settings' : 'CreditCard'} 
                        size={14} 
                        className={message.type === 'maintenance' ? 'text-blue-500' : 'text-green-500'} 
                      />
                      <span className="text-xs text-muted-foreground">{message.scheduledFor}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{message.message}</p>
                  <div className="flex items-center justify-end space-x-2 mt-2">
                    <Button variant="ghost" size="sm" iconName="Edit">
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Trash2" className="text-red-500 hover:text-red-600">
                      Excluir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estatísticas WhatsApp */}
        <div className="mt-6 pt-6 border-t">
          <h4 className="font-medium text-foreground mb-4">Estatísticas do Mês</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-whatsapp">47</p>
              <p className="text-sm text-muted-foreground">Mensagens Recebidas</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-muted-foreground">Novos Leads</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-sm text-muted-foreground">Projetos Fechados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIntegration;