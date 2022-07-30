<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Renowacje budynków</h2>
		<p>Zajmujemy się renowacjami zabytkowych budynków wraz z odtworzeniem wszystkich detali architektonicznych.</p>
		<photo-gallery :folder="photosMainPath" :photos="gallery"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferRestorationsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/renowacje",
			en: "/offer/restorations",
			de: "/angebot/restorations",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/renowacje/",
			gallery: [
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
				{ src: "13.webp", alt: "", title: "", description: "" },
				{ src: "14.webp", alt: "", title: "", description: "" },
				{ src: "15.webp", alt: "", title: "", description: "" },
				{ src: "16.webp", alt: "", title: "", description: "" },
				{ src: "17.webp", alt: "", title: "", description: "" },
				{ src: "18.webp", alt: "", title: "", description: "" },
				{ src: "19.webp", alt: "", title: "", description: "" },
				{ src: "20.webp", alt: "", title: "", description: "" },
				{ src: "21.webp", alt: "", title: "", description: "" },
				{ src: "22.webp", alt: "", title: "", description: "" },
				{ src: "23.webp", alt: "", title: "", description: "" },
				{ src: "24.webp", alt: "", title: "", description: "" },
				{ src: "25.webp", alt: "", title: "", description: "" },
				{ src: "26.webp", alt: "", title: "", description: "" },
			],
		}
	}
}
</script>
