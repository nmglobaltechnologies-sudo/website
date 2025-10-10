'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import servicesData from '@/content/services.json';

export default function CloudServicesPage() {
  const service = servicesData.find(s => s.slug === 'cloud-services')!;

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
            <div className="text-6xl mb-6">☁️</div>
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
            title="Accelerate Your Cloud Journey"
            subtitle="From migration to optimization, we've got you covered"
          />
          <p className="text-lg text-neutral leading-relaxed mb-8">
            {service.longDescription}
          </p>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <SectionHeader
          title="Our Cloud Capabilities"
          subtitle="End-to-end cloud services for modern enterprises"
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
          title="Cloud Benefits"
          subtitle="Why businesses choose cloud with NM Global"
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

      {/* Cloud Platforms */}
      <Section>
        <SectionHeader
          title="Cloud Platforms We Support"
          subtitle="Multi-cloud expertise across leading providers"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['AWS', 'Microsoft Azure', 'Google Cloud'].map((platform) => (
            <Card key={platform} className="text-center">
              <p className="font-bold text-primary text-lg">{platform}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Migration Process */}
      <Section background="gray">
        <SectionHeader
          title="Our Cloud Migration Process"
          subtitle="A proven framework for seamless transitions"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Assess', desc: 'Evaluate current infrastructure and readiness' },
            { title: 'Plan', desc: 'Design migration strategy and architecture' },
            { title: 'Migrate', desc: 'Execute phased migration with minimal downtime' },
            { title: 'Optimize', desc: 'Fine-tune performance and costs' },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <h4 className="font-bold text-primary mb-2">{step.title}</h4>
              <p className="text-sm text-neutral">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Ready to Move to the Cloud?"
          description="Let's discuss your cloud strategy and create a roadmap for success"
          primaryButtonText="Start Your Cloud Journey"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

