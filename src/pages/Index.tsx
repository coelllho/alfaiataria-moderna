import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

import aboutImage from '@/assets/about-image.jpg';
import servicesImage from '@/assets/services-image.jpg';
import differentialsImage from '@/assets/differentials-image.jpg';
import productsImage from '@/assets/products-image.jpg';
import experienceImage from '@/assets/experience-image.jpg';
import appointmentImage from '@/assets/appointment-image.jpg';

import ajustesImage from '@/assets/service-ajustes.jpg';
import remodelagemImage from '@/assets/service-remodelagem.jpg';
import sobMedidaImage from '@/assets/service-sob-medida.jpg';
import atendimentoImage from '@/assets/service-atendimento.jpg';
import consultoriaIAImage from '@/assets/service-consultoria-ia.jpg';
import outrasCidadesImage from '@/assets/service-outras-cidades.jpg';

import productCamisa from '@/assets/product-camisa.jpg';
import productCalcas from '@/assets/product-calcas.jpg';
import productColete from '@/assets/product-colete.jpg';
import productBlazer from '@/assets/product-blazer.jpg';
import productTerno from '@/assets/product-terno.jpg';
import productTshirt from '@/assets/product-tshirt.jpg';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Ajustes de roupas',
      delay: 100,
      image: ajustesImage,
      imageAlt: 'Ajustes de roupas sob medida',
      description: 'Readequamos suas peças às medidas corretas para caimento perfeito.',
      imageClassName: 'object-center',
    },
    {
      title: 'Remodelagem',
      delay: 150,
      image: remodelagemImage,
      imageAlt: 'Remodelagem de peças exclusivas',
      description: 'Refazemos a modelagem com suas medidas: desmontamos e reconstruímos a peça.',
      imageClassName: 'object-center',
    },
    {
      title: 'Sob medida personalizado',
      delay: 200,
      image: sobMedidaImage,
      imageAlt: 'Confecção sob medida com acabamentos artesanais',
      description: 'Confecção completa sob medida: tecidos, botões, forros, monograma e detalhes internos.',
      imageClassName: 'object-center',
    },
    {
      title: 'Atendimento personalizado',
      delay: 250,
      image: atendimentoImage,
      imageAlt: 'Atendimento personalizado ao cliente',
      description: 'Consultoria especializada para guiar cada decisão durante o processo bespoke.',
      imageClassName: 'object-center',
    },
    {
      title: 'Consultoria de imagem com IA',
      delay: 300,
      image: consultoriaIAImage,
      imageAlt: 'Consultoria de imagem assistida por IA',
      description: 'Simulações digitais para visualizar tecidos, padronagens e acabamentos antes da produção.',
      imageClassName: 'object-center',
    },
    {
      title: 'Atendimento em outras cidades',
      delay: 350,
      image: outrasCidadesImage,
      imageAlt: 'Atendimento em outras cidades',
      description: 'Levamos a experiência bespoke para sua residência ou escritório em todo o Brasil.',
      imageClassName: 'object-center',
    },
  ] as const;

  const products = [
    {
      title: 'Camisa social',
      delay: 100,
      image: productCamisa,
      imageAlt: 'Camisa social sob medida',
      description: 'Construção refinada e conforto para o cotidiano e ocasiões formais.',
      imageClassName: 'object-top',
    },
    {
      title: 'Calças',
      delay: 150,
      image: productCalcas,
      imageAlt: 'Calças sob medida',
      description: 'Caimento preciso, proporções equilibradas e tecidos de alta performance.',
      imageClassName: 'object-center',
    },
    {
      title: 'Colete',
      delay: 200,
      image: productColete,
      imageAlt: 'Colete bespoke',
      description: 'Estrutura que valoriza a silhueta, ideal em composições formais.',
      imageClassName: 'object-center',
    },
    {
      title: 'Blazer',
      delay: 250,
      image: productBlazer,
      imageAlt: 'Blazer feito sob medida',
      description: 'O clássico indispensável — ombros, lapelas e botões no seu estilo.',
      imageClassName: 'object-center',
    },
    {
      title: 'Terno completo',
      delay: 300,
      image: productTerno,
      imageAlt: 'Terno completo alfaiataria',
      description: 'Conjunto sob medida para presença impecável.',
      imageClassName: 'object-center',
    },
    {
      title: 'T-shirt',
      delay: 350,
      image: productTshirt,
      imageAlt: 'T-shirt premium sob medida',
      description: 'Básico elevado com cortes precisos e materiais superiores.',
      imageClassName: 'object-center',
    },
  ] as const;

  const experienceSteps = [
    {
      title: 'Consulta & Medições',
      description: 'Presencial no ateliê, domicílio ou escritório.',
    },
    {
      title: 'Curadoria de Tecidos',
      description: 'Apresentação de catálogos exclusivos e simulações com IA.',
    },
    {
      title: 'Prova & Ajustes',
      description: 'Iterações até atingir o caimento ideal.',
    },
    {
      title: 'Entrega & Pós-venda',
      description: 'Orientações de cuidado e manutenção contínua.',
    },
  ] as const;

  const agendamentoOptions = [
    {
      title: 'Ateliê',
      subtitle: 'Rua Exemplo, 123 — Rio de Janeiro (RJ)',
      description: 'Agende sua visita ao nosso espaço.',
      delay: 100,
    },
    {
      title: 'VIP Service',
      subtitle: 'Vamos até você',
      description: 'Consultor em sua residência ou empresa, inclusive outras cidades/estados.',
      delay: 200,
    },
    {
      title: 'Online',
      subtitle: 'Videoconsulta',
      description: 'Comece pela consultoria e simulações com IA.',
      delay: 300,
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <Hero />

      <Section
        id="diferenciais"
        title="Diferenciais"
        description="Atendimento exclusivo, tecnologia e pioneirismo para elevar sua experiência sob medida."
        backgroundImage={differentialsImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="VIP Service" delay={100}>
            <p>
              Enviamos um consultor ao seu escritório ou residência — inclusive em outras cidades ou estados.
            </p>
          </Card>
          <Card title="Pioneiros em IA" delay={200}>
            <p>
              Utilize nossa consultoria de imagem com IA para visualizar o resultado final com o tecido escolhido.
            </p>
          </Card>
          <Card title="Agilidade com excelência" delay={300}>
            <p>
              Qualidade de referência, prazos enxutos e comunicação transparente do início ao fim.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="servicos"
        title="Serviços"
        description="Do primeiro ajuste ao terno sob medida completo."
        backgroundImage={servicesImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              delay={service.delay}
              image={service.image}
              imageAlt={service.imageAlt}
              imageClassName={service.imageClassName}
            >
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="produtos"
        title="Produtos"
        description="Peças clássicas e contemporâneas com a sua assinatura."
        backgroundImage={productsImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              delay={product.delay}
              image={product.image}
              imageAlt={product.imageAlt}
              imageClassName={product.imageClassName}
            >
              <p>{product.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="experiencia"
        title="A experiência Bespoke"
        description="Do primeiro encontro ao ajuste final, um percurso fluido e sob medida."
        backgroundImage={experienceImage}
      >
        <div className="max-w-4xl">
          <ol className="space-y-6">
            {experienceSteps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white font-semibold text-lg transition-all duration-300 group-hover:bg-white/20">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/75">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        id="agendamento"
        title="Agendamentos"
        description="Os atendimentos são realizados com agendamento. Escolha o melhor local: ateliê, domicílio ou escritório."
        backgroundImage={appointmentImage}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {agendamentoOptions.map((option) => (
            <Card
              key={option.title}
              title={option.title}
              subtitle={option.subtitle}
              delay={option.delay}
            >
              <p>{option.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white/15 text-white hover:bg-white/25 transition-all duration-300"
            onClick={() => scrollToSection('contato')}
          >
            Agendar atendimento
          </Button>
        </div>
      </Section>

      <Section
        id="sobre"
        title="História da Empresa"
        description="A Thiago Assis Bespoke surge para atender apaixonados por alfaiataria e alta costura, com personalização absoluta e os melhores tecidos do mercado."
        backgroundImage={aboutImage}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Nossa essência" delay={100}>
            <p>
              Cada peça é pensada no detalhe: seleção de tecidos nobres, construção precisa e acabamento artesanal para um caimento impecável.
            </p>
          </Card>
          <Card title="Visão" delay={200}>
            <p>
              Oferecer produtos de altíssima qualidade com uma experiência única em alta costura.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="contato"
        title="Contato"
        description="Fale conosco para dúvidas, orçamentos e parcerias."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Informações" delay={100}>
            <ul className="space-y-3 text-white/80">
              <li>(21) 98228-0245</li>
              <li>(21) 97900-8365</li>
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
