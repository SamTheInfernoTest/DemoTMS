import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/',
  server: {
    historyApiFallback: true, // This ensures that index.html is served for all routes
    host: '0.0.0.0',
    port: 2000,
  },
  build: {
    target: 'esnext', // Allows top-level await
  },
})
