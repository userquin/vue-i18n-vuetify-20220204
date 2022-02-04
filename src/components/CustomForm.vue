<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGlobalI18n, useLocalI18n } from '@/composables/i18n'

const dialog = ref(false)
const { t } = useLocalI18n()
const { locale } = useGlobalI18n()
const name = ref('')
const iconIndex = ref(0)
const icons = [
  'i-mdi:emoticon',
  'i-mdi:emoticon-cool',
  'i-mdi:emoticon-dead',
  'i-mdi:emoticon-excited',
  'i-mdi:emoticon-happy',
  'i-mdi:emoticon-neutral',
  'i-mdi:emoticon-sad',
  'i-mdi:emoticon-tongue',
]
const icon = computed(() => {
  return icons[iconIndex.value]
})

const changeIcon = () => {
  iconIndex.value = iconIndex.value < icons.length - 1
    ? iconIndex.value + 1
    : 0
}

const sayHi = () => {
  // eslint-disable-next-line no-alert
  name.value && alert(`Hi ${name.value}`)
}
const clickMe = () => {
  // eslint-disable-next-line no-console
  console.log('clicked')
}
const lang = (l: string) => {
  locale.value = l
}
</script>

<i18n>
en:
 textfield: What's your name
 showdialog: Show dialog
 dialogTitle: Dialog title
 tooltip: Tooltip
es:
 textfield: ¿Cómo te llamas?
 showdialog: Mostrar diálogo
 dialogTitle: Dialog title
 tooltip: Tooltip
</i18n>

<template>
  <div class="mt-4 grid grid-cols-[65ch] gap-2 justify-center">
    <v-btn @click="lang('en')">
      English (Inglés)
    </v-btn>
    <v-btn @click="lang('es')">
      Español (Spanish)
    </v-btn>
    <v-form @submit.prevent="sayHi">
      <v-text-field
        v-model="name"
        autofocus
        :label="t('textfield')"
        :prepend-icon="icon"
        append-inner-icon="i-mdi:lightning-bolt"
        clear-icon="i-mdi:delete"
        @click:prepend="changeIcon"
        @click:append-inner="clickMe"
      />
    </v-form>
    <v-dialog v-model="dialog">
      <template #activator="{ props }">
        <v-btn
          type="button"
          class="ml-4"
          v-bind="props"
          variant="outlined"
          color="primary"
          text
        >
          <v-icon left icon="i-mdi:plus" />
          {{ t('showdialog') }}
          <v-tooltip activator="parent" :text="t('tooltip')" anchor="bottom center" />
        </v-btn>
      </template>
      <v-card class="bg-white">
        <v-card-title>{{ t('dialogTitle') }}</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="name" autofocus :label="t('textfield')" />
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
