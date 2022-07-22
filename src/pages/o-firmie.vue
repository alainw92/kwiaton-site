<i18n>
{
	"pl": {
		"title": "O firmie",
		"heading": "O firmie",
		"about1": {
			"photoAlt": "O firmie, betonowa altana, rotunda na kolumnach",
			"heading": "Co robimy?",
			"paragraph1": "Firma powstała 5 września 1991 roku w Boguchwale przy ulicy Tkaczowa 188. Prace wykończeniowe o charakterze artystycznym oraz renowacje budynków zabytkowych i historycznych są głównym przedmiotem naszej działalności.",
			"paragraph2": "Zajmujemy się produkcją elementów sztukatorskich do zabytków oraz wykonujemy detale i formy architektoniczne do wykańczanych domów. Naszą specjalnością jest również produkcja balustrad oraz kolumn. Rekonstruujemy detale oraz produkujemy nietypowe reklamy, jak dinozaury. Wykonujemy nietypowe roboty budowlane, np. schody wachlarzowe, portale wejściowe czy fontanny. W ofercie posiadamy także elementy do szalunków kartonowych oraz makiety elementów architektonicznych."
		},
		"about2": {
			"photoAlt": "Ogródek",
			"heading": "Każdego klienta traktujemy indywidualnie",
			"paragraph1": "KWIATON to grupa profesjonalistów o różnych specjalizacjach, których rzetelność, precyzja i bogate doświadczenie są ważnymi atutami. To, co wyrónia Pracownię Sztukatorską z wielu innych firm zajmujących się podobną działalnością to indywidualne podejście do Klienta, szukanie oryginalnych rozwiązań, autorskich technologii, podejmowanie wyzwań artystycznych i konstruktorskich, a wszystko po to, aby realizować Państwa marzenia o pięknym i funkcjonalnym wnętrzu domu i jego otoczeniu."
		}
	},
	"en": {
		"title": "About us",
		"heading": "About us",
		"about1": {
			"photoAlt": "about us, concrete bower, rotunda on columns",
			"heading": "What we do?",
			"paragraph1": "The company was founded on September 5, 1991 in Boguchwała, Poland. Finishing works of an artistic nature and renovation of historical buildings are the main subject of our activity.",
			"paragraph2": "We produce stucco elements for monuments and we make details and architectural forms for finished houses. We also specialize in the production of balustrades and columns. We reconstruct details and produce unusual advertisements, such as dinosaurs. We perform unusual construction works, e.g. fan stairs, entrance portals and fountains. Our offer also includes elements for cardboard formwork and models of architectural elements."
		},
		"about2": {
			"photoAlt": "Ogródek",
			"heading": "Każdego klienta traktujemy indywidualnie",
			"paragraph1": "KWIATON to grupa profesjonalistów o różnych specjalizacjach, których rzetelność, precyzja i bogate doświadczenie są ważnymi atutami. To, co wyrónia Pracownię Sztukatorską z wielu innych firm zajmujących się podobną działalnością to indywidualne podejście do Klienta, szukanie oryginalnych rozwiązań, autorskich technologii, podejmowanie wyzwań artystycznych i konstruktorskich, a wszystko po to, aby realizować Państwa marzenia o pięknym i funkcjonalnym wnętrzu domu i jego otoczeniu."
		}
	},
	"de": {
		"title": "Über uns",
		"heading": "Über uns",
		"about1": {
			"photoAlt": "über uns, betonlaube, rotunde auf säulen",
			"heading": "Was machen wir?",
			"paragraph1": "Das Unternehmen wurde am 5. September 1991 in Boguchwała in Tkaczowa 188 gegründet. Hauptgegenstand unserer Tätigkeit sind künstlerische Ausbauarbeiten und die Renovierung historischer Gebäude.",
			"paragraph2": "KWIATON is a group of professionals with various specializations, whose reliability, precision and extensive experience are important advantages. What distinguishes the Stucco Studio from many other companies dealing with similar activities is an individual approach to the client, looking for original solutions, proprietary technologies, taking up artistic and construction challenges, all in order to make your dreams about a beautiful and functional home and its interior come true. surroundings."
		},
		"about2": {
			"photoAlt": "Ogródek",
			"heading": "Każdego klienta traktujemy indywidualnie",
			"paragraph1": "KWIATON ist eine Gruppe von Fachleuten mit unterschiedlichen Spezialisierungen, deren Zuverlässigkeit, Präzision und langjährige Erfahrung wichtige Vorteile sind. Was das Stucco Studio von vielen anderen Unternehmen mit ähnlichen Aktivitäten unterscheidet, ist eine individuelle Herangehensweise an den Kunden, die Suche nach originellen Lösungen, proprietäre Technologien, die Aufnahme künstlerischer und baulicher Herausforderungen, um Ihre Träume von einem schönen und funktionalen Zuhause zu verwirklichen Sein Inneres wird wahr."
		}
	}
}
</i18n>

<template>
	<main>
		<h1 class="text-h4 mb-6 ml-4">{{ $t("heading") }}</h1>
		<!-- Co robimy -->
		<v-row>
			<v-col cols="12" md="6" lg="7" order="2" order-md="1">
				<card class="full-height">
					<v-img src="photos/o-firmie/about.jpg" height="100%" cover :alt="$t('about1.photoAlt')"></v-img>
				</card>
			</v-col>
			<v-col cols="12" md="6" lg="5" order="1" order-md="2">
				<card class="pa-8 full-height">
					<article>
						<h2 class="text-h5 text-indent ml-2 mb-4">{{ $t("about1.heading") }}</h2>
						<p class="text-indent text-justify">
							{{ $t("about1.paragraph1") }}
						</p>
						<p class="text-indent text-justify mb-0">
							{{ $t("about1.paragraph2") }}
						</p>
					</article>
				</card>
			</v-col>
		</v-row>
		<!-- Każdego indywidualnie -->
		<v-row>
			<v-col cols="12" md="6" lg="5">
				<card class="pa-8 full-height">
					<article>
						<h2 class="text-h5 text-indent ml-2 mb-4">{{ $t("about2.heading") }}</h2>
						<p class="text-indent text-justify">
							{{ $t("about2.paragraph1") }}
						</p>
					</article>
				</card>
			</v-col>
			<v-col cols="12" md="6" lg="7">
				<card class="full-height">
					<v-img
						lazy-src="photos/o-firmie/7-min.webp"
						src="photos/o-firmie/7.webp"
						height="100%"
						cover
						:alt="$t('about2.photoAlt')"
					></v-img>
				</card>
			</v-col>
		</v-row>
		<!-- Nagrody i certyfikaty -->
		<v-row>
			<v-col cols="12" md="6" lg="7" order-md="2" order-lg="1">
				<card class="pa-8 full-height">
					<article class="text-justify text-indent">
						<h2 class="text-h5 mb-4 text-left">Nagrody i certyfikaty</h2>
						<p>
							W naszej długoletniej działalności otrzymaliśmy wiele nagród, certyfikatów, podziękowań i dowodów
							uznania dla naszej pracy:
						</p>
						<ul class="text-indent-0">
							<li>
								Złoty medal w konkursie na atrakcyjność stoiska, kompletność i merytoryczność prezentowanej
								oferty na 25 Międzynarodowych Targach Budownictwa InterRes
							</li>
							<li>Certyfikat ukończenia szkolenia na temat "Ochrona, naprawa i dekoracja elewacji budynków".</li>
							<li>Podziękowania za renowację Kościoła pod wezwaniem Chrystusa Króla w Rzeszowie.</li>
							<li>
								Podziękowania od Metropolity Przemyskiego Arcybiskupa Józefa Michalika za pomoc w budowie krzyża
								na Górze Tarnica w Bieszczadach.
							</li>
						</ul>
					</article>
				</card>
			</v-col>
			<v-col cols="12" md="6" lg="5"  order-md="1" order-lg="2">
				<card class="full-height">
					<v-img
						lazy-src="photos/o-firmie/7-min.webp"
						src="photos/o-firmie/7.webp"
						height="100%"
						cover
						:alt="$t('about2.photoAlt')"
					></v-img>
				</card>
			</v-col>
		</v-row>
		<!-- Referencje -->
		<v-row>
			<v-col cols="12">
				<card class="pa-8 full-height">
					<article class="text-justify text-indent">
						<h2 class="text-h5 mb-4">Referencje</h2>
						<p>Wykonaliśmy wiele interesujących, ciekawych oraz pracochłonnych projektów.</p>
						<p>Naszymi klientami są osoby prywatne, kościoły, firmy jak i instytucje.</p>
						<p>Współpracujemy z wieloma znanymi architektami, projektantami oraz rzeźbiarzami. Nasi dotychczasowi klienci polecają nas swoim znajomym - to są najlepsze referencje. Robimy wszystko aby nasz klient był zadowolony. Realizowaliśmy także zlecenia w Austrii (Ziggerstorf) oraz w Niemczech (Golbach).</p>
						<p>W trakcie naszej wieloletniej działalności wykonaliśmy prace między innymi dla:</p>
						<ul class="text-indent-0">
							<li>Infores S.A. w Rzeszowie,</li>
							<li>Hotel Zakładu Karnego w Załężu,</li>
							<li>Podziękowania za renowację Kościoła pod wezwaniem Chrystusa Króla w Rzeszowie.</li>
							<li>Kościół pod wezwaniem Chrystusa Króla w Rzeszowie,</li>
							<li>Budynek zabytkowy w Łańcucie (Raichardówka),</li>
							<li>oraz dla wielu osób prywatnych.</li>
						</ul>
					</article>
				</card>
			</v-col>
		</v-row>
	</main>
</template>

<script>
export default {
	name: "AboutPage",

	nuxtI18n: {
		paths: {
			pl: "/o-firmie",
			en: "/about",
			de: "/uber-uns",
		},
	},

	head() {
		return {
			title: this.$t("title"),
		};
	},
};
</script>
