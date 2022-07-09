<template>
	<header>
		<div class="logo-wrapper d-flex align-center justify-space-between">
			<div class="logo">
				<picture>
					<source srcset="~/assets/img/logo-xl.png" media="(min-width: 1000px)" />
					<source srcset="~/assets/img/logo-xl.png" media="(min-width: 600px)" />
					<img src="~/assets/img/logo-xl.png" alt="Logo firmy Kwiaton." />
				</picture>
			</div>
			<div v-if="!isMobile" class="fb-icon">
				<a href="https://alanwnek.com.pl">
					<fa-icon icon="fab fa-facebook-square"></fa-icon>
				</a>
			</div>
			<div class="menu-trigger">
				<button class="menu-trigger__btn">
					<fa-icon class="icon" icon="fas fa-bars"></fa-icon>
				</button>
			</div>
		</div>
		<div class="menu-wrapper">
			<div class="container pa-4">
				<div class="languages">
					<div>PL</div>
					<div>EN</div>
					<div>DE</div>
				</div>
				<div class="fb-icon">
					<a href="https://alanwnek.com.pl">
						<fa-icon icon="fab fa-facebook-square"></fa-icon>
					</a>
				</div>
				<div class="main-menu">
					<ul>
						<li><nuxt-link to="/">Główna</nuxt-link></li>
						<li><nuxt-link to="/o-firmie">O firmie</nuxt-link></li>
						<li><nuxt-link to="/oferta">Oferta</nuxt-link></li>
						<li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { debounce } from "~/helpers/debounce.js";

export default {
	name: "TheHeader",

	data() {
		return { isMobile: false };
	},

	mounted() {
		this.isMobile = window.innerWidth < 600;
		window.addEventListener(
			"resize",
			debounce(() => {
				this.isMobile = window.innerWidth < 600;
			}, 100)
		);
	},
};
</script>

<style lang="scss" scoped>
@use "~/assets/css/_var.scss";

header {
	margin-bottom: 1em;
}

.logo-wrapper {
	padding: 0.5em;

	.logo {
		width: clamp(200px, 60vw, 500px);
		min-width: 20vw;

		img {
			width: 100%;
		}
	}
}


.menu-wrapper {
	background-color: var.$bg-light-color;
	border-top: thin solid var.$primary-color;
	border-bottom: thin solid var.$primary-color;
}

.menu-trigger__btn {
	background: none;
	border: thin solid var.$text-color;
	width: 3rem;
	height: 3rem;

	.icon {
		font-size: 2rem;
	}
}
</style>
