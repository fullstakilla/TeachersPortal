<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-fill">
      <router-view />
    </main>
  <Footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
  export default {
    components: {
      Header, 
      Footer
    },
  }
</script>

<style lang="css" scoped>

</style>