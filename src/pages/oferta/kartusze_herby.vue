<i18n>
{
  "pl": {
    "title": "Oferta - Kartusze i Herby",
	 "heading": "Kartusze i Herby"
  },
  "en": {
    "title": "Offer - Cartouches & Crests",
	 "heading": "Cartouches & Crests"
  },
  "de": {
    "title": "Angebot - Kartuschen und Wappen",
	 "heading": "Kartuschen und Wappen"
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
	name: "OfferCartouchesCrestsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/kartusze_herby",
			en: "/offer/cartouches_crests",
			de: "/angebot/kartuschen_wappen",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/kartusze_herby/",
			photos: [
				{ src: "H1.webp", alt: "Zdjęcie herbu z betonu", title: "H1", description: "55 x 35 x 6 cm" },
				{ src: "H3.webp", alt: "Zdjęcie herbu z betonu", title: "H3", description: "52 x 37 x 6 cm" },
				{ src: "H4.webp", alt: "Zdjęcie herbu z betonu", title: "H4", description: "32 x 54 x 3 cm" },
				{ src: "H5.webp", alt: "Zdjęcie herbu z betonu", title: "H5", description: "42 x 46 x 3 cm" },
				{ src: "H6.webp", alt: "Zdjęcie herbu z betonu", title: "H6", description: "37 x 55 x 8 cm" },
				{ src: "H7.webp", alt: "Zdjęcie herbu z betonu", title: "H7", description: "57 x 72 x 4 cm" },
				{ src: "H9.webp", alt: "Zdjęcie herbu z betonu", title: "H9", description: "54 x 55 x 7,5 cm" },
				{ src: "H10.webp", alt: "Zdjęcie herbu z betonu", title: "H10", description: "54 x 55 x 7,5 cm" },
				{ src: "11.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
				{ src: "18.webp", alt: "Zdjęcie herbu z betonu", title: "", description: "" },
			],
		};
	},
}
</script>
