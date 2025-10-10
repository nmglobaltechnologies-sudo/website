import { Metadata } from 'next';

export const siteConfig = {
  name: 'NM Global Technologies',
  description: 'Empowering Digital Enterprises with Smart IT Solutions. Leading provider of ERP, Cloud, and Managed IT services for global businesses.',
  url: 'https://nmglobal.com',
  ogImage: 'https://nmglobal.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/nmglobal',
    linkedin: 'https://linkedin.com/company/nmglobal',
  },
};

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      'ERP Solutions',
      'Cloud Services',
      'Managed IT Services',
      'Oracle NetSuite',
      'AWS',
      'Azure',
      'IT Consulting',
      'Digital Transformation',
      'Enterprise Technology',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@nmglobal',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...overrides,
  };
}

