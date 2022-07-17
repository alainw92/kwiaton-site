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
			colorBase: "rgb(12,133,237)",
		};
	},

	computed: {
		color() {
			return this.colorOnHover ? "" : this.colorBase;
		},

		icon() {
			return this.round ? "fab fa-facebook" : "fab fa-facebook-square";
		},

		cssProps() {
			return {
				"--icon-color": this.colorBase,
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
