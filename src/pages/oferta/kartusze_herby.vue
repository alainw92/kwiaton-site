<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Kartusze i Herby</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferCartouchesCrestsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/kartusze_herby",
			en: "/offer/cartouches_crests",
			de: "/angebot/cartouches_crests",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/kartusze_herby/",
			photos: [
				{ src: "H1.webp", alt: "", title: "H1", description: "55 x 35 x 6 cm" },
				{ src: "H3.webp", alt: "", title: "H3", description: "52 x 37 x 6 cm" },
				{ src: "H4.webp", alt: "", title: "H4", description: "32 x 54 x 3 cm" },
				{ src: "H5.webp", alt: "", title: "H5", description: "42 x 46 x 3 cm" },
				{ src: "H6.webp", alt: "", title: "H6", description: "37 x 55 x 8 cm" },
				{ src: "H7.webp", alt: "", title: "H7", description: "57 x 72 x 4 cm" },
				{ src: "H9.webp", alt: "", title: "H9", description: "54 x 55 x 7,5 cm" },
				{ src: "H10.webp", alt: "", title: "H10", description: "54 x 55 x 7,5 cm" },
				{ src: "11.webp", alt: "", title: "", description: "" },
				{ src: "12.webp", alt: "", title: "", description: "" },
				{ src: "13.webp", alt: "", title: "", description: "" },
				{ src: "14.webp", alt: "", title: "", description: "" },
				{ src: "15.webp", alt: "", title: "", description: "" },
				{ src: "16.webp", alt: "", title: "", description: "" },
				{ src: "17.webp", alt: "", title: "", description: "" },
				{ src: "18.webp", alt: "", title: "", description: "" },
			],
		};
	},
}
</script>
