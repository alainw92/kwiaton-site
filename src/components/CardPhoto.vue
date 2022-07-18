<template>
	<v-card tile elevation="0" class="pa-1 full-height full-width relative" :style="{ '--title-height': titleHeight }">
		<div :style="{ height: titleHeight }" class="card-title">
			{{ name }}
		</div>
		<div class="diamond"></div>
		<!-- <transition name="slide-x-transition"> -->
		<v-img :src="imgSrc" width="100%" :height="`calc(100% - ${titleHeight})`" transition="scroll-x-transition">
			<div class="img-ornament d-flex align-end">
				<div v-if="isContent" class="card-content"><slot></slot></div>
			</div>
		</v-img>
		<!-- </transition> -->
	</v-card>
</template>

<script>
export default {
	name: "CardPhoto",

	props: {
		top: {
			type: Boolean,
			default: false,
		},
		bottom: {
			type: Boolean,
			default: false,
		},
		//
		name: {
			type: String,
			default: "",
		},
		imgSrc: {
			type: String,
			default: "",
		},
		href: {
			type: String,
			default: "/",
		},
		alt: {
			type: String,
			default: "",
		},
	},

	data() {
		return {
			titleHeight: "4rem",
		};
	},

	computed: {
		isTop() {
			if (this.top) return true;
			if (this.bottom) return false;
			return true;
		},
		isContent() {
			return this.$slots.default && this.$slots.default.length;
		}
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";

.card-title {
	position: relative;
	font-family: $font-deco;
	background-color: var(--v-text-base);
	background-image: linear-gradient(20deg, var(--v-secondary-base), var(--v-text-base));
	color: var(--v-bgLight-base);
	display: flex;
	align-items: center;
	font-size: 2rem;
	padding: 0 1em;
	/* border-bottom: medium solid var(--v-bgLight-base); */
	box-shadow: 0px 5px 10px -5px rgba(200, 80, 0, 0.5);
	z-index: 1;
}

.img-ornament {
	position: relative;
	border: 3px solid var(--v-bgLight-base);
	width: calc(100% - 2 * 8px);
	height: calc(100% - 2 * 8px);
	margin: 8px;
	padding: 12px;
}

.diamond {
	position: absolute;
	top: calc(var(--title-height) + 13px);
	right: clamp(1rem, 10%, 5rem);
	width: 1.5rem;
	height: 1.5rem;
	background-color: var(--v-bgLight-base);
	transform: translateY(-50%) rotate(45deg);
	z-index: 2;
}

.card-content {
	position: relative;
	width: calc(100% + 24px);
	margin: -12px;
	padding: 16px 12px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--v-bgLight-base);
		opacity: 0.5;
		z-index: -1;
	}
}
</style>
