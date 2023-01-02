import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: true
  }
})
