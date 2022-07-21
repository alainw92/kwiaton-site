<i18n>
{
	"pl": {
		"title": "O firmie",
		"heading": "O firmie",
		"about": {
			"photoAlt": "O firmie, betonowa altana, rotunda na kolumnach",
			"heading": "Każdego klienta traktujemy indywidualnie",
			"par1": "Firma powstała 5 września 1991 roku w Boguchwale przy ulicy Tkaczowa 188. Prace wykończeniowe o charakterze artystycznym oraz renowacje budynków zabytkowych i historycznych są głównym przedmiotem naszej działalności.",
			"par2": "Zajmujemy się produkcją elementów sztukatorskich do zabytków oraz wykonujemy detale i formy architektoniczne do wykańczanych domów. Naszą specjalnością jest również produkcja balustrad oraz kolumn. Rekonstruujemy detale oraz produkujemy nietypowe reklamy, jak dinozaury. Wykonujemy nietypowe roboty budowlane, np. schody wachlarzowe, portale wejściowe czy fontanny. W ofercie posiadamy także elementy do szalunków kartonowych oraz makiety elementów architektonicznych."
		}
	},
	"en": {
		"title": "About us",
		"heading": "About us",
		"about": {
			"photoAlt": "about us, concrete bower, rotunda on columns",
			"heading": "We treat each client individually",
			"par1": "The company was founded on September 5, 1991 in Boguchwała, Poland. Finishing works of an artistic nature and renovation of historical buildings are the main subject of our activity.",
			"par2": "We produce stucco elements for monuments and we make details and architectural forms for finished houses. We also specialize in the production of balustrades and columns. We reconstruct details and produce unusual advertisements, such as dinosaurs. We perform unusual construction works, e.g. fan stairs, entrance portals and fountains. Our offer also includes elements for cardboard formwork and models of architectural elements."
		}
	},
	"de": {
		"title": "Über uns",
		"heading": "Über uns",
		"about": {
			"photoAlt": "über uns, betonlaube, rotunde auf säulen",
			"heading": "Wir behandeln jeden Kunden individuell",
			"par1": "Das Unternehmen wurde am 5. September 1991 in Boguchwała in Tkaczowa 188 gegründet. Hauptgegenstand unserer Tätigkeit sind künstlerische Ausbauarbeiten und die Renovierung historischer Gebäude.",
			"par2": "Wir produzieren Stuckelemente für Denkmäler und wir fertigen Details und architektonische Formen für fertige Häuser. Wir spezialisieren uns auch auf die Herstellung von Balustraden und Säulen. Wir rekonstruieren Details und produzieren ausgefallene Werbungen, wie zum Beispiel Dinosaurier. Wir führen außergewöhnliche Bauarbeiten durch, z.B. Fächertreppen, Eingangsportale und Springbrunnen. Unser Angebot umfasst auch Elemente für Kartonschalungen und Modelle von architektonischen Elementen."
		}
	}
}
</i18n>

<template>
	<main>
		<h1 class="text-h4 mb-6 ml-4">{{ $t('heading') }}</h1>
		<v-row>
			<v-col cols="12" md="6">
				<card class="full-height">
					<v-img
						src="img/about.jpg"
						height="100%"
						cover
						:alt="$t('about.photoAlt')"
					></v-img>
				</card>
			</v-col>
			<v-col cols="12" md="6">
				<card class="pa-8 full-height">
					<article>
						<h2 class="text-h5 text-indent ml-2 mb-4">{{ $t('about.heading') }}</h2>
						<p class="text-indent text-justify">
							{{ $t('about.par1') }}
						</p>
						<p class="text-indent text-justify mb-0">
							{{ $t('about.par2') }}
						</p>
					</article>
				</card>
			</v-col>
		</v-row>
	</main>
</template>

<script>
export default {
	name: 'AboutPage',

	nuxtI18n: {
		paths: {
			pl: "/o-firmie",
			en: "/about",
			de: "/uber-uns",
		},
	},

	head() {
		return {
			title: this.$t('title'),
		};
	},
};
</script>
