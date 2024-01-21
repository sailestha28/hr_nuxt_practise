const hello$1 = "hello en";
const english = {
  hello: hello$1
};
const hello = "hello jp";
const japanese = {
  hello
};
const i18n_config = () => ({
  legacy: false,
  locales: [
    {
      code: "en-US",
      name: "English",
      iso: "en-US",
      file: "en-EN.js"
    },
    {
      code: "jp-JP",
      name: "Japan",
      iso: "jp-JP",
      file: "jp-JP.json"
    }
  ],
  defaultLocale: "en-US",
  lazy: true,
  strategy: "prefix_except_default",
  langDir: "locales",
  vueI18n: {
    fallbackLocale: "en-US"
  },
  messages: {
    en: english,
    jp: japanese
  }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-Ti8DcgA0.mjs.map
