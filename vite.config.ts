import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/" //because we're auto-redirecting with the CNAME record in gh-pages, we can just assume the base is at the root. 
  // If we didn't have a custom CNAME, we'd have to set `base: "/Blueprints"` (The name of the GH Pages Project)
})
