<i18n>
{
  "pl": {
    "title": "Oferta - Ogrodzenia",
	 "heading": "Ogrodzenia",
	 "paragraph1": "Produkujemy solidne i piękne elementy ogrodzeń betonowych (podstawy, słupki, pustaki, daszki zwieńczające) oraz zajmujemy się montażem ogrodzeńw całości. Poniżej znajdą Państwo przykłady naszej pracy."
  },
  "en": {
    "title": "Offer - Fences",
	 "heading": "Fences",
	 "paragraph1": "We produce solid and beautiful elements of concrete fences (bases, posts, hollow bricks, crowning canopies) and we assemble the entire fencing. Below you will find examples of our work."
  },
  "de": {
    "title": "Angebot - Zäune",
	 "heading": "Zäune",
	 "paragraph1": "Wir produzieren solide und schöne Elemente von Betonzäunen (Fuß, Pfosten, Hohlziegel, krönende Vordächer) und wir montieren die gesamte Umzäunung. Nachfolgend finden Sie Beispiele unserer Arbeit."
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent mb-6">{{ $t('paragraph1') }}</p>
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
