import { MetadataRoute } from 'next';
import { packages } from '@/data/home';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  const packageRoutes = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...packageRoutes];
}
