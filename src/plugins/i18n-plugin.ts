import { createI18n } from 'vue-i18n'
import type { UserPlugin } from '@/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      return [key.slice(11, key.endsWith('.yaml') ? -5 : -4), value.default]
    }),
)

export const install: UserPlugin = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
