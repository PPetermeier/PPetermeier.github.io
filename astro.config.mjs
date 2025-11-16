// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.infornomics.de',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['*'],
        'skill-icons': ['*'],
        'logos': ['*'],
        'heroicons': ['*'],
        'tabler': ['*'],
        'carbon': ['*'],
        'ph': ['*'],
        'lucide': ['*'],
        'fa6-brands': ['*'],
        'fa6-solid': ['*'],
        'fa6-regular': ['*']
      }
    })
  ],
  build: {
    assets: '_astro'
  }
});
