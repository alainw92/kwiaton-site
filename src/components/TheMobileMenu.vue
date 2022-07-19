<i18n src="~/locales/menu.json"></i18n>

<template>
	<!-- MOBILE NAV DRAWER -->
	<v-navigation-drawer
		app
		clipped
		bottom
		right
		temporary
		:mobile-breakpoint="600"
		aria-role="navigation"
		v-model="isMenuEnabled"
	>
		<div class="full-height d-flex flex-column">
			<div class="d-flex justify-end pa-2">
				<v-btn icon @click="toggleMenu(true)">
					<v-icon>$close</v-icon>
				</v-btn>
			</div>
			<nuxt-link
				v-for="item in menuItems"
				:key="item.src"
				:to="localePath(item.src)"
				v-ripple
				class="mobile-menu-item"
				exact-active-class="drawer-menu-active"
				>{{ $t(`menu.${item.name}`) }}</nuxt-link
			>

			<v-spacer></v-spacer>
			<div class="d-flex justify-center mb-3">
				<div v-for="lang in langs" :key="lang.text" class="mx-1">
					<nuxt-link :to="switchLocalePath(lang.locale)" class="lang-link">{{ lang.text }}</nuxt-link>
				</div>
			</div>
		</div>
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
		langs() {
			return this.$store.state.locales;
		},
	},

	methods: {
		...mapMutations(["toggleMenu"]),
	},
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
	max-height: 60% !important;
}

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
	background-color: var(--v-basis-base);
}

.theme--light.v-navigation-drawer {
	background-color: var(--v-bg-base) !important;
}
</style>
