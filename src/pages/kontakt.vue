<i18n>
{
  "pl": {
    "contact": "Kontakt"
  },
  "en": {
    "contact": "Contact"
  },
  "de": {
    "contact": "Kontakt"
  }
}
</i18n>

<template>
	<main>
		<h1 class="text-h4 mb-6 ml-4">{{ $t('contact') }}</h1>
		<v-row>
			<v-col cols="12" md="6">
				<card class="px-6 py-8 full-height d-flex flex-column align-stretch">
					<h2 class="text-h5 mb-4">ZPUH Kwiaton Pracownia Sztukatorska</h2>
					<h3 class="text-h6 mb-6">Wiesław Kwiatkowski</h3>
					<div v-for="(item, i) in items" :key="i" class="d-flex align-center py-4">
						<span class="footer__icon"
							><v-icon>{{ item.icon }}</v-icon></span
						>
						<span v-html="item.text"></span>
					</div>
					<div class="text-center">
						<v-btn text tile :color="fbColor" :href="fbSrc" target="_blank" class="my-4">
							<v-icon-fb class="mr-4"></v-icon-fb>
							Kwiaton Boguchwała</v-btn
						>
					</div>
				</card>
			</v-col>
			<v-col cols="12" md="6">
				<card class="full-height">
					<v-img src="img/contact.jpg" height="100%" cover alt="Screenshot mapy dojazdu"></v-img>
				</card>
			</v-col>
		</v-row>
	</main>
</template>

<script>
export default {
	name: "ContactPage",

	nuxtI18n: {
		paths: {
			pl: "/kontakt", // -> accessible at /kontakt (no prefix since it's the default locale)
			en: "/contact", // -> accessible at /en/contact
			de: "/kontakte", // -> accessible at /de/kontakte
		},
	},

	head() {
		return {
			title: "Kontakt",
		};
	},

	data() {
		return {
			//
		};
	},

	computed: {
		items() {
			return this.$store.state.contactItems;
		},
		fbSrc() {
			return this.$store.state.facebookUrl;
		},
		fbColor() {
			return this.$store.state.facebookColor;
		},
	},
};
</script>

<style lang="scss" scoped>
.footer__icon {
	display: inline-block;
	text-align: center;
	width: 2rem;
	margin-right: 0.75rem;
}
</style>
