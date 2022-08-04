<i18n>
{
  "pl": {
    "title": "Oferta - Ogród",
	 "heading": "Ogród",
	 "paragraph1": "Wykonujemy wazony, donice, ławki ogrodowe, altany betonowe, postumenty. Sprawiamy, że parki oraz ogrody prywatne mają niepowtarzlany klimat.",
	 "heading2": "Elementy wyposażenia ogrodu",
	 "heading3": "Ogrody w naszym wykonaniu",
	 "diameter": "średnica"
  },
  "en": {
    "title": "Offer - Garden",
	 "heading": "Garden",
	 "paragraph1": "We make vases, flower pots, garden benches, concrete arbors, pedestals. We make parks and private gardens have a unique atmosphere.",
	 "heading2": "Garden fittings",
	 "heading3": "Gardens by us",
	 "diameter": "diameter"
  },
  "de": {
    "title": "Angebot - Garten",
	 "heading": "Garten",
	 "paragraph1": "Wir stellen Vasen, Blumentöpfe, Gartenbänke, Betonlauben, Sockel her. Wir geben Parks und Privatgärten eine einzigartige Atmosphäre.",
	 "heading2": "Gartenausstattung",
	 "heading3": "Gärten von uns",
	 "diameter": "Durchmesser"
  }
}
</i18n>

<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent">{{ $t('paragraph1') }}</p>
		<h3 class="text-h6 my-10">{{ $t('heading2') }}</h3>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-10">{{ $t('heading3') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferGardenPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/ogrod",
			en: "/offer/garden",
			de: "/angebot/garten",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/ogrod/katalog/",
			gallery: [
				{ src: "W1.webp", alt: "", title: "W1", description: "ø60 x 46 cm" },
				{ src: "W2-I.webp", alt: "", title: "W2 I", description: "ø35 x 35 cm" },
				{ src: "W2-II.webp", alt: "", title: "W2 II", description: "ø50 x 47 cm" },
				{ src: "W3.webp", alt: "", title: "W3", description: "ø37 x 44 cm" },
				{ src: "W4.webp", alt: "", title: "W4", description: "ø38 x 35 cm" },
				{ src: "W5.webp", alt: "", title: "W5", description: "ø38,5 x 62 cm" },
				{ src: "W5-bez-stopki.webp", alt: "", title: "W5 bez stopki", description: "ø38,5 x 54 cm" },
				{ src: "W6.webp", alt: "", title: "W6", description: "27 x 28 cm" },
				{ src: "W7.webp", alt: "", title: "W7 - noga do ławki", description: "50 x 40 x 14 cm" },
				{ src: "W13.webp", alt: "", title: "W13", description: "ø49 x 41 cm" },
				{ src: "W22.webp", alt: "", title: "W22", description: "ø78 x 111 cm" },
				{ src: "W24.webp", alt: "", title: "W24", description: "ø41 x 51 cm" },
				{ src: "W25.webp", alt: "", title: "W25", description: "ø46 x 36 cm" },
				{ src: "W27.webp", alt: "", title: "W27", description: "ø14 x 31 cm" },
				{ src: "WP21.webp", alt: "", title: "WP21", description: "ø25 x 74 cm" },
				{ src: "WP30.webp", alt: "", title: "WP30", description: "30 x 30 x 78 cm" },
				{ src: "postument-z-lwem.webp", alt: "", title: "Postument z lwem", description: "230 x 130 x 80 cm" },
				{ src: "Kula-fi20.webp", alt: "", title: "Kula ø20", description: `${this.$t('diameter')} 20 cm` },
				{ src: "Kula-fi28.webp", alt: "", title: "Kula ø28", description: `${this.$t('diameter')} 28 cm` },
				{ src: "Podstawa-okr.webp", alt: "", title: "Podstawa okrągła", description: "ø42/50 x 15 cm" },
			],

			photosMainPath: "photos/oferta/ogrod/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				// brak 3
				{ src: "4.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "18.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "19.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
				{ src: "20.webp", alt: "Zdjęcie ogrodu z betonowymi detalami", title: "", description: "" },
			],
		};
	},
};
</script>
