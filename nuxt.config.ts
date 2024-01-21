// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/i18n",
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        'nuxt-swiper'],
    i18n: {
        /* module options */
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
            {
                code: "en-US",
                iso: "en-US",
                name: "English",
                file: "en-US.json",
            },
            {
                code: "jp-JP",
                iso: "jp-JP",
                name: "日本語",
                file: "jp-JP.json",
            },

        ],
        defaultLocale: "en-US",
        vueI18n: {
            fallbackLocale: "en-US",
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {config: './tailwind.config.js'},
            autoprefixer: {},
        },
    },
});
