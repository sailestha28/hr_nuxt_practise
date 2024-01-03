import en from './locales/en-EN.json'
import jp from './locales/jp-JP.json'

const availableLocales = {
    en: en,
    jp: jp
}
export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en: en,
        jp: jp
    },
    locales: [
        {
            code: "en",
            name: "English",
            iso: 'en-US',
            file: 'en.js'
        },
        {
            code: "jp",
            name:"Japan",
            iso: 'jp-JP',
            file: 'jp-JP.json'
        }
    ],
    defaultLocale: 'en',
    lazy: true,
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: {
        fallbackLocale: "en",
        messages: availableLocales
    }

}))
