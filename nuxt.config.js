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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
