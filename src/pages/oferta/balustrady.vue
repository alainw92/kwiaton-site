<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">Balustrady</h2>
		<p>Wykonujemy balustrady w różnych stylach. Poniżej znajdują się przykłady tralek balustradowych dostępnych w naszej ofercie.</p>
		<photo-gallery contain :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-6">Przykłady wykonanych projektów</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferBalustradesPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/balustrady",
			en: "/offer/balustrades",
			de: "/angebot/balustrades",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/balustrady/tralki/",
			gallery: [
				{ src: "TCI.webp", alt: "Tralka", title: "TCI", description: "83 x 10 cm" },
				{ src: "TG1.webp", alt: "Tralka", title: "TG1", description: "78 x 13 cm" },
				{ src: "TG2.webp", alt: "Tralka", title: "TG2", description: "81 x 18 cm" },
				{ src: "TKR.webp", alt: "Tralka", title: "TKR", description: "90 x 15 cm" },
				{ src: "TKW.webp", alt: "Tralka", title: "TKW", description: "80 x 15 cm" },
				{ src: "TŁ1.webp", alt: "Tralka", title: "TŁ1", description: "58 x 15 cm" },
				{ src: "TŁ2.webp", alt: "Tralka", title: "TŁ2", description: "76 x 15 cm" },
				{ src: "TŁ3.webp", alt: "Tralka", title: "TŁ3", description: "96 x 18 cm" },
				{ src: "TŁA.webp", alt: "Tralka", title: "TŁA", description: "90 x 14 cm" },
				{ src: "TM1.webp", alt: "Tralka", title: "TM1", description: "55 x 14 cm" },
				{ src: "TM2.webp", alt: "Tralka", title: "TM2", description: "48 x 13 cm" },
				{ src: "TM3.webp", alt: "Tralka", title: "TM3", description: "43 x 12 cm" },
				{ src: "TN1.webp", alt: "Tralka", title: "TN1", description: "60 x 18 cm" },
				{ src: "TN2.webp", alt: "Tralka", title: "TN2", description: "60 x 18 cm" },
				{ src: "TNO.webp", alt: "Tralka", title: "TNO", description: "59 x 14 cm" },
				{ src: "TOT.webp", alt: "Tralka", title: "TOT", description: "53,5 x 15,5 cm" },
				{ src: "TPL.webp", alt: "Tralka", title: "TPL", description: "78 x 17 cm" },
				{ src: "TPO.webp", alt: "Tralka", title: "TPO", description: "79 x 13 cm" },
				{ src: "TSK.webp", alt: "Tralka", title: "TSK", description: "78 x 14 cm" },
				{ src: "TSW.webp", alt: "Tralka", title: "TSW", description: "78 x 15 cm" },
				{ src: "TTE.webp", alt: "Tralka", title: "TTE", description: "70 x 19 cm" },
				{ src: "TWŁ.webp", alt: "Tralka", title: "TWŁ", description: "65 x 14 cm" },
			],

			photosMainPath: "photos/oferta/balustrady/",
			photos: [
				{ src: "1.webp", alt: "", title: "", description: "" },
				{ src: "2.webp", alt: "", title: "", description: "" },
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
			],
		}
	}
}
</script>
