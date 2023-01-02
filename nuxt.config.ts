import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/pwa'
  ],
  content: {
    documentDriven: true
  },
  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'fr',
      useWebmanifestExtension: false
    }
  }
})
