/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@app', replacement: '/src' },
      { find: '@modules', replacement: '/src/modules' },
      { find: '@components', replacement: '/src/components' }

    ],
  },
})
