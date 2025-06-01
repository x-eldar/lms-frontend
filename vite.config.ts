import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Загружаем env-переменные для текущего режима (development/production)
  const env = loadEnv(mode, process.cwd(), ['VITE_']);

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: [
        env.VITE_ALLOWED_HOST || 'localhost'
      ]
    }
  };
});
