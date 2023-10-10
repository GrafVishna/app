import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/assets/components',
      '@pages': '/src/assets/pages',
      '@data': '/src/assets/data',
      '@functions': '/src/assets/functions',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import './src/assets/scss/mixins'; 
        @import './src/assets/scss/global';`,
      },
    },
  },
})
