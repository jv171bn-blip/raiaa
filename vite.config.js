import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { flevoPayProxyPlugin } from './server/flevoPlugin';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), flevoPayProxyPlugin()],
});
