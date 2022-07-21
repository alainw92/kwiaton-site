<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">Kolumny</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferColumnsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/kolumny",
			en: "/offer/columns",
			de: "/angebot/columns",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/kolumny/",
			photos: [
				{ src: "1.webp", alt: "Dworek", title: "Dworek", description: "Niezły dwór tam gdzie wór schodzi się z jajami" },
				{ src: "2.webp", alt: "Dworek", title: "", description: "" },
				{ src: "3.webp", alt: "Dworek", title: "", description: "" },
				{ src: "4.webp", alt: "Dworek", title: "KL2", description: "49,5 x 50 x 23 cm" },
				{ src: "5.webp", alt: "Dworek", title: "", description: "" },
				{ src: "6.webp", alt: "Dworek", title: "", description: "" },
				{ src: "7.webp", alt: "Dworek", title: "", description: "" },
				{ src: "8.webp", alt: "Dworek", title: "", description: "" },
				{ src: "9.webp", alt: "Dworek", title: "", description: "" },
				{ src: "10.webp", alt: "Dworek", title: "", description: "" },
			],
		};
	},

	
};
</script>

<style lang="scss" scoped>
</style>
