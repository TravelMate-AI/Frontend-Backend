import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': { // Permintaan ke /api (e.g., /api/restaurants)
        target: 'http://localhost:5000', // Akan diarahkan ke backend Express
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
 