import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setLoading(false);
    setEmail('');
    setPhone('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsAppSignup = () => {
    const message = encodeURIComponent('Olá! Gostaria de receber dicas de marketing digital via WhatsApp');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-bold text-success mb-2">Inscrição Realizada!</h3>
        <p className="text-muted-foreground">
          Você receberá nossas dicas de marketing digital em breve.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2">
          Receba Dicas Exclusivas
        </h3>
        <p className="text-muted-foreground">
          Cadastre-se e receba conteúdo sobre marketing digital direto no seu WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Seu melhor e-mail"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input
          type="tel"
          label="WhatsApp (opcional)"
          placeholder="(11) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          description="Para receber dicas direto no WhatsApp"
        />
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            variant="default"
            loading={loading}
            iconName="Mail"
            iconPosition="left"
            className="flex-1"
          >
            Quero Receber Dicas
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={handleWhatsAppSignup}
            iconName="MessageCircle"
            iconPosition="left"
            className="flex-1 bg-whatsapp/10 border-whatsapp/20 text-whatsapp hover:bg-whatsapp/20"
          >
            Via WhatsApp
          </Button>
        </div>
      </form>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        Não enviamos spam. Você pode cancelar a qualquer momento.
      </p>
    </div>
  );
};

export default NewsletterSignup;