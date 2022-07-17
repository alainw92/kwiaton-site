export const state = () => ({
	isMobile: false,
	menuEnabled: false,
	menuItems: [
		{ src: "/", text: "Główna", name: "Home" },
		{ src: "/o-firmie", text: "O firmie", name: "About" },
		{ src: "/oferta", text: "Oferta", name: "Offer" },
		{ src: "/kontakt", text: "Kontakt", name: "Contact" },
	],
	//
	facebookUrl: "https://www.facebook.com/kwiatonboguchwala",
});

export const getters = {
	getMenuEnabled(state) {
		return state.menuEnabled;
	},
};

export const mutations = {
	toggleMenu(state, value) {
		if (value) {
			state.menuEnabled = false;
			return;
		}
		state.menuEnabled = true;
		return;
	},

	setMobile(state, value) {
		state.isMobile = value;
	},
};

export const actions = {};
