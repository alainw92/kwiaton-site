<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Gzymsy</h2>
		<p class="text-justify text-indent">Posiadamy w ofercie dwa rodzaje gzymsów: przysufitowe oraz naścienne. Poniżej znajdą Państwo niektóre typy gzymsów jakie wykonujemy. Zachęcamy do kontaktu także w przypadku undywidualnych zapytań. Na dole strony znajdują się również przykłady zastosowania naszych gzymsów w praktyce.</p>
		<h3 class="text-h6 mb-6 mt-10">Gzymsy przysufitowe</h3>
		<photo-gallery contain :folder="ceilingMainPath" :photos="ceilingGallery"></photo-gallery>
		<h3 class="text-h6 mb-6 mt-10">Gzymsy naścienne</h3>
		<photo-gallery contain :folder="wallMainPath" :photos="wallGallery"></photo-gallery>
		<h3 class="text-h6 mb-6 mt-10">Przykłady zastosowań</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferCornicesPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/gzymsy",
			en: "/offer/cornices",
			de: "/angebot/cornices",
		},
	},

	data() {
		return {
			ceilingMainPath: "photos/oferta/gzymsy/przysufitowe/",
			ceilingGallery: [
				{ src: "G5p.webp", alt: "gzyms", title: "G5p", description: "5 x 5 cm" },
				{ src: "G6.webp", alt: "gzyms", title: "G6", description: "12 x 7 cm" },
				{ src: "G7p.webp", alt: "gzyms", title: "G7p", description: "5 x 9 cm" },
				{ src: "G8a.webp", alt: "gzyms", title: "G8a", description: "7 x 4 cm" },
				{ src: "G11.webp", alt: "gzyms", title: "G11", description: "13 x 7 cm" },
				{ src: "G12.webp", alt: "gzyms", title: "G12", description: "10 x 8 cm" },
				{ src: "G13c.webp", alt: "gzyms", title: "G13c", description: "13,5 x 6 cm" },
				{ src: "G14.webp", alt: "gzyms", title: "G14", description: "12 x 9,5 cm" },
				{ src: "G15.webp", alt: "gzyms", title: "G15", description: "12 x 9 cm" },
				{ src: "G16.webp", alt: "gzyms", title: "G16", description: "10 x 12 cm" },
				{ src: "G18.webp", alt: "gzyms", title: "G18", description: "6 x 6,5 cm" },
				{ src: "G19.webp", alt: "gzyms", title: "G19", description: "10,5 x 15 cm" },
				{ src: "G20.webp", alt: "gzyms", title: "G20", description: "24 x 8 cm" },
				{ src: "G22.webp", alt: "gzyms", title: "G22", description: "7,5 x 9 cm" },
				{ src: "G23p.webp", alt: "gzyms", title: "G23p", description: "14 x 5 cm" },
				{ src: "G24.webp", alt: "gzyms", title: "G24", description: "7,5 x 6 cm" },
				{ src: "G25.webp", alt: "gzyms", title: "G25", description: "2 x 5 cm" },
				{ src: "G27.webp", alt: "gzyms", title: "G27", description: "13 x 7 cm" },
				{ src: "G28.webp", alt: "gzyms", title: "G28", description: "21 x 19 cm" },
				{ src: "G29.webp", alt: "gzyms", title: "G29", description: "26 x 22 cm" },
				{ src: "G30.webp", alt: "gzyms", title: "G30", description: "23 x 14 cm" },
				{ src: "G32.webp", alt: "gzyms", title: "G32", description: "38 x 38 (23 x 13) cm" },
				{ src: "G33p.webp", alt: "gzyms", title: "G33p", description: "14 x 5,5 cm" },
				{ src: "G34.webp", alt: "gzyms", title: "G34", description: "4 x 2 cm" },
				{ src: "G35.webp", alt: "gzyms", title: "G35", description: "4 x 12 cm" },
				{ src: "G40.webp", alt: "gzyms", title: "G40", description: "13 x 13 cm" },
				{ src: "G46.webp", alt: "gzyms", title: "G46", description: "9 x 6 cm" },
				{ src: "G47c.webp", alt: "gzyms", title: "G47c", description: "5 x 5,5 cm" },
				{ src: "G48a.webp", alt: "gzyms", title: "G48a", description: "32,5 x 10 cm" },
				{ src: "G52a.webp", alt: "gzyms", title: "G52a", description: "20 x 6 cm" },
				{ src: "G53.webp", alt: "gzyms", title: "G53", description: "9 x 8 cm" },
				{ src: "G54.webp", alt: "gzyms", title: "G54", description: "4,5 x 10 cm" },
				{ src: "G56.webp", alt: "gzyms", title: "G56", description: "5 x 10,5 cm" },
				{ src: "G57.webp", alt: "gzyms", title: "G57", description: "35,5 x 5,5 cm" },
				{ src: "G58.webp", alt: "gzyms", title: "G58", description: "16 x 16 cm" },
				{ src: "G59.webp", alt: "gzyms", title: "G59", description: "13 x 13 cm" },
				{ src: "G60.webp", alt: "gzyms", title: "G60", description: "17 x 32 cm" },
				{ src: "G61.webp", alt: "gzyms", title: "G61", description: "23,5 x 12 cm" },
				{ src: "G67.webp", alt: "gzyms", title: "G67", description: "9,5 x 7,5 cm" },
				{ src: "G71.webp", alt: "gzyms", title: "G71", description: "8,5 x 15 cm" },
				{ src: "G71a.webp", alt: "gzyms", title: "G71a", description: "7,5 x 12,5 cm" },
				{ src: "G74.webp", alt: "gzyms", title: "G74", description: "14,5 x 3 cm" },
				{ src: "G102.webp", alt: "gzyms", title: "G102", description: "10 x 5 cm" },
			],

			wallMainPath: "photos/oferta/gzymsy/nascienne/",
			wallGallery: [
				{ src: "G2.webp", alt: "gzyms", title: "G2", description: "9,5 x 4 cm" },
				{ src: "G3.webp", alt: "gzyms", title: "G3", description: "3,5 x 1,5 cm" },
				{ src: "G4.webp", alt: "gzyms", title: "G4", description: "4 x 9,5 cm" },
				{ src: "G9.webp", alt: "gzyms", title: "G9", description: "9 x 4 cm" },
				{ src: "G17.webp", alt: "gzyms", title: "G17", description: "5 x 2 cm" },
				{ src: "G26.webp", alt: "gzyms", title: "G26", description: "21 x 4 cm" },
				{ src: "G37.webp", alt: "gzyms", title: "G37", description: "1,5 x 2,5 cm" },
				{ src: "G39.webp", alt: "gzyms", title: "G39", description: "1,5 x 6 cm" },
				{ src: "G41.webp", alt: "gzyms", title: "G41", description: "2 x 4 cm" },
				{ src: "G41a.webp", alt: "gzyms", title: "G41a", description: "2 x 4 cm" },
				{ src: "G43.webp", alt: "gzyms", title: "G43", description: "3 x 8 cm" },
				{ src: "G44c.webp", alt: "gzyms", title: "G44c", description: "9,5 x 3,5 cm" },
				{ src: "G45.webp", alt: "gzyms", title: "G45", description: "10 x 3 cm" },
				{ src: "G52.webp", alt: "gzyms", title: "G52", description: "2 x 4 cm" },
				{ src: "G62.webp", alt: "gzyms", title: "G62", description: "9 x 1,5 cm" },
				{ src: "G65.webp", alt: "gzyms", title: "G65", description: "8,5 x 1,5 cm" },
				{ src: "G75.webp", alt: "gzyms", title: "G75", description: "12 x 2 cm" },
				{ src: "G76c.webp", alt: "gzyms", title: "G76c", description: "8 x 3 cm" },
			],

			photosMainPath: "photos/oferta/gzymsy/",
			photos: [
				{ src: "1.webp", alt: "gzyms", title: "", description: "" },
				{ src: "2.webp", alt: "gzyms", title: "", description: "" },
				{ src: "3.webp", alt: "gzyms", title: "", description: "" },
				{ src: "4.webp", alt: "gzyms", title: "", description: "" },
				{ src: "5.webp", alt: "gzyms", title: "", description: "" },
				{ src: "6.webp", alt: "gzyms", title: "", description: "" },
				{ src: "7.webp", alt: "gzyms", title: "", description: "" },
				{ src: "8.webp", alt: "gzyms", title: "", description: "" },
				{ src: "9.webp", alt: "gzyms", title: "", description: "" },
				{ src: "10.webp", alt: "gzyms", title: "", description: "" },
				{ src: "11.webp", alt: "gzyms", title: "", description: "" },
				{ src: "12.webp", alt: "gzyms", title: "", description: "" },
				{ src: "13.webp", alt: "gzyms", title: "", description: "" },
				{ src: "14.webp", alt: "gzyms", title: "", description: "" },
				{ src: "15.webp", alt: "gzyms", title: "", description: "" },
				{ src: "16.webp", alt: "gzyms", title: "", description: "" },
				{ src: "17.webp", alt: "gzyms", title: "", description: "" },
				{ src: "18.webp", alt: "gzyms", title: "", description: "" },
				{ src: "19.webp", alt: "gzyms", title: "", description: "" },
				{ src: "20.webp", alt: "gzyms", title: "", description: "" },
				{ src: "21.webp", alt: "gzyms", title: "", description: "" },
			],
		};
	},
}
</script>
