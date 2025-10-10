'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  logo?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col"
    >
      <div className="text-accent text-4xl mb-4">&quot;</div>
      <p className="text-neutral leading-relaxed mb-6 flex-grow italic">
        {testimonial.quote}
      </p>
      <div className="border-t pt-4">
        <p className="font-bold text-primary">{testimonial.author}</p>
        <p className="text-sm text-neutral">{testimonial.position}</p>
        <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
      </div>
    </motion.div>
  );
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.slice(0, 3).map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

