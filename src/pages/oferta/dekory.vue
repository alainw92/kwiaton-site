<template>
	<section class="pa-4">
		<h2 class="text-h5 mb-6">Dekory</h2>
		<p>Zapraszamy do zapoznania się z naszą szeroką ofertą architektonicznych elementów dekoracyjnych.</p>
		<photo-gallery contain :folder="galleryMainPath" :photos="gallery"></photo-gallery>
		<h3 class="text-h6 my-6">Przykłady zastosowania</h3>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferDecorsPage",

	nuxtI18n: {
		paths: {
			pl: "/oferta/dekory",
			en: "/offer/decors",
			de: "/angebot/decors",
		},
	},

	data() {
		return {
			galleryMainPath: "photos/oferta/dekory/katalog/",
			gallery: [
				{ src: "D1.webp", alt: "", title: "D1", description: "" },
				{ src: "D2.webp", alt: "", title: "D2", description: "" },
				{ src: "D3.webp", alt: "", title: "D3", description: "" },
				{ src: "D4.webp", alt: "", title: "D4", description: "" },
				{ src: "D5.webp", alt: "", title: "D5", description: "" },
				{ src: "D6.webp", alt: "", title: "D6", description: "" },
				{ src: "D7.webp", alt: "", title: "D7", description: "" },
				{ src: "D8.webp", alt: "", title: "D8", description: "" },
				{ src: "D9.webp", alt: "", title: "D9", description: "" },
				{ src: "D10.webp", alt: "", title: "D10", description: "" },
				{ src: "D11.webp", alt: "", title: "D11", description: "" },
				{ src: "D12.webp", alt: "", title: "D12", description: "" },
				{ src: "D13.webp", alt: "", title: "D13", description: "" },
				{ src: "D14.webp", alt: "", title: "D14", description: "" },
				{ src: "D15.webp", alt: "", title: "D15", description: "" },
				{ src: "D16.webp", alt: "", title: "D16", description: "" },
				{ src: "D17.webp", alt: "", title: "D17", description: "" },
				{ src: "D18.webp", alt: "", title: "D18", description: "" },
				{ src: "D19.webp", alt: "", title: "D19", description: "" },
				{ src: "D20.webp", alt: "", title: "D20", description: "" },
				{ src: "D21.webp", alt: "", title: "D21", description: "" },
				{ src: "D22.webp", alt: "", title: "D22", description: "" },
				{ src: "D23.webp", alt: "", title: "D23", description: "" },
				{ src: "D24.webp", alt: "", title: "D24", description: "" },
				{ src: "D25.webp", alt: "", title: "D25", description: "" },
				{ src: "D26.webp", alt: "", title: "D26", description: "" },
				{ src: "D27.webp", alt: "", title: "D27", description: "" },
				{ src: "D28.webp", alt: "", title: "D28", description: "" },
				{ src: "D29.webp", alt: "", title: "D29", description: "" },
				{ src: "D30.webp", alt: "", title: "D30", description: "" },
				{ src: "D31.webp", alt: "", title: "D31", description: "" },
				{ src: "D32.webp", alt: "", title: "D32", description: "" },
				{ src: "D33.webp", alt: "", title: "D33", description: "" },
				{ src: "D34.webp", alt: "", title: "D34", description: "" },
				{ src: "D35.webp", alt: "", title: "D35", description: "" },
				{ src: "D36.webp", alt: "", title: "D36", description: "" },
				{ src: "D37.webp", alt: "", title: "D37", description: "" },
				{ src: "D38.webp", alt: "", title: "D38", description: "" },
				{ src: "D39.webp", alt: "", title: "D39", description: "" },
				{ src: "D40.webp", alt: "", title: "D40", description: "" },
				{ src: "D41.webp", alt: "", title: "D41", description: "" },
				{ src: "D42.webp", alt: "", title: "D42", description: "" },
				{ src: "D43.webp", alt: "", title: "D43", description: "" },
				{ src: "D44.webp", alt: "", title: "D44", description: "" },
				{ src: "D45.webp", alt: "", title: "D45", description: "" },
				{ src: "D46.webp", alt: "", title: "D46", description: "" },
				{ src: "D47.webp", alt: "", title: "D47", description: "" },
				{ src: "D48.webp", alt: "", title: "D48", description: "" },
				{ src: "D49.webp", alt: "", title: "D49", description: "" },
				{ src: "D50.webp", alt: "", title: "D50", description: "" },
				{ src: "D51.webp", alt: "", title: "D51", description: "" },
				{ src: "D52.webp", alt: "", title: "D52", description: "" },
				{ src: "D53.webp", alt: "", title: "D53", description: "" },
				{ src: "D54.webp", alt: "", title: "D54", description: "" },
				{ src: "D55.webp", alt: "", title: "D55", description: "" },
				{ src: "D56.webp", alt: "", title: "D56", description: "" },
				{ src: "D57.webp", alt: "", title: "D57", description: "" },
				{ src: "D58.webp", alt: "", title: "D58", description: "" },
				{ src: "D59.webp", alt: "", title: "D59", description: "" },
				{ src: "D60.webp", alt: "", title: "D60", description: "" },
				{ src: "D61.webp", alt: "", title: "D61", description: "" },
				{ src: "D62.webp", alt: "", title: "D62", description: "" },
				{ src: "D63.webp", alt: "", title: "D63", description: "" },
				{ src: "D64.webp", alt: "", title: "D64", description: "" },
				{ src: "D65.webp", alt: "", title: "D65", description: "" },
				{ src: "D66.webp", alt: "", title: "D66", description: "" },
				{ src: "D67.webp", alt: "", title: "D67", description: "" },
				{ src: "D68.webp", alt: "", title: "D68", description: "" },
				{ src: "D69.webp", alt: "", title: "D69", description: "" },
				{ src: "D70.webp", alt: "", title: "D70", description: "" },
				{ src: "D71.webp", alt: "", title: "D71", description: "" },
				{ src: "D72.webp", alt: "", title: "D72", description: "" },
				{ src: "D73.webp", alt: "", title: "D73", description: "" },
				{ src: "D74.webp", alt: "", title: "D74", description: "" },
				{ src: "D75.webp", alt: "", title: "D75", description: "" },
				{ src: "D76.webp", alt: "", title: "D76", description: "" },
				{ src: "D77.webp", alt: "", title: "D77", description: "" },
				{ src: "D78.webp", alt: "", title: "D78", description: "" },
				{ src: "D79.webp", alt: "", title: "D79", description: "" },
				{ src: "D80.webp", alt: "", title: "D80", description: "" },
				{ src: "D81.webp", alt: "", title: "D81", description: "" },
				{ src: "D82.webp", alt: "", title: "D82", description: "" },
				{ src: "D83.webp", alt: "", title: "D83", description: "" },
				{ src: "D84.webp", alt: "", title: "D84", description: "" },
				{ src: "D85.webp", alt: "", title: "D85", description: "" },
				{ src: "D86.webp", alt: "", title: "D86", description: "" },
				{ src: "D87.webp", alt: "", title: "D87", description: "" },
				{ src: "D88.webp", alt: "", title: "D88", description: "" },
				{ src: "D89.webp", alt: "", title: "D89", description: "" },
				{ src: "D90.webp", alt: "", title: "D90", description: "" },
				{ src: "D91.webp", alt: "", title: "D91", description: "" },
				//
				{ src: "D95.webp", alt: "", title: "D95", description: "" },
				{ src: "D96.webp", alt: "", title: "D96", description: "" },
				{ src: "D97.webp", alt: "", title: "D97", description: "" },
				{ src: "D98.webp", alt: "", title: "D98", description: "" },
				{ src: "D99.webp", alt: "", title: "D99", description: "" },
				{ src: "D100.webp", alt: "", title: "D100", description: "" },
			],

			photosMainPath: "photos/oferta/dekory/",
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
			],
		};
	},
};
</script>
