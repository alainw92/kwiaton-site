export const state = () => ({
	menuEnabled: false,
});

export const getters = {
	getMenuEnabled(state) {
		return state.menuEnabled;
	},
};

export const mutations = {
	toggleMenu(state, toggle) {
		if (toggle) {
			state.menuEnabled = false;
			return;
		}
		state.menuEnabled = true;
		return;
	},
};

export const actions = {};
