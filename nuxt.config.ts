// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts
import { defineNuxtModule } from 'nuxt';
import { resolve } from "path";
export default defineNuxtConfig({

  // App Default Config
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'  // Set the desired language attribute
      },
      title: 'Half Price Packaging',
      link: [
        // Favicon link for SVG
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    }
  },

  vite: {
    build: {
      rollupOptions: {
        treeshake: true, // Explicitly enable tree-shaking
      },
    },
  },
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    transpile: [], // Remove unnecessary dependencies here
  },

  //compatibilityDate:['2024-09-06'],

  // Alias Declaration
  alias: {
    "@": resolve(__dirname, "/"),
  },

  // CSS Files Declarations
  css: ["~/assets/css/main.scss"],

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
      appTitle: process.env.APP_TITLE,
      siteURL: process.env.SITE_URL,
      apiURL: process.env.API_URL,
      productMediaURL: process.env.PRODUCT_MEDIA_URL,
      catMediaURL: process.env.CAT_MEDIA_URL,
      postMediaURL: process.env.POST_MEDIA_URL,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  // Modules Declarations
  devtools: { enabled: true },
  imports: { dirs: ["stores"] },

  // Modules Declarations
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", '@nuxt/ui', '@nuxt/content', [
    "@pinia/nuxt",
    {
      autoImports: ["defineStore", "acceptHMRUpdate"],
    },

  ], '@nuxtjs/color-mode', '@nuxtjs/sitemap', '@nuxtjs/device', '@nuxt/scripts'],
  // ], '@nuxtjs/color-mode', '@nuxtjs/sitemap', '@zadigetvoltaire/nuxt-gtm', '@nuxtjs/device', '@nuxt/scripts'],

  device: {
    defaultUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', // Optional: Set default user-agent for SSR
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', 'sitemap.xml'],
    },
    serveStatic: true, // Ensure Nitro serves static files
    compressPublicAssets: {
      brotli: true
    },
  },

  routeRules: {
    // Apply cache settings to static files
    '/_nuxt/**': { headers: { 'Cache-Control': 'max-age=31536000, immutable' } },
    '/images/**': { headers: { 'Cache-Control': 'max-age=31536000, immutable' } }
  },

  // Nuxt Image Module Config
  image: {
    
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      xxxl: 1921
    },

    // provider: 'ipx',
    provider: 'netlifyImageCdn',
    // provider: 'netlify',
    domains: ['https://hpp-staging.netlify.app/', 'https://hppfrontend-new.netlify.app/', 'https://www.halfpricepackaging.com/', 'img.youtube.com', 'i.vimeocdn.com'],
    // dir: "",

    alias: {
      liveDomain: 'https://www.halfpricepackaging.com/',
      netlifyStaging: 'https://hpp-staging.netlify.app/',
      netlifyStaging2: 'https://hppfrontend-new.netlify.app/',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },

  // Importing Google Fonts
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Quicksand: [300, 400, 500, 600, 700],
    }
  },

  site: {
    url: 'https://www.halfpricepackaging.com',
  },
  sitemap: {
    sources: ['/api/sitemap'],
    exclude: [
      '/thank-you/**',
      '/thank-you',
      '/thank-you-custom-quote-form/**',
      '/thank-you-custom-quote-form',
      '/thank-you-popup-form/**',
      '/thank-you-popup-form',
      '/thank-you-sample-kit/**',
      '/thank-you-sample-kit',
      '/thank-you-instant-quote-form/**',
      '/thank-you-instant-quote-form',
      '/404/**',
      '/404',
    ],
  },

  // gtm: {
  //   id: 'GTM-WDX5T2S',
  //   defer: true,
  //   compatibility: true,
  //   enabled: true,
  // },

  // scripts: { 
  //   registry: {
  //     googleTagManager: {
  //       id: 'GTM-WDX5T2S'
  //     },
  //   }
  // },

  // imports: { dirs: ["stores"] },

  // Swiper Js Config
  // swiper: {
    // Global swiper options can be configured here
    //modules: ['autoplay', 'effect-coverflow'],
  // },

  // Nuxt Color Mode
  colorMode: {
    preference: 'light', // default mode to 'light'
    fallback: 'light',   // fallback mode to 'light'
    hid: 'nuxt-color-mode-script',
    globalName: 'nuxtColorMode',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
    // Disable system preference detection
    detectSystemColorScheme: false,
  },

})