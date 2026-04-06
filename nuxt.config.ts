export default defineNuxtConfig({
  compatibilityDate: '2026-04-03',
  devtools: { enabled: process.env.NODE_ENV !== 'prd' },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
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
    '@nuxt/image',
  ],

  components: true,

  typescript: {
    typeCheck: true,
  },
})
