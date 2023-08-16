<template>
  <div class="reviews-item__top-right">
    <img :src="img" alt="Error" class="star">
    <img :src="img" alt="Error" class="star">
    <img :src="img" alt="Error" class="star">
    <img :src="img" alt="Error" class="star">
    <img :src="img" alt="Error" class="star">
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        type: String, 
        required: true,
      }
    }
  }
</script>

<style scoped>
  .reviews-item__top-right {
    display: flex;
    margin-top: 9.5px;
  }
  .star {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 1.666px 1.333px 1.667px 1.333px;
  }
</style>