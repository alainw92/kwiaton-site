<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Rzeźby i pomniki</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferSculpturesPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/rzezby",
			en: "/offer/sculptures",
			de: "/angebot/sculptures",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/rzezby/",
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
				{ src: "12.webp", alt: "", title: "", description: "" },
				//
				{ src: "14.webp", alt: "", title: "", description: "" },
				{ src: "15.webp", alt: "", title: "", description: "" },
				//
				{ src: "18.webp", alt: "", title: "", description: "" },
				{ src: "19.webp", alt: "", title: "", description: "" },
				{ src: "20.webp", alt: "", title: "", description: "" },
				{ src: "21.webp", alt: "", title: "", description: "" },
				{ src: "22.webp", alt: "", title: "", description: "" },
				{ src: "23.webp", alt: "", title: "", description: "" },
			],
		}
	}
}
</script>
