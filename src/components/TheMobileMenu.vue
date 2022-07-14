<template>
	<!-- MOBILE NAV DRAWER -->
	<v-navigation-drawer
		app
		clipped
		bottom
		temporary
		:mobile-breakpoint="600"
		color="tertiary"
		class="hidden-md-and-up"
		v-model="isMenuEnabled"
	>
		<router-link
			v-for="item in menuItems"
			:key="item.src"
			:to="{ path: item.src }"
			v-ripple
			class="mobile-menu-items"
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
import { mapMutations } from 'vuex';

export default {
	name: "TheMobileMenu",

	data() {
		return {
			menuItems: [
				{src: "/", text: "Test"}
			]
		}
	},

	computed: {
		isMenuEnabled: {
			get() {
				return this.$store.state.menuEnabled;
			},
			set(value) {
				this.$store.commit("toggleMenu", !value);
			}
		},
	}, 

	methods: {
		...mapMutations(['toggleMenu'])
	}
};
</script>

<style lang="scss" scoped>
.mobile-menu-items {
	display: block;
}

.theme--light.v-navigation-drawer {
	background-color: var(--v-bg-base) !important;
}
</style>
