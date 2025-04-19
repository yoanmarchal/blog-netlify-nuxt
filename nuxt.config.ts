export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/devtools',
  ],
  content: {
    documentDriven: true
  }
})
