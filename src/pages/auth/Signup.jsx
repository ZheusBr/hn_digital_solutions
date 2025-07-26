import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signUp, user, authError, clearError } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/admin-dashboard');
    }
  }, [user, navigate]);

  // Clear auth errors when component mounts
  useEffect(() => {
    clearError?.();
    return () => clearError?.();
  }, [clearError]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return 'Nome completo é obrigatório';
    }
    
    if (!formData.email || !formData.email.includes('@')) {
      return 'Email válido é obrigatório';
    }
    
    if (formData.password.length < 6) {
      return 'Senha deve ter pelo menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      return 'Senhas não coincidem';
    }
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Validate form
      const validationError = validateForm();
      if (validationError) {
        setError(validationError);
        return;
      }

      const result = await signUp(formData.email, formData.password, {
        full_name: formData.fullName,
        role: 'editor'
      });
      
      if (result?.success) {
        setSuccess('Conta criada com sucesso! Verifique seu email para confirmar.');
        // Clear form
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        setError(result?.error || 'Falha no cadastro');
      }
    } catch (error) {
      setError('Algo deu errado. Tente novamente.');
      console.log('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayError = error || authError;

  return (
    <>
      <Helmet>
        <title>Cadastro - HN TI & Soluções</title>
        <meta name="description" content="Crie sua conta para gerenciar o conteúdo da HN TI & Soluções" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Layers" size={24} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-foreground">HN TI</h1>
                <p className="text-sm text-muted-foreground">Soluções</p>
              </div>
            </Link>
            
            <h2 className="text-3xl font-bold text-foreground">
              Criar Conta
            </h2>
            <p className="mt-2 text-muted-foreground">
              Cadastre-se para gerenciar o conteúdo do site
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8 border border-border/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {displayError && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0" />
                    <div>
                      <p className="text-sm text-destructive font-medium">Erro no cadastro</p>
                      <p className="text-sm text-destructive/80 mt-1">{displayError}</p>
                    </div>
                  </div>
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-green-800 font-medium">Sucesso!</p>
                      <p className="text-sm text-green-700 mt-1">{success}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Mínimo 6 caracteres"
                      className="w-full pr-12"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      <Icon 
                        name={showPassword ? 'EyeOff' : 'Eye'} 
                        size={20} 
                        className="text-muted-foreground hover:text-foreground transition-colors" 
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirme sua senha"
                      className="w-full pr-12"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      disabled={isLoading}
                    >
                      <Icon 
                        name={showConfirmPassword ? 'EyeOff' : 'Eye'} 
                        size={20} 
                        className="text-muted-foreground hover:text-foreground transition-colors" 
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  iconName={isLoading ? "Loader2" : "UserPlus"}
                  iconPosition="left"
                >
                  {isLoading ? 'Criando conta...' : 'Criar Conta'}
                </Button>
              </div>

              <div className="text-center">
                <Link
                  to="/auth/login"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Já tem uma conta? Entre aqui
                </Link>
              </div>
            </form>
          </div>

          {/* Back to Site */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;