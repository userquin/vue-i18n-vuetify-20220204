import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Vuetify from '@vuetify/vite-plugin'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
    // https://github.com/antfu/unocss
    Unocss({
      presets: [
        presetUno(),
        presetIcons(),
      ],
    }),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    Vuetify({ styles: 'expose', autoImport: true }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      defaultSFCLang: 'yml',
      // add here global file translations
      include: [path.resolve(__dirname, 'src/locales/**')],
    }),
  ],
})
