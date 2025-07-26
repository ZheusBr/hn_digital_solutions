import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const AnalyticsDashboard = () => {
  const monthlyLeads = [
    { month: 'Jan', leads: 15, conversions: 8 },
    { month: 'Fev', leads: 22, conversions: 12 },
    { month: 'Mar', leads: 18, conversions: 10 },
    { month: 'Abr', leads: 28, conversions: 15 },
    { month: 'Mai', leads: 35, conversions: 18 },
    { month: 'Jun', leads: 42, conversions: 22 },
    { month: 'Jul', leads: 38, conversions: 20 }
  ];

  const leadSources = [
    { name: 'WhatsApp', value: 45, color: '#25D366' },
    { name: 'Instagram', value: 30, color: '#E4405F' },
    { name: 'Indicação', value: 15, color: '#2563EB' },
    { name: 'Google', value: 10, color: '#F97316' }
  ];

  const websitePerformance = [
    { site: 'Padaria São João', visits: 1250, bounce: 32, loadTime: 2.1 },
    { site: 'Clínica Vida', visits: 890, bounce: 28, loadTime: 1.8 },
    { site: 'Moda Feminina AC', visits: 2100, bounce: 45, loadTime: 2.5 },
    { site: 'Imobiliária Prime', visits: 650, bounce: 38, loadTime: 2.0 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 8500 },
    { month: 'Fev', revenue: 12300 },
    { month: 'Mar', revenue: 9800 },
    { month: 'Abr', revenue: 15600 },
    { month: 'Mai', revenue: 18900 },
    { month: 'Jun', revenue: 22400 },
    { month: 'Jul', revenue: 19800 }
  ];

  return (
    <div className="space-y-6">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-brand-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Receita Mensal</p>
              <p className="text-2xl font-bold text-foreground">R$ 19.800</p>
              <div className="flex items-center mt-2">
                <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+12% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Icon name="DollarSign" size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-brand-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
              <p className="text-2xl font-bold text-foreground">52.6%</p>
              <div className="flex items-center mt-2">
                <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+5.2% vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Target" size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-brand-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tempo Médio Resposta</p>
              <p className="text-2xl font-bold text-foreground">2.3h</p>
              <div className="flex items-center mt-2">
                <Icon name="TrendingDown" size={16} className="text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">-0.5h vs mês anterior</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-brand-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Satisfação Cliente</p>
              <p className="text-2xl font-bold text-foreground">4.8/5</p>
              <div className="flex items-center mt-2">
                <Icon name="Star" size={16} className="text-yellow-500 mr-1" />
                <span className="text-sm font-medium text-yellow-600">Baseado em 24 avaliações</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Leads e Conversões */}
        <div className="bg-white rounded-lg shadow-brand-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-foreground">Leads e Conversões</h3>
            <p className="text-sm text-muted-foreground">Últimos 7 meses</p>
          </div>
          <div className="p-6">
            <div className="w-full h-64" aria-label="Gráfico de Leads e Conversões">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyLeads}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#2563EB" name="Leads" />
                  <Bar dataKey="conversions" fill="#10B981" name="Conversões" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Fontes de Leads */}
        <div className="bg-white rounded-lg shadow-brand-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-foreground">Fontes de Leads</h3>
            <p className="text-sm text-muted-foreground">Distribuição por canal</p>
          </div>
          <div className="p-6">
            <div className="w-full h-64" aria-label="Gráfico de Fontes de Leads">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadSources}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {leadSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Performance dos Sites */}
      <div className="bg-white rounded-lg shadow-brand-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-foreground">Performance dos Sites</h3>
          <p className="text-sm text-muted-foreground">Métricas dos últimos 30 dias</p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Site</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Visitas</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Taxa de Rejeição</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tempo de Carregamento</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {websitePerformance.map((site, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-medium text-foreground">{site.site}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-foreground">{site.visits.toLocaleString('pt-BR')}</p>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          site.bounce < 30 ? 'bg-green-100 text-green-800' :
                          site.bounce < 40 ? 'bg-yellow-100 text-yellow-800': 'bg-red-100 text-red-800'
                        }`}>
                          {site.bounce}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          site.loadTime < 2 ? 'bg-green-100 text-green-800' :
                          site.loadTime < 3 ? 'bg-yellow-100 text-yellow-800': 'bg-red-100 text-red-800'
                        }`}>
                          {site.loadTime}s
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Gráfico de Receita */}
      <div className="bg-white rounded-lg shadow-brand-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-foreground">Evolução da Receita</h3>
          <p className="text-sm text-muted-foreground">Últimos 7 meses</p>
        </div>
        <div className="p-6">
          <div className="w-full h-64" aria-label="Gráfico de Evolução da Receita">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Receita']} />
                <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;