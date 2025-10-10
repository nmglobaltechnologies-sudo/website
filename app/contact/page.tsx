'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Form */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Send Us a Message"
            subtitle="Fill out the form below and we&apos;ll get back to you within 24 hours"
          />

          <Card>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <strong>Success!</strong> Your message has been sent. We&apos;ll contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <strong>Error!</strong> Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company', { required: 'Company name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Acme Corporation"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a service...</option>
                  <option value="erp">ERP Solutions</option>
                  <option value="cloud">Cloud Services</option>
                  <option value="managed-it">Managed IT Services</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us about your project or requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Map Section */}
      <Section>
        <SectionHeader
          title="Our Locations"
          subtitle="Global presence with local expertise"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: 'New York', country: 'United States', flag: '🇺🇸' },
            { city: 'London', country: 'United Kingdom', flag: '🇬🇧' },
            { city: 'Mumbai', country: 'India', flag: '🇮🇳' },
            { city: 'Berlin', country: 'Germany', flag: '🇩🇪' },
          ].map((location) => (
            <Card key={location.city} className="text-center">
              <div className="text-4xl mb-3">{location.flag}</div>
              <h4 className="font-bold text-primary">{location.city}</h4>
              <p className="text-sm text-neutral">{location.country}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Business Hours */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Support</h4>
              <p className="opacity-90">24/7 for Managed Services clients</p>
              <p className="opacity-90">Mon-Fri 9AM-6PM for others</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Sales & Consultation</h4>
              <p className="opacity-90">Monday - Friday</p>
              <p className="opacity-90">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

