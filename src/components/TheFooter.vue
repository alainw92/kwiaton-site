<template>
	<footer aria-label="footer">
		<div class="footer">
			<p class="text-center">
				<v-btn
					text
					href="https://www.facebook.com/kwiatonboguchwala"
					target="_blank"
				>
					<v-icon-fb left>$facebook</v-icon-fb>
					Facebook
				</v-btn>
			</p>

			<p v-for="(item, i) in items" :key="i" class="d-flex align-center ml-6">
				<span class="footer__icon"><v-icon small class="pr-2">{{ item.icon }}</v-icon></span>
				<span v-html="item.text"></span>
			</p>

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
				{ icon: "$address", text: `36-040 Boguchwała, ul. Cicha 32A` },
				{ icon: "$tel", text: `(17) 873 32 40` },
				{ icon: "$mobile", text: `(+48) 504 102 160` },
				{
					icon: "$email",
					text: `&#105;&#110;&#102;&#111;&#064;&#107;&#119;&#105;&#097;&#116;&#111;&#110;&#045;&#115;&#122;&#116;&#117;&#107;&#097;&#116;&#111;&#114;&#115;&#116;&#119;&#111;&#046;&#099;&#111;&#109;&#046;&#112;&#108;`,
				},
			],
		};
	},

	computed: {
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
	padding: 1em;
	margin-top: 1em;

	.footer__icon {
		display: inline-block;
		text-align: center;
		width: 1.5rem;
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
</style>
