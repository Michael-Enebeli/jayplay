import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // 👈 This enables LAN access
    port: 5000,
    strictPort: true,
    allowedHosts: [
      '1f996d70-2165-4353-8701-2eab99c29ca1-00-27vbnczg65b27.picard.replit.dev'
    ]
  },
});
