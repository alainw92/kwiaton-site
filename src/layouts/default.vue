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
				<v-card-title>Ciasteczka</v-card-title>
				<v-card-text>
					Ta strona używa ciasteczek (cookies), dzięki którym może działać lepiej.
					<br />
					<a href="http://wszystkoociasteczkach.pl" target="_blank">Dowiedz się więcej o ciasteczkach.</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn tile outlined color="text" @click="closeCookiesWindow()">Rozumiem</v-btn>
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
