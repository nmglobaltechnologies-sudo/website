'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/Card';
import { CTABanner } from '@/components/CTABanner';
import blogPosts from '@/content/blog-posts.json';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Cloud Services', 'ERP Solutions', 'Managed IT Services', 'Digital Transformation'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Expert insights, best practices, and industry trends from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 text-neutral hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/resources/${post.slug}`}>
                <Card className="h-full group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-accent to-primary rounded-lg mb-4 flex items-center justify-center text-6xl">
                    {post.category === 'Cloud Services' ? '☁️' :
                     post.category === 'ERP Solutions' ? '💾' :
                     post.category === 'Managed IT Services' ? '🖥️' : '🚀'}
                  </div>
                  <div className="text-xs text-accent font-semibold mb-2">
                    {post.category} • {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral">By {post.author}</span>
                    <span className="text-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">
                      Read More →
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            title="Stay Updated"
            subtitle="Subscribe to our newsletter for the latest insights and updates"
          />
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-primary transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-neutral mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Need Expert Guidance?"
          description="Our team is ready to help you navigate your technology challenges"
          primaryButtonText="Talk to an Expert"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </Section>
    </>
  );
}

