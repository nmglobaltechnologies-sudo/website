'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';
import { ServiceCard } from '@/components/Card';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TestimonialCarousel } from '@/components/TestimonialCard';
import { CTABanner } from '@/components/CTABanner';

import servicesData from '@/content/services.json';
import statsData from '@/content/stats.json';
import testimonialsData from '@/content/testimonials.json';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-accent to-sky overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Driving Digital Transformation<br />
              with Intelligent IT Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              ERP, Cloud, and Managed Services tailored for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Consultation
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Empowering Enterprises Since 2009"
            subtitle="Your Global Partner for Cloud and ERP Success"
          />
          <div className="space-y-4 text-lg text-neutral leading-relaxed">
            <p>
              NM Global Technologies is a leading provider of enterprise IT solutions, specializing in ERP implementation, cloud transformation, and managed IT services. With over 15 years of experience, we&apos;ve helped more than 200 organizations across 12 countries achieve their digital transformation goals.
            </p>
            <p>
              Our team of certified experts brings deep industry knowledge and technical expertise to deliver solutions that drive efficiency, reduce costs, and enable sustainable growth. From Fortune 500 companies to growing mid-market firms, we partner with organizations to turn technology challenges into competitive advantages.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Core Services */}
      <Section background="gray">
        <SectionHeader
          title="Our Core Services"
          subtitle="Comprehensive IT solutions designed to accelerate your business growth"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Stats Section */}
      <Section background="primary">
        <SectionHeader
          title="By the Numbers"
          subtitle="Our track record of delivering excellence"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-lg text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Client Testimonials */}
      <Section>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by leading organizations worldwide"
        />
        <TestimonialCarousel testimonials={testimonialsData} />
      </Section>

      {/* Featured Case Studies */}
      <Section background="gray">
        <SectionHeader
          title="Success Stories"
          subtitle="Real results from our client partnerships"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center text-6xl">
                {service.icon === 'database' ? '💾' :
                 service.icon === 'cloud' ? '☁️' : '🖥️'}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.caseStudy.title}
                </h3>
                <p className="text-neutral mb-4">
                  {service.caseStudy.description}
                </p>
                <a 
                  href={`/services/${service.slug}`}
                  className="text-accent hover:text-primary font-semibold transition-colors inline-flex items-center"
                >
                  Read Case Study →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section>
        <CTABanner
          title="Need help implementing your ERP? Let's talk."
          description="Our expert team is ready to guide you through your digital transformation journey."
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
          background="gradient"
        />
      </Section>
    </>
  );
}
