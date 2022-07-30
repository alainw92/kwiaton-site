<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Fontanny</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferFountainsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/fontanny",
			en: "/offer/fountains",
			de: "/angebot/fountains",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/fontanny/",
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
			],
		}
	}
}
</script>
