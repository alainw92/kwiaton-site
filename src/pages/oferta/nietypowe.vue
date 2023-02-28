<i18n>
{
  "pl": {
    "title": "Oferta - Nietypowe realizacje",
	 "heading": "Nietypowe realizacje"
  },
  "en": {
    "title": "Offer - Unusual realizations",
	 "heading": "Unusual realizations"
  },
  "de": {
    "title": "Angebot - Ungewöhnliche Erkenntnisse",
	 "heading": "Ungewöhnliche Erkenntnisse"
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
	name: "OfferUnusualPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/nietypowe",
			en: "/offer/unusual",
			de: "/angebot/ungewohnliche",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/nietypowe/",
			photos: [
				{ src: "13.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				//
				{ src: "1.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				//
				{ src: "8.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				//
				{ src: "14.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "18.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "19.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
				{ src: "21.webp", alt: "Cokół pomnika, rzeźby", title: "", description: "" },
				{ src: "20.webp", alt: "Zdjęcie nietypowej realizacji z betonu", title: "", description: "" },
			],
		}
	}
}
</script>
