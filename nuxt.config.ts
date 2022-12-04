import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  static: true,
  plugins: ['~/plugins/preview.client.js'],
  content: {
    documentDriven: true
  }
})
