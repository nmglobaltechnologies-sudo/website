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

  return staticPages;
}

