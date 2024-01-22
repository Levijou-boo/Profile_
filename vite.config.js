import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite config options...
  esbuild: {
    target: 'esnext',
    platform: 'linux',
  }
  // Other Vite config options...
});
