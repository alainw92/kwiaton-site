<template>
	<main :style="cssProps">
		<v-row>
			<v-col cols="12">
				<card>
					<div class="bordered pa-6">
						<h1 class="text-h4 ml-6 mb-4">Witamy</h1>
						<p class="mb-0">
							Firma powstała 5 września 1991 roku w Boguchwale przy ulicy Tkaczowej 188. Prace wykończeniowe o
							charakterze artysycznym oraz renowacje budynków zabytkowych i historycznych są głównym przedmiotem
							naszej działalności.
						</p>
					</div>
				</card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="main-card">
				<card-photo :name="mainCard.name" :img-src="mainCard.imgSrc" :href="mainCard.href" :alt="mainCard.alt">
					TEST
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
				<card-photo :name="card.name" :img-src="card.imgSrc" :href="card.href" :alt="card.alt"></card-photo>
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
					name: "Balustrady",
					imgSrc: "photos/balustrada.jpg",
					href: "a",
					alt: "Zdjęcie domu z balustradą betonową",
					isMain: true,
				},
				{ name: "Detale", imgSrc: "photos/plaskorzezba.jpg", href: "b", alt: "fota 2", isMain: false },
				{ name: "Wnętrza", imgSrc: "photos/wnetrze.jpg", href: "c", alt: "fota 3", isMain: false },
				{ name: "Rzeźby", imgSrc: "photos/rzezba.jpg", href: "d", alt: "fota 4", isMain: false },
			],
		};
	},

	computed: {
		mainCard() {
			return this.cardPhotos.find((card) => card.isMain);
		},
		mainCardHeight() {

		},
		secondaryCards() {
			return this.cardPhotos.filter((card) => !card.isMain);
		},

		cssProps() {
			return {
				'--card-height': this.cardHeight
			}
		}
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
