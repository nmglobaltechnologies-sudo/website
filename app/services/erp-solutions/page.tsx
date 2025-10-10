'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import servicesData from '@/content/services.json';

export default function ERPSolutionsPage() {
  const service = servicesData.find(s => s.slug === 'erp-solutions')!;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-6xl mb-6">💾</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {service.shortDescription}
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Transform Your Business Operations"
            subtitle="Enterprise Resource Planning that drives efficiency and growth"
          />
          <p className="text-lg text-neutral leading-relaxed mb-8">
            {service.longDescription}
          </p>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <SectionHeader
          title="What We Deliver"
          subtitle="Comprehensive ERP services from strategy to support"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-neutral flex-1">{feature}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Business Benefits"
          subtitle="Measurable outcomes that drive ROI"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xl">
                ✓
              </div>
              <p className="text-lg text-neutral flex-1 pt-2">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto text-white text-center">
          <div className="text-5xl mb-6">🎯</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {service.caseStudy.title}
          </h2>
          <p className="text-xl leading-relaxed opacity-90">
            {service.caseStudy.description}
          </p>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section>
        <SectionHeader
          title="Technologies & Platforms"
          subtitle="Leading ERP solutions we specialize in"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['Oracle NetSuite', 'SAP', 'Microsoft Dynamics', 'Odoo'].map((tech) => (
            <Card key={tech} className="text-center">
              <p className="font-bold text-primary">{tech}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Ready to Optimize Your ERP?"
          description="Let our experts assess your current systems and recommend the best path forward"
          primaryButtonText="Request Assessment"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

