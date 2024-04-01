import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.json'] // Manejo de extensiones de archivo
  },
  server: {
    // Agregar un prefijo de raíz para el enrutamiento de la aplicación de una sola página (SPA)
    // Esto es útil cuando despliegas tu aplicación en un subdirectorio del servidor
    base: '/'
  },
  build: {
    // Minificar el código para mejorar el rendimiento de la aplicación
    minify: 'terser',
    // Agregar hashes a los nombres de archivo para facilitar la gestión de caché
    chunkFileNames: 'assets/[name].[hash].js',
    cssCodeSplit: true // Dividir el código CSS para una carga más rápida
  }
});
