// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName: "Awesome Site",
      siteDescription: "Welcome to my awesome site!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  extends: ["nuxt-seo-kit"],
});
