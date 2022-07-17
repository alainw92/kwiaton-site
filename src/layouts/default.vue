<template>
  <v-app>
    <v-overlay v-if="loading" opacity="1" :color="$vuetify.theme.themes.light.basis">Ładowanie...</v-overlay>
    <the-mobile-menu></the-mobile-menu>
    <v-main>
      <TheHeader />
      <v-container>
        <Nuxt />
      </v-container>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import { debounce } from "~/helpers/debounce.js";
import { mapMutations } from 'vuex';

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

  data() {
    return {
      loading: true
    }
  },

  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  },

  methods: {
    ...mapMutations(['setMobile'])
  },

  created() {
    // console.log('created');
  },

  mounted() {
    this.setMobile(window.innerWidth < 600);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setMobile(window.innerWidth < 600);
      }, 100)
    );
    this.loading = false;
    // console.log('mounted');
  },
};
</script>

<style lang="scss" scoped>
</style>
