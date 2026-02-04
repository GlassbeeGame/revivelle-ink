// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://revivelleink.com',
  trailingSlash: 'never',

  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Image optimization
  image: {
    domains: ['revivelleink.com'],
    remotePatterns: [{ protocol: 'https' }],
  },

  // Prefetch for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // Compression and minification
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code for better caching
            'astro': ['astro'],
          }
        }
      }
    },
    // Optimize dependencies
    optimizeDeps: {
      include: []
    }
  }
});
