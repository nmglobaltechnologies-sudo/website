'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';

export default function TechnologiesPage() {
  const technologyCategories = [
    {
      icon: '🏢',
      title: 'ERP Platforms',
      technologies: [
        { name: 'JD Edwards EnterpriseOne', level: 'Expert', description: 'Advanced implementation and customization' },
        { name: 'SAP S/4HANA', level: 'Expert', description: 'Digital transformation and modernization' },
        { name: 'SAP Business One', level: 'Advanced', description: 'Mid-market ERP solutions' },
        { name: 'Oracle ERP', level: 'Expert', description: 'Oracle database integration' },
        { name: 'Microsoft Dynamics 365', level: 'Advanced', description: 'Cloud-based ERP and CRM' },
      ],
    },
    {
      icon: '💻',
      title: 'Development Technologies',
      technologies: [
        { name: 'Java', level: 'Expert', description: 'Enterprise application development' },
        { name: 'Spring Boot', level: 'Expert', description: 'Java microservices and REST APIs' },
        { name: 'React', level: 'Expert', description: 'Modern web application development' },
        { name: 'Next.js', level: 'Advanced', description: 'Full-stack web frameworks' },
        { name: 'Node.js', level: 'Advanced', description: 'Server-side JavaScript development' },
        { name: 'Python', level: 'Advanced', description: 'Data science and automation' },
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud Platforms',
      technologies: [
        { name: 'AWS', level: 'Expert', description: 'Amazon Web Services expertise' },
        { name: 'Microsoft Azure', level: 'Expert', description: 'Enterprise cloud solutions' },
        { name: 'Oracle Cloud', level: 'Advanced', description: 'Oracle cloud services' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Stack
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We leverage cutting-edge technologies to deliver robust, scalable, and secure solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <Section>
        <SectionHeader
          title="Our Technology Expertise"
          subtitle="Deep expertise across multiple technology domains"
        />
        <div className="space-y-12">
          {technologyCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                {category.icon} {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                  >
                    <Card className="h-full">
                      <h4 className="text-lg font-bold text-primary mb-2">
                        {tech.name}
                      </h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-accent">
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-sm text-neutral">
                        {tech.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technology Benefits */}
      <Section background="gray">
        <SectionHeader
          title="Technology Advantages"
          subtitle="Why our technology choices matter"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: '🛡️',
              title: 'Enterprise Grade',
              description: 'Production-ready technologies with proven track records',
            },
            {
              icon: '⚡',
              title: 'High Performance',
              description: 'Optimized for speed, scalability, and reliability',
            },
            {
              icon: '🔒',
              title: 'Secure',
              description: 'Built with security best practices and compliance in mind',
            },
            {
              icon: '🔄',
              title: 'Future-Proof',
              description: 'Modern architectures that support long-term growth',
            },
            {
              icon: '🎯',
              title: 'Integrated',
              description: 'Seamlessly integrated solutions that work together',
            },
            {
              icon: '📈',
              title: 'Scalable',
              description: 'Solutions that grow with your business needs',
            },
          ].map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                <p className="text-neutral">{advantage.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Let's Build Something Amazing"
          description="Discuss your technology requirements and let us create the perfect solution for your business"
          primaryButtonText="Get Technical Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}
