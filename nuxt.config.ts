export default defineNuxtConfig({
  compatibilityDate: '2026-04-03',
  devtools: { enabled: process.env.NODE_ENV !== 'prd' },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      contactApiUrl: '',
      contactApiKey: '',
    },
  },

  modules: [
    // '@nuxtjs/storybook'
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],

  components: true,

  typescript: {
    typeCheck: true,
  },
})
