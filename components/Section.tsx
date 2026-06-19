import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  id 
}) => {
  const bgStyles = {
    white: 'bg-background',
    gray: 'bg-muted/40',
    primary: 'bg-primary text-primary-foreground',
  };
  
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

