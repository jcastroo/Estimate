import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  esbuild: {
    minify: false,
    minifySyntax: false
  },
  plugins: [
    laravel({
      input: [
        'resources/js/app.js'
      ],
      valetTls: 'opnform.test'
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  optimizeDeps: {
    exclude: [
      'vt-notifications', 'vue-tailwind', 'vue-tailwind/dist/vue-tailwind.css'
    ]
  },
  resolve: {
    alias: {
      '~': '/resources/js',
      '@': '/resources'
    }
  },

})


<<<<<<< HEAD
=======

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: './spa.blade.php'
      }
    }
  }
}


>>>>>>> parent of f37accd (s)
