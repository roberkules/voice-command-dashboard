import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'logos/*.png'],
      manifest: {
        name: 'Voice Command Dashboard',
        short_name: 'TV Control',
        description: 'Control your TV with voice commands',
        theme_color: '#1976d2',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
    }),
  ],
  server: {
    host: '0.0.0.0', // This exposes the server to your network
    port: 3009, // You can specify a port if you want
  },
});

