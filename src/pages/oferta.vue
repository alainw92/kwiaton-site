<i18n>
{
  "pl": {
    "pageHeading": "Oferta",
    "offer": "Oferta",
    "details": "Detale",
	 "categories": {
		"offer": "Oferta",
		"restorations": "Renowacje",
		"facades": "Elewacje",
		"columns": "Kolumny",
		"balustrades": "Balustrady",
		"fences": "Ogrodzenia",
		"fountains": "Fontanny",
		"garden": "Ogród",
		"sculptures": "Rzeźby i pomniki",
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
	 },
	 "articleHeading": "Czy jest taka rzecz, której nie wykonamy?",
	 "paragraph1": "Otaczająca nas rzeczywistość przynosi kolejne mody i trendy, także w architekturze i wystroju wnętrz. My uważamy jednak, że najpiękniejsze jest to co harmonijne, doskonale wyważone w proporcjach - inspiracją do naszej pracy jest sztuka starożytnej Grecji i Rzymu. Już od 1991 roku dzielimy się z Państwem pasją tworzenia, odkrywaniem tajemnic, które kryje w sobie klasyczne piękno.",
	 "paragraph2": "Głównym przedmiotem naszej działalności są prace wykończeniowe o charakterze artystycznym oraz renowacje budynków zabytkowych. Specjalizujemy się w produkcji kolumn budowlanych, balustrad z tralek betonowych oraz detali architektonicznych do aranżacji wnętrz, elewacji i ogrodów. Sczególnie ważnym dla naszej firmy jest dział artystyczny, w którym realizujemy Państwa pomysły tworząc monumentalne rzeźby oraz rekonstrukcje detali architektonicznych - przykłady można mnożyć."
  },
  "en": {
    "pageHeading": "Offer",
    "offer": "Offer",
    "details": "Details",
	 "categories": {
		"offer": "Offer",
		"restorations": "Restorations",
		"facades": "Facades",
		"columns": "Columns",
		"balustrades": "Balustrades",
		"fences": "Fences",
		"fountains": "Fountains",
		"garden": "Garden",
		"sculptures": "Sculptures & Statues",
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
	 },
	 "articleHeading": "Is there something we won't do?",
	 "paragraph1": "The reality that surrounds us brings new fashions and trends, also in architecture and interior design. We believe, however, that the most beautiful is what is harmonious, perfectly balanced in proportions - the inspiration for our work is the art of ancient Greece and Rome. Since 1991, we have been sharing with you the passion of creation, discovering the secrets hidden in classic beauty.",
	 "paragraph2": "The main subject of our activity is finishing works of an artistic nature and renovation of historic buildings. We specialize in the production of construction columns, balustrades made of concrete balusters and architectural details for interior design, facades and gardens. Particularly important for our company is the art department, in which we implement your ideas by creating monumental sculptures and reconstructions of architectural details - there are many examples."
  },
  "de": {
    "pageHeading": "Angebot",
    "offer": "Angebot",
    "details": "Details",
	 "categories": {
		"offer": "Angebot",
		"restorations": "Restorations",
		"facades": "Facades",
		"columns": "Columns",
		"balustrades": "Balustrades",
		"fences": "Fences",
		"fountains": "Fountains",
		"garden": "Garden",
		"sculptures": "Skulpturen und Denkmäler",
		"reliefs": "Reliefs",
		"interiors": "Interiors",
		"unusual": "Unusual realizations",
		"decors": "Decors",
		"cornices": "Corniches",
		"cartouches_crests": "Cartouches & Crests",
		"sconces": "Scones",
		"pilasters": "Pilasters",
		"rosettes": "Rosettes",
		"crowns": "Schlüsselsteine"
	 },
	 "articleHeading": "Gibt es etwas, das wir nicht tun werden?",
	 "paragraph1": "Die Realität, die uns umgibt, bringt neue Moden und Trends, auch in Architektur und Innenarchitektur. Wir glauben jedoch, dass das Schönste das ist, was harmonisch und in den Proportionen perfekt ausbalanciert ist - die Inspiration für unsere Arbeit ist die Kunst des antiken Griechenlands und Roms. Seit 1991 teilen wir mit Ihnen die Leidenschaft der Kreation und entdecken die Geheimnisse, die in klassischer Schönheit verborgen sind.",
	 "paragraph2": "Das Hauptthema unserer Tätigkeit ist die Fertigstellung künstlerischer Arbeiten und die Renovierung historischer Gebäude. Wir sind spezialisiert auf die Herstellung von Konstruktionssäulen, Balustraden aus Betonstäben und architektonischen Details für Innenarchitektur, Fassaden und Gärten. Besonders wichtig für unser Unternehmen ist die Kunstabteilung, in der wir Ihre Ideen umsetzen, indem wir monumentale Skulpturen und Rekonstruktionen architektonischer Details schaffen – Beispiele dafür gibt es viele."
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
					:items="[{ name: 'offer', src: '/oferta' }, ...categoriesMain, ...categoriesDetails]"
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
						<nuxt-link :to="localePath('oferta')" class="offer-link mb-8">{{ $t("offer") }}</nuxt-link>

						<nuxt-link
							v-for="category in categoriesMain"
							:key="category.name"
							:to="localePath(category.src)"
							class="offer-link"
							>{{ $t(`categories.${category.name}`) }}</nuxt-link
						>
						<div class="mb-8"></div>
						<nuxt-link
							v-for="category in categoriesDetails"
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
						<div v-if="isMainOfferRoute" key="MainOffer" class="pa-4">
							<article class="text-justify text-indent">
								<h2 class="text-h6 mb-4">{{ $t("articleHeading") }}</h2>
								<p>{{ $t("paragraph1") }}</p>
								<p>{{ $t("paragraph2") }}</p>
								<p>
									<v-btn text href="/katalog_kwiaton_pracownia_sztukatorska.pdf" color="red" target="_blank"
										><v-icon class="mr-3">fas fa-file-pdf</v-icon>
										Pobierz nasz katalog PDF</v-btn
									>
								</p>
							</article>
							<photo-gallery :folder="photosMainPath" :photos="photos" class="mt-10"></photo-gallery>
						</div>
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
			categoriesMain: [
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
			],
			categoriesDetails: [
				{ name: "decors", src: "/oferta/dekory" },
				{ name: "cornices", src: "/oferta/gzymsy" },
				{ name: "cartouches_crests", src: "/oferta/kartusze_herby" },
				{ name: "sconces", src: "/oferta/kinkiety" },
				{ name: "pilasters", src: "/oferta/pilastry" },
				{ name: "rosettes", src: "/oferta/rozety" },
				{ name: "crowns", src: "/oferta/zworniki" },
			],
			selectedCategory: null,

			photosMainPath: "photos/oferta/",
			photos: [
				{ src: "1.webp", alt: "Wyróżnienie Wojewody Podkarpackiego", title: "", description: "" },
				{ src: "2.webp", alt: "Złoty medal od InterRes - Home Building 2005", title: "", description: "" },
				{
					src: "3.webp",
					alt: "Podziękowanie i medal za renowację kościoła Chrystusa Króla w Rzeszowie",
					title: "",
					description: "",
				},
			],
		};
	},

	computed: {
		isMainOfferRoute() {
			return this.$route.meta.name === "OfferPage";
		},
	},

	created() {
		this.selectedCategory = this.localePath(this.$route.path, "pl");
	},

	watch: {
		selectedCategory(newVal) {
			if (newVal) {
				const path = this.localePath(newVal);
				this.$router.push(path);
			}
		},
	},
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

	/* &:not(.main-link) {
		padding-left: 2em;
	} */

	&.nuxt-link-exact-active {
		background-color: var(--v-secondary-base);
		color: var(--v-bgLight-base);
	}
}
</style>
