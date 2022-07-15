<template>
  <v-icon :color="color" v-bind="$attrs">fab fa-facebook-square</v-icon>
</template>

<script>
export default {
	name: "FacebookIcon",
	data() {
		return {
			color: 'rgb(12,133,237)'
		}
	},
}
</script>