<i18n src="~/locales/menu.json"></i18n>
<i18n>
{
	"pl": {
		"sentence": "lat w tworzeniu piękna"
	},
	"en": {
		"sentence": "years in making beauty"
	},
	"de": {
		"sentence": "Jahre im Schaffen von Schönheit"
	}
}
</i18n>

<template>
	<header>
		<div class="header-wrapper">
			<v-container class="logo-wrapper d-flex align-stretch justify-space-between">
				<nuxt-link :to="localePath('/')" class="logo-link">
					<v-img
						src="img/logo.png"
						contain
						aspect-ratio="3.24"
						width="100%"
						class="logo__img"
						alt="Logo firmy Kwiaton."
					></v-img>
				</nuxt-link>
				<div v-if="!isMobile" class="d-flex flex-column justify-space-between">
					<div class="d-flex">
						<div v-for="lang in langs" :key="lang.name">
							<nuxt-link :to="switchLocalePath(lang.locale)" class="lang-link ml-1">{{ lang.text }}</nuxt-link>
						</div>
					</div>
					<div>
						<v-btn large icon tile :href="facebookUrl" target="_blank" class="float-right">
							<v-icon-fb color-on-hover large></v-icon-fb>
						</v-btn>
					</div>
				</div>
				<div v-if="isMobile" class="d-flex align-center">
					<v-btn icon large class="menu-trigger__btn" @click="toggleMenu(isMenuEnabled)">
						<v-icon large>$menu</v-icon>
					</v-btn>
				</div>
			</v-container>
		</div>
		<!-- MENU STRIP -->
		<div class="menu-wrapper">
			<v-container v-if="!isMobile" class="py-1">
				<div class="main-menu">
					<ul>
						<li v-for="item in menuItems" :key="item.src">
							<nuxt-link :to="localePath(item.src)" :data-name="item.name">{{ $t(`menu.${item.name}`) }}</nuxt-link>
						</li>
					</ul>
				</div>
			</v-container>
			<v-container v-if="isMobile" class="font-deco font-italic font-bigger text-center">{{
				`${years} ${$t("sentence")}`
			}}</v-container>
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
		years() {
			const now = new Date();
			const startDate = new Date("1991-09-05");
			let diff = (now - startDate) / (1000 * 60 * 60 * 24 * 365);
			diff = Math.floor(diff);
			return `${diff}`;
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
			return this.$store.state.locales;
		},
	},

	methods: {
		...mapMutations(["toggleMenu"]),
	},
};
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
	.container {
		max-width: 1185px !important;
	}
}

header {
	margin-bottom: 0.5em;
}

.header-wrapper {
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background-image: url("/img/stucco.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 120% auto;
		opacity: 0.5;
	}
}

.logo-wrapper {
	position: relative;
	height: clamp(5rem, 25vw, 8rem);
	padding: 1rem 1rem;
	z-index: 1;

	.logo-link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: clamp(150px, 40vw, 250px);
	}

	.logo__img {
		filter: saturate(50%);
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
				font-size: 1em;
				font-stretch: 80%;
				font-weight: 300;
				letter-spacing: 0.04em;
				padding: 0.4em 2.2em;
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

				&.nuxt-link-active:not([data-name*="Home"]),
				&.nuxt-link-exact-active[data-name*="Home"] {
					background-color: var(--v-text-base);
					color: var(--v-bgLight-base);
				}
			}
		}
	}
}
@media screen and (min-width: 599px) and (max-width: 800px) {
	.main-menu {
		font-size: 0.8em;
	}
}
</style>
