<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Kinkiety</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferSconcesPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/kinkiety",
			en: "/offer/sconces",
			de: "/angebot/sconces",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/kinkiety/",
			photos: [
				{ src: "1.webp", alt: "", title: "", description: "" },
				{ src: "2.webp", alt: "", title: "", description: "" },
				{ src: "3.webp", alt: "", title: "", description: "" },
				{ src: "4.webp", alt: "", title: "", description: "" },
				{ src: "5.webp", alt: "", title: "", description: "" },
				{ src: "6.webp", alt: "", title: "", description: "" },
			],
		};
	},
}
</script>
