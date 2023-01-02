import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  plugins: ['~/plugins/preview.client.js'],
  content: {
    documentDriven: true
  }
})
