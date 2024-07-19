import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "https://BlIsteinar27.github.io/Practica-Carrito-V2.git",
})
