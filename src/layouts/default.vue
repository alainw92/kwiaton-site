<i18n>
{
	"pl": {
		"cookies": "Ciasteczka",
		"ok": "Rozumiem",
		"cookies_text": "Ta strona używa ciasteczek (cookies), dzięi którym może działać lepiej.",
		"cookies_link": "Dowiedz się więcej o ciasteczkach."
	},
	"en": {
		"cookies": "Cookies",
		"ok": "I understand",
		"cookies_text": "This website uses cookies to make it work better.",
		"cookies_link": "Find out more about cookies."
	},
	"de": {
		"cookies": "Kekse",
		"ok": "Ich verstehe",
		"cookies_text": "Diese Seite verwendet Kekse (Cookies), damit sie besser funktionieren kann.",
		"cookies_link": "Erfahren Sie mehr über Cookies."
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
				<v-card-title>{{ $t('cookies') }}</v-card-title>
				<v-card-text>
					{{ $t('cookies_text') }}
					<br />
					<a href="http://wszystkoociasteczkach.pl" target="_blank">{{ $t('cookies_link') }}</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn tile outlined color="text" @click="closeCookiesWindow()">{{ $t('ok') }}</v-btn>
				</v-card-actions>
			</card>
		</v-dialog>
	</v-app>
</template>

<script>
import cookiesMixin from '~/mixins/cookiesMixin.js';
import { debounce } from "~/helpers/debounce.js";
import { mapMutations } from "vuex";

export default {
	name: "DefaultLayout",

	mixins: [cookiesMixin],

	data() {
		return {
			loading: true,
			cookiesAcceptedDialog: false,
		};
	},

	computed: {
		isMobile() {
			return this.$store.state.isMobile;
		},
	},

	methods: {
		...mapMutations(["setMobile"]),

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
