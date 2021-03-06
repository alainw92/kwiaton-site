// import { resolve } from "path";

const _DOMAIN = "https://kwiaton-sztukatorstwo.com.pl/";
const _DIR = "test/";

export default {
	dev: true,
	// ssr: false,
	target: "static",
	generate: {
		// dir: 'gh_pages', // gh_pages/ instead of dist/
		// subFolders: true, // HTML files are generated according to the route path (default)
	},
	build: {
		extractCSS: true,
	},
	server: {
		port: 3333, // default: 3000
	},
	srcDir: "src/",
	router: {
		base: `/${_DIR}`,
	},
	//
	head() {
		return {
			titleTemplate: (titleChunk) => (titleChunk ? `Kwiaton - ${titleChunk}` : "Kwiaton"),
			htmlAttrs: {
				lang: "pl",
				amp: true,
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "author", content: "Alan Wnęk (alan.wnek@gmail.com)" },
				{
					hid: "keywords",
					name: "keywords",
					content:
						"gzymsy, renowacje budynków, produkcja elementów sztukatorskich, sztukateria, sztukatorstwo, zabytki, formy architektoniczne",
				},
				{
					hid: "description",
					name: "description",
					content:
						"Prace wykończeniowe o charakterze artystycznym oraz renowacje budynków zabytkowych i historycznych. Aranżacje wnętrz, gzymsy, balustrady, sztukateria...",
				},
			],
			link: [
				{ rel: "favicon", href: "favicon.ico" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Send+Flowers&display=swap",
				},
			],
			noscript: [{ innerHTML: "Przepraszamy. Strona wymaga włączonego JavaScript." }],
		};
	},
	loading: {
		color: "#8F774D",
		height: "5px",
		throttle: 0,
		continuous: true,
	},
	/* loadingIndicator: {
		name: "rectangle-bounce",
		color: "#574834",
		background: "#d8d2c8",
	}, */
	alias: {
		// style: resolve(__dirname, "./assets/style"),
	},

	components: true,

	css: ["@/assets/styles/main", "@/assets/styles/animate.min", "@fortawesome/fontawesome-free/css/all.css"],

	/* pageTransition: {
		name: "page",
		mode: "",
	}, */

	plugins: [],

	modules: ["nuxt-route-meta", "@nuxtjs/i18n"],
	buildModules: ["@nuxtjs/vuetify"],

	vue: {
		config: {
			// productionTip: false,
			// devtools: false,
		},
	},

	vuetify: {
		customVariables: ["~/assets/styles/vuetify-variables.scss"],
		optionsPath: "./vuetify.options.js",
		treeShake: true,
	},

	i18n: {
		baseUrl: `${_DOMAIN}${_DIR}`,
		locales: [
			{ code: "pl", iso: "pl-PL" },
			{ code: "en", iso: "en-GB" },
			{ code: "de", iso: "de-DE" },
		],
		defaultLocale: "pl",
		vueI18nLoader: true,
		vueI18n: {
			fallbackLocale: "pl",
		},
	},
};
