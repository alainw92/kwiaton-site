<template>
	<footer aria-label="footer">
		<div class="footer">
			<p class="text-center">
				<v-btn
					text
					:href="facebookUrl"
					target="_blank"
					aria-label="Facebook Link"
				>
					<v-icon-fb left></v-icon-fb>
					Facebook
				</v-btn>
			</p>

			<v-container>
				<v-row>
					<v-col v-for="(item, i) in items" :key="i" cols="12" md="6" :order-md="i" class="d-flex align-center">
						<span class="footer__icon"><v-icon>{{ item.icon }}</v-icon></span>
						<span v-html="item.text"></span>
					</v-col>
				</v-row>
			</v-container>

			<p class="copy">&copy; {{ year }} Kwiaton - Pracownia sztukatorska. Wszelkie prawa zastrzeżone.</p>
		</div>
		<div class="pt-2 pb-6 privacy">
			<nuxt-link to="/polityka-prywatnosci" class="link-alt font-smaller">polityka prywatności</nuxt-link>
		</div>
	</footer>
</template>

<script>
export default {
	name: "TheFooter",

	data() {
		return {
			items: [
				{ icon: "$tel", text: `(17) 873 32 40` },
				{ icon: "$mobile", text: `(+48) 504 102 160` },
				{ icon: "$address", text: `ul. Cicha 32A<br> 36-040 Boguchwała` },
				{
					icon: "$email",
					text: `&#105;&#110;&#102;&#111;&#064;&#107;&#119;&#105;&#097;&#116;&#111;&#110;&#045;&#115;&#122;&#116;&#117;&#107;&#097;&#116;&#111;&#114;&#115;&#116;&#119;&#111;&#046;&#099;&#111;&#109;&#046;&#112;&#108;`,
				},
			],
		};
	},

	computed: {
		facebookUrl() {
			return this.$store.state.facebookUrl;
		},

		year() {
			return new Date().getFullYear();
		},
	},
};
</script>

<style lang="scss" scoped>
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

	.contact-items {
		display: flex;
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
