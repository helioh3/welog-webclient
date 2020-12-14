<template>
  <div>
    <div class="print:hidden">
      <preloader-panel></preloader-panel>
      <navbar-dashboard></navbar-dashboard>

      <main class="flex-1 bg-white">
        <router-view></router-view>
      </main>
    </div>

    <div class="printable">
      <div v-html="html" />
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../panel/pages/dashboard/NavbarDashboard'

export default {
  created () {
    this.$store.dispatch('getCategories')
  },

  components: {
    NavbarDashboard
  },

  computed: {
    /**
     * @return {string}
     */
    html () {
      return String(this.$store.state?.app?.printable ?? '')
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    },
  },
}
</script>

<style lang="css">

</style>
