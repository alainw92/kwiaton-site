<i18n>
{
  "pl": {
    "title": "Oferta - Dekory",
	 "heading": "Dekory",
	 "paragraph1": "Zapraszamy do zapoznania się z naszą szeroką ofertą architektonicznych elementów dekoracyjnych.",
	 "heading2": "Przykłady zastosowania"
  },
  "en": {
    "title": "Offer - Decors",
	 "heading": "Decors",
	 "paragraph1": "We invite you to familiarize yourself with our wide range of architectural decorative elements.",
	 "heading2": "Examples of use"
  },
  "de": {
    "title": "Angebot - Dekore",
	 "heading": "Dekore",
	 "paragraph1": "Wir laden Sie ein, sich mit unserem breiten Angebot an architektonischen Dekorationselementen vertraut zu machen.",
	 "heading2": "Anwendungsbeispiele"
  }
}
</i18n>

<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p class="text-justify text-indent mb-6">{{ $t('paragraph1') }}</p>
		<photo-gallery contain :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-6">{{ $t('heading2') }}</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferDecorsPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/dekory",
			en: "/offer/decors",
			de: "/angebot/dekore",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/dekory/katalog/",
			gallery: [
				{ src: "D1.webp", alt: "Dekor z katalogu", title: "D1", description: "" },
				{ src: "D2.webp", alt: "Dekor z katalogu", title: "D2", description: "" },
				{ src: "D3.webp", alt: "Dekor z katalogu", title: "D3", description: "" },
				{ src: "D4.webp", alt: "Dekor z katalogu", title: "D4", description: "" },
				{ src: "D5.webp", alt: "Dekor z katalogu", title: "D5", description: "" },
				{ src: "D6.webp", alt: "Dekor z katalogu", title: "D6", description: "" },
				{ src: "D7.webp", alt: "Dekor z katalogu", title: "D7", description: "" },
				{ src: "D8.webp", alt: "Dekor z katalogu", title: "D8", description: "" },
				{ src: "D9.webp", alt: "Dekor z katalogu", title: "D9", description: "" },
				{ src: "D10.webp", alt: "Dekor z katalogu", title: "D10", description: "" },
				{ src: "D11.webp", alt: "Dekor z katalogu", title: "D11", description: "" },
				{ src: "D12.webp", alt: "Dekor z katalogu", title: "D12", description: "" },
				{ src: "D13.webp", alt: "Dekor z katalogu", title: "D13", description: "" },
				{ src: "D14.webp", alt: "Dekor z katalogu", title: "D14", description: "" },
				{ src: "D15.webp", alt: "Dekor z katalogu", title: "D15", description: "" },
				{ src: "D16.webp", alt: "Dekor z katalogu", title: "D16", description: "" },
				{ src: "D17.webp", alt: "Dekor z katalogu", title: "D17", description: "" },
				{ src: "D18.webp", alt: "Dekor z katalogu", title: "D18", description: "" },
				{ src: "D19.webp", alt: "Dekor z katalogu", title: "D19", description: "" },
				{ src: "D20.webp", alt: "Dekor z katalogu", title: "D20", description: "" },
				{ src: "D21.webp", alt: "Dekor z katalogu", title: "D21", description: "" },
				{ src: "D22.webp", alt: "Dekor z katalogu", title: "D22", description: "" },
				{ src: "D23.webp", alt: "Dekor z katalogu", title: "D23", description: "" },
				{ src: "D24.webp", alt: "Dekor z katalogu", title: "D24", description: "" },
				{ src: "D25.webp", alt: "Dekor z katalogu", title: "D25", description: "" },
				{ src: "D26.webp", alt: "Dekor z katalogu", title: "D26", description: "" },
				{ src: "D27.webp", alt: "Dekor z katalogu", title: "D27", description: "" },
				{ src: "D28.webp", alt: "Dekor z katalogu", title: "D28", description: "" },
				{ src: "D29.webp", alt: "Dekor z katalogu", title: "D29", description: "" },
				{ src: "D30.webp", alt: "Dekor z katalogu", title: "D30", description: "" },
				{ src: "D31.webp", alt: "Dekor z katalogu", title: "D31", description: "" },
				{ src: "D32.webp", alt: "Dekor z katalogu", title: "D32", description: "" },
				{ src: "D33.webp", alt: "Dekor z katalogu", title: "D33", description: "" },
				{ src: "D34.webp", alt: "Dekor z katalogu", title: "D34", description: "" },
				{ src: "D35.webp", alt: "Dekor z katalogu", title: "D35", description: "" },
				{ src: "D36.webp", alt: "Dekor z katalogu", title: "D36", description: "" },
				{ src: "D37.webp", alt: "Dekor z katalogu", title: "D37", description: "" },
				{ src: "D38.webp", alt: "Dekor z katalogu", title: "D38", description: "" },
				{ src: "D39.webp", alt: "Dekor z katalogu", title: "D39", description: "" },
				{ src: "D40.webp", alt: "Dekor z katalogu", title: "D40", description: "" },
				{ src: "D41.webp", alt: "Dekor z katalogu", title: "D41", description: "" },
				{ src: "D42.webp", alt: "Dekor z katalogu", title: "D42", description: "" },
				{ src: "D43.webp", alt: "Dekor z katalogu", title: "D43", description: "" },
				{ src: "D44.webp", alt: "Dekor z katalogu", title: "D44", description: "" },
				{ src: "D45.webp", alt: "Dekor z katalogu", title: "D45", description: "" },
				{ src: "D46.webp", alt: "Dekor z katalogu", title: "D46", description: "" },
				{ src: "D47.webp", alt: "Dekor z katalogu", title: "D47", description: "" },
				{ src: "D48.webp", alt: "Dekor z katalogu", title: "D48", description: "" },
				{ src: "D49.webp", alt: "Dekor z katalogu", title: "D49", description: "" },
				{ src: "D50.webp", alt: "Dekor z katalogu", title: "D50", description: "" },
				{ src: "D51.webp", alt: "Dekor z katalogu", title: "D51", description: "" },
				{ src: "D52.webp", alt: "Dekor z katalogu", title: "D52", description: "" },
				{ src: "D53.webp", alt: "Dekor z katalogu", title: "D53", description: "" },
				{ src: "D54.webp", alt: "Dekor z katalogu", title: "D54", description: "" },
				{ src: "D55.webp", alt: "Dekor z katalogu", title: "D55", description: "" },
				{ src: "D56.webp", alt: "Dekor z katalogu", title: "D56", description: "" },
				{ src: "D57.webp", alt: "Dekor z katalogu", title: "D57", description: "" },
				{ src: "D58.webp", alt: "Dekor z katalogu", title: "D58", description: "" },
				{ src: "D59.webp", alt: "Dekor z katalogu", title: "D59", description: "" },
				{ src: "D60.webp", alt: "Dekor z katalogu", title: "D60", description: "" },
				{ src: "D61.webp", alt: "Dekor z katalogu", title: "D61", description: "" },
				{ src: "D62.webp", alt: "Dekor z katalogu", title: "D62", description: "" },
				{ src: "D63.webp", alt: "Dekor z katalogu", title: "D63", description: "" },
				{ src: "D64.webp", alt: "Dekor z katalogu", title: "D64", description: "" },
				{ src: "D65.webp", alt: "Dekor z katalogu", title: "D65", description: "" },
				{ src: "D66.webp", alt: "Dekor z katalogu", title: "D66", description: "" },
				{ src: "D67.webp", alt: "Dekor z katalogu", title: "D67", description: "" },
				{ src: "D68.webp", alt: "Dekor z katalogu", title: "D68", description: "" },
				{ src: "D69.webp", alt: "Dekor z katalogu", title: "D69", description: "" },
				{ src: "D70.webp", alt: "Dekor z katalogu", title: "D70", description: "" },
				{ src: "D71.webp", alt: "Dekor z katalogu", title: "D71", description: "" },
				{ src: "D72.webp", alt: "Dekor z katalogu", title: "D72", description: "" },
				{ src: "D73.webp", alt: "Dekor z katalogu", title: "D73", description: "" },
				{ src: "D74.webp", alt: "Dekor z katalogu", title: "D74", description: "" },
				{ src: "D75.webp", alt: "Dekor z katalogu", title: "D75", description: "" },
				{ src: "D76.webp", alt: "Dekor z katalogu", title: "D76", description: "" },
				{ src: "D77.webp", alt: "Dekor z katalogu", title: "D77", description: "" },
				{ src: "D78.webp", alt: "Dekor z katalogu", title: "D78", description: "" },
				{ src: "D79.webp", alt: "Dekor z katalogu", title: "D79", description: "" },
				{ src: "D80.webp", alt: "Dekor z katalogu", title: "D80", description: "" },
				{ src: "D81.webp", alt: "Dekor z katalogu", title: "D81", description: "" },
				{ src: "D82.webp", alt: "Dekor z katalogu", title: "D82", description: "" },
				{ src: "D83.webp", alt: "Dekor z katalogu", title: "D83", description: "" },
				{ src: "D84.webp", alt: "Dekor z katalogu", title: "D84", description: "" },
				{ src: "D85.webp", alt: "Dekor z katalogu", title: "D85", description: "" },
				{ src: "D86.webp", alt: "Dekor z katalogu", title: "D86", description: "" },
				{ src: "D87.webp", alt: "Dekor z katalogu", title: "D87", description: "" },
				{ src: "D88.webp", alt: "Dekor z katalogu", title: "D88", description: "" },
				{ src: "D89.webp", alt: "Dekor z katalogu", title: "D89", description: "" },
				{ src: "D90.webp", alt: "Dekor z katalogu", title: "D90", description: "" },
				{ src: "D91.webp", alt: "Dekor z katalogu", title: "D91", description: "" },
				//
				{ src: "D95.webp", alt: "Dekor z katalogu", title: "D95", description: "" },
				{ src: "D96.webp", alt: "Dekor z katalogu", title: "D96", description: "" },
				{ src: "D97.webp", alt: "Dekor z katalogu", title: "D97", description: "" },
				{ src: "D98.webp", alt: "Dekor z katalogu", title: "D98", description: "" },
				{ src: "D99.webp", alt: "Dekor z katalogu", title: "D99", description: "" },
				{ src: "D100.webp", alt: "Dekor z katalogu", title: "D100", description: "" },
			],

			photosMainPath: "photos/oferta/dekory/",
			photos: [
				{ src: "1.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "2.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "3.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "4.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "5.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "6.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "7.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "8.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "9.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "10.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "11.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "12.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "13.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "14.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
				{ src: "15.webp", alt: "Przykładowe zdjęcie z zastosowaniem dekoru", title: "", description: "" },
			],
		};
	},
};
</script>
