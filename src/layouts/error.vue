<template>
	<v-alert prominent type="error">
		<h1>Wystąpił błąd</h1>
		<p class="font-bigger">Kod błędu: {{ statusCode }}</p>
		<p class="mb-0">{{ message }}</p>
	</v-alert>
</template>

<script>
export default {
	name: "NuxtError",

	props: {
		error: {
			type: Object,
			default: null,
		},
	},

  head() {
		return {
			title: this.message,
			meta: [
				{
					name: "viewport",
					content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
				},
			],
		};
	},

	computed: {
		statusCode() {
			return (this.error && this.error.statusCode) || 500;
		},
		message() {
      if (this.statusCode === 404) return 'Brak strony pod tym adresem';
      //
			return this.error.message || "<%= messages.client_error %>";
		},
	},
};
</script>
