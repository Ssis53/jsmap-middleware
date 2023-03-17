/*
 * @Author: xiangfu.wu
 * @Date: 2023-03-06 22:25:40
 * @Description: 🚀
 * @FilePath: /jsmap-middleware/smap.config.ts
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
console.log('++++++', __dirname);
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib'),
      formats: ['iife'],
      fileName: (format) => 'SMap.js',
      name: 'dist'
    }
  }
})