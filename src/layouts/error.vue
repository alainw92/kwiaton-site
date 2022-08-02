<i18n>
{
	"pl": {
		"errorOccurred": "Wystąpił błąd",
		"errorCode": "Kod błędu:",
		"404": "Brak strony pod tym adresem"
	},
	"en": {
		"errorOccurred": "An error occurred",
		"errorCode": "Error code:",
		"404": "Missing page, check URL"
	},
	"de": {
		"errorOccurred": "Ein Fehler ist aufgetreten",
		"errorCode": "Fehlercode:",
		"404": "Fehlende Seite, URL prüfen"
	}
}
</i18n>

<template>
	<v-alert prominent type="error">
		<h1>{{ $t('errorOccurred') }}</h1>
		<p class="font-bigger">{{ `${$t('errorCode')} ${statusCode}` }}</p>
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
      if (this.statusCode === 404) return this.$t('404');
      //
			return this.error.message || "<%= messages.client_error %>";
		},
	},
};
</script>
