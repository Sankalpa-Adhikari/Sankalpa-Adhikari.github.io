// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nsae.org.np",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss(),],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    },
    server: {
      proxy: {
        '/pagefind': {
          target: 'http://localhost:1414',
          changeOrigin: true,
          configure: (proxy, options) => {
            proxy.on('error', (err, req, res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, res) => {
              console.log('Proxying:', req.method, req.url);
            });
          }
        }
      }
    }
  },
  prefetch: true,
  redirects: {
    "/blog": "/blog/page/1",
    "/notices": "/notices/page/1",
    "/careers": "/careers/page/1",
    "/past-committee": "/past-committee/page/1",
    "/resources": "/resources/page/1",
    "/minutes": "/minutes/page/1",
    "/events": "/events/page/1",
  },
  devToolbar: {
    enabled:true,
    placement: 'bottom-left',
  },
});
