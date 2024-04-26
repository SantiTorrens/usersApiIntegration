import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from "node:dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  base: "/usersApiIntegration/",
  server: {
    port: 3000,
    host: 'localhost'
  },
  optimizeDeps: {
    include: ['@testing-library/react', '@testing-library/jest-dom'],
  },

})
