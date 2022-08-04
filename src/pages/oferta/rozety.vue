<i18n>
{
  "pl": {
    "title": "Oferta - Rozety",
	 "heading": "Rozety",
	 "paragraph1": "Wykonujemy rozety ścienne i sufitowe o różnych średnicach, również na indywidualne zamówienie klienta.",
	 "heading2": "Przykłady zastosowań",
	 "diameter": "średnica"
  },
  "en": {
    "title": "Offer - Rosettes",
	 "heading": "Rosettes",
	 "paragraph1": "We make wall and ceiling rosettes of various diameters, also on the client's individual request.",
	 "heading2": "Examples of use",
	 "diameter": "diameter"
  },
  "de": {
    "title": "Angebot - Rosetten",
	 "heading": "Rosetten",
	 "paragraph1": "Wir fertigen Wand- und Deckenrosetten in verschiedenen Durchmessern, auch nach individuellem Kundenwunsch.",
	 "heading2": "Beispiele",
	 "diameter": "Durchmesser"
  }
}
</i18n>

<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent">{{ $t('paragraph1') }}</p>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 mb-6 mt-10">{{ $t('heading2') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferRosettesPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/rozety",
			en: "/offer/rosettes",
			de: "/angebot/rosetten",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/rozety/katalog/",
			gallery: [
				{ src: "R1.webp", alt: "", title: "R1", description: `${this.$t('diameter')} 25 cm` },
				{ src: "R2.webp", alt: "", title: "R2", description: `${this.$t('diameter')} 51 x 7 cm` },
				{ src: "R3.webp", alt: "", title: "R3", description: `${this.$t('diameter')} 50 x 8,5 cm` },
				{ src: "R4.webp", alt: "", title: "R4", description: `${this.$t('diameter')} 25 cm` },
				{ src: "R5.webp", alt: "", title: "R5", description: `${this.$t('diameter')} 51 x 14 cm` },
				{ src: "R6.webp", alt: "", title: "R6", description: `${this.$t('diameter')} 63 x 8 cm` },
				{ src: "R7.webp", alt: "", title: "R7", description: `${this.$t('diameter')} 75 x 8 cm` },
				{ src: "R11.webp", alt: "", title: "R11", description: `${this.$t('diameter')} 50 cm` },
				{ src: "R12.webp", alt: "", title: "R12", description: "47 x 40 cm" },
				{ src: "R13.webp", alt: "", title: "R13", description: "40 x 30 cm" },
				{ src: "R15.webp", alt: "", title: "R15", description: `${this.$t('diameter')} 48 cm` },
				{ src: "R16.webp", alt: "", title: "R16", description: `${this.$t('diameter')} 130 cm` },
				{ src: "R17.webp", alt: "", title: "R17", description: `${this.$t('diameter')} 31 cm` },
				{ src: "R18.webp", alt: "", title: "R18", description: `${this.$t('diameter')} 105 cm` },
				{ src: "R19.webp", alt: "", title: "R19", description: `${this.$t('diameter')} 78 cm` },
				{ src: "R20.webp", alt: "", title: "R20", description: `${this.$t('diameter')} 64 cm` },
				{ src: "R21.webp", alt: "", title: "R21", description: `${this.$t('diameter')} 75 cm, składana` },
				{ src: "R22.webp", alt: "", title: "R22", description: `${this.$t('diameter')} 25 cm` },
				{ src: "R23.webp", alt: "", title: "R23", description: `${this.$t('diameter')} 48 cm` },
				{ src: "R26.webp", alt: "", title: "R26", description: `${this.$t('diameter')} 43 cm` },
				{ src: "R27.webp", alt: "", title: "R27", description: `77 x 51 x 2,5 cm` },
				{ src: "R28.webp", alt: "", title: "R28", description: `${this.$t('diameter')} 60 cm` },
				{ src: "R32.webp", alt: "", title: "R32", description: `${this.$t('diameter')} 32 lub 78 cm` },
				{ src: "R33.webp", alt: "", title: "R33", description: `47 x 35 cm` },
				{ src: "R34.webp", alt: "", title: "R34", description: `${this.$t('diameter')} 174 cm, składana` },
				{ src: "R35.webp", alt: "", title: "R35", description: `${this.$t('diameter')} 120 cm, składana` },
				{ src: "R37.webp", alt: "", title: "R37", description: `${this.$t('diameter')} 30 cm` },
				{ src: "R39.webp", alt: "", title: "R39", description: `${this.$t('diameter')} 13 cm` },
				{ src: "R40.webp", alt: "", title: "R40", description: `${this.$t('diameter')} 30 cm` },
				{ src: "R41.webp", alt: "", title: "R41", description: `${this.$t('diameter')} 60 x 6 cm` },
				{ src: "R42.webp", alt: "", title: "R42", description: `${this.$t('diameter')} 92 cm` },
				{ src: "R44.webp", alt: "", title: "R44", description: `${this.$t('diameter')} 60 cm` },
				{ src: "R46.webp", alt: "", title: "R46", description: `${this.$t('diameter')} 70 x 10 cm` },
				{ src: "R49.webp", alt: "", title: "R49", description: `${this.$t('diameter')} 18,5 cm` },
				{ src: "R50.webp", alt: "", title: "R50", description: `${this.$t('diameter')} 43 cm` },
			],

			photosMainPath: "photos/oferta/rozety/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie z rozetą", title: "", description: "" },
			],
		};
	},
};
</script>
