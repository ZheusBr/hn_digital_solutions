import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn, user, authError, clearError } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError('Por favor, preencha todos os campos');
        return;
      }

      if (!email.includes('@')) {
        setError('Por favor, insira um email válido');
        return;
      }

      const result = await signIn(email, password);
      
      if (result?.success) {
        navigate('/admin-dashboard');
      } else {
        setError(result?.error || 'Falha no login');
      }
    } catch (error) {
      setError('Algo deu errado. Tente novamente.');
      console.log('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayError = error || authError;

  return (
    <>
      <Helmet>
        <title>Login - HN TI & Soluções</title>
        <meta name="description" content="Acesse o painel administrativo da HN TI & Soluções" />
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
              Acesso ao Sistema
            </h2>
            <p className="mt-2 text-muted-foreground">
              Entre com suas credenciais para acessar o painel administrativo
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8 border border-border/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {displayError && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0" />
                    <div>
                      <p className="text-sm text-destructive font-medium">Erro no login</p>
                      <p className="text-sm text-destructive/80 mt-1">{displayError}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Sua senha"
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
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  iconName={isLoading ? "Loader2" : "LogIn"}
                  iconPosition="left"
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </div>

              <div className="text-center">
                <Link
                  to="/auth/signup"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Não tem uma conta? Cadastre-se
                </Link>
              </div>
            </form>
          </div>

          {/* Demo Credentials */}
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <Icon name="Info" size={16} className="inline mr-1" />
              Credenciais de demonstração:
            </p>
            <div className="text-sm font-mono bg-white rounded px-3 py-2 text-foreground">
              <p>Email: admin@hntisolucoes.com</p>
              <p>Senha: admin123</p>
            </div>
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

export default Login;