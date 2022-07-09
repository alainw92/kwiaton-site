// import { resolve } from "path";

export default {
	dev: true,
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
		color: "green",
		height: "5px",
	},
	alias: {
		// style: resolve(__dirname, "./assets/style"),
	},
	css: ["@/assets/css/main", "@/assets/css/animate.min", "@fortawesome/fontawesome-svg-core/styles.css"],

	plugins: ["~/plugins/fontawesome.js"],

	vue: {
		config: {
			// productionTip: false,
			// devtools: false,
		},
	},
};
