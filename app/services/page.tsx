'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { ServiceCard } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import servicesData from '@/content/services.json';

export default function ServicesPage() {
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
              Full-Service Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              From ERP implementation to AI-powered analytics, we deliver comprehensive technology solutions to accelerate your business transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <SectionHeader
          title="What We Offer"
          subtitle="End-to-end technology services tailored to your business needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={
                service.icon === 'database' ? '💾' :
                service.icon === 'cloud' ? '☁️' :
                service.icon === 'server' ? '🖥️' : '⚡'
              }
              title={service.title}
              description={service.shortDescription}
              link={`/services/${service.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <SectionHeader
          title="Why Choose NM Global"
          subtitle="What sets us apart from other IT service providers"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '🏆',
              title: 'Proven Track Record',
              description: '16+ years of successful implementations with 500+ satisfied clients across multiple industries.',
            },
            {
              icon: '✅',
              title: 'Industry Experts',
              description: 'Team of certified Oracle, SAP, AWS, Azure, and Microsoft experts with decades of combined experience.',
            },
            {
              icon: '🌟',
              title: 'End-to-End Solutions',
              description: 'Comprehensive services from ERP implementation to AI-powered analytics and managed IT support.',
            },
            {
              icon: '💰',
              title: 'Cost Optimization',
              description: 'Average 30-40% reduction in IT costs while improving performance and scalability.',
            },
            {
              icon: '⚡',
              title: 'Rapid Deployment',
              description: 'Agile methodologies ensuring faster time-to-value with minimal disruption.',
            },
            {
              icon: '🔒',
              title: 'Security First',
              description: 'Enterprise-grade security and compliance in every solution we deliver.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-neutral">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title="Our Approach"
          subtitle="A proven methodology for successful project delivery"
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business needs and challenges' },
              { step: '02', title: 'Strategy', description: 'Design tailored solutions aligned with your goals' },
              { step: '03', title: 'Implementation', description: 'Deploy with minimal disruption' },
              { step: '04', title: 'Training', description: 'Empower your team for success' },
              { step: '05', title: 'Support', description: 'Ongoing optimization and assistance' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="font-bold text-primary mb-2">{phase.title}</h4>
                <p className="text-sm text-neutral">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Ready to Transform Your IT Infrastructure?"
          description="Let's discuss your specific needs and create a customized solution"
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn About Us"
          secondaryButtonLink="/about"
        />
      </Section>
    </>
  );
}

