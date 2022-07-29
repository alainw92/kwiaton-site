<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Zworniki</h2>
		<p>Elementy zwieńczające gzymsów.</p>
		<photo-gallery :folder="photosMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-4">Przykłady</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferCrownsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/zworniki",
			en: "/offer/crowns",
			de: "/angebot/schlusselsteine",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/zworniki/",
			gallery: [
				{ src: "Z1.webp", alt: "Zwornik Z1", title: "Z1", description: "20,5 x 18,5 x 12 cm" },
				{ src: "Z2.webp", alt: "Zwornik Z2", title: "Z2", description: "28 x 26 x 12 cm" },
				{ src: "Z3.webp", alt: "Zwornik Z3", title: "Z3", description: "28 x 24,5 x 16 cm" },
				{ src: "Z4.webp", alt: "Zwornik Z4", title: "Z4", description: "29 x 21 x 14 cm" },
				{ src: "Z5.webp", alt: "Zwornik Z5", title: "Z5", description: "21 x 8,5 x 9,5 cm" },
				{ src: "Z6.webp", alt: "Zwornik Z6", title: "Z6", description: "26,5 x 25,5 x 10 cm" },
				{ src: "Z7.webp", alt: "Zwornik Z7", title: "Z7", description: "44 x 35 x 25 cm" },
				{ src: "Z8.webp", alt: "Zwornik Z8", title: "Z8", description: "34 x 34 x 10 cm" },
				{ src: "Z9.webp", alt: "Zwornik Z9", title: "Z9", description: "21 x 17 x 17 cm" },
				{ src: "Z10.webp", alt: "Zwornik Z10", title: "Z10", description: "30 x 19,5 x 16 cm" },
				{ src: "Z11.webp", alt: "Zwornik Z11", title: "Z11", description: "25 x 12 x 8 cm" },
				{ src: "Z12.webp", alt: "Zwornik Z12", title: "Z12", description: "20 x 13 x 6 cm" },
				{ src: "Z13.webp", alt: "Zwornik Z13", title: "Z13", description: "26 x 18,5 x 8 cm" },
				{ src: "Z14.webp", alt: "Zwornik Z14", title: "Z14", description: "14,5 x 11 x 6 cm" },
				{ src: "Z15.webp", alt: "Zwornik Z15", title: "Z15", description: "25,5 x 12 x 27 cm" },
				{ src: "Z16.webp", alt: "Zwornik Z16", title: "Z16", description: "27 x 13 x 41,5 cm" },
				{ src: "Z17.webp", alt: "Zwornik Z17", title: "Z17", description: "36 x 17 x 13 x 13,5 cm" },
				{ src: "Z18.webp", alt: "Zwornik Z18", title: "Z18", description: "20 x 12 x 10 cm" },
				{ src: "Z19.webp", alt: "Zwornik Z19", title: "Z19", description: "44 x 19,5 x 5 cm" },
				{ src: "Z20.webp", alt: "Zwornik Z20", title: "Z20", description: "63 x 50 x 30 cm" },
				{ src: "Z21.webp", alt: "Zwornik Z21", title: "Z21", description: "23 x 10,5 x 1,5 cm" },
				{ src: "Z22.webp", alt: "Zwornik Z22", title: "Z22", description: "21,5 x 22,5 x 6,5 cm" },
				{ src: "Z23.webp", alt: "Zwornik Z23", title: "Z23", description: "21 x 23 x 8,5 cm" },
				{ src: "Z24.webp", alt: "Zwornik Z24", title: "Z24", description: "20 x 11 x 8,5 cm" },
				{ src: "Z25.webp", alt: "Zwornik Z25", title: "Z25", description: "27,5 x 11 x 9,5 cm" },
				{ src: "Z26.webp", alt: "Zwornik Z26", title: "Z26", description: "14,5 x 7,5 x 7,5 cm" },
				{ src: "Z27.webp", alt: "Zwornik Z27", title: "Z27", description: "56 x 25 x 15 cm" },
				{ src: "Z28.webp", alt: "Zwornik Z28", title: "Z28", description: "34 x 34 x 28 x 40 cm" },
				{ src: "Z29.webp", alt: "Zwornik Z29", title: "Z29", description: "24 x 11 x 14 cm" },
				{ src: "Z30.webp", alt: "Zwornik Z30", title: "Z30", description: "26 x 21 x 20 cm" },
				{ src: "Z31.webp", alt: "Zwornik Z31", title: "Z31", description: "28 x 14 x 11 cm" },
				{ src: "Z32.webp", alt: "Zwornik Z32", title: "Z32", description: "56 x 25 x 21 cm" },
				{ src: "Z33.webp", alt: "Zwornik Z33", title: "Z33", description: "29,5 x 14,5 x 11,5 x 5 cm" },
				{ src: "Z34.webp", alt: "Zwornik Z34", title: "Z34", description: "47 x 27 x 19 cm" },
				{ src: "Z35.webp", alt: "Zwornik Z35", title: "Z35", description: "101 x 41 x 37 cm" },
				{ src: "Z36.webp", alt: "Zwornik Z36", title: "Z36", description: "26 x 10 x 10 x 9 cm" },
				{ src: "Z37.webp", alt: "Zwornik Z37", title: "Z37", description: "16 x 5 x 8 cm" },
				{ src: "Z38.webp", alt: "Zwornik Z38", title: "Z38", description: "23 x 18 x 14 cm" },
				{ src: "Z39.webp", alt: "Zwornik Z39", title: "Z39", description: "27,5 x 26,5 x 15,5 cm" },
				{ src: "Z40.webp", alt: "Zwornik Z40", title: "Z40", description: "13 x 8 cm" },
			],
			photos: [
				{ src: "1.webp", alt: "Zwornik, zwieńczenie przykład 1", title: "", description: "" },
				{ src: "2.webp", alt: "Zwornik, zwieńczenie przykład 2", title: "", description: "" },
				{ src: "3.webp", alt: "Zwornik, zwieńczenie przykład 3", title: "", description: "" },
			],
		};
	},
}
</script>
