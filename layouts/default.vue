<template>
  <v-app>
    <v-container class="pa-0">
      <header>
        <v-row>
          <v-col>
            <v-img src="./logo.png" contain aspect-ratio="3.2381"></v-img>
          </v-col>
          <v-col></v-col>
          <v-col><v-btn icon><v-icon>fab fa-facebook</v-icon></v-btn></v-col>
        </v-row>
      </header>
    </v-container>
    <nav class="mt-4 white" role="navigation">
      <v-container>
        <ul>
          <li v-for="link in menuItems" :key="link.to"><nuxt-link :to="link.to">{{ link.title }}</nuxt-link></li>
        </ul>
      </v-container>
      </nav>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="d-flex align-center justify-center">
      <span>&copy; {{ new Date().getFullYear() }} - Kwiaton. Pracownia sztukatorska</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      menuItems: [
        {
          icon: 'mdi-apps',
          title: 'Główna',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'O firmie',
          to: '/about',
        },
      ],
    }
  },
}
</script>

<style>
.theme--light.v-application {
  background-color: var(--v-bg-base);
}
</style>