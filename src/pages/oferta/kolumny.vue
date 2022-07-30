<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">Kolumny</h2>
		<p>Posiadamy szeroki wybór wśród konfiguracji kolumn - wykonujemy wszystkie klasyczne style jak również jesteśmy otwarci na propozycje klientów.</p>
		<h3 class="text-h6 my-6">Klasyczne głowice kolumn</h3>
		<photo-gallery contain :folder="galleryMainPath" :photos="gallery"></photo-gallery>		
		<h3 class="text-h6 my-6">Przykłady wykonanych projektów</h3>
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
			galleryMainPath: "photos/oferta/kolumny/glowice/",
			gallery: [
				{ src: "GD1.webp", alt: "Głowica kolumny doryckiej", title: "GD1", description: "Głowica dorycka" },
				{ src: "GD2.webp", alt: "Głowica kolumny doryckiej", title: "GD2", description: "Głowica dorycka" },
				{ src: "GJ1.webp", alt: "Głowica kolumny jońskiej", title: "GJ1", description: "Głowica jońska" },
				{ src: "GJ2.webp", alt: "Głowica kolumny jońskiej", title: "GJ2", description: "Głowica jońska" },
				{ src: "GJ3.webp", alt: "Głowica kolumny jońskiej", title: "GJ3", description: "Głowica jońska" },
				{ src: "GK.webp", alt: "Głowica kolumny korynckiej", title: "GK", description: "Głowica koryncka" },
			],

			photosMainPath: "photos/oferta/kolumny/",
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
				{ src: "13.webp", alt: "", title: "", description: "" },
				{ src: "14.webp", alt: "", title: "", description: "" },
				{ src: "15.webp", alt: "", title: "", description: "" },
				{ src: "16.webp", alt: "", title: "", description: "" },
				{ src: "17.webp", alt: "", title: "", description: "" },
			],
		};
	},

	
};
</script>

<style lang="scss" scoped>
</style>
