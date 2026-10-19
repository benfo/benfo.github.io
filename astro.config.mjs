import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.benfourie.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
