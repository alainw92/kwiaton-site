<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Nietypowe realizacje</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferUnusualPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/nietypowe",
			en: "/offer/unusual",
			de: "/angebot/unusual",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/nietypowe/",
			photos: [
				{ src: "1.webp", alt: "", title: "", description: "" },
				{ src: "2.webp", alt: "", title: "", description: "" },
				{ src: "3.webp", alt: "", title: "", description: "" },
				{ src: "4.webp", alt: "", title: "", description: "" },
				{ src: "5.webp", alt: "", title: "", description: "" },
				{ src: "6.webp", alt: "", title: "", description: "" },
				//
				{ src: "8.webp", alt: "", title: "", description: "" },
				{ src: "9.webp", alt: "", title: "", description: "" },
				{ src: "10.webp", alt: "", title: "", description: "" },
				{ src: "11.webp", alt: "", title: "", description: "" },
				{ src: "12.webp", alt: "", title: "", description: "" },
			],
		}
	}
}
</script>
