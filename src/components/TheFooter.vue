<i18n>
{
	"pl": {
		"copyright": "Kwiaton - Pracownia sztukatorska. Wszelkie prawa zastrzeżone.",
		"privacyPolicy": "polityka prywatności"
	},
	"en": {
		"copyright": "Kwiaton - Stucco workshop. All rights reserved.",
		"privacyPolicy": "privacy policy [PL]"
	},
	"de": {
		"copyright": "Kwiaton - Stuckwerkstatt. Alle Rechte vorbehalten.",
		"privacyPolicy": "Datenschutz-Bestimmungen [PL]"
	}
}
</i18n>

<template>
	<footer aria-label="footer">
		<div class="footer">
			<p class="text-center">
				<v-btn
					text
					tile
					:href="facebookUrl"
					:color="facebookColor"
					target="_blank"
					aria-label="Facebook Link"
				>
					<v-icon-fb left></v-icon-fb>
					Facebook
				</v-btn>
			</p>

			<v-container>
				<v-row>
					<v-col v-for="(item, i) in items" :key="i" cols="12" md="6" class="d-flex align-center">
						<span class="footer__icon"><v-icon>{{ item.icon }}</v-icon></span>
						<span v-html="item.text"></span>
					</v-col>
				</v-row>
			</v-container>

			<p class="copy">&copy; {{ `${year} ${$t('copyright')}` }}</p>
		</div>
		<div class="pt-2 pb-6 privacy">
			<nuxt-link :to="localePath(privacySrc)" class="link-alt font-smaller">{{ $t('privacyPolicy') }}</nuxt-link>
		</div>
	</footer>
</template>

<script>
export default {
	name: "TheFooter",

	data() {
		return {
			privacySrc: '/polityka'
		};
	},

	computed: {
		items() {
			return this.$store.state.contactItems;
		},
		//
		facebookUrl() {
			return this.$store.state.facebookUrl;
		},
		facebookColor() {
			return this.$store.state.facebookColor;
		},
		//
		year() {
			return new Date().getFullYear();
		},
	},
};
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
	.container {
		max-width: 1185px !important;
	}
}

.footer {
	background-color: var(--v-bgLight-base);
	border-top: thin solid var(--v-basis-base);
	border-bottom: thin solid var(--v-basis-base);
	padding: 1rem;
	margin-top: 3rem;

	.footer__icon {
		display: inline-block;
		text-align: center;
		width: 2rem;
		margin-right: 0.75rem;
	}

	.copy {
		margin: 0;
		margin-top: 2rem;
		font-size: 0.8rem;
		text-align: center;
	}
}

.privacy {
	text-align: center;
}

.nuxt-link-exact-active {
	text-decoration: underline;
}
</style>
