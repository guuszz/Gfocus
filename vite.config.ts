import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Configurações específicas para Fast Refresh
      fastRefresh: true,
      // Evitar problemas com hooks customizados
      jsxRuntime: 'automatic',
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    // Configurações para melhorar o HMR
    hmr: {
      overlay: true,
    },
  },
});
