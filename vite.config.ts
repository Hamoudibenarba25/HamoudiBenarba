import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/HamoudiBenarba",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
