import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteElectronDev} from './plugins/vite.electron.dev'
import {viteElectronBuild} from './plugins/vite.electron.build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteElectronDev(),
    viteElectronBuild()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
