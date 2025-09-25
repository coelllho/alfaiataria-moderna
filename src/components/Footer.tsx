const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              THIAGO ASSIS <span className="text-primary">BESPOKE</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Alfaiataria sob medida com atendimento exclusivo e tecnologia de simulação por IA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Ao seu serviço
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>VIP Service (domicílio / escritório)</li>
              <li>Consultoria de imagem (IA)</li>
              <li>Ajustes e remodelagem</li>
              <li>Confecção sob medida</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Institucional
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>História</li>
              <li>Missão & Visão</li>
              <li>Qualidade & Materiais</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
              Contato
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Rio de Janeiro — RJ</li>
              <li>Seg à Sex, 9h às 19h (agendamento)</li>
              <li>contato@thiagoassisbespoke.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <span>© {currentYear} Thiago Assis Bespoke. Todos os direitos reservados.</span>
          <span>Feito com atenção aos detalhes.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;