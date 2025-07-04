import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure environment variables are loaded
  envPrefix: 'VITE_',
  
  // Development server configuration
  server: {
    port: 5173,
    host: true
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})