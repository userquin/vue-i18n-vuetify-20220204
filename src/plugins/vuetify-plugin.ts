import { createVuetify } from 'vuetify'
import { Intersect, Resize } from 'vuetify/directives'
import type { ThemeDefinition } from 'vuetify'
import type { UserPlugin } from '@/types'

export const install: UserPlugin = (app) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#0d9488',
    },
  }
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    directives: { Intersect, Resize },
  })

  app.use(vuetify)
}
