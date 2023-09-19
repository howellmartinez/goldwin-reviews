// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [ '@nuxt/content', '@nuxtjs/tailwindcss'],
  routeRules: {
    // all routes will be background revalidated (ISR) at most every 60 seconds
    '/**': { isr: 60 },
    // this page will be generated on demand and cached permanently
    '/static': { isr: true }
  },
})
