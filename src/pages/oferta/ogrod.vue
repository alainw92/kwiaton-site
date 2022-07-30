<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Ogród</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferGardenPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/ogrod",
			en: "/offer/garden",
			de: "/angebot/garden",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/ogrod/",
			photos: [
				{ src: "1.webp", alt: "", title: "", description: "" },
				{ src: "2.webp", alt: "", title: "", description: "" },
				// brak 3
				{ src: "4.webp", alt: "", title: "", description: "" },
				{ src: "5.webp", alt: "", title: "", description: "" },
				{ src: "6.webp", alt: "", title: "", description: "" },
				{ src: "7.webp", alt: "", title: "", description: "" },
				{ src: "8.webp", alt: "", title: "", description: "" },
				{ src: "9.webp", alt: "", title: "", description: "" },
				{ src: "10.webp", alt: "", title: "", description: "" },
				{ src: "11.webp", alt: "", title: "", description: "" },
				{ src: "12.webp", alt: "", title: "", description: "" },
				{ src: "13.webp", alt: "", title: "", description: "" },
				{ src: "14.webp", alt: "", title: "", description: "" },
				{ src: "15.webp", alt: "", title: "", description: "" },
				{ src: "16.webp", alt: "", title: "", description: "" },
				{ src: "17.webp", alt: "", title: "", description: "" },
				{ src: "18.webp", alt: "", title: "", description: "" },
				{ src: "19.webp", alt: "", title: "", description: "" },
				{ src: "20.webp", alt: "", title: "", description: "" },
			],
		}
	}
}
</script>
