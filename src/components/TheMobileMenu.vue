<template>
  <!-- MOBILE NAV DRAWER -->
  <v-navigation-drawer
    app
    clipped
    bottom
    temporary
    :mobile-breakpoint="600"
    v-model="isMenuEnabled"
  >
    <div class="d-flex justify-end pa-2">
      <v-btn icon @click="toggleMenu(true)">
        <v-icon>fas fa-times</v-icon>
      </v-btn>
    </div>
    <router-link
      v-for="item in menuItems"
      :key="item.src"
      :to="{ path: item.src }"
      v-ripple
      class="mobile-menu-item"
      exact-active-class="drawer-menu-active"
      >{{ item.text }}</router-link
    >

    <!-- <div class="lang-switch mb-2">
			<v-btn
				v-for="l in languages"
				:key="l"
				text
				tile
				small
				:class="{ 'lang-active': lang === l, 'font-weight-light': true, 'px-1': true, 'mx-1': true }"
				@click="chooseLang(l)"
				>{{ l }}</v-btn
			>
		</div> -->
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TheMobileMenu",

  data() {
    return {
      //
    };
  },

  computed: {
    isMenuEnabled: {
      get() {
        return this.$store.state.menuEnabled;
      },
      set(value) {
        this.$store.commit("toggleMenu", !value);
      },
    },

    menuItems() {
      return this.$store.state.menuItems;
    },
  },

  methods: {
    ...mapMutations(["toggleMenu"]),
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu-item {
  display: block;
  position: relative;
  text-align: center;
  padding: 1rem;
  color: var(--v-text-base);
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.1rem;

  &:hover {
    text-decoration: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--v-basis-base);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.5;
  }
}

.drawer-menu-active {
  /* border-top: thin solid var(--v-text-base);
  border-bottom: thin solid var(--v-text-base); */
  background-color: var(--v-basis-base);
}

.theme--light.v-navigation-drawer {
  background-color: var(--v-bg-base) !important;
}
</style>
