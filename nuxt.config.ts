import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/pwa'
  ],
  plugins: ['~/plugins/preview.client.js'],
  content: {
    documentDriven: true
  }
})
