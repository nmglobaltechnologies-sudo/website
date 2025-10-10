'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: 'gradient' | 'primary' | 'white';
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  background = 'gradient',
}) => {
  const bgStyles = {
    gradient: 'bg-gradient-to-r from-primary to-accent text-white',
    primary: 'bg-primary text-white',
    white: 'bg-white border-2 border-primary text-primary',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-2xl p-8 md:p-12 text-center ${bgStyles[background]}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          href={primaryButtonLink} 
          variant={background === 'white' ? 'primary' : 'secondary'}
          size="lg"
        >
          {primaryButtonText}
        </Button>
        {secondaryButtonText && secondaryButtonLink && (
          <Button 
            href={secondaryButtonLink} 
            variant="outline"
            size="lg"
            className={background === 'white' ? '' : 'border-white text-white hover:bg-white hover:text-primary'}
          >
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

