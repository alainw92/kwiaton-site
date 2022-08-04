<i18n>
{
  "pl": {
    "title": "Oferta - Elewacje",
	 "heading": "Elewacje budynków",
	 "paragraph1": "Wykonamy nawet najtrudniejszą elewację."
  },
  "en": {
    "title": "Offer - Facades",
	 "heading": "Building facades",
	 "paragraph1": "We will make even the most difficult facade."
  },
  "de": {
    "title": "Angebot - Fassaden",
	 "heading": "Gebäudefassaden",
	 "paragraph1": "Wir machen auch die schwierigste Fassade."
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<p>{{ $t('paragraph1') }}</p>
		<photo-gallery :folder="photosMainPath" :photos="gallery"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferFacadesPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/elewacje",
			en: "/offer/facades",
			de: "/angebot/fassaden",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/elewacje/",
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
			],
		}
	}
}
</script>
