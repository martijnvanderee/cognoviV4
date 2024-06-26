import fs from 'fs';
import { globby } from 'globby';

import prettier from 'prettier';

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = 'https://sciencegeek.nl';

const formatted = (sitemap: any) =>
  prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby([
    // include
    '../pages/**/*.tsx',
    '../pages/*.tsx',
    // exclude
    '!../pages/_*.tsx',
  ]);

  const pagesSitemap = `
    ${pages
      .map((page: any) => {
        const path = page
          .replace('../pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap: any = [formatted(generatedSitemap)];

  fs.writeFileSync('../public/sitemap-common.xml', formattedSitemap, 'utf8');
})();
