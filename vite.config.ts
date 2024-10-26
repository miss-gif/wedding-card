import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@headers', replacement: '/src/components/headers' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@common', replacement: '/src/common' },
    ],
  },
})
