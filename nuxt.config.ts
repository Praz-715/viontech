export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title:
        'PT Viontech Integrasi Optima — Pengadaan Furniture, Elektronik & Perlengkapan Instansi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#081229' },
      ],
      script: [
        {
          // Set the theme before first paint to avoid a flash of wrong theme.
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo_viontech.ico' },
        { rel: 'shortcut icon', href: '/logo_viontech.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo_viontech.webp' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Manrope:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    prerender: { crawlLinks: true },
  },
})
