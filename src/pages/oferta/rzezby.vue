<i18n>
{
  "pl": {
    "title": "Oferta - Rzeźby",
	 "heading": "Rzeźby i pomniki"
  },
  "en": {
    "title": "Offer - Sculptures",
	 "heading": "Sculptures and statues"
  },
  "de": {
    "title": "Angebot - Skulpturen",
	 "heading": "Skulpturen und Denkmäler"
  }
}
</i18n>

<template>
  <section class="pa-4">
		<h2 class="text-h5 mb-6">{{ $t('heading') }}</h2>
		<photo-gallery :folder="photosMainPath" :photos="photos"></photo-gallery>
	</section>
</template>

<script>
export default {
	name: "OfferSculpturesPage",
	scrollToTop: true,

	head() {
		return {
			title: this.$t("title"),
		};
	},

	nuxtI18n: {
		paths: {
			pl: "/oferta/rzezby",
			en: "/offer/sculptures",
			de: "/angebot/skulpturen",
		},
	},

	data() {
		return {
			photosMainPath: "photos/oferta/rzezby/",
			photos: [
				{ src: "1.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "2.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "3.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "4.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "5.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "6.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "7.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "8.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "9.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "10.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "11.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "12.webp", alt: "Rzeźba", title: "", description: "" },
				//
				{ src: "14.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "15.webp", alt: "Rzeźba", title: "", description: "" },
				//
				{ src: "18.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "19.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "20.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "21.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "22.webp", alt: "Rzeźba", title: "", description: "" },
				{ src: "23.webp", alt: "Rzeźba", title: "", description: "" },
			],
		}
	}
}
</script>
