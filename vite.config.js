import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const {
    GOOGLE_MAPS_API_KEY = '',
    MAP_ID = '',
    DB_USER = '',
    DB_PWD = '',
    DB_AUTH_DB = '',
  } = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env': {
        GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY,
        MAP_ID: MAP_ID,
        DB_USER: DB_USER,
        DB_PWD: DB_PWD,
        DB_AUTH_DB: DB_AUTH_DB
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
