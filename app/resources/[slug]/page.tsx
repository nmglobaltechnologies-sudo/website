import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { CTABanner } from '@/components/CTABanner';
import blogPosts from '@/content/blog-posts.json';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="mb-6">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              ← Back to Resources
            </Link>
          </div>
          <div className="text-sm mb-4 opacity-90">
            {post.category} • {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl opacity-90 mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm opacity-80">NM Global Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-primary mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-neutral leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">About {post.author}</h3>
                <p className="text-neutral">
                  {post.author} is a technology expert at NM Global Technologies with extensive experience in {post.category.toLowerCase()}. 
                  Connect with our team to learn more about how we can help your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== post.slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug} 
                    href={`/resources/${relatedPost.slug}`}
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="text-xs text-accent font-semibold mb-2">
                      {relatedPost.category}
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2 hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-neutral line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <CTABanner
          title="Ready to Get Started?"
          description="Let's discuss how we can help your organization succeed"
          primaryButtonText="Contact Us"
          primaryButtonLink="/contact"
          secondaryButtonText="View All Articles"
          secondaryButtonLink="/resources"
        />
      </Section>
    </>
  );
}

