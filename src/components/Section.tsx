import { useEffect, useState, ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, title, description, backgroundImage, className = '', children }: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <section 
      id={id} 
      className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </>
      )}
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;