import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cckiller.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/animation-test',
          '/particle-test',
          '/_next/',
          '/admin',
        ],
      },
      // 针对百度爬虫
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 1,
      },
      // 针对Google爬虫
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // 针对Bing爬虫
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
