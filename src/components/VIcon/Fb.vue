<template>
	<v-icon :color="color" :class="colorOnHover ? 'hover' : ''" v-bind="$attrs" :style="cssProps">{{ icon }}</v-icon>
</template>

<script>
export default {
	name: "FacebookIcon",

	props: {
		round: {
			type: Boolean,
			default: false,
		},

		colorOnHover: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			//
		};
	},

	computed: {
		colorFb() {
			return this.$store.state.facebookColor;
		},

		color() {
			return this.colorOnHover ? "" : this.colorFb;
		},

		icon() {
			return this.round ? "fab fa-facebook" : "fab fa-facebook-square";
		},

		cssProps() {
			return {
				"--icon-color": this.colorFb,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.hover:hover {
	color: var(--icon-color);
}
</style>
