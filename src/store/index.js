export const state = () => ({
	isMobile: false,
	menuEnabled: false,
	menuItems: [
		{ src: "/", text: "Główna", name: "Home" },
		{ src: "/o-firmie", text: "O firmie", name: "About" },
		{ src: "/oferta", text: "Oferta", name: "Offer" },
		{ src: "/kontakt", text: "Kontakt", name: "Contact" },
	],
	contactItems: [
		{ icon: "$tel", text: `(17) 873 32 40` },
		{ icon: "$mobile", text: `(+48) 504 102 160` },
		{ icon: "$address", text: `ul. Cicha 32A<br> 36-040 Boguchwała` },
		{
			icon: "$email",
			text: `&#105;&#110;&#102;&#111;&#064;&#107;&#119;&#105;&#097;&#116;&#111;&#110;&#045;&#115;&#122;&#116;&#117;&#107;&#097;&#116;&#111;&#114;&#115;&#116;&#119;&#111;&#046;&#099;&#111;&#109;&#046;&#112;&#108;`,
		},
	],
	//
	facebookUrl: "https://www.facebook.com/kwiatonboguchwala",
	facebookColor: "rgb(12,133,237)",
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
