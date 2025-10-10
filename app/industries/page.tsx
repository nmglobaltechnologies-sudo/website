'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';

export default function IndustriesPage() {
  const industries = [
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'Streamline production, inventory management, and supply chain operations with integrated ERP and cloud solutions.',
      solutions: ['Production Planning', 'Quality Control', 'Supply Chain Management'],
    },
    {
      icon: '💰',
      title: 'Financial Services',
      description: 'Secure, compliant IT infrastructure and cloud solutions for banking, insurance, and investment firms.',
      solutions: ['Risk Management', 'Compliance Solutions', 'Data Security'],
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'HIPAA-compliant IT services supporting patient care systems, medical records, and healthcare operations.',
      solutions: ['EHR Integration', 'Telemedicine', 'Medical Billing'],
    },
    {
      icon: '🚚',
      title: 'Logistics & Distribution',
      description: 'Real-time tracking, warehouse management, and optimization solutions for supply chain excellence.',
      solutions: ['Fleet Management', 'Warehouse Automation', 'Route Optimization'],
    },
    {
      icon: '🛒',
      title: 'Retail & E-commerce',
      description: 'Omnichannel retail solutions, inventory management, and customer experience platforms.',
      solutions: ['Point of Sale', 'Inventory Management', 'Customer Analytics'],
    },
    {
      icon: '⚡',
      title: 'Energy & Utilities',
      description: 'Infrastructure management, asset tracking, and regulatory compliance for energy sector.',
      solutions: ['Asset Management', 'Grid Management', 'Compliance Reporting'],
    },
    {
      icon: '🏢',
      title: 'Professional Services',
      description: 'Project management, time tracking, and client management solutions for consulting and service firms.',
      solutions: ['Project Management', 'Resource Planning', 'Billing & Invoicing'],
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Learning management systems, student information systems, and campus IT infrastructure.',
      solutions: ['Student Management', 'Learning Platforms', 'Campus IT'],
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Deep expertise across multiple sectors, delivering tailored IT solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <Section>
        <SectionHeader
          title="Sector Expertise"
          subtitle="Industry-specific solutions backed by years of experience"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full text-center">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{industry.title}</h3>
                <p className="text-neutral mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-accent mb-2">Key Solutions:</p>
                  <ul className="text-xs text-neutral space-y-1">
                    {industry.solutions.map((solution) => (
                      <li key={solution}>• {solution}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Industry Challenges */}
      <Section background="gray">
        <SectionHeader
          title="Common Industry Challenges We Solve"
          subtitle="How we help businesses overcome sector-specific obstacles"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              challenge: 'Regulatory Compliance',
              solution: 'Automated compliance tracking and reporting systems that keep you audit-ready.',
            },
            {
              challenge: 'Legacy System Integration',
              solution: 'Seamless integration of modern cloud solutions with existing infrastructure.',
            },
            {
              challenge: 'Data Security',
              solution: 'Enterprise-grade security measures tailored to your industry requirements.',
            },
            {
              challenge: 'Scalability',
              solution: 'Flexible cloud architecture that grows with your business demands.',
            },
            {
              challenge: 'Operational Efficiency',
              solution: 'Process automation and optimization to reduce costs and improve productivity.',
            },
            {
              challenge: 'Digital Transformation',
              solution: 'Comprehensive modernization strategies from assessment to implementation.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.challenge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h4 className="font-bold text-primary mb-3 text-lg">{item.challenge}</h4>
                <p className="text-neutral text-sm">{item.solution}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Success Metrics */}
      <Section>
        <SectionHeader
          title="Cross-Industry Success"
          subtitle="Measurable results across all sectors"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { metric: '40%', label: 'Cost Reduction' },
            { metric: '60%', label: 'Faster Processes' },
            { metric: '99.9%', label: 'Uptime' },
            { metric: '200+', label: 'Satisfied Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.metric}
              </div>
              <p className="text-neutral">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Let's Discuss Your Industry-Specific Needs"
          description="Our experts understand your sector's unique challenges and opportunities"
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

