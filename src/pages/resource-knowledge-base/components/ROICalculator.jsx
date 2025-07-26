import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    websiteCost: '',
    conversionIncrease: '20'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const cost = parseFloat(formData.websiteCost) || 0;
    const increase = parseFloat(formData.conversionIncrease) || 0;

    if (revenue === 0 || cost === 0) return;

    const monthlyIncrease = (revenue * increase) / 100;
    const yearlyIncrease = monthlyIncrease * 12;
    const roi = ((yearlyIncrease - cost) / cost) * 100;
    const paybackMonths = cost / monthlyIncrease;

    setResult({
      monthlyIncrease,
      yearlyIncrease,
      roi,
      paybackMonths
    });
  };

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent(`Olá! Calculei o ROI do meu site e gostaria de uma consultoria. Faturamento mensal: R$ ${formData.monthlyRevenue}`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">Calculadora de ROI</h3>
          <p className="text-sm text-muted-foreground">Descubra o retorno do seu investimento em site</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Input
            type="number"
            label="Faturamento Mensal (R$)"
            placeholder="10000"
            value={formData.monthlyRevenue}
            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
          />
          
          <Input
            type="number"
            label="Investimento no Site (R$)"
            placeholder="5000"
            value={formData.websiteCost}
            onChange={(e) => handleInputChange('websiteCost', e.target.value)}
          />
          
          <Input
            type="number"
            label="Aumento Esperado (%)"
            placeholder="20"
            value={formData.conversionIncrease}
            onChange={(e) => handleInputChange('conversionIncrease', e.target.value)}
            description="Aumento típico: 15-30%"
          />
          
          <Button
            variant="default"
            onClick={calculateROI}
            iconName="Calculator"
            iconPosition="left"
            className="w-full"
          >
            Calcular ROI
          </Button>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          {result ? (
            <div className="space-y-4">
              <h4 className="font-bold text-card-foreground mb-3">Resultados:</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Aumento Mensal:</span>
                  <span className="font-bold text-success">
                    R$ {result.monthlyIncrease.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Aumento Anual:</span>
                  <span className="font-bold text-success">
                    R$ {result.yearlyIncrease.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ROI:</span>
                  <span className="font-bold text-primary">
                    {result.roi.toFixed(1)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Payback:</span>
                  <span className="font-bold text-accent">
                    {result.paybackMonths.toFixed(1)} meses
                  </span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppConsultation}
                iconName="MessageCircle"
                iconPosition="left"
                className="w-full mt-4 bg-whatsapp/10 border-whatsapp/20 text-whatsapp hover:bg-whatsapp/20"
              >
                Consultoria Gratuita
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <Icon name="BarChart3" size={48} className="text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Preencha os campos ao lado para ver os resultados
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;