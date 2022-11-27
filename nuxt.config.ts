import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  plugins: ['~/plugins/preview.client.js'],
  content: {
    documentDriven: true
  }
})
