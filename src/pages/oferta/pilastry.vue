<i18n>
{
  "pl": {
    "title": "Oferta - Pilastry",
	 "heading": "Pilastry"
  },
  "en": {
    "title": "Offer - Pilasters",
	 "heading": "Pilasters"
  },
  "de": {
    "title": "Angebot - Pilaster",
	 "heading": "Pilaster"
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
	name: "OfferPilastersPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/pilastry",
			en: "/offer/pilasters",
			de: "/angebot/pilaster",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/pilastry/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie z pilastrami", title: "", description: "" },
			],
		};
	},
};
</script>
