'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import servicesData from '@/content/services.json';

export default function ManagedITServicesPage() {
  const service = servicesData.find(s => s.slug === 'managed-it-services')!;

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
            <div className="text-6xl mb-6">🖥️</div>
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
            title="Focus on Your Business, We'll Handle Your IT"
            subtitle="Proactive IT management that keeps your systems running smoothly"
          />
          <p className="text-lg text-neutral leading-relaxed mb-8">
            {service.longDescription}
          </p>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <SectionHeader
          title="What's Included"
          subtitle="Comprehensive IT management for peace of mind"
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
          title="Why Choose Our Managed Services"
          subtitle="The advantages of partnering with NM Global"
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

      {/* Service Tiers */}
      <Section>
        <SectionHeader
          title="Service Packages"
          subtitle="Choose the level of support that fits your needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              tier: 'Essential',
              price: 'Custom',
              features: ['Business hours support', 'Remote monitoring', 'Monthly reports', 'Basic security'],
            },
            {
              tier: 'Professional',
              price: 'Custom',
              features: ['24/7 support', 'Proactive monitoring', 'Weekly reports', 'Advanced security', 'Backup & DR'],
              highlighted: true,
            },
            {
              tier: 'Enterprise',
              price: 'Custom',
              features: ['Dedicated account manager', 'Real-time monitoring', 'Daily reports', 'Enterprise security', 'Full DR solution', 'Strategic IT consulting'],
            },
          ].map((pkg) => (
            <Card 
              key={pkg.tier} 
              className={`text-center ${pkg.highlighted ? 'border-2 border-accent transform scale-105' : ''}`}
            >
              {pkg.highlighted && (
                <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-primary mb-2">{pkg.tier}</h3>
              <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>
              <ul className="text-left space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-neutral">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="sm" className="w-full">
                Get Quote
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Let Us Manage Your IT Infrastructure"
          description="Experience the peace of mind that comes with professional IT management"
          primaryButtonText="Get Custom Quote"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

