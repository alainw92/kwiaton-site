const colors = require("assets/styles/colors.json");

const light = colors;

export default {
	// breakpoint: {},
	icons: {
		iconfont: "fa",
		values: {
			close: "fas fa-times",
			left: "fas fa-circle-chevron-left",
			right: "fas fa-circle-chevron-right",
			menu: "fas fa-bars",
			//
			address: "fas fa-map-location-dot",
			email: "fas fa-envelope",
			mobile: "fas fa-mobile-screen",
			tel: "fas fa-phone",
		},
	},
	// lang: {},
	// rtl: true,
	// theme: { disable: true },
	theme: {
		themes: {
			light,
		},
		options: { customProperties: true },
	},
};
