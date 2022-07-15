<template>
  <v-app>
    <the-mobile-menu></the-mobile-menu>
    <v-main>
      <TheHeader />
      <div>
        <Nuxt />
      </div>
      <TheFooter class="footer" />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";
import TheMobileMenu from "~/components/TheMobileMenu.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheFooter,
    TheMobileMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>
