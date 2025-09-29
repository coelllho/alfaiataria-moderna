import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />

      <div className="container mx-auto px-6 lg:px-8 pb-16 relative z-10">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Alfaiataria sob medida,{' '}
            <span className="text-gradient-primary">experiência impecável</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Personalizamos cada detalhe — dos tecidos aos acabamentos — para peças únicas com caimento perfeito.
            Atendimento no ateliê ou onde você estiver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-white/15 text-white hover:bg-white/25 transition-all duration-300"
              onClick={() => scrollToSection('agendamento')}
            >
              Agendar consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => scrollToSection('servicos')}
            >
              Explorar serviços
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-white/90">
            {['Qualidade superior', 'Personalização total', 'Entrega ágil'].map((highlight, index) => (
              <div
                key={highlight}
                className={`flex items-center gap-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
