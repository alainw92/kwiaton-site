<template>
	<header>
		<v-container class="logo-wrapper d-flex align-stretch justify-space-between">
			<nuxt-link to="/" class="logo-link">
				<v-img
					src="img/logo-xl.png"
					contain
					aspect-ratio="3.24"
					width="100%"
					class="logo__img"
					alt="Logo firmy Kwiaton."
				></v-img>
			</nuxt-link>
			<div v-if="!isMobile" class="d-flex flex-column justify-space-between">
				<div class="d-flex">
					<div v-for="lang in langs" :key="lang.text" class="mx-2">{{ lang.text }}</div>
				</div>
				<div>
					<v-btn large icon :href="facebookUrl" target="_blank" class="float-right">
						<v-icon-fb round color-on-hover large></v-icon-fb>
					</v-btn>
				</div>
			</div>
			<div v-if="isMobile" class="d-flex align-center">
				<v-btn icon large class="menu-trigger__btn" @click="toggleMenu(isMenuEnabled)">
					<v-icon large>$menu</v-icon>
				</v-btn>
			</div>
		</v-container>
		<!-- MENU STRIP -->
		<div class="menu-wrapper">
			<v-container v-if="!isMobile" class="py-2">
				<div class="main-menu">
					<ul>
						<li v-for="item in menuItems" :key="item.src">
							<nuxt-link :to="item.src">{{ item.text }}</nuxt-link>
						</li>
					</ul>
				</div>
			</v-container>
			<v-container v-if="isMobile" class="font-deco font-italic font-bigger text-center">{{ sentence }}</v-container>
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
		sentence() {
			const text = " lat w tworzeniu piękna";
			const now = new Date();
			const startDate = new Date("1991-09-05");
			let diff = (now - startDate) / (1000 * 60 * 60 * 24 * 365);
			diff = Math.floor(diff);
			return `${diff}${text}`;
		},

		isMobile() {
			return this.$store.state.isMobile;
		},
		isMenuEnabled() {
			return this.$store.state.menuEnabled;
		},
		menuItems() {
			return this.$store.state.menuItems;
		},
		facebookUrl() {
			return this.$store.state.facebookUrl;
		},

		langs() {
			return [
				{ text: "PL", src: "" },
				{ text: "EN", src: "" },
				{ text: "DE", src: "" },
			];
		},
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
	height: clamp(5rem, 25vw, 10rem);
	padding: 1rem 1rem;

	.logo-link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: clamp(150px, 40vw, 250px);
	}
}

.menu-wrapper {
	background-color: var(--v-bgLight-base);
	border-top: thin solid var(--v-basis-base);
	border-bottom: thin solid var(--v-basis-base);
	min-height: 2rem;
}

.main-menu {
	ul {
		display: flex;
		justify-content: flex-end;
		align-items: stretch;
		padding: 0;

		li {
			list-style: none;
			margin: 0 0.15em;

			a {
				position: relative;
				display: block;
				background: none;
				color: var(--v-text-base);
				font-size: 1.2em;
				font-stretch: 80%;
				font-weight: 300;
				letter-spacing: 0.04em;
				padding: 0.5em 2.2em;
				text-transform: capitalize;
				transition: background-color 0.3s;

				&:hover {
					text-decoration: none;
					color: var(--v-bgLight-base);
					z-index: 0;
				}

				&::before {
					content: "";
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: var(--v-text-base);
					opacity: 0;
					transition: opacity 0.3s;
					z-index: -1;
				}

				&:hover::before {
					opacity: 0.8;
				}

				&.nuxt-link-exact-active {
					background-color: var(--v-text-base);
					color: var(--v-bgLight-base);
				}
			}
		}
	}
}
@media screen and (min-width: 599px) and (max-width: 800px) {
	.main-menu {
		font-size: 0.7em;
	}
}
</style>
