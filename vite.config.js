import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Medagg_website_project/',  // 👈 must match your GitHub repo name
  plugins: [react()]
})
