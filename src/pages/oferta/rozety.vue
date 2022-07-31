<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">Rozety</h2>
		<p class="text-justify">Wykonujemy rozety ścienne i sufitowe o różnych średnicach, również na indywidualne zamówienie klienta.</p>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 mb-6 mt-10">Przykłady zastosowań</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferRosettesPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/rozety",
			en: "/offer/rosettes",
			de: "/angebot/rosettes",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/rozety/katalog/",
			gallery: [
				{ src: "R11.webp", alt: "", title: "R11", description: "średnica 50 cm" },
				{ src: "R12.webp", alt: "", title: "R12", description: "47 x 40 cm" },
				{ src: "R13.webp", alt: "", title: "R13", description: "40 x 30 cm" },
				{ src: "R16.webp", alt: "", title: "R16", description: "średnica 130 cm" },
				{ src: "R18.webp", alt: "", title: "R18", description: "średnica 105 cm" },
				{ src: "R20.webp", alt: "", title: "R20", description: "średnica 64 cm" },
				{ src: "R22.webp", alt: "", title: "R22", description: "średnica 25 cm" },
				{ src: "R23.webp", alt: "", title: "R23", description: "średnica 48 cm" },
				{ src: "R26.webp", alt: "", title: "R26", description: "średnica 43 cm" },
				{ src: "R28.webp", alt: "", title: "R28", description: "średnica 60 cm" },
			],

			photosMainPath: "photos/oferta/rozety/",
			photos: [
				{ src: "1.webp", alt: "", title: "", description: "" },
				{ src: "2.webp", alt: "", title: "", description: "" },
				{ src: "3.webp", alt: "", title: "", description: "" },
				{ src: "4.webp", alt: "", title: "", description: "" },
				{ src: "5.webp", alt: "", title: "", description: "" },
				{ src: "6.webp", alt: "", title: "", description: "" },
				{ src: "7.webp", alt: "", title: "", description: "" },
				{ src: "8.webp", alt: "", title: "", description: "" },
				{ src: "9.webp", alt: "", title: "", description: "" },
				{ src: "10.webp", alt: "", title: "", description: "" },
				{ src: "11.webp", alt: "", title: "", description: "" },
			],
		};
	},
};
</script>
