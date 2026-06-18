'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';

export default function ContactPage() {

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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Let&apos;s discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent text-white flex items-center justify-center text-2xl">
              📍
            </div>
            <h3 className="font-bold text-primary mb-2">Visit Us</h3>
            <p className="text-neutral text-sm">
              1234 Business Park Dr.<br />
              Suite 100<br />
              City, ST 12345
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent text-white flex items-center justify-center text-2xl">
              📧
            </div>
            <h3 className="font-bold text-primary mb-2">Email Us</h3>
            <a href="mailto:info@nmglobal.com" className="text-accent hover:text-primary transition-colors">
              info@nmglobal.com
            </a>
            <br />
            <a href="mailto:sales@nmglobal.com" className="text-accent hover:text-primary transition-colors">
              sales@nmglobal.com
            </a>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent text-white flex items-center justify-center text-2xl">
              📞
            </div>
            <h3 className="font-bold text-primary mb-2">Call Us</h3>
            <a href="tel:+1234567890" className="text-accent hover:text-primary transition-colors">
              +1 (234) 567-8900
            </a>
            <br />
            <a href="https://wa.me/1234567890" className="text-accent hover:text-primary transition-colors">
              WhatsApp: +1 (234) 567-8900
            </a>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader
          title="Why Work With Us?"
          subtitle="Startup agility meets enterprise expertise"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="font-bold text-primary mb-2">Fast Response</h4>
            <p className="text-sm text-neutral">Quick turnaround times with direct access to decision-makers</p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">💡</div>
            <h4 className="font-bold text-primary mb-2">Innovative Solutions</h4>
            <p className="text-sm text-neutral">Fresh perspectives and cutting-edge technology approaches</p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h4 className="font-bold text-primary mb-2">Personal Attention</h4>
            <p className="text-sm text-neutral">Every client matters - you're not just a number to us</p>
          </Card>
        </div>
      </Section>

      {/* Business Hours */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-6 opacity-90">
            Reach out via email or phone and we'll get back to you promptly
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Email</h4>
              <p className="opacity-90">info@nmglobal.com</p>
              <p className="opacity-90">sales@nmglobal.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Phone</h4>
              <p className="opacity-90">+1 (234) 567-8900</p>
              <p className="opacity-90">Available Monday - Friday, 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

