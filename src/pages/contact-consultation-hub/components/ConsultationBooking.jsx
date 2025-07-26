import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationBooking = ({ onWhatsAppClick }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock available dates (next 7 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            day: '2-digit', 
            month: '2-digit' 
          }),
          date: date
        });
      }
      
      if (dates.length >= 5) break;
    }
    
    return dates;
  };

  const availableTimes = [
    { value: '09:00', label: '09:00', available: true },
    { value: '10:00', label: '10:00', available: true },
    { value: '11:00', label: '11:00', available: false },
    { value: '14:00', label: '14:00', available: true },
    { value: '15:00', label: '15:00', available: true },
    { value: '16:00', label: '16:00', available: true },
    { value: '17:00', label: '17:00', available: false }
  ];

  const consultationTypes = [
    {
      id: 'free-consultation',
      title: 'Consultoria Gratuita',
      duration: '30 minutos',
      description: 'Análise inicial do seu projeto e orientações básicas',
      price: 'Gratuito',
      features: [
        'Análise da presença digital atual',
        'Identificação de oportunidades',
        'Orientações iniciais',
        'Proposta personalizada'
      ],
      popular: true
    },
    {
      id: 'detailed-consultation',
      title: 'Consultoria Detalhada',
      duration: '60 minutos',
      description: 'Análise completa com estratégia e plano de ação',
      price: 'R$ 150',
      features: [
        'Auditoria completa do site',
        'Análise de concorrência',
        'Estratégia digital personalizada',
        'Plano de ação detalhado',
        'Relatório por escrito'
      ],
      popular: false
    }
  ];

  const handleBooking = (consultationType) => {
    if (!selectedDate || !selectedTime) {
      alert('Por favor, selecione uma data e horário');
      return;
    }

    const selectedDateObj = getAvailableDates().find(d => d.value === selectedDate);
    const message = `Olá! Gostaria de agendar uma ${consultationType.title}.\n\nData: ${selectedDateObj?.label}\nHorário: ${selectedTime}\nDuração: ${consultationType.duration}\n\nAguardo confirmação!`;
    
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Agende Sua Consultoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor horário para conversarmos sobre seu projeto digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Types */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Tipos de Consultoria
            </h3>
            
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-card rounded-2xl p-6 shadow-brand-md border hover:shadow-brand-lg transition-all duration-300 ${
                  type.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {type.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {type.duration} • {type.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {type.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={type.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleBooking(type)}
                  className={`w-full touch-target ${
                    type.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : ''
                  }`}
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                >
                  Agendar {type.title}
                </Button>
              </div>
            ))}
          </div>

          {/* Date and Time Selection */}
          <div className="bg-card rounded-2xl p-8 shadow-brand-md border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Selecione Data e Horário
            </h3>

            {/* Date Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Datas Disponíveis
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {getAvailableDates().map((date) => (
                  <button
                    key={date.value}
                    onClick={() => setSelectedDate(date.value)}
                    className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                      selectedDate === date.value
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{date.label}</span>
                      {selectedDate === date.value && (
                        <Icon name="Check" size={18} className="text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Horários Disponíveis
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {availableTimes.map((time) => (
                  <button
                    key={time.value}
                    onClick={() => time.available && setSelectedTime(time.value)}
                    disabled={!time.available}
                    className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                      !time.available
                        ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                        : selectedTime === time.value
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground'
                    }`}
                  >
                    <span className="font-medium">{time.label}</span>
                    {!time.available && (
                      <div className="text-xs mt-1">Ocupado</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Contact */}
            <div className="border-t pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefere agendar diretamente pelo WhatsApp?
                </p>
                <Button
                  variant="default"
                  size="lg"
                  onClick={onWhatsAppClick}
                  className="whatsapp-pulse bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground touch-target w-full"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={18}
                >
                  Agendar pelo WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;