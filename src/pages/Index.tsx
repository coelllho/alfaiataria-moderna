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
import partnerAmperjImage from '@/assets/partners/amperj.png';
import partnerAjuferjesImage from '@/assets/partners/ajuferjes.png';
import partnerImbImage from '@/assets/partners/imb.jpg';


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

  const partners = [
    {
      name: 'AMPERJ',
      image: partnerAmperjImage,
      website: 'https://www.amperj.org',
      delay: 100,
      imageAlt: 'Logotipo AMPERJ',
    },
    {
      name: 'AJUFERJES',
      image: partnerAjuferjesImage,
      website: 'https://ajuferjes.org.br',
      delay: 150,
      imageAlt: 'Logotipo AJUFERJES',
    },
    {
      name: 'IMB',
      image: partnerImbImage,
      website: 'https://imb.org.br',
      delay: 200,
      imageAlt: 'Logotipo Instituto dos Magistrados do Brasil',
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
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScA8b_vG7SZrBXx37JhEbte4TIG0-Wmss-my_EGnZWm7Q9ebQ/viewform?usp=dialog', '_blank')}
          >
            Agendar atendimento
          </Button>
        </div>
      </Section>

      <Section
        id="parceiros"
        title="Parceiros que vestimos"
        description="Parceiros institucionais que confiam na alfaiataria Thiago Assis Bespoke."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              title={partner.name}
              delay={partner.delay}
              image={partner.image}
              imageAlt={partner.imageAlt}
              imageClassName="h-40 w-full object-contain bg-white p-6"
              className="text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-white/75">Vestimos equipes e eventos de {partner.name} com alfaiataria personalizada.</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Visitar site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
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
              <li>Rua da Quitanda 30 sala 708/712</li>
              <li>Seg à Sex, 9h às 19h (agendamento)</li>
            </ul>
          </Card>

          <Card title="Nossas redes" delay={180}>
            <div className="space-y-6">
              <p>Acompanhe as criações e bastidores no Instagram.</p>
              <a
                href="https://www.instagram.com/thiago.assis.alfaiataria?igsh=bDZ1YnZqMndnYXA4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent text-white transition-all duration-300 hover:border-white/30 hover:from-white/20 hover:via-white/10 hover:to-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Instagram Thiago Assis Bespoke"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x={4.75} y={4.75} width={14.5} height={14.5} rx={4} />
                  <circle cx={12} cy={12} r={3.25} />
                  <circle cx={16.5} cy={7.5} r={0.75} fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;




