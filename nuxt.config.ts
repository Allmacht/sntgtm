// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@pinia-plugin-persistedstate/nuxt',
    'vuetify-nuxt-module',
    "@vite-pwa/nuxt"
  ],

  pwa: {
    manifest: {
      name: 'SNTGTM',
      short_name: 'SNTGTM',
      start_url: '/auth/sign_in',
      display: 'standalone',
      description: 'SNTGTM App',
      background_color: '#b00020',
      icons: [
        {
          src: '/64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/196.png',
          sizes: '196x196',
          type: 'image/png',
        },
        {
          src: '/512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]

    }
  },

  vuetify: {
    vuetifyOptions: {
      labComponents: ['VNumberInput']
    }
  },

  googleFonts: {
    families: {
      Asap: [300, 400, 500, 600, 700]
    }
  }
})