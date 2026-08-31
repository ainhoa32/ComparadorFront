import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // La cesta se guarda en un archivo JSON servido por json-server
      '/productosCesta': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
