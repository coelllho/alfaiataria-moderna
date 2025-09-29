import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const NAV_ITEMS = [
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'agendamento', label: 'Agendamentos' },
  { id: 'sobre', label: 'História' },
  { id: 'contato', label: 'Contato' },
] as const;

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
        isScrolled ? 'glass border-b border-white/10 backdrop-blur-xl' : 'bg-transparent'
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
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white transition-all duration-300"
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
