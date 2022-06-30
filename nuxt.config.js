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
		title: "Kwiaton",
		meta: [{ charset: "utf-8" }],
	},
	loading: {
		color: "green",
		height: "5px",
	},
	alias: {
		// style: resolve(__dirname, "./assets/style"),
	},
	css: ["~/assets/css/main.css", "~/assets/css/animate.min.css"],

	vue: {
		config: {
			// productionTip: false,
			// devtools: false,
		},
	},
};
