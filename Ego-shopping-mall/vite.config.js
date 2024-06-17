import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
//配置elementplus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//
import vue from '@vitejs/plugin-vue'
import { prependListener } from 'node:process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置elementPlus采用scss样式配色系统
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  CSS:{
    preprocessorOptions:{
      scss:{
        //自动导入定制化样式文件进行覆盖
        additionalData:
        `@use "@styles/element/index.scss" as *;`
        ,
      }
    }
  }
})
