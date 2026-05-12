import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor code splitting
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/react-icons')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/axios') || id.includes('node_modules/react-helmet') || id.includes('node_modules/react-toastify')) {
            return 'vendor-utils';
          }
          if (id.includes('node_modules/recharts') || id.includes('node_modules/react-chartjs-2') || id.includes('node_modules/chart.js')) {
            return 'vendor-charts';
          }
          if (id.includes('node_modules/swiper')) {
            return 'vendor-swiper';
          }
        }
      }
    },
    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    // Source maps only in development
    sourcemap: false,
  },
  // Optimization hints
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
  }
})
