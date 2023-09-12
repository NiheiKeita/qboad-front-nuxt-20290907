// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Qboad',
      meta: [{ name: 'description', content: 'Qboad Web' }],
      link: [{ rel: 'icon', href: '/images/icon_web.png' }],
    },
  },
  devtools: { enabled: true },
});
