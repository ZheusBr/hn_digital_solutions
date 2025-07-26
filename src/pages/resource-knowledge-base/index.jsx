import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import DownloadableResource from './components/DownloadableResource';
import NewsletterSignup from './components/NewsletterSignup';
import ROICalculator from './components/ROICalculator';

const ResourceKnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Mock data for categories
  const categories = [
    { id: 'primeiros-passos', name: 'Primeiros Passos Online', icon: 'Rocket' },
    { id: 'marketing-digital', name: 'Marketing Digital Básico', icon: 'TrendingUp' },
    { id: 'manutencao-sites', name: 'Manutenção de Sites', icon: 'Settings' },
    { id: 'seo-otimizacao', name: 'SEO & Otimização', icon: 'Search' },
    { id: 'redes-sociais', name: 'Redes Sociais', icon: 'Share2' },
    { id: 'seguranca-web', name: 'Segurança Web', icon: 'Shield' }
  ];

  // Mock data for featured article
  const featuredArticle = {
    id: 1,
    title: "Como Escolher o Domínio Perfeito para Seu Negócio",
    excerpt: "Descubra as melhores práticas para escolher um domínio que represente sua marca e seja facilmente encontrado pelos clientes. Inclui dicas sobre extensões, palavras-chave e disponibilidade.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    readTime: 8,
    publishDate: "25 Jan 2025",
    category: "Primeiros Passos Online",
    categoryId: "primeiros-passos"
  };

  // Mock data for articles
  const articles = [
    {
      id: 2,
      title: "Instagram para Pequenas Empresas: Guia Completo 2025",
      excerpt: "Estratégias práticas para usar o Instagram como ferramenta de vendas. Desde a criação do perfil comercial até campanhas que convertem.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?w=400&h=300&fit=crop",
      category: "Redes Sociais",
      categoryId: "redes-sociais",
      readTime: 12,
      views: "2.3k",
      publishDate: "23 Jan 2025",
      isNew: true
    },
    {
      id: 3,
      title: "Por Que Seu Site Precisa de SSL: Segurança e SEO",
      excerpt: "Entenda a importância do certificado SSL para proteger seus clientes e melhorar seu posicionamento no Google.",
      image: "https://images.pixabay.com/photo/2018/07/14/11/33/cyber-security-3537380_1280.jpg?w=400&h=300&fit=crop",
      category: "Segurança Web",
      categoryId: "seguranca-web",
      readTime: 6,
      views: "1.8k",
      publishDate: "22 Jan 2025",
      isNew: false
    },
    {
      id: 4,
      title: "SEO Local: Como Aparecer nas Buscas da Sua Cidade",
      excerpt: "Técnicas específicas para pequenos negócios locais dominarem as buscas regionais e atraírem mais clientes próximos.",
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=400&h=300&fit=crop",
      category: "SEO & Otimização",
      categoryId: "seo-otimizacao",
      readTime: 10,
      views: "3.1k",
      publishDate: "20 Jan 2025",
      isNew: false
    },
    {
      id: 5,
      title: "Manutenção de Site: Checklist Mensal Essencial",
      excerpt: "Lista completa de tarefas mensais para manter seu site seguro, rápido e funcionando perfeitamente.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=400&h=300&fit=crop",
      category: "Manutenção de Sites",
      categoryId: "manutencao-sites",
      readTime: 7,
      views: "1.5k",
      publishDate: "18 Jan 2025",
      isNew: false
    },
    {
      id: 6,
      title: "Google Meu Negócio: Configuração Completa",
      excerpt: "Passo a passo para configurar e otimizar seu perfil no Google Meu Negócio e aparecer no Google Maps.",
      image: "https://images.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg?w=400&h=300&fit=crop",
      category: "Marketing Digital Básico",
      categoryId: "marketing-digital",
      readTime: 9,
      views: "2.7k",
      publishDate: "16 Jan 2025",
      isNew: false
    },
    {
      id: 7,
      title: "WhatsApp Business: Automatize Seu Atendimento",
      excerpt: "Como usar o WhatsApp Business para melhorar o atendimento ao cliente e aumentar as vendas do seu negócio.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Marketing Digital Básico",
      categoryId: "marketing-digital",
      readTime: 8,
      views: "4.2k",
      publishDate: "14 Jan 2025",
      isNew: false
    }
  ];

  // Mock data for downloadable resources
  const downloadableResources = [
    {
      id: 1,
      title: "Checklist: Lançamento de Site",
      description: "Lista completa de verificações antes de colocar seu site no ar",
      type: "checklist",
      fileSize: "PDF 2.1MB",
      downloads: "1.2k",
      fileName: "checklist-lancamento-site.pdf"
    },
    {
      id: 2,
      title: "Calculadora de ROI Digital",
      description: "Planilha para calcular o retorno do investimento em marketing digital",
      type: "calculator",
      fileSize: "Excel 850KB",
      downloads: "890",
      fileName: "calculadora-roi-digital.xlsx"
    },
    {
      id: 3,
      title: "Template: Briefing de Projeto",
      description: "Modelo profissional para briefing de projetos web",
      type: "template",
      fileSize: "Word 1.5MB",
      downloads: "650",
      fileName: "template-briefing-projeto.docx"
    }
  ];

  // Filter articles based on search and category
  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.categoryId === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory]);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Olá! Vi a base de conhecimento e gostaria de uma consultoria sobre presença digital');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Base de Conhecimento
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Guias e Dicas para Seu
              <span className="text-gradient-primary block">Sucesso Digital</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Conteúdo especializado para pequenas empresas brasileiras que querem crescer online. 
              Aprenda com quem entende do mercado nacional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              >
                Consultoria Gratuita
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Baixar Recursos
              </Button>
            </div>
            
            {/* Search Bar */}
            <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedArticle article={featuredArticle} />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Artigos e Tutoriais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo prático e atualizado para você dominar o marketing digital
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={64} className="text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar sua busca ou escolher uma categoria diferente
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Calcule o ROI do Seu Site
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra quanto um site profissional pode aumentar seu faturamento
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recursos Gratuitos
            </h2>
            <p className="text-lg text-muted-foreground">
              Checklists, templates e ferramentas para acelerar seu crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource) => (
              <DownloadableResource key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Precisa de Ajuda Personalizada?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Nossa equipe está pronta para criar a estratégia digital perfeita para seu negócio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Falar no WhatsApp
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">HN Digital</h3>
                  <p className="text-sm text-muted-foreground">Soluções</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Transformando pequenos negócios através de soluções digitais inteligentes e acessíveis.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Instagram" className="px-2" />
                <Button variant="ghost" size="sm" iconName="Linkedin" className="px-2" />
                <Button variant="ghost" size="sm" iconName="Youtube" className="px-2" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-card-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Artigos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Calculadoras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-card-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>contato@hndigital.com.br</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} HN Digital Soluções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourceKnowledgeBase;