import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/POOJA_N_PORTFOLIO/',  // ✅ must match your GitHub repo name
})
