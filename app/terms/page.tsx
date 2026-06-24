import React from 'react';
import { Section } from '@/components/Section';

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Use
          </h1>
          <p className="text-xl opacity-90">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral leading-relaxed mb-6">
            By accessing and using the NM Global Technologies website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">2. Services Description</h2>
          <p className="text-neutral leading-relaxed mb-6">
            NM Global Technologies provides IT consulting, ERP implementation, cloud services, and managed IT services. Specific terms for each service will be outlined in separate service agreements.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">3. User Responsibilities</h2>
          <p className="text-neutral leading-relaxed mb-4">
            When using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 text-neutral mb-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not interfere with or disrupt our services</li>
            <li>Not attempt unauthorized access to our systems</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4">4. Intellectual Property</h2>
          <p className="text-neutral leading-relaxed mb-6">
            All content on this website, including text, graphics, logos, images, and software, is the property of NM Global Technologies or its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">5. Service Level Agreements</h2>
          <p className="text-neutral leading-relaxed mb-6">
            Specific service levels, uptime guarantees, and support response times will be detailed in individual service agreements with clients. General website availability is provided on an &quot;as is&quot; basis.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
          <p className="text-neutral leading-relaxed mb-6">
            To the fullest extent permitted by law, NM Global Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">7. Confidentiality</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We maintain strict confidentiality of client information and data. Detailed confidentiality terms will be included in service agreements and Non-Disclosure Agreements as appropriate.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">8. Payment Terms</h2>
          <p className="text-neutral leading-relaxed mb-6">
            Payment terms, pricing, and billing cycles will be specified in individual service agreements. General terms include payment within 30 days of invoice unless otherwise agreed.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">9. Termination</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason at our discretion. Specific termination terms for contracted services will be outlined in service agreements.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">10. Governing Law</h2>
          <p className="text-neutral leading-relaxed mb-6">
            These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which NM Global Technologies is incorporated, without regard to conflict of law principles.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">11. Changes to Terms</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of modified terms.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">12. Contact Information</h2>
          <p className="text-neutral leading-relaxed mb-6">
            For questions about these Terms of Use, please contact us at:
            <br /><br />
            NM Global Technologies<br />
            Email: legal@nmglobaltech.com
          </p>
        </div>
      </Section>
    </>
  );
}

