import { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
}

const Card = ({ title, subtitle, children, className = '', delay = 0, image, imageAlt, imageClassName = '' }: CardProps) => {
  return (
    <div
      className={`glass rounded-2xl p-8 shadow-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="relative mb-6 -mt-2 -mx-2 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={imageAlt || title}
            className={`w-full h-48 object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-110 ${imageClassName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
        </div>
      )}
      <h3 className="text-xl font-playfair font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-white/90">
        {title}
      </h3>
      {subtitle && (
        <p className="text-white/85 font-medium mb-4">
          {subtitle}
        </p>
      )}
      <div className="text-white/75 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;
