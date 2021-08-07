import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk !== 'nuxt-website' ? `${titleChunk} | KodeKafé` : 'KodeKafé',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-build-optimisations',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/netlify-files',
    '@nuxtjs/eslint-module',
    '@nuxtjs/robots',
    '@nuxtjs/svg',
    '@nuxtjs/fontawesome',
    '@nuxtjs/sitemap', // KEEP THIS AT THE END
  ],

  styleResources: {
    scss: ['./assets/vars/*.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    workbox: false,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  telemetry: false,

  sitemap: {
    hostname: 'https://kodekafe.no',
    exclude: ['/admin/**'],
  },

  robots: [
    { UserAgent: '*', Allow: '*', Disallow: '/admin', Sitemap: '/sitemap.xml' },
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  colorMode: { fallback: 'dark' },

  generate: {
    fallback: '404.html',
    exclude: [/\/discord\/?/],
  },

  fontawesome: {
    component: 'Fa',
    suffix: true,
  },

  buildOptimisations: {
    profile: process.env.NODE_ENV === 'development' ? 'risky' : 'experimental',
    features: { esbuildLoader: true },
  },
}

export default config
