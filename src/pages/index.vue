<template>
	<div>Strona główna
		<p v-for="i in 10" :key="i">{{ i }}</p>
	</div>
</template>

<script>
export default {
	name: "SartPage",

	head() {
		return {
			title: "Strona Główna",
		};
	},
};
</script>

<style>
</style>