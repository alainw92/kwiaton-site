<template>
	<v-app>
		<TheHeader />
		<div>
			<Nuxt />
		</div>
		<TheFooter class="footer" />
	</v-app>
</template>

<script>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";

export default {
	name: "DefaultLayout",
	components: {
		TheHeader,
		TheFooter,
	},
};
</script>

<style lang="scss" scoped>

</style>
