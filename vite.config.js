import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const {GOOGLE_MAPS_API_KEY = '', MAP_ID = ''} = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env': {
        GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,
        MAP_ID: MAP_ID
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
