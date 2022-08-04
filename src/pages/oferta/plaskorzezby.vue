<i18n>
{
  "pl": {
    "title": "Oferta - Płaskorzeźby",
	 "heading": "Płaskorzeźby"
  },
  "en": {
    "title": "Offer - Reliefs",
	 "heading": "Reliefs"
  },
  "de": {
    "title": "Angebot - Erleichterung",
	 "heading": "Erleichterung"
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
			photosMainPath: "photos/oferta/plaskorzezby/",
			photos: [
				{ src: "1.webp", alt: "Płaskorzeźba", title: "PŁ3", description: "153 x 85 6 cm" },
				{ src: "8.webp", alt: "Płaskorzeźba", title: "PŁ13", description: "56 x 41 x 5 cm" },
				{ src: "22.webp", alt: "Płaskorzeźba", title: "PŁ14", description: "126 x 95 x 7 cm" },
				{ src: "11.webp", alt: "Płaskorzeźba", title: "PŁ19, Kobieta z wiolonczelą", description: "97 x 51 x 2,5 cm" },
				{ src: "5.webp", alt: "Płaskorzeźba", title: "PŁ23", description: "180 x 100 x 8 cm" },
				{ src: "19.webp", alt: "Płaskorzeźba", title: "PŁ26, Maki", description: "40 x 40 x 4 cm" },
				{ src: "20.webp", alt: "Płaskorzeźba", title: "PŁ30", description: "83 x 51 x 12 cm" },
				{ src: "4.webp", alt: "Płaskorzeźba", title: "PŁ35", description: "260 x 156 cm" },
				{ src: "14.webp", alt: "Płaskorzeźba", title: "PŁ36, Św. Florian", description: "160 x 56 cm" },
				{ src: "21.webp", alt: "Płaskorzeźba", title: "PM1", description: "47 x 34 x 3 cm" },
				{ src: "15.webp", alt: "Płaskorzeźba", title: "RZM6", description: "230 x 115 x 20 cm" },
				{ src: "2.webp", alt: "Płaskorzeźba", title: "Ołtarz pokoju Ara pacis", description: "198 x 181 cm" },
				{ src: "6.webp", alt: "Płaskorzeźba", title: "Uroczysko", description: "100 x 72 x 4 cm" },
				{ src: "9.webp", alt: "Płaskorzeźba", title: "Kobieta wchodząca do kąpieli", description: "68,5 x 37 x 2 cm" },
				{ src: "13.webp", alt: "Płaskorzeźba", title: "Kobieta na muszelce", description: "100 x 32 x 4 cm" },
				{ src: "3.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "7.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "10.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "12.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "16.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "17.webp", alt: "Płaskorzeźba", title: "", description: "" },
				{ src: "18.webp", alt: "Płaskorzeźba", title: "", description: "" },
			],
		}
	}
}
</script>
