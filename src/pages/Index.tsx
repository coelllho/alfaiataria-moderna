import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Import images
import aboutImage from '@/assets/about-image.jpg';
import servicesImage from '@/assets/services-image.jpg';
import differentialsImage from '@/assets/differentials-image.jpg';
import productsImage from '@/assets/products-image.jpg';
import experienceImage from '@/assets/experience-image.jpg';
import appointmentImage from '@/assets/appointment-image.jpg';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* História da Empresa */}
      <Section
        id="sobre"
        title="História da Empresa"
        description="A Thiago Assis Bespoke surge para atender apaixonados por alfaiataria e alta costura, com personalização absoluta e os melhores tecidos do mercado."
        backgroundImage={aboutImage}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Nossa essência" delay={100}>
            <p>
              Cada peça é pensada no detalhe: seleção de tecidos nobres, construção precisa e acabamento artesanal 
              para um caimento impecável.
            </p>
          </Card>
          <Card title="Visão" delay={200}>
            <p>
              Oferecer produto de altíssima qualidade com uma experiência única em alta costura.
            </p>
          </Card>
        </div>
      </Section>

      {/* Diferenciais */}
      <Section
        id="diferenciais"
        title="Diferenciais"
        description="Atendimento exclusivo, tecnologia e pioneirismo para elevar sua experiência sob medida."
        backgroundImage={differentialsImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="VIP Service" delay={100}>
            <p>
              Enviamos um consultor ao seu escritório ou residência — inclusive em outras cidades/estados.
            </p>
          </Card>
          <Card title="Pioneiros em IA" delay={200}>
            <p>
              Use nossa consultoria de imagem com IA para visualizar o resultado final com o tecido escolhido.
            </p>
          </Card>
          <Card title="Agilidade com excelência" delay={300}>
            <p>
              Qualidade de referência, prazos enxutos e comunicação transparente do início ao fim.
            </p>
          </Card>
        </div>
      </Section>

      {/* Serviços */}
      <Section
        id="servicos"
        title="Serviços"
        description="Do primeiro ajuste ao terno sob medida completo."
        backgroundImage={servicesImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Ajustes de roupas" delay={100}>
            <p>Readequamos suas peças às medidas corretas para caimento perfeito.</p>
          </Card>
          <Card title="Remodelagem" delay={150}>
            <p>Refazemos a modelagem com suas medidas: desmontamos e reconstruímos a peça.</p>
          </Card>
          <Card title="Sob medida personalizado" delay={200}>
            <p>Confecção completa sob medida: tecidos, botões, forros, monograma e detalhes internos.</p>
          </Card>
          <Card title="Atendimento personalizado" delay={250}>
            <p>No ateliê, a domicílio ou no local de trabalho. Agendamentos flexíveis.</p>
          </Card>
          <Card title="Consultoria de imagem (IA)" delay={300}>
            <p>Visualize previamente sua peça com diferentes tecidos e composições.</p>
          </Card>
          <Card title="Atendimento em outras cidades" delay={350}>
            <p>Levamos a experiência Bespoke até você.</p>
          </Card>
        </div>
      </Section>

      {/* Produtos */}
      <Section
        id="produtos"
        title="Produtos"
        description="Peças clássicas e contemporâneas com a sua assinatura."
        backgroundImage={productsImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Camisa social" delay={100}>
            <p>Construção refinada e conforto para o cotidiano e ocasiões formais.</p>
          </Card>
          <Card title="Calças" delay={150}>
            <p>Caimento preciso, proporções equilibradas e tecidos de performance.</p>
          </Card>
          <Card title="Colete" delay={200}>
            <p>Estrutura que valoriza a silhueta, ideal em composições formais.</p>
          </Card>
          <Card title="Blazer" delay={250}>
            <p>O clássico indispensável — ombros, lapelas e botões no seu estilo.</p>
          </Card>
          <Card title="Terno completo" delay={300}>
            <p>Conjunto sob medida para presença impecável.</p>
          </Card>
          <Card title="T-shirt" delay={350}>
            <p>Básico elevado, cortes e materiais superiores.</p>
          </Card>
        </div>
      </Section>

      {/* Experiência */}
      <Section
        id="experiencia"
        title="A experiência Bespoke"
        description="Do primeiro encontro ao ajuste final, um percurso fluido e sob medida."
        backgroundImage={experienceImage}
      >
        <div className="max-w-4xl">
          <ol className="space-y-6">
            {[
              {
                title: "Consulta & Medições",
                description: "presencial no ateliê, domicílio ou escritório."
              },
              {
                title: "Curadoria de Tecidos",
                description: "apresentação de catálogos e simulações com IA."
              },
              {
                title: "Prova & Ajustes",
                description: "iterações até atingir o caimento ideal."
              },
              {
                title: "Entrega & Pós-venda",
                description: "orientações de cuidado e manutenção."
              }
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Agendamentos */}
      <Section
        id="agendamento"
        title="Agendamentos"
        description="Os atendimentos são realizados com agendamento. Escolha o melhor local: ateliê, domicílio ou escritório."
        backgroundImage={appointmentImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card title="Ateliê" subtitle="Rua Exemplo, 123 — Rio de Janeiro (RJ)" delay={100}>
            <p>Agende sua visita ao nosso espaço.</p>
          </Card>
          <Card title="VIP Service" subtitle="Vamos até você" delay={200}>
            <p>Consultor em sua residência ou empresa, inclusive outras cidades/estados.</p>
          </Card>
          <Card title="Online" subtitle="Videoconsulta" delay={300}>
            <p>Comece pela consultoria e simulações com IA.</p>
          </Card>
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300"
            onClick={() => scrollToSection('contato')}
          >
            Agendar atendimento
          </Button>
        </div>
      </Section>

      {/* Contato */}
      <Section
        id="contato"
        title="Contato"
        description="Fale conosco para dúvidas, orçamentos e parcerias."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Informações" delay={100}>
            <ul className="space-y-3 text-muted-foreground">
              <li>(21) 0000-0000</li>
              <li>Rio de Janeiro — RJ</li>
              <li>Seg à Sex, 9h às 19h (agendamento)</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
