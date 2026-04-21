import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: { 
        drop_console: true, 
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vendor-vue';
            }
            if (id.includes('lucide')) {
              return 'vendor-icons';
            }
            if (id.includes('aos')) {
              return 'vendor-aos';
            }
            return 'vendor-other';
          }
          if (id.includes('src/views/')) {
            // Split each view into its own chunk dynamically
            return 'view-' + id.split('/').pop().split('.')[0];
          }
        },
      },
    },
  },
})
