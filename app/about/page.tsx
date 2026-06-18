'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';

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
      title: 'Client-Centric',
      description: 'We prioritize your success, building solutions tailored to your unique business needs.',
    },
  ];

  const timeline = [
    { year: '2008', event: 'NM Global Technologies founded with a vision to help businesses leverage technology for success' },
    { year: '2012', event: 'Expanded services to include comprehensive ERP solutions and cloud services' },
    { year: '2016', event: 'Reached 100+ clients across multiple industries with proven implementation success' },
    { year: '2020', event: 'Added AI and data analytics capabilities to our technology portfolio' },
    { year: '2024', event: 'Celebrating 16 years of innovation and client success' },
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
              Your emerging partner in digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Story"
            subtitle="Building enterprise technology solutions since 2008"
          />
          <div className="space-y-6 text-lg text-neutral leading-relaxed">
            <p>
              Founded in 2008, NM Global Technologies has grown from a small consulting firm to a full-service technology solutions company with a proven track record of helping businesses transform through technology. Our journey began with a simple mission: to help enterprises leverage technology to achieve their strategic objectives.
            </p>
            <p>
              Over the years, we've expanded our expertise to encompass comprehensive ERP solutions, custom software development, cloud infrastructure services, artificial intelligence, and managed IT services. Our team of seasoned professionals brings decades of combined experience in Oracle, SAP, JD Edwards, Microsoft Dynamics, AWS, Azure, and Oracle Cloud.
            </p>
            <p>
              Today, we're proud to serve clients across multiple industries, delivering innovative technology solutions that drive efficiency, reduce costs, and enable sustainable growth. Our established reputation for excellence and client success has made us a trusted partner for businesses seeking digital transformation.
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
              To empower businesses with intelligent technology solutions that drive efficiency, innovation, and sustainable growth. As a startup, we're agile, innovative, and completely focused on delivering exceptional value to every client we serve.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-neutral leading-relaxed">
              To become a trusted partner for enterprise digital transformation, bringing fresh perspectives and innovative solutions to businesses worldwide. We envision a future where technology seamlessly enables business success, and we're building that future one client at a time.
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
          subtitle="Building our story from day one"
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

      {/* Why Choose Us */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NM Global?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            With 16 years of experience, we combine established expertise with innovative thinking to deliver exceptional technology solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="opacity-90">16+ years of successful implementations with 500+ satisfied clients across multiple industries</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
              <p className="opacity-90">Deep knowledge of manufacturing, distribution, construction, retail, healthcare, and logistics sectors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
              <p className="opacity-90">Team of certified Oracle, SAP, AWS, Azure, and Microsoft experts with decades of combined experience</p>
            </div>
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

