export default defineNuxtConfig({
devtools: { enabled: true },
modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode'
],
css: ['animate.css/animate.min.css'] ,
colorMode: {
    classSuffix: ''
  }
}
)
