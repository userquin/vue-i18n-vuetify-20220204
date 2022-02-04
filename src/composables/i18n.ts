import { useI18n as i18n } from 'vue-i18n'

export const useI18n = () => {
  return i18n()
}

export const useLocalI18n = () => {
  return i18n({ useScope: 'local' })
}

export const useGlobalI18n = () => {
  return i18n({ useScope: 'global' })
}
