import english from './locales/en-US.json'
import japanese from './locales/jp-JP.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locales: [
        {
            code: 'en-US',
            name: "English",
            iso: 'en-US',
            file: 'en-EN.js'
        },
        {
            code: 'jp-JP',
            name:"Japan",
            iso: 'jp-JP',
            file: 'jp-JP.json'
        }
    ],
    defaultLocale:'en-US',
    lazy: true,
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: {
        fallbackLocale:'en-US'
    },
        messages: {
        en: english,
        jp: japanese
    },

}))
