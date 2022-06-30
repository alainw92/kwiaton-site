<template>
<div class="error-page">
  <h1>Error</h1>
</div>
</template>

<script>
export default {
	name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  }
}
</script>

<style scoped>
.error-page {
	padding: 1em;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: red;
	z-index: 99;
}
</style>