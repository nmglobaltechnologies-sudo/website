import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nmglobal.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/industries',
    '/technologies',
    '/case-studies',
    '/resources',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));

  return staticPages;
}

