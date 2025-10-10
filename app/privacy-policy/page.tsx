import React from 'react';
import { Section } from '@/components/Section';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-neutral leading-relaxed mb-6">
            NM Global Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <p className="text-neutral leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-neutral mb-6 space-y-2">
            <li>Name, email address, phone number, and company information</li>
            <li>Information you provide in forms, surveys, or correspondence</li>
            <li>Professional information relevant to our services</li>
            <li>Payment and billing information (processed securely through third-party providers)</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <p className="text-neutral leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-neutral mb-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and provide customer service</li>
            <li>Communicate about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We do not sell your personal information. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, to protect rights and safety, with service providers who assist our operations, or in connection with a business transaction.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">5. Data Security</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">6. Your Rights</h2>
          <p className="text-neutral leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-neutral mb-6 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">8. International Data Transfers</h2>
          <p className="text-neutral leading-relaxed mb-6">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
          <p className="text-neutral leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4">10. Contact Us</h2>
          <p className="text-neutral leading-relaxed mb-6">
            If you have questions about this Privacy Policy, please contact us at:
            <br /><br />
            NM Global Technologies<br />
            Email: privacy@nmglobal.com<br />
            Phone: +1 (234) 567-8900<br />
            Address: 1234 Business Park Dr., Suite 100, City, ST 12345
          </p>
        </div>
      </Section>
    </>
  );
}

