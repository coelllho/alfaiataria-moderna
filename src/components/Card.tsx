import { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ title, subtitle, children, className = '', delay = 0 }: CardProps) => {
  return (
    <div 
      className={`glass rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      {subtitle && (
        <p className="text-primary font-medium mb-4">
          {subtitle}
        </p>
      )}
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;