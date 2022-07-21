<i18n>
{
  "pl": {
    "pageHeading": "Oferta",
    "offer": "Oferta",
	 "categories": {
		"offer": "Oferta",
		"restorations": "Renowacje",
		"facades": "Elewacje",
		"columns": "Kolumny",
		"balustrades": "Balustrady",
		"fences": "Ogrodzenia",
		"fountains": "Fontanny",
		"garden": "Ogród",
		"sculptures": "Rzeźby",
		"reliefs": "Płaskorzeźby",
		"interiors": "Wnętrza",
		"unusual": "Nietypowe realizacje",
		"decors": "Dekory",
		"cornices": "Gzymsy",
		"cartouches_crests": "Kartusze i herby",
		"sconces": "Kinkiety",
		"pilasters": "Pilastry",
		"rosettes": "Rozety",
		"crowns": "Zworniki"
	 }
  },
  "en": {
    "pageHeading": "Offer",
    "offer": "Offer",
	 "categories": {
		"offer": "Offer",
		"restorations": "Restorations",
		"facades": "Facades",
		"columns": "Columns",
		"balustrades": "Balustrades",
		"fences": "Fences",
		"fountains": "Fountains",
		"garden": "Garden",
		"sculptures": "Sculptures",
		"reliefs": "Reliefs",
		"interiors": "Interiors",
		"unusual": "Unusual realizations",
		"decors": "Decors",
		"cornices": "Corniches",
		"cartouches_crests": "Cartouches & Crests",
		"sconces": "Scones",
		"pilasters": "Pilasters",
		"rosettes": "Rosettes",
		"crowns": "Crowns"
	 }
  },
  "de": {
    "pageHeading": "Angebot",
    "offer": "Angebot",
	 "categories": {
		"offer": "Angebot",
		"restorations": "Restorations",
		"facades": "Facades",
		"columns": "Columns",
		"balustrades": "Balustrades",
		"fences": "Fences",
		"fountains": "Fountains",
		"garden": "Garden",
		"sculptures": "Sculptures",
		"reliefs": "Reliefs",
		"interiors": "Interiors",
		"unusual": "Unusual realizations",
		"decors": "Decors",
		"cornices": "Corniches",
		"cartouches_crests": "Cartouches & Crests",
		"sconces": "Scones",
		"pilasters": "Pilasters",
		"rosettes": "Rosettes",
		"crowns": "Crowns"
	 }
  }
}
</i18n>

<template>
	<main>
		<h1 class="text-h4 mb-6 ml-4">{{ $t("pageHeading") }}</h1>
		<v-row>
			<v-col cols="12" md="3">
				<v-select
					solo
					flat
					hide-details
					color="text"
					item-color="secondary"
					class="d-block d-md-none"
					append-icon="fas fa-caret-down"
					:items="[{ name: 'offer', src: '/oferta' }, ...categories]"
					item-value="src"
					v-model="selectedCategory"
				>
					<template #item="{ item }">
						{{ $t(`categories.${item.name}`) }}
					</template>
					<template #selection="{ item }">
						{{ $t(`categories.${item.name}`) }}
					</template>
				</v-select>
				<card class="d-none d-md-block">
					<div>
						<nuxt-link :to="localePath('oferta')" class="offer-link main-link">{{ $t("offer") }}</nuxt-link>
						<nuxt-link
							v-for="category in categories"
							:key="category.name"
							:to="localePath(category.src)"
							class="offer-link"
							>{{ $t(`categories.${category.name}`) }}</nuxt-link
						>
					</div>
				</card>
			</v-col>
			<v-col cols="12" md="9">
				<card>
					<transition name="fade-transition" mode="out-in">
						<div v-if="isMainOfferRoute" key="MainOffer">Treść główna</div>
						<NuxtChild v-else :nuxt-child-key="$route.path" key="SubPagesOffer" />
					</transition>
				</card>
			</v-col>
		</v-row>
	</main>
</template>

<script>
export default {
	name: "OfferPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta",
			en: "/offer",
			de: "/angebot",
		},
	},

	head() {
		return {
			title: this.$t("pageHeading"),
		};
	},

	data() {
		return {
			categories: [
				{ name: "restorations", src: "/oferta/renowacje" },
				{ name: "facades", src: "/oferta/elewacje" },
				{ name: "balustrades", src: "/oferta/balustrady" },
				{ name: "columns", src: "/oferta/kolumny" },
				{ name: "fences", src: "/oferta/ogrodzenia" },
				{ name: "fountains", src: "/oferta/fontanny" },
				{ name: "garden", src: "/oferta/ogrod" },
				{ name: "sculptures", src: "/oferta/rzezby" },
				{ name: "reliefs", src: "/oferta/plaskorzezby" },
				{ name: "interiors", src: "/oferta/wnetrza" },
				{ name: "unusual", src: "/oferta/nietypowe" },
				// detale
				{ name: "decors", src: "/oferta/dekory" },
				{ name: "cornices", src: "/oferta/gzymsy" },
				{ name: "cartouches_crests", src: "/oferta/kartusze_herby" },
				{ name: "sconces", src: "/oferta/kinkiety" },
				{ name: "pilasters", src: "/oferta/pilastry" },
				{ name: "rosettes", src: "/oferta/rozety" },
				{ name: "crowns", src: "/oferta/zworniki" },
			],
			selectedCategory: null
		};
	},

	computed: {
		isMainOfferRoute() {
			return this.$route.meta.name === "OfferPage";
		},
	},

	created() {
		this.selectedCategory = this.localePath(this.$route.path, 'pl');
	},

	watch: {
		selectedCategory(newVal) {
			if (newVal) {
				const path = this.localePath(newVal);
				this.$router.push(path);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slide-x-transition-enter-active,
.slide-x-transition-leave-active {
	position: absolute;
}

.offer-link {
	display: block;
	padding: 0.5em;
	color: var(--v-text-base);
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--v-basis-base);
		text-decoration: none;
	}

	&:not(.main-link) {
		padding-left: 2em;
	}

	&.nuxt-link-exact-active {
		background-color: var(--v-secondary-base);
		color: var(--v-bgLight-base);
	}
}
</style>
