<i18n>
{
  "pl": {
    "title": "Oferta - Kinkiety",
	 "heading": "Kinkiety",
	 "heading2": "Dostępne kinkiety",
	 "heading3": "Przykłady"
  },
  "en": {
    "title": "Offer - Scones",
	 "heading": "Scones",
	 "heading2": "Available scones",
	 "heading3": "Examples"
  },
  "de": {
    "title": "Angebot - Scones",
	 "heading": "Scones",
	 "heading2": "Verfügbare Scones",
	 "heading3": "Beispiele"
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<h3 class="text-h6 my-10">{{ $t('heading2') }}</h3>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-10">{{ $t('heading3') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferSconcesPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/kinkiety",
			en: "/offer/scones",
			de: "/angebot/scones",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/kinkiety/katalog/",
			gallery: [
				{ src: "K1.webp", alt: "", title: "K1", description: "25 x 40 x 20 cm" },
				{ src: "K3.webp", alt: "", title: "K3", description: "13 x 30 x 15,5 cm" },
				{ src: "K4.webp", alt: "", title: "K4", description: "22 x 32 x 16 cm" },
				{ src: "K5.webp", alt: "", title: "K5", description: "43 x 35 x 17 cm" },
				{ src: "K7.webp", alt: "", title: "K7", description: "52,5 x 41,5 x 24,5 cm" },
				{ src: "K8.webp", alt: "", title: "K8", description: "100 x 25 x 10 cm" },
				{ src: "K9.webp", alt: "", title: "K9", description: "22,5 x 18 x 14 cm" },
			],

			photosMainPath: "photos/oferta/kinkiety/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie ściany z kienkietem", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie ściany z kienkietem", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie ściany z kienkietem", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie ściany z kienkietem", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie ściany z kienkietem", title: "", description: "" },
			],
		};
	},
}
</script>
