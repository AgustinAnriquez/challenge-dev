import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://AgustinAnriquez.github.io/challenge-dev",
  plugins: [react()],
})
