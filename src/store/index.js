export const state = () => ({
  menuEnabled: false,
  menuItems: [
    { src: "/", text: "Główna", name: "Home" },
    { src: "/o-firmie", text: "O firmie", name: "About" },
    { src: "/oferta", text: "Oferta", name: "Offer" },
    { src: "/kontakt", text: "Kontakt", name: "Contact" }
  ]
});

export const getters = {
  getMenuEnabled(state) {
    return state.menuEnabled;
  }
};

export const mutations = {
  toggleMenu(state, toggle) {
    if (toggle) {
      state.menuEnabled = false;
      return;
    }
    state.menuEnabled = true;
    return;
  }
};

export const actions = {};
