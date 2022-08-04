<i18n>
{
  "pl": {
    "title": "Oferta - Renowacje",
	 "heading": "Wnętrza",
	 "paragraph1": "Zajmujemy się renowacjami zabytkowych budynków wraz z odtworzeniem wszystkich detali architektonicznych."
  },
  "en": {
    "title": "Offer - Renovations",
	 "heading": "Building renovation",
	 "paragraph1": "We renovate historic buildings and recreate all architectural details."
  },
  "de": {
    "title": "Angebot - Restaurierungen",
	 "heading": "Gebäudesanierung",
	 "paragraph1": "Wir sanieren historische Gebäude und stellen alle architektonischen Details nach."
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p>{{ $t('paragraph1') }}</p>
		<photo-gallery :folder="photosMainPath" :photos="gallery"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferRestorationsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/renowacje",
			en: "/offer/restorations",
			de: "/angebot/renovierungen",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/renowacje/",
			gallery: [
				{ src: "1.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "18.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "19.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "20.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "21.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "24.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "25.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "26.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "27.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "28.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "29.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "30.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "31.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "32.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "33.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "34.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "35.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "36.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "37.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
				{ src: "38.webp", alt: "Zdjęcie budynku po renowacji", title: "", description: "" },
			],
		}
	}
}
</script>
