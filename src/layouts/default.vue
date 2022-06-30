<template>
  <div>
	<TheHeader />
	<div>
		<Nuxt />
	</div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader';

export default {
	name: 'DefaultLayout',
	components: {
		TheHeader
	}
}
</script>