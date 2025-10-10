'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link 
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center text-primary text-3xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-neutral leading-relaxed">{description}</p>
        {link && (
          <a 
            href={link} 
            className="text-accent hover:text-primary font-semibold transition-colors inline-flex items-center"
          >
            Learn More →
          </a>
        )}
      </div>
    </Card>
  );
};

