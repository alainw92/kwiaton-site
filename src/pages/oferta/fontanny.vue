<i18n>
{
  "pl": {
    "title": "Oferta - Fontanny",
	 "heading": "Fontanny"
  },
  "en": {
    "title": "Offer - Fountains",
	 "heading": "Fountains"
  },
  "de": {
    "title": "Angebot - Brunnen",
	 "heading": "Brunnen"
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferFountainsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/fontanny",
			en: "/offer/fountains",
			de: "/angebot/brunnen",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/fontanny/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie fontanny z otoczeniem", title: "", description: "" },
			],
		}
	}
}
</script>
