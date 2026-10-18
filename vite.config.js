import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env files and process.env
  const env = loadEnv(mode, process.cwd(), '')
  const gtmId =
    env.VITE_GTM_ID ||
    env.NEXT_PUBLIC_GTM_ID ||
    process.env.VITE_GTM_ID ||
    process.env.NEXT_PUBLIC_GTM_ID ||
    'GTM-KLWZSR8N'

  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-gtm-inject',
        transformIndexHtml(html) {
          return html
            .replace(/%VITE_GTM_ID%/g, gtmId)
            .replace(/%NEXT_PUBLIC_GTM_ID%/g, gtmId)
        },
      },
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('framer-motion')) {
                return 'vendor-motion'
              }
              if (
                id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('react-router-dom') ||
                id.includes('react-helmet-async')
              ) {
                return 'vendor-framework'
              }
            }
          },
        },
      },
    },
  }
})

