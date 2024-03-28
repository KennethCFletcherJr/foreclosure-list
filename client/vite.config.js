import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
/* import { resolve } from 'path' */

// https://vitejs.dev/config/
export default defineConfig({
/*   root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  }, */
 /*  server: {
    port: 8080
  }, */
  plugins: [react()],
})


/* import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
} */

