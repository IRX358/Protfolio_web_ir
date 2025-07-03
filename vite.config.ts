import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Protfolio_web_ir/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
