import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@shared', replacement: '/src/components/shared/' },
      { find: '@models', replacement: '/src/models' },
    ],
  },
})
