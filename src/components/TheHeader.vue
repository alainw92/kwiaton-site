<template>
	<header>
		<div class="logo-wrapper d-flex align-center justify-space-between">
			<div class="logo">
				<picture>
					<nuxt-link to="/" class="d-flex align-center">
						<source srcset="~/assets/img/logo-xl.png" media="(min-width: 1000px)" />
						<source srcset="~/assets/img/logo-xl.png" media="(min-width: 600px)" />
						<img src="~/assets/img/logo-xl.png" alt="Logo firmy Kwiaton." />
					</nuxt-link>
				</picture>
			</div>
			<div v-if="!isMobile">
				<div class="d-flex">
					<div v-for="lang in langs" :key="lang.text" class="mx-1">{{ lang.text }}</div>
				</div>
				<div>
					<a href="https://alanwnek.com.pl">
						<v-icon-fb></v-icon-fb>
					</a>
				</div>
			</div>
			<div class="menu-trigger">
				<v-btn icon large class="menu-trigger__btn" @click="toggleMenu(isMenuEnabled)">
					<v-icon large>fas fa-bars</v-icon>
				</v-btn>
			</div>
		</div>
		<!-- MENU STRIP -->
		<div v-if="!isMobile" class="menu-wrapper">
			<v-container class="pa-4">
				<div class="main-menu">
					<ul>
						<li v-for="item in menuItems" :key="item.src">
							<nuxt-link :to="item.src">{{ item.text }}</nuxt-link>
						</li>
					</ul>
				</div>
			</v-container>
		</div>
	</header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "TheHeader",

	data() {
		return { showMenu: false };
	},

	computed: {
		isMobile() {
			return this.$store.state.isMobile;
		},
		isMenuEnabled() {
			return this.$store.state.menuEnabled;
		},
		menuItems() {
			return this.$store.state.menuItems;
		},

    langs() {
      return [
        { text: 'PL', src: '' },
        { text: 'EN', src: '' },
        { text: 'DE', src: '' },
      ]
    }
	},

	methods: {
		...mapMutations(["toggleMenu"]),
	},
};
</script>

<style lang="scss" scoped>
header {
	margin-bottom: 1em;
}

.logo-wrapper {
	padding: 1rem 1rem;

	.logo {
		width: clamp(150px, 40vw, 300px);
		min-width: 20vw;

		img {
			width: 100%;
		}
	}
}

.menu-wrapper {
	background-color: var(--v-bgLight-base);
	border-top: thin solid var(--v-basis-base);
	border-bottom: thin solid var(--v-basis-base);
}
</style>
