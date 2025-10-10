import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nmglobal.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/erp-solutions',
    '/services/cloud-services',
    '/services/managed-it-services',
    '/industries',
    '/resources',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));

  // Add blog posts
  const blogPosts = [
    'cloud-migration-best-practices-2025',
    'erp-implementation-success-factors',
    'managed-it-services-vs-in-house-team',
    'digital-transformation-roadmap-2025',
  ].map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}

