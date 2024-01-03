// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    css: [
        '~/assets/css/tailwind.css',
        // 'lite-youtube-embed/src/lite-yt-embed.css',
    ],
})
