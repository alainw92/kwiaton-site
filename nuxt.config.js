// import { resolve } from "path";

export default {
  dev: true,
  target: "static",
  generate: {
    // dir: 'gh_pages', // gh_pages/ instead of dist/
    // subFolders: true, // HTML files are generated according to the route path (default)
  },
  server: {
    port: 3333 // default: 3000
  },
  srcDir: "src/",
  //
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `Kwiaton - ${titleChunk}` : "Kwiaton",
    htmlAttrs: {
      lang: "pl",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "favicon", href: "favicon.ico" }],
    noscript: [
      { innerHTML: "Przepraszamy. Strona wymaga włączonego JavaScript." }
    ]
  },
  loading: {
    color: "green",
    height: "5px"
  },
  alias: {
    // style: resolve(__dirname, "./assets/style"),
  },

  css: [
    "@/assets/styles/main",
    "@/assets/styles/animate.min",
    "@fortawesome/fontawesome-free/css/all.css"
  ],

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
    }
  },

  vuetify: {
    // customVariables: ["~/assets/styles/vuetify-variables.scss"],
    defaultAssets: {
      font: {
        family: "Verdana, Geneva, Tahoma, sans-serif"
      },
      icons: {
        iconfont: "fa"
      }
    },
    // theme: { disable: true },
    theme: {
      themes: {
        light: {
          accent: "#118511",
          primary: "#118511",
          secondary: "#774f27",
          basis: "#CCC1B6",
          text: "#574834",
          bg: "#d8d2c8",
          bgLight: "#FFFFFF",
          //
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        }
      },
      options: { customProperties: true }
    },
    treeShake: true
  }
};
