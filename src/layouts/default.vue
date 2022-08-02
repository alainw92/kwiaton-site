<i18n>
{
	"pl": {
		"cookies": "Ciasteczka",
		"ok": "Rozumiem",
		"cookies_text": "Ta strona używa ciasteczek (cookies), dzięki którym może działać lepiej.",
		"cookies_link": "Dowiedz się więcej o ciasteczkach.",
		"cookies_url": "https://wszystkoociasteczkach.pl/"
	},
	"en": {
		"cookies": "Cookies",
		"ok": "I understand",
		"cookies_text": "This website uses cookies to make it work better.",
		"cookies_link": "Find out more about cookies.",
		"cookies_url": "https://allaboutcookies.org/"
	},
	"de": {
		"cookies": "Kekse",
		"ok": "Ich verstehe",
		"cookies_text": "Diese Seite verwendet Kekse (Cookies), damit sie besser funktionieren kann.",
		"cookies_link": "Erfahren Sie mehr über Cookies.",
		"cookies_url": "https://allaboutcookies.org/ge"
	}
}
</i18n>

<template>
	<v-app>
		<transition name="slide-y-transition">
			<loading v-if="loading"></loading>
		</transition>
		<the-mobile-menu></the-mobile-menu>
		<v-main>
			<TheHeader />
			<v-container>
				<Nuxt />
			</v-container>
			<TheFooter />
		</v-main>

		<!-- COOKIES DIALOG -->
		<v-dialog v-model="cookiesAcceptedDialog" overlay-opacity="0.3" :max-width="isMobile ? '90%' : '50%'" width="600">
			<card>
				<v-card-title>{{ $t("cookies") }}</v-card-title>
				<v-card-text>
					{{ $t("cookies_text") }}
					<br />
					<a :href="$t('cookies_url')" target="_blank">{{ $t("cookies_link") }}</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn tile outlined color="text" @click="closeCookiesWindow()">{{ $t("ok") }}</v-btn>
				</v-card-actions>
			</card>
		</v-dialog>

		<!-- SCROLL BTN -->
		<v-fab-transition>
			<v-btn
				v-show="!hiddenScrollBtn"
				color="text"
				fab
				dark
				small
				fixed
				bottom
				right
				@click="scrollTop"
			>
				<v-icon>$up</v-icon>
			</v-btn>
		</v-fab-transition>
	</v-app>
</template>

<script>
import cookiesMixin from "~/mixins/cookiesMixin.js";
import { debounce } from "~/helpers/debounce.js";
import { mapMutations } from "vuex";

export default {
	name: "DefaultLayout",

	mixins: [cookiesMixin],

	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
		return {
			htmlAttrs: {
				...i18nHead.htmlAttrs,
			},
			meta: [...i18nHead.meta],
			link: [...i18nHead.link],
		};
	},

	data() {
		return {
			loading: true,
			cookiesAcceptedDialog: false,
			hiddenScrollBtn: true,
		};
	},

	computed: {
		isMobile() {
			return this.$store.state.isMobile;
		},
	},

	methods: {
		...mapMutations(["setMobile"]),

		onScroll() {
			if (window.scrollY > 1.5 * window.innerHeight) {
				this.hiddenScrollBtn = false;
			} else {
				this.hiddenScrollBtn = true;
			}
		},
		scrollTop() {
			this.$vuetify.goTo(0, { duration: 300 })
		},

		// cookies
		closeCookiesWindow() {
			this.createCookie("cookies_accepted", "T", 365);
			this.cookiesAcceptedDialog = false;
		},
		checkCookies() {
			if (this.readCookie("cookies_accepted") != "T") {
				this.cookiesAcceptedDialog = true;
			}
		},
	},

	mounted() {
		this.checkCookies();
		//
		this.setMobile(window.innerWidth < 600);
		window.addEventListener(
			"resize",
			debounce(() => {
				this.setMobile(window.innerWidth < 600);
			}, 100)
		);
		//
		window.addEventListener(
			"scroll",
			debounce(() => {
				this.onScroll();
			}, 100)
		);
		this.loading = false;
	},
};
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
	.container {
		max-width: 1185px !important;
	}
}

.v-dialog {
	border-radius: 0 !important;
}
</style>
