<template>
  <input :checked="checked" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
</template>

<script>
  export default {
    name: "checkbox-element",
    props: {
      checked: {
        type: Boolean
      }
    }, 
  }
</script>

<style lang="css" scoped>
  .form-check-input{
    cursor: pointer;
  }
  .form-check-input_orange{
    background-color: #FF8800;
    border-color: #FF8800;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  }
</style>