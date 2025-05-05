import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: 'dist', // Default for Vite, but explicitly stated for clarity
    chunkSizeWarningLimit: 1000, // Adjust to suppress chunk size warnings
  },
})
