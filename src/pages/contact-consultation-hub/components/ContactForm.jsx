import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    currentWebsite: '',
    budgetRange: '',
    timeline: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    { value: 'ecommerce', label: 'E-commerce / Loja Online' },
    { value: 'services', label: 'Prestação de Serviços' },
    { value: 'restaurant', label: 'Restaurante / Food Service' },
    { value: 'healthcare', label: 'Saúde e Bem-estar' },
    { value: 'education', label: 'Educação / Cursos' },
    { value: 'real-estate', label: 'Imobiliária' },
    { value: 'consulting', label: 'Consultoria' },
    { value: 'manufacturing', label: 'Indústria / Manufatura' },
    { value: 'nonprofit', label: 'ONG / Sem fins lucrativos' },
    { value: 'other', label: 'Outro' }
  ];

  const budgetRanges = [
    { value: 'up-to-2k', label: 'Até R$ 2.000' },
    { value: '2k-5k', label: 'R$ 2.000 - R$ 5.000' },
    { value: '5k-10k', label: 'R$ 5.000 - R$ 10.000' },
    { value: '10k-20k', label: 'R$ 10.000 - R$ 20.000' },
    { value: 'above-20k', label: 'Acima de R$ 20.000' },
    { value: 'discuss', label: 'Prefiro discutir' }
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgente (até 2 semanas)' },
    { value: '1-month', label: '1 mês' },
    { value: '2-3-months', label: '2-3 meses' },
    { value: '3-6-months', label: '3-6 meses' },
    { value: 'flexible', label: 'Flexível' }
  ];

  const contactPreferences = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'E-mail' },
    { value: 'phone', label: 'Telefone' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Tipo de negócio é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to WhatsApp with form data
      const message = `Olá! Enviei uma solicitação pelo formulário do site.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nTipo de Negócio: ${businessTypes.find(b => b.value === formData.businessType)?.label}\nMensagem: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        currentWebsite: '',
        budgetRange: '',
        timeline: '',
        message: '',
        preferredContact: 'whatsapp'
      });
      
    } catch (error) {
      setErrors({ submit: 'Erro ao enviar formulário. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Formulário de Contato Detalhado
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo para receber uma proposta personalizada
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-brand-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />

              <Input
                label="E-mail"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Telefone/WhatsApp"
                type="tel"
                name="phone"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                required
              />

              <Select
                label="Tipo de Negócio"
                placeholder="Selecione seu tipo de negócio"
                options={businessTypes}
                value={formData.businessType}
                onChange={(value) => handleSelectChange('businessType', value)}
                error={errors.businessType}
                required
              />
            </div>

            <Input
              label="Site Atual (se houver)"
              type="url"
              name="currentWebsite"
              placeholder="https://seusite.com.br"
              value={formData.currentWebsite}
              onChange={handleInputChange}
              description="Deixe em branco se não tiver site"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Orçamento Estimado"
                placeholder="Selecione uma faixa"
                options={budgetRanges}
                value={formData.budgetRange}
                onChange={(value) => handleSelectChange('budgetRange', value)}
              />

              <Select
                label="Prazo Desejado"
                placeholder="Quando precisa ficar pronto?"
                options={timelines}
                value={formData.timeline}
                onChange={(value) => handleSelectChange('timeline', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Descreva seu projeto *
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Conte-nos sobre seu projeto, objetivos, funcionalidades desejadas, inspirações..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-error">{errors.message}</p>
              )}
            </div>

            <Select
              label="Forma Preferida de Contato"
              options={contactPreferences}
              value={formData.preferredContact}
              onChange={(value) => handleSelectChange('preferredContact', value)}
            />

            {errors.submit && (
              <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" size={20} className="text-error" />
                  <p className="text-error">{errors.submit}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground touch-target flex-1"
                iconName="Send"
                iconPosition="left"
                iconSize={18}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => {
                  const message = 'Olá! Gostaria de uma consultoria gratuita sobre presença digital';
                  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="touch-target"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={18}
              >
                WhatsApp Direto
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;