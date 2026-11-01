// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://souvikmandal.info',
  // The old course page moved to the MyST course site; keep old links working.
  redirects: {
    '/comp_etho': '/teaching-learning/ls100/',
  },
});
