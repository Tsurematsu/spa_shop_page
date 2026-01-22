// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',           // ← ¡Esto es lo más importante!
  build: {
    outDir: 'dist',     // asegúrate que coincida con tu estructura
    assetsDir: 'assets',
    // Opcional: si quieres minificar más o target viejo
    target: 'es2020',   // o 'es2015' si necesitas soporte muy antiguo
  },
})