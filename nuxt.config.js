export default {
    ssr: false,
    target: 'static',

    head: {
        title: 'Lollipop Player',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap' }
        ]
    },

    css: [
    ],

    plugins: [
    ],

    components: true,

    buildModules: [
        '@nuxt/typescript-build'
    ],

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa'
    ],

    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    build: {
    }
}
