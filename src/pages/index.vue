<i18n>
{
	"pl": {
		"welcome": "Witamy",
		"welcomeText": "Firma powstała 5 września 1991 roku w Boguchwale przy ulicy Tkaczowej 188. Prace wykończeniowe o charakterze artysycznym oraz renowacje budynków zabytkowych i historycznych są głównym przedmiotem naszej działalności.",
		"cardPhotos": {
			"balustrades": {
				"title": "Balustrady",
				"alt": "Dom z balustradą betonową"
			},
			"garden": {
				"title": "Ogród",
				"alt": "Altana betonowa do ogrodu"
			},
			"interiors": {
				"title": "Wnętrza",
				"alt": "Wnętrze sali ze sztukaterią"
			},
			"restorations": {
				"title": "Renowacje",
				"alt": "Odrestaurowana elewacja kamienicy"
			}
		}
	},
	"en": {
		"welcome": "Welcome",
		"welcomeText": "The company was founded on September 5, 1991 in Boguchwała, Poland. Finishing works of an artistic nature and renovation of historical buildings are the main subject of our activity.",
		"cardPhotos": {
			"balustrades": {
				"title": "Balustrades",
				"alt": "Photo of the house with concrete balustrade"
			},
			"garden": {
				"title": "Garden",
				"alt": "Concrete gazebo for the garden"
			},
			"interiors": {
				"title": "Interiors",
				"alt": "The interior of the hall with stucco"
			},
			"restorations": {
				"title": "Restorations",
				"alt": "The renovated facade of the tenement house"
			}
		}
	},
	"de": {
		"welcome": "Herzlich willkommen",
		"welcomeText": "Das Unternehmen wurde am 5. September 1991 in Boguchwała in Tkaczowa 188 gegründet. Hauptgegenstand unserer Tätigkeit sind künstlerische Ausbauarbeiten und die Renovierung historischer Gebäude.",
		"cardPhotos": {
			"balustrades": {
				"title": "Geländer",
				"alt": "Foto des Hauses mit Betonbalustrade"
			},
			"garden": {
				"title": "Garten",
				"alt": "Betonpavillon für den Garten"
			},
			"interiors": {
				"title": "Innenräume",
				"alt": "Das Innere der Halle mit Stuck"
			},
			"restorations": {
				"title": "Restaurierungen",
				"alt": "Die renovierte Fassade des Mietshauses"
			}
		}
	}
}
</i18n>

<template>
	<main :style="cssProps">
		<v-row>
			<v-col cols="12">
				<card>
					<div class="bordered pa-6">
						<h1 class="text-h4 ml-6 mb-4">{{ $t("welcome") }}</h1>
						<p class="mb-0">{{ $t("welcomeText") }}</p>
					</div>
				</card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="main-card">
				<card-photo
					:name="$t(`cardPhotos.${mainCard.name}.title`)"
					:img-src="mainCard.imgSrc"
					:href="mainCard.href"
					:alt="$t(`cardPhotos.${mainCard.name}.alt`)"
				>
				</card-photo>
			</v-col>
		</v-row>
		<v-row>
			<v-col
				v-for="card in secondaryCards"
				:key="card.href"
				cols="12"
				:md="12 / secondaryCards.length"
				:style="{ height: cardHeight }"
			>
				<card-photo
					:name="$t(`cardPhotos.${card.name}.title`)"
					:img-src="card.imgSrc"
					:href="card.href"
					:alt="$t(`cardPhotos.${card.name}.alt`)"
				></card-photo>
			</v-col>
		</v-row>
	</main>
</template>

<script>
export default {
	name: "SartPage",

	head() {
		return {
			title: "Strona Główna",
		};
	},

	data() {
		return {
			cardHeight: "30rem",
			cardPhotos: [
				{
					name: "balustrades",
					imgSrc: "photos/balustrada.webp",
					href: "/oferta/balustrady",
					isMain: true,
				},
				{ name: "garden", imgSrc: "photos/ogrod.webp", href: "/oferta/ogrod", isMain: false },
				{ name: "interiors", imgSrc: "photos/wnetrze.webp", href: "/oferta/wnetrza", isMain: false },
				{ name: "restorations", imgSrc: "photos/renowacja.webp", href: "/oferta/renowacje", isMain: false },
			],
		};
	},

	computed: {
		mainCard() {
			return this.cardPhotos.find((card) => card.isMain);
		},
		mainCardHeight() {},
		secondaryCards() {
			return this.cardPhotos.filter((card) => !card.isMain);
		},

		cssProps() {
			return {
				"--card-height": this.cardHeight,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.bordered {
	border: 2px solid var(--v-text-base);
}

.main-card {
	height: clamp(var(--card-height), 70vh, calc(var(--card-height) * 2));
}
</style>
