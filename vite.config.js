import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clario_test-landing/',
  plugins: [react()],
})
