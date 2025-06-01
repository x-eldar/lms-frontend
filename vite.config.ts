import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';


const ALLOWED_HOST = import.meta.env.VITE_ALLOWED_HOST;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      ALLOWED_HOST || 'localhost'
    ]
  }
})
