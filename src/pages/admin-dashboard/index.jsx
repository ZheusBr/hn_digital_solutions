import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import DashboardStats from './components/DashboardStats';
import RecentActivity from './components/RecentActivity';
import ProjectOverview from './components/ProjectOverview';
import WhatsAppIntegration from './components/WhatsAppIntegration';
import ClientManagement from './components/ClientManagement';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import QuickActions from './components/QuickActions';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, userProfile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated (for demo purposes, showing preview)
  useEffect(() => {
    // In preview mode, we allow access even without authentication
    // TODO: Before production deployment
    // 1. Wrap protected routes with <ProtectedRoute> component
    // 2. Remove preview mode fallbacks
    // 3. Test all authentication flows
    // 4. Verify role-based access controls
    
    if (!loading && !user) {
      // For preview mode, we'll show a preview banner instead of redirecting console.log('Preview Mode: Admin dashboard accessible without authentication');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      if (result?.success) {
        navigate('/auth/login');
      }
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  const navigationTabs = [
    { id: 'overview', name: 'Visão Geral', icon: 'LayoutDashboard' },
    { id: 'projects', name: 'Projetos', icon: 'Briefcase' },
    { id: 'clients', name: 'Clientes', icon: 'Users' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle' },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3' },
    { id: 'actions', name: 'Ações Rápidas', icon: 'Zap' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <ProjectOverview />
            </div>
          </div>
        );
      case 'projects':
        return <ProjectOverview />;
      case 'clients':
        return <ClientManagement />;
      case 'whatsapp':
        return <WhatsAppIntegration />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'actions':
        return <QuickActions />;
      default:
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <ProjectOverview />
            </div>
          </div>
        );
    }
  };

  // Preview mode banner for non-authenticated users
  const PreviewBanner = () => (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 text-center">
      <div className="flex items-center justify-center space-x-2">
        <Icon name="Eye" size={20} />
        <span className="font-medium">Modo de Visualização</span>
        <span className="text-blue-100">•</span>
        <span className="text-sm">
          Faça login para acessar todas as funcionalidades
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/auth/login')}
          className="text-white hover:bg-white/20 ml-2"
        >
          Entrar
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Preview Mode Banner */}
      {!user && !loading && <PreviewBanner />}
      
      <div className="pt-16">
        <div className="flex">
          {/* Sidebar */}
          <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-brand-md transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex flex-col h-full pt-16">
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Settings" size={20} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Admin Dashboard</h2>
                      <p className="text-sm text-muted-foreground">HN TI & SOLUÇÕES</p>
                    </div>
                  </div>
                </div>
                
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navigationTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-brand-sm'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      <Icon name={tab.icon} size={20} />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>

                <div className="p-4 border-t">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {user ? userProfile?.full_name || user.email : 'Visitante'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user ? userProfile?.role || 'Usuário' : 'Visualização'}
                        </p>
                      </div>
                    </div>
                    {user ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full" 
                        iconName="LogOut" 
                        iconPosition="left"
                        onClick={handleSignOut}
                      >
                        Sair
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full" 
                        iconName="LogIn" 
                        iconPosition="left"
                        onClick={() => navigate('/auth/login')}
                      >
                        Fazer Login
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay para mobile */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <div className="flex-1 lg:ml-0">
            <div className="p-6">
              {/* Header da página */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden"
                    iconName="Menu"
                  >
                  </Button>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      {navigationTabs.find(tab => tab.id === activeTab)?.name || 'Dashboard'}
                    </h1>
                    <p className="text-muted-foreground">
                      {user ? 'Bem-vindo ao painel administrativo da HN TI & SOLUÇÕES' : 'Visualizando painel administrativo em modo de demonstração'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700">Sistema Online</span>
                  </div>
                  
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      const message = encodeURIComponent('Olá! Preciso de suporte técnico no dashboard');
                      window.open(`https://wa.me/5513978125566?text=${message}`, '_blank');
                    }}
                    className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Suporte
                  </Button>
                </div>
              </div>

              {/* Conteúdo da página */}
              <div className="space-y-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;