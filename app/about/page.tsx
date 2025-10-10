'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import teamData from '@/content/team.json';

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'With presence across 12 countries, we deliver localized expertise with global best practices.',
    },
  ];

  const timeline = [
    { year: '2009', event: 'NM Global Technologies founded with a vision to transform enterprise IT' },
    { year: '2012', event: 'Expanded to 5 countries, achieved Oracle NetSuite Partner status' },
    { year: '2015', event: 'Reached 100 clients milestone, launched Cloud Services division' },
    { year: '2018', event: 'Opened US headquarters, grew team to 150+ professionals' },
    { year: '2021', event: 'Achieved AWS Advanced Consulting Partner status' },
    { year: '2025', event: 'Serving 200+ clients across 12 countries, 98% client satisfaction' },
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
              About NM Global Technologies
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Your trusted partner in digital transformation since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Story"
            subtitle="Building the future of enterprise technology"
          />
          <div className="space-y-6 text-lg text-neutral leading-relaxed">
            <p>
              Founded in 2009, NM Global Technologies emerged from a simple vision: to help businesses harness the power of technology to achieve their goals. What started as a small team of passionate IT professionals has grown into a global organization serving clients across three continents.
            </p>
            <p>
              Today, we specialize in three core areas: ERP Solutions, Cloud Services, and Managed IT Services. Our team of over 150 certified professionals brings deep expertise in Oracle NetSuite, AWS, Azure, and comprehensive IT infrastructure management.
            </p>
            <p>
              We&apos;re proud to have helped more than 200 organizations streamline their operations, reduce costs, and accelerate growth. From manufacturing firms to financial services companies, healthcare providers to logistics operations, our solutions are transforming businesses worldwide.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-neutral leading-relaxed">
              To empower businesses with intelligent technology solutions that drive efficiency, innovation, and sustainable growth. We&apos;re committed to being more than just a service provider—we&apos;re a strategic partner invested in our clients&apos; success.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-neutral leading-relaxed">
              To be the world&apos;s most trusted partner for enterprise digital transformation. We envision a future where technology seamlessly enables business success, and we&apos;re dedicated to making that future a reality for every client we serve.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-neutral">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gray">
        <SectionHeader
          title="Our Journey"
          subtitle="Milestones that shaped our growth"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {item.year}
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                  <p className="text-neutral leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section>
        <SectionHeader
          title="Leadership Team"
          subtitle="Meet the experts driving our vision forward"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{member.position}</p>
                <p className="text-sm text-neutral mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Global Presence */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Presence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            With offices and partners across North America, Europe, and Asia, we deliver local expertise with global standards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['🇺🇸 United States', '🇬🇧 United Kingdom', '🇮🇳 India', '🇩🇪 Germany'].map((country) => (
              <div key={country} className="text-center">
                <p className="text-2xl mb-2">{country.split(' ')[0]}</p>
                <p className="text-sm opacity-90">{country.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Ready to Partner with Us?"
          description="Let's discuss how we can help transform your business"
          primaryButtonText="Get in Touch"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

