import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/payment/', '/payment/complete'],
        },
        sitemap: 'https://cliffenglish.com/sitemap.xml',
    };
}
