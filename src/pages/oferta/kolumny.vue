<i18n>
{
  "pl": {
    "title": "Oferta - Kolumny",
	 "heading": "Kolumny",
	 "paragraph1": "Posiadamy szeroki wybór wśród konfiguracji kolumn - wykonujemy wszystkie klasyczne style jak również jesteśmy otwarci na propozycje klientów.",
	 "heading2": "Klasyczne głowice kolumn",
	 "heading3": "Przykłady wykonanych projektów",
	 "pommel": {
		"doric": "Głowica dorycka",
		"ionian": "Głowica jońska",
		"corinthian": "Głowica koryncka"
	 }
  },
  "en": {
    "title": "Offer - Columns",
	 "heading": "Columns",
	 "paragraph1": "We have a wide selection of column configurations - we make all classic styles and we are open to customer suggestions.",
	 "heading2": "Classic column heads",
	 "heading3": "Examples of completed projects",
	 "pommel": {
		"doric": "Doric pommel",
		"ionian": "Ionian pommel",
		"corinthian": "Corinthian pommel"
	 }
  },
  "de": {
    "title": "Angebot - Säulen",
	 "heading": "Säulen",
	 "paragraph1": "Wir haben eine große Auswahl an Säulenkonfigurationen - wir fertigen alle klassischen Stile und sind offen für Kundenvorschläge.",
	 "heading2": "Klassische Säulenköpfe",
	 "heading3": "Beispiele abgeschlossener Projekte",
	 "pommel": {
		"doric": "Dorischer Knauf",
		"ionian": "Ionischer Knauf",
		"corinthian": "Korinthischer Knauf"
	 }
  }
}
</i18n>

<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent">{{ $t('paragraph1') }}</p>
		<h3 class="text-h6 my-6">{{ $t('heading2') }}</h3>
		<photo-gallery contain :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-6">{{ $t('heading3') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferColumnsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/kolumny",
			en: "/offer/columns",
			de: "/angebot/saulen",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/kolumny/glowice/",
			gallery: [
				{ src: "GD1.webp", alt: "Głowica kolumny doryckiej", title: "GD1", description: this.$t("pommel.doric") },
				{ src: "GD2.webp", alt: "Głowica kolumny doryckiej", title: "GD2", description: this.$t("pommel.doric") },
				{ src: "GJ1.webp", alt: "Głowica kolumny jońskiej", title: "GJ1", description: this.$t("pommel.ionian") },
				{ src: "GJ2.webp", alt: "Głowica kolumny jońskiej", title: "GJ2", description: this.$t("pommel.ionian") },
				{ src: "GJ3.webp", alt: "Głowica kolumny jońskiej", title: "GJ3", description: this.$t("pommel.ionian") },
				{ src: "GK.webp", alt: "Głowica kolumny korynckiej", title: "GK", description: this.$t("pommel.corinthian") },
			],

			photosMainPath: "photos/oferta/kolumny/",
			photos: [
				{ src: "1.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "2.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "3.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "4.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "5.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "6.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "7.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "8.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "9.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "10.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "11.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "12.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "13.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "14.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "15.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "16.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
				{ src: "17.webp", alt: "Zdjęcie z przykładami kolumn", title: "", description: "" },
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
