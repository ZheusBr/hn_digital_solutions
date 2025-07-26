import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PortfolioCard from './components/PortfolioCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import PortfolioStats from './components/PortfolioStats';

const InteractivePortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBudget, setActiveBudget] = useState('all');
  const [activeTimeline, setActiveTimeline] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock portfolio data
  const portfolioProjects = [
    {
      id: 1,
      title: "Restaurante Sabor Brasileiro",
      client: "Maria Silva",
      category: "restaurantes",
      description: "Website completo com sistema de reservas online e cardápio digital interativo para restaurante tradicional brasileiro.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      timeline: "3 semanas",
      budgetRange: "R$ 3.000 - R$ 5.000",
      rating: 5,
      technologies: ["React", "Node.js", "MongoDB", "WhatsApp API"],
      keyFeatures: ["Sistema de Reservas", "Cardápio Digital", "Integração WhatsApp", "Painel Admin"],
      results: {
        trafficIncrease: "+180%",
        conversionRate: "12%",
        socialEngagement: "+250%"
      },
      clientStory: `Maria Silva sempre sonhou em ter um restaurante que celebrasse a culinária brasileira. Após anos trabalhando em cozinhas de outros estabelecimentos, ela finalmente abriu o "Sabor Brasileiro" em 2023. No entanto, enfrentava dificuldades para atrair clientes e gerenciar reservas de forma eficiente.\n\nCom a pandemia, percebeu que precisava de uma presença digital forte para sobreviver no mercado competitivo de restaurantes. Foi quando nos procurou em busca de uma solução completa que representasse a essência acolhedora de seu negócio.`,
      challenges: [
        "Baixa visibilidade online e dificuldade para atrair novos clientes",
        "Sistema manual de reservas causando conflitos e perda de clientes",
        "Cardápio físico desatualizado e sem apelo visual",
        "Falta de integração com redes sociais e WhatsApp",
        "Dificuldade para gerenciar pedidos durante horários de pico"
      ],
      solutions: [
        "Desenvolvimento de website responsivo com identidade visual autêntica",
        "Implementação de sistema automatizado de reservas online",
        "Criação de cardápio digital interativo com fotos profissionais",
        "Integração completa com WhatsApp para pedidos e atendimento",
        "Painel administrativo para gestão de reservas e cardápio"
      ],
      testimonial: {
        name: "Maria Silva",
        position: "Proprietária - Restaurante Sabor Brasileiro",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5,
        quote: "O HN Digital transformou completamente meu negócio! Antes eu perdia clientes por não conseguir gerenciar as reservas direito. Agora tenho um sistema que funciona sozinho e meu restaurante está sempre lotado. O retorno do investimento veio em menos de 2 meses!"
      },
      relatedProjects: [
        {
          title: "Pizzaria Nonna Rosa",
          category: "restaurantes",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300"
        },
        {
          title: "Café Central",
          category: "restaurantes", 
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300"
        },
        {
          title: "Bistrô Gourmet",
          category: "restaurantes",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300"
        }
      ]
    },
    {
      id: 2,
      title: "Clínica Dr. João Cardiologia",
      client: "Dr. João Santos",
      category: "consultorios",
      description: "Sistema completo de agendamento online e gestão de pacientes para clínica cardiológica especializada.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500",
      beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
      timeline: "4 semanas",
      budgetRange: "R$ 5.000 - R$ 10.000",
      rating: 5,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Google Calendar"],
      keyFeatures: ["Agendamento Online", "Prontuário Digital", "Telemedicina", "Gestão Financeira"],
      results: {
        trafficIncrease: "+220%",
        conversionRate: "18%",
        socialEngagement: "+190%"
      },
      clientStory: `Dr. João Santos é cardiologista há mais de 15 anos e sempre priorizou o atendimento humanizado. Sua clínica cresceu através de indicações, mas ele percebia que estava perdendo pacientes mais jovens que buscavam praticidade no agendamento.\n\nCom a demanda crescente e a necessidade de otimizar o tempo, ele precisava de uma solução tecnológica que mantivesse a qualidade do atendimento enquanto modernizava os processos administrativos.`,
      challenges: [
        "Agendamentos por telefone gerando conflitos de horários",
        "Prontuários físicos dificultando o acompanhamento de pacientes",
        "Falta de sistema para consultas online durante a pandemia",
        "Dificuldade para gerenciar pagamentos e convênios",
        "Baixa presença digital afetando captação de novos pacientes"
      ],
      solutions: [
        "Plataforma de agendamento online integrada com Google Calendar",
        "Sistema de prontuário eletrônico com histórico completo",
        "Módulo de telemedicina para consultas remotas",
        "Gestão automatizada de pagamentos e convênios",
        "Website profissional com SEO otimizado para cardiologia"
      ],
      testimonial: {
        name: "Dr. João Santos",
        position: "Cardiologista - CRM 12345",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 5,
        quote: "A solução do HN Digital revolucionou minha prática médica. Reduzi em 70% o tempo gasto com agendamentos e posso focar no que realmente importa: cuidar dos meus pacientes. O sistema é intuitivo e meus pacientes adoram a praticidade!"
      },
      relatedProjects: [
        {
          title: "Clínica Odontológica Sorriso",
          category: "consultorios",
          image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300"
        },
        {
          title: "Fisioterapia Movimento",
          category: "consultorios",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
        },
        {
          title: "Psicologia Bem-Estar",
          category: "consultorios",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300"
        }
      ]
    },
    {
      id: 3,
      title: "Loja Virtual Moda Feminina",
      client: "Ana Costa",
      category: "lojas-online",
      description: "E-commerce completo com sistema de pagamento, gestão de estoque e integração com redes sociais para loja de moda feminina.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      beforeImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
      timeline: "6 semanas",
      budgetRange: "R$ 5.000 - R$ 10.000",
      rating: 5,
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Instagram API"],
      keyFeatures: ["Catálogo de Produtos", "Carrinho de Compras", "Pagamento Online", "Gestão de Estoque"],
      results: {
        trafficIncrease: "+300%",
        conversionRate: "15%",
        socialEngagement: "+400%"
      },
      clientStory: `Ana Costa começou vendendo roupas femininas através do Instagram durante a pandemia. Com o crescimento das vendas, ela percebeu que precisava de uma plataforma mais profissional para gerenciar seu negócio e oferecer uma experiência de compra melhor para suas clientes.\n\nSeu objetivo era manter a proximidade com as clientes que conquistou nas redes sociais, mas com a praticidade e segurança de um e-commerce profissional.`,
      challenges: [
        "Vendas limitadas ao Instagram sem controle de estoque",
        "Dificuldade para processar pagamentos de forma segura",
        "Falta de sistema para acompanhar pedidos e entregas",
        "Gestão manual de produtos causando erros",
        "Necessidade de expandir além das redes sociais"
      ],
      solutions: [
        "E-commerce responsivo com design moderno e feminino",
        "Integração com múltiplas formas de pagamento",
        "Sistema completo de gestão de estoque e pedidos",
        "Sincronização automática com Instagram Shopping",
        "Painel administrativo para controle total do negócio"
      ],
      testimonial: {
        name: "Ana Costa",
        position: "Proprietária - Moda Feminina AC",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 5,
        quote: "Meu faturamento triplicou depois que o HN Digital criou minha loja online! Agora tenho controle total do meu estoque, as clientes podem comprar 24h e ainda mantenho a conexão com o Instagram. Foi o melhor investimento que fiz!"
      },
      relatedProjects: [
        {
          title: "Loja de Acessórios Brilho",
          category: "lojas-online",
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300"
        },
        {
          title: "Calçados Conforto",
          category: "lojas-online",
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"
        },
        {
          title: "Cosméticos Naturais",
          category: "lojas-online",
          image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300"
        }
      ]
    },
    {
      id: 4,
      title: "Escritório de Advocacia Silva & Associados",
      client: "Dr. Carlos Silva",
      category: "servicos-profissionais",
      description: "Website institucional com área do cliente, agendamento de consultas e blog jurídico para escritório de advocacia.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      timeline: "4 semanas",
      budgetRange: "R$ 3.000 - R$ 5.000",
      rating: 5,
      technologies: ["React", "Node.js", "MongoDB", "JWT Auth"],
      keyFeatures: ["Área do Cliente", "Agendamento Online", "Blog Jurídico", "Consulta Gratuita"],
      results: {
        trafficIncrease: "+160%",
        conversionRate: "22%",
        socialEngagement: "+120%"
      },
      clientStory: `Dr. Carlos Silva lidera um escritório de advocacia familiar há 20 anos. Apesar da excelente reputação, ele notava que advogados mais jovens estavam captando clientes através da internet, enquanto seu escritório dependia apenas de indicações.\n\nEle precisava de uma presença digital que transmitisse a seriedade e experiência do escritório, mas também oferecesse praticidade para os clientes modernos.`,
      challenges: [
        "Baixa visibilidade online comparado à concorrência",
        "Dificuldade para agendar consultas fora do horário comercial",
        "Falta de material educativo para atrair potenciais clientes",
        "Processo manual de triagem de casos",
        "Necessidade de demonstrar expertise em diferentes áreas do direito"
      ],
      solutions: [
        "Website profissional com design sóbrio e confiável",
        "Sistema de agendamento online para consultas iniciais",
        "Blog jurídico com artigos educativos e SEO otimizado",
        "Área restrita para clientes acompanharem seus processos",
        "Formulário inteligente para pré-qualificação de casos"
      ],
      testimonial: {
        name: "Dr. Carlos Silva",
        position: "Advogado Sócio - OAB/SP 123456",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 5,
        quote: "O HN Digital entendeu perfeitamente o que nosso escritório precisava. Conseguimos manter nossa seriedade profissional e ao mesmo tempo nos modernizar. Nossos clientes elogiam muito a praticidade do sistema!"
      },
      relatedProjects: [
        {
          title: "Contabilidade Números Certos",
          category: "servicos-profissionais",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300"
        },
        {
          title: "Consultoria Empresarial Pro",
          category: "servicos-profissionais",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
        },
        {
          title: "Arquitetura & Design",
          category: "servicos-profissionais",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300"
        }
      ]
    },
    {
      id: 5,
      title: "Escola de Idiomas Global English",
      client: "Professora Linda",
      category: "educacao",
      description: "Plataforma de ensino online com aulas ao vivo, material didático digital e sistema de avaliação para escola de idiomas.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      beforeImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
      timeline: "8 semanas",
      budgetRange: "R$ 10.000+",
      rating: 5,
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Zoom API"],
      keyFeatures: ["Aulas Online", "Material Digital", "Sistema de Avaliação", "Certificados"],
      results: {
        trafficIncrease: "+280%",
        conversionRate: "25%",
        socialEngagement: "+350%"
      },
      clientStory: `Professora Linda sempre foi apaixonada por ensinar inglês. Com 10 anos de experiência em escolas tradicionais, ela decidiu abrir sua própria escola de idiomas. A pandemia acelerou sua necessidade de migrar para o ensino online.\n\nEla queria uma plataforma que oferecesse a mesma qualidade das aulas presenciais, mas com a flexibilidade que os alunos modernos procuram.`,
      challenges: [
        "Transição do ensino presencial para online",
        "Falta de plataforma integrada para gestão de alunos",
        "Dificuldade para manter engajamento em aulas virtuais",
        "Necessidade de sistema de avaliação e certificação",
        "Competição com grandes escolas de idiomas online"
      ],
      solutions: [
        "Plataforma completa de ensino online com salas virtuais",
        "Sistema de gestão de alunos e cronograma de aulas",
        "Biblioteca digital com material didático interativo",
        "Módulo de avaliações automáticas e certificados",
        "App mobile para estudos offline e exercícios"
      ],
      testimonial: {
        name: "Linda Santos",
        position: "Diretora - Global English School",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        rating: 5,
        quote: "A plataforma criada pelo HN Digital superou todas as minhas expectativas! Meus alunos estão mais engajados do que nas aulas presenciais. Consegui expandir minha escola para todo o Brasil!"
      },
      relatedProjects: [
        {
          title: "Curso de Programação Code Academy",
          category: "educacao",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300"
        },
        {
          title: "Escola de Música Harmonia",
          category: "educacao",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
        },
        {
          title: "Academia de Dança Movimento",
          category: "educacao",
          image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300"
        }
      ]
    },
    {
      id: 6,
      title: "Spa & Wellness Center Zen",
      client: "Mariana Wellness",
      category: "saude-bem-estar",
      description: "Website com agendamento online, loja de produtos naturais e blog sobre bem-estar para spa e centro de estética.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      timeline: "5 semanas",
      budgetRange: "R$ 5.000 - R$ 10.000",
      rating: 5,
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Instagram API"],
      keyFeatures: ["Agendamento Spa", "Loja de Produtos", "Blog Wellness", "Programa Fidelidade"],
      results: {
        trafficIncrease: "+240%",
        conversionRate: "20%",
        socialEngagement: "+300%"
      },
      clientStory: `Mariana sempre acreditou no poder transformador dos cuidados com o bem-estar. Após anos trabalhando em spas de luxo, ela decidiu abrir seu próprio centro wellness focado em tratamentos naturais e holísticos.\n\nSeu desafio era comunicar a filosofia do spa e atrair clientes que valorizassem não apenas a beleza, mas o bem-estar integral.`,
      challenges: [
        "Dificuldade para comunicar a proposta holística do spa",
        "Sistema de agendamento manual causando conflitos",
        "Baixa venda de produtos complementares",
        "Falta de conteúdo educativo sobre bem-estar",
        "Necessidade de fidelizar clientes em mercado competitivo"
      ],
      solutions: [
        "Website com design zen e experiência imersiva",
        "Sistema de agendamento online para múltiplos serviços",
        "E-commerce integrado para produtos naturais",
        "Blog com conteúdo sobre bem-estar e autocuidado",
        "Programa de fidelidade com pontuação e recompensas"
      ],
      testimonial: {
        name: "Mariana Oliveira",
        position: "Proprietária - Spa Zen Wellness",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        quote: "O HN Digital captou perfeitamente a essência do meu spa! O site transmite a tranquilidade que oferecemos e o sistema de agendamento facilitou muito a vida das minhas clientes. As vendas online dos produtos aumentaram 200%!"
      },
      relatedProjects: [
        {
          title: "Academia Fitness Pro",
          category: "saude-bem-estar",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
        },
        {
          title: "Clínica de Estética Bella",
          category: "saude-bem-estar",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300"
        },
        {
          title: "Nutricionista Vida Saudável",
          category: "saude-bem-estar",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300"
        }
      ]
    }
  ];

  // Filter projects based on active filters
  useEffect(() => {
    let filtered = portfolioProjects;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }

    if (activeBudget !== 'all') {
      filtered = filtered.filter(project => {
        const budget = project.budgetRange;
        switch (activeBudget) {
          case '1000-3000':
            return budget.includes('1.000') || budget.includes('3.000');
          case '3000-5000':
            return budget.includes('3.000') || budget.includes('5.000');
          case '5000-10000':
            return budget.includes('5.000') || budget.includes('10.000');
          case '10000+':
            return budget.includes('10.000+');
          default:
            return true;
        }
      });
    }

    if (activeTimeline !== 'all') {
      filtered = filtered.filter(project => {
        const timeline = project.timeline;
        switch (activeTimeline) {
          case '1-2-weeks':
            return timeline.includes('1 semana') || timeline.includes('2 semanas');
          case '3-4-weeks':
            return timeline.includes('3 semanas') || timeline.includes('4 semanas');
          case '1-2-months':
            return timeline.includes('5 semanas') || timeline.includes('6 semanas') || timeline.includes('8 semanas');
          case '3-months+':
            return timeline.includes('meses');
          default:
            return true;
        }
      });
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, activeBudget, activeTimeline, searchTerm]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleWhatsAppContact = (project) => {
    // Analytics tracking could be added here
    console.log(`WhatsApp contact for project: ${project.title}`);
  };

  const handleClearFilters = () => {
    setActiveCategory('all');
    setActiveBudget('all');
    setActiveTimeline('all');
    setSearchTerm('');
  };

  const handleConsultationClick = () => {
    const message = encodeURIComponent('Olá! Vi seu portfólio e gostaria de uma consultoria gratuita para meu projeto digital.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfólio Interativo - HN Digital Solutions | Cases de Sucesso</title>
        <meta name="description" content="Explore nosso portfólio de projetos digitais com cases reais de restaurantes, consultórios, lojas online e serviços profissionais. Veja resultados comprovados e transformações digitais." />
        <meta name="keywords" content="portfólio digital, cases de sucesso, desenvolvimento web, e-commerce, sites profissionais, transformação digital" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Portfólio de Transformações Digitais
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Descubra como ajudamos empresas reais a crescer através de soluções digitais personalizadas. 
              Cada projeto conta uma história de sucesso e transformação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleConsultationClick}
                className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Consultoria Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                iconName="ArrowDown"
                iconPosition="left"
                iconSize={20}
                onClick={() => document.getElementById('portfolio-grid').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Portfolio Stats */}
          <PortfolioStats projects={portfolioProjects} filteredProjects={filteredProjects} />

          {/* Filter Bar */}
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            activeBudget={activeBudget}
            onBudgetChange={setActiveBudget}
            activeTimeline={activeTimeline}
            onTimelineChange={setActiveTimeline}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onClearFilters={handleClearFilters}
          />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'Projeto Encontrado' : 'Projetos Encontrados'}
              </h2>
              <p className="text-muted-foreground">
                {activeCategory !== 'all' && `Categoria: ${activeCategory} • `}
                Ordenados por relevância
              </p>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {activeCategory !== 'all' || activeBudget !== 'all' || activeTimeline !== 'all' || searchTerm ?'Filtros ativos' :'Todos os projetos'
                }
              </span>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div id="portfolio-grid">
            {filteredProjects.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
              }`}>
                {filteredProjects.map((project) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    onWhatsAppContact={handleWhatsAppContact}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum projeto encontrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar os filtros ou buscar por outros termos
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Cada projeto em nosso portfólio começou com uma conversa. 
              Vamos descobrir juntos como podemos impulsionar seu negócio digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleConsultationClick}
                className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Conversar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Agendar Reunião
              </Button>
            </div>
          </section>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} HN Digital Solutions. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InteractivePortfolioGallery;