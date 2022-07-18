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
			<v-card tile>
				<v-card-title>Ciasteczka</v-card-title>
				<v-card-text>
					Ta strona używa ciasteczek (cookies), dzięki którym może działać lepiej.
					<br />
					<a href="http://wszystkoociasteczkach.pl" target="_blank">Dowiedz się więcej o ciasteczkach.</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn outlined color="text" @click="closeCookiesWindow()">Akceptuję</v-btn>
					<v-btn outlined @click="cookiesAcceptedDialog = false">Anuluj</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
import { debounce } from "~/helpers/debounce.js";
import { mapMutations } from "vuex";

export default {
	name: "DefaultLayout",

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
		createCookie(name, value, days) {
			let date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			let expires = "; expires=" + date.toGMTString();
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		readCookie(name) {
			let nameEQ = name + "=";
			let ca = document.cookie.split(";");
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
			}
			return null;
		},
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
