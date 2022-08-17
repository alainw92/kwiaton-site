<i18n>
{
  "pl": {
    "title": "Oferta - Płaskorzeźby",
	 "heading": "Płaskorzeźby",
	 "heading2": "Przykłady"
  },
  "en": {
    "title": "Offer - Reliefs",
	 "heading": "Reliefs",
	 "heading2": "Examples"
  },
  "de": {
    "title": "Angebot - Erleichterung",
	 "heading": "Erleichterung",
	 "heading2": "Beispiele"
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h2 class="text-h6 my-10">{{ $t('heading2') }}</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferReliefsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/plaskorzezby",
			en: "/offer/reliefs",
			de: "/angebot/erleichterung",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/plaskorzezby/katalog/",
			gallery: [
				{ src: "PL3.webp", alt: "Płaskorzeźba", title: "PŁ3", description: "153 x 85 6 cm" },
				{ src: "PL11.webp", alt: "Płaskorzeźba", title: "PŁ11", description: "105 x 54 x 4 cm" },
				{ src: "PL12.webp", alt: "Płaskorzeźba", title: "PŁ12", description: "100 x 80 x 4 cm" },
				{ src: "PL13.webp", alt: "Płaskorzeźba", title: "PŁ13", description: "56 x 41 x 5 cm" },
				{ src: "PL14.webp", alt: "Płaskorzeźba", title: "PŁ14", description: "126 x 95 x 7 cm" },
				{ src: "PL19.webp", alt: "Płaskorzeźba", title: "PŁ19, Kobieta z wiolonczelą", description: "97 x 51 x 2,5 cm" },
				{ src: "PL22.webp", alt: "Płaskorzeźba", title: "PŁ22", description: "145 x 70 x 12 cm" },
				{ src: "PL23.webp", alt: "Płaskorzeźba", title: "PŁ23", description: "180 x 100 x 8 cm" },
				{ src: "PL26.webp", alt: "Płaskorzeźba", title: "PŁ26, Maki", description: "40 x 40 x 4 cm" },
				{ src: "PL27.webp", alt: "Płaskorzeźba", title: "PŁ27, Nr 1-5", description: "51,5 x 51 x 3 cm" },
				{ src: "PL30.webp", alt: "Płaskorzeźba", title: "PŁ30", description: "83 x 51 x 12 cm" },
				{ src: "PL32.webp", alt: "Płaskorzeźba", title: "PŁ32", description: "71,5 x 35,5 x 4 cm" },
				{ src: "PL35.webp", alt: "Płaskorzeźba", title: "PŁ35", description: "260 x 156 cm" },
				{ src: "PL36.webp", alt: "Płaskorzeźba", title: "PŁ36, Św. Florian", description: "160 x 56 cm" },
				{ src: "PL37.webp", alt: "Płaskorzeźba", title: "PŁ37", description: "97 x 60,5 cm" },
				{ src: "PL38.webp", alt: "Płaskorzeźba", title: "PŁ38", description: "102 x 55 cm" },
				{ src: "PL40.webp", alt: "Płaskorzeźba", title: "PŁ40", description: "140 x 65 cm" },
				{ src: "PL43.webp", alt: "Płaskorzeźba", title: "PŁ43", description: "103 x 72,5 x 5 cm" },
				{ src: "PL47.webp", alt: "Płaskorzeźba", title: "PŁ47", description: "270 x 61 x 3,5 cm" },
				{ src: "PL48.webp", alt: "Płaskorzeźba", title: "PŁ48", description: "100 x 50 cm" },
				{ src: "PL52.webp", alt: "Płaskorzeźba", title: "PŁ52, Powrót Neptuna", description: "360 x 300 cm" },
				{ src: "PLJP2.webp", alt: "Płaskorzeźba", title: "PŁJP2", description: "146 x 100 x 10 cm" },
				{ src: "PM1.webp", alt: "Płaskorzeźba", title: "PM1", description: "47 x 34 x 3 cm" },
				{ src: "RZM6.webp", alt: "Płaskorzeźba", title: "RZM6", description: "230 x 115 x 20 cm" },
				{ src: "RZS14.webp", alt: "Płaskorzeźba", title: "RZS14", description: "42 x 42 x 4 cm" },
				{ src: "OPAP.webp", alt: "Płaskorzeźba", title: "Ołtarz pokoju Ara pacis", description: "198 x 181 cm" },
				{ src: "U.webp", alt: "Płaskorzeźba", title: "Uroczysko", description: "100 x 72 x 4 cm" },
				{ src: "KWDK.webp", alt: "Płaskorzeźba", title: "Kobieta wchodząca do kąpieli", description: "68,5 x 37 x 2 cm" },
				{ src: "KNM.webp", alt: "Płaskorzeźba", title: "Kobieta na muszelce", description: "100 x 32 x 4 cm" },

			],

			photosMainPath: "photos/oferta/plaskorzezby/",
			photos: [
				{ src: "1.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "2.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "3.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "4.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "5.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "6.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "7.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "8.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "9.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "10.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "11.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "12.webp", alt: "Płaskorzeźba", title: "", description: "" },
			],
		}
	}
}
</script>
