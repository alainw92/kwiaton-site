const light = {
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
	warning: "#FFC107",
};

export default {
	// breakpoint: {},
	icons: {
		iconfont: "fa",
		values: {
			address: "fas fa-map-location-dot",
			email: "fas fa-envelope",
			facebook: "fab fa-facebook-square",
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
