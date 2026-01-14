import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/" //because we're auto-redirecting with the CNAME record in gh-pages, we can just assume the base is at the root.
})
