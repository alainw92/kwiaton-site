<i18n>
{
  "pl": {
    "title": "Oferta - Ogrodzenia",
	 "heading": "Ogrodzenia",
	 "paragraph1": "Produkujemy solidne i piękne elementy ogrodzeń betonowych (podstawy, słupki, pustaki, daszki zwieńczające) oraz zajmujemy się montażem ogrodzeń w całości. Poniżej znajdą Państwo przykłady naszej pracy.",
	 "heading2": "Przykłady"
  },
  "en": {
    "title": "Offer - Fences",
	 "heading": "Fences",
	 "paragraph1": "We produce solid and beautiful elements of concrete fences (bases, posts, hollow bricks, crowning canopies) and we assemble the entire fencing. Below you will find examples of our work.",
	 "heading2": "Examples"
  },
  "de": {
    "title": "Angebot - Zäune",
	 "heading": "Zäune",
	 "paragraph1": "Wir produzieren solide und schöne Elemente von Betonzäunen (Fuß, Pfosten, Hohlziegel, krönende Vordächer) und wir montieren die gesamte Umzäunung. Nachfolgend finden Sie Beispiele unserer Arbeit.",
	 "heading2": "Beispiele"
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent mb-6">{{ $t('paragraph1') }}</p>
		<photo-gallery :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-10">{{ $t('heading2') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferFencesPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/ogrodzenia",
			en: "/offer/fences",
			de: "/angebot/zaune",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/ogrodzenia/katalog/",
			gallery: [
				{ src: "DA1.webp", alt: "", title: "DA1", description: "40 x 40 x 23 cm" },
				{ src: "DA3.webp", alt: "", title: "DA3", description: "43 x 43 x ø18/ø23 cm" },
				{ src: "DA15.webp", alt: "", title: "DA15", description: "35 x 35 x 10 cm" },
				{ src: "DA60.webp", alt: "", title: "DA60", description: "60 x 60 x 10 cm" },
				{ src: "DA70.webp", alt: "", title: "DA70", description: "" },
				{ src: "CZ1.webp", alt: "", title: "CZ1", description: "101 x 36 x 7 cm" },
				{ src: "SL16.webp", alt: "", title: "SL16", description: "35 x 35 x 35 cm" },
				{ src: "SL35.webp", alt: "", title: "SL35", description: "40 x 40 x 40 cm" },
				{ src: "SL40.webp", alt: "", title: "SL40", description: "40 x 40 x 36 cm" },
				{ src: "SL45.webp", alt: "", title: "SL45", description: "45 x 45 cm" },
				{ src: "SL50.webp", alt: "", title: "SL50", description: "50 x 50 x 41 cm" },
				{ src: "SL52.webp", alt: "", title: "SL52", description: "52 x 52 x 25 cm" },
			],

			photosMainPath: "photos/oferta/ogrodzenia/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie ogrodzenia betonowego", title: "", description: "" },
			],
		}
	}
}
</script>
