import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');

  const clients = [
    {
      id: 1,
      name: "João Oliveira",
      company: "Padaria São João",
      email: "joao@padariasaojoao.com.br",
      phone: "+55 11 99999-1234",
      status: "ativo",
      projectStatus: "em_desenvolvimento",
      lastContact: "2025-07-25",
      nextMaintenance: "2025-08-15",
      monthlyValue: 299.90,
      totalProjects: 2
    },
    {
      id: 2,
      name: "Ana Costa",
      company: "Moda Feminina AC",
      email: "ana@modafemininaac.com.br",
      phone: "+55 11 99999-5678",
      status: "ativo",
      projectStatus: "revisao_cliente",
      lastContact: "2025-07-24",
      nextMaintenance: "2025-08-20",
      monthlyValue: 499.90,
      totalProjects: 1
    },
    {
      id: 3,
      name: "Dr. Carlos Santos",
      company: "Clínica Vida",
      email: "carlos@clinicavida.com.br",
      phone: "+55 11 99999-9012",
      status: "ativo",
      projectStatus: "concluido",
      lastContact: "2025-07-23",
      nextMaintenance: "2025-08-10",
      monthlyValue: 399.90,
      totalProjects: 3
    },
    {
      id: 4,
      name: "Roberto Silva",
      company: "Imobiliária Prime",
      email: "roberto@imobiliariaprime.com.br",
      phone: "+55 11 99999-3456",
      status: "inativo",
      projectStatus: "planejamento",
      lastContact: "2025-07-20",
      nextMaintenance: null,
      monthlyValue: 0,
      totalProjects: 1
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-800';
      case 'inativo': return 'bg-red-100 text-red-800';
      case 'pendente': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectStatusColor = (status) => {
    switch (status) {
      case 'planejamento': return 'bg-yellow-100 text-yellow-800';
      case 'em_desenvolvimento': return 'bg-blue-100 text-blue-800';
      case 'revisao_cliente': return 'bg-orange-100 text-orange-800';
      case 'concluido': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectStatusText = (status) => {
    switch (status) {
      case 'planejamento': return 'Planejamento';
      case 'em_desenvolvimento': return 'Em Desenvolvimento';
      case 'revisao_cliente': return 'Revisão Cliente';
      case 'concluido': return 'Concluído';
      default: return 'Indefinido';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'todos' || client.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleWhatsApp = (phone) => {
    const message = encodeURIComponent('Olá! Como posso ajudá-lo hoje?');
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-brand-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Gerenciamento de Clientes</h3>
          <Button variant="default" size="sm" iconName="UserPlus" iconPosition="left">
            Novo Cliente
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Buscar por nome ou empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="todos">Todos Status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="pendente">Pendente</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Cliente</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Projeto</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Último Contato</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Valor Mensal</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-foreground">{client.name}</p>
                      <p className="text-sm text-muted-foreground">{client.company}</p>
                      <p className="text-xs text-muted-foreground">{client.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                      {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(client.projectStatus)}`}>
                      {getProjectStatusText(client.projectStatus)}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{client.totalProjects} projeto(s)</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-foreground">{new Date(client.lastContact).toLocaleDateString('pt-BR')}</p>
                    {client.nextMaintenance && (
                      <p className="text-xs text-muted-foreground">
                        Próx. manutenção: {new Date(client.nextMaintenance).toLocaleDateString('pt-BR')}
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-foreground">
                      {client.monthlyValue > 0 ? `R$ ${client.monthlyValue.toFixed(2).replace('.', ',')}` : '-'}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        iconName="MessageCircle"
                        onClick={() => handleWhatsApp(client.phone)}
                        className="text-whatsapp hover:text-whatsapp/80"
                      >
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Eye">
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Edit">
                      </Button>
                      <Button variant="ghost" size="sm" iconName="MoreVertical">
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhum cliente encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientManagement;