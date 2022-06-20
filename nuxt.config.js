export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s - Kwiaton',
		title: 'KWIATON - Sztukateria, Gzymsy, Pracownia Sztukatorska, Renowacje Zabytków',
		htmlAttrs: {
			lang: 'pl',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Prace wykończeniowe o charakterze artystycznym oraz renowacje budynków zabytkowych i historycznych. Aranżacje wnętrz, gzymsy, balustrady, sztukateria...',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'gzymsy, renowacje budynków, produkcja elementów sztukatorskich, sztukateria, sztukatorstwo, zabytki, formy architektoniczne',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	loading: {
		color: 'green',
		height: '5px',
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['nuxt-webfontloader'],

	// Font config
	webfontloader: {
		google: {
			families: ['Lato:400,700,900'], //Loads Lato font with weights 400, 700 and 900
		},
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		optionsPath: '~/plugins/vuetify.options.js',
		customVariables: ['@/assets/variables.scss'],
		defaultAssets: {
			font: {
				family: 'Lato',
			},
			icons: 'fa',
		},
		treeShake: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
