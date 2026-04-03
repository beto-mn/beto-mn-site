export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      contactApiUrl: process.env.NUXT_PUBLIC_CONTACT_API_URL ?? '',
      contactApiKey: process.env.NUXT_PUBLIC_CONTACT_API_KEY ?? '',
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
