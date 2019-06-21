import Vue from 'vue'
import VueI18n from 'vue-i18n'
import OnesaitLocale from '@onesait/onesait-ds/lib/locale'
import esLocale from './locale/es'
import enLocale from './locale/en'

Vue.use(VueI18n)

const messages = {
  es: esLocale,
  en: enLocale
}

const i18n = new VueI18n({
  locale: 'es',
  messages
})

OnesaitLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
