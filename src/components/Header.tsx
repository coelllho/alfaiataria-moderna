import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center"
            aria-label="Thiago Assis Bespoke"
          >
            <img src={logo} alt="Thiago Assis Bespoke" className="h-12 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'sobre', label: 'História' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'diferenciais', label: 'Diferenciais' },
              { id: 'produtos', label: 'Produtos' },
              { id: 'experiencia', label: 'Experiência' },
              { id: 'agendamento', label: 'Agendamento' },
              { id: 'contato', label: 'Contato' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection('agendamento')}
          >
            Agendar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;