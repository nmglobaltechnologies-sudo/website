'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: '💰',
      title: 'Finance',
      description: 'Comprehensive financial management solutions with real-time reporting, budgeting, and forecasting capabilities.',
      features: ['General Ledger', 'Accounts Payable', 'Accounts Receivable', 'Financial Reporting', 'Budget Management'],
    },
    {
      icon: '📦',
      title: 'Procurement',
      description: 'Streamlined procurement processes with automated purchasing, vendor management, and contract tracking.',
      features: ['Purchase Orders', 'Vendor Management', 'Contract Tracking', 'Spend Analysis', 'Approval Workflows'],
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'End-to-end manufacturing solutions from production planning to quality control and supply chain management.',
      features: ['Production Planning', 'Inventory Management', 'Quality Control', 'Supply Chain', 'Work Order Management'],
    },
    {
      icon: '📊',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking, optimization, and automated reordering to minimize stockouts and excess inventory.',
      features: ['Real-time Tracking', 'Inventory Optimization', 'Reorder Point Management', 'Warehouse Management', 'Cycle Counting'],
    },
    {
      icon: '🚚',
      title: 'Supply Chain',
      description: 'Complete supply chain visibility and optimization from suppliers to customers with advanced analytics.',
      features: ['Supplier Management', 'Demand Forecasting', 'Transportation Management', 'Warehouse Optimization', 'Analytics'],
    },
    {
      icon: '👥',
      title: 'HR & Payroll',
      description: 'Comprehensive HR solutions including talent management, payroll processing, and employee self-service.',
      features: ['Talent Acquisition', 'Employee Management', 'Payroll Processing', 'Benefits Administration', 'Performance Management'],
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
              Business Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Tailored technology solutions designed to optimize your core business processes and drive competitive advantage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <Section>
        <SectionHeader
          title="Core Business Solutions"
          subtitle="Comprehensive solutions designed to address your specific business needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
                <p className="text-neutral mb-4">{solution.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-accent mb-2">Key Features:</p>
                  <ul className="text-sm text-neutral space-y-1">
                    {solution.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solution Benefits */}
      <Section background="gray">
        <SectionHeader
          title="Why Choose Our Solutions"
          subtitle="The benefits of implementing our business solutions"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: '📈',
              title: 'Increased Efficiency',
              description: 'Streamline operations and reduce manual processes with automated solutions.',
            },
            {
              icon: '💰',
              title: 'Cost Savings',
              description: 'Reduce operational costs through optimized processes and resource utilization.',
            },
            {
              icon: '🎯',
              title: 'Improved Accuracy',
              description: 'Minimize errors with automated workflows and real-time data validation.',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-neutral">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Ready to Transform Your Business?"
          description="Let's discuss how our solutions can help you achieve your business objectives"
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}
