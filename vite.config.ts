import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置檔案
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
