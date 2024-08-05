import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://susports.site/', // 백엔드 서버의 주소로 변경
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
