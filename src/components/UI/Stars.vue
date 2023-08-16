<template>
  <div class="stars_section">
    <img :src="imgStar" alt="">
  </div>
</template>

<script>
  export default {
    props: {
      imgStar: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style scoped>
  .stars_section{
    display: flex !important;
    align-items: center;
  }
</style>