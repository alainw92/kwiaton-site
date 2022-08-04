<i18n>
{
	"pl": {
		"loading": "Wczytywanie..."
	},
	"en": {
		"loading": "Loading..."
	},
	"de": {
		"loading": "Wird geladen..."
	}
}
</i18n>

<template>
	<v-overlay light opacity="1">
		<div class="bg"></div>
		<div class="sk-cube-grid">
			<div class="sk-cube sk-cube1"></div>
			<div class="sk-cube sk-cube2"></div>
			<div class="sk-cube sk-cube3"></div>
			<div class="sk-cube sk-cube4"></div>
			<div class="sk-cube sk-cube5"></div>
			<div class="sk-cube sk-cube6"></div>
			<div class="sk-cube sk-cube7"></div>
			<div class="sk-cube sk-cube8"></div>
			<div class="sk-cube sk-cube9"></div>
		</div>
		<div class="loading-text">{{ $t('loading') }}</div>
	</v-overlay>
</template>

<script>
export default {
	name: 'LoadingPage'
}
</script>

<style scoped>
.bg {
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200vw;
	height: 200vh;
	transform: translate(-50%, -50%);
	background-color: var(--v-bg-base);
	z-index: 0;
}
.loading-text {
	position: relative;
	color: var(--v-text-base);
	z-index: 1;
}

.sk-cube-grid {
	width: 60px;
	height: 60px;
	margin: 20px auto;
}

.sk-cube-grid .sk-cube {
	width: 33%;
	height: 33%;
	background-color: var(--v-text-base);
	float: left;
	-webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
	animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
	-webkit-animation-delay: 0s;
	animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
	0%,
	70%,
	100% {
		-webkit-transform: scale3D(1, 1, 1);
		transform: scale3D(1, 1, 1);
	}
	35% {
		-webkit-transform: scale3D(0, 0, 1);
		transform: scale3D(0, 0, 1);
	}
}

@keyframes sk-cubeGridScaleDelay {
	0%,
	70%,
	100% {
		-webkit-transform: scale3D(1, 1, 1);
		transform: scale3D(1, 1, 1);
	}
	35% {
		-webkit-transform: scale3D(0, 0, 1);
		transform: scale3D(0, 0, 1);
	}
}
</style>
