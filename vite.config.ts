import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        host: '0.0.0.0', // Cho phép truy cập từ các IP khác
        port: 8080, // Cổng của server
        strictPort: true, // Chỉ dùng đúng cổng 8080
        https: false, // Nếu muốn dùng HTTPS thì cần cấu hình SSL
    },
    resolve: {
        alias: {
            '@components': '/src/components',
            '@sections': '/src/sections',
            '@assets': '/src/assets',
            '@utils': '/src/utils',
            '@src': '/src',
        },
    },
});
