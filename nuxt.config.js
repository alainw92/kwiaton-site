// import { resolve } from "path";

export default {
	dev: true,
	// ssr: false,
	target: "static",
	generate: {
		// dir: 'gh_pages', // gh_pages/ instead of dist/
		// subFolders: true, // HTML files are generated according to the route path (default)
	},
	server: {
		port: 3333, // default: 3000
	},
	srcDir: "src/",
	//
	head: {
		titleTemplate: (titleChunk) => (titleChunk ? `Kwiaton - ${titleChunk}` : "Kwiaton"),
		htmlAttrs: {
			lang: "pl",
			amp: true,
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
		link: [{ rel: "favicon", href: "favicon.ico" }],
		noscript: [{ innerHTML: "Przepraszamy. Strona wymaga włączonego JavaScript." }],
	},
	loading: {
		color: "#118511",
		height: "3px",
		throttle: 0,
		continuous: true,
	},
	loadingIndicator: {
		name: "rectangle-bounce",
		color: "#574834",
		background: "#d8d2c8",
	},
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

	buildModules: ["@nuxtjs/vuetify"],

	vue: {
		config: {
			// productionTip: false,
			// devtools: false,
		},
	},

	vuetify: {
		// customVariables: ["~/assets/styles/vuetify-variables.scss"],
		optionsPath: "./vuetify.options.js",
		defaultAssets: {
			font: {
				family: "Verdana, Geneva, Tahoma, sans-serif",
			},
		},
		treeShake: true,
	},
};
