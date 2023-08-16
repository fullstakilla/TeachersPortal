<template>
  <button class="btn_slide subheading">
    <slot></slot>
  </button>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .btn_slide{
    padding: 8px 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    border: none;
    width: 100%;
    border-radius: 12px;
  }
</style>