<template>
<button class="btn_background heading-6">
  <slot></slot>
</button>
</template>

<script>
  export default {
    name: "btn-background",
  }
</script>

<style scoped>
  .btn_background{
    border-radius: 12px;
    background: var(--accent-color-ff-8800);  
    padding: 12px 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    transition: 0.15s ease-in;
    display: block;
    border: none;
  }
  .btn_background:hover{
    background: #E97E03;
  }
  .btn_background:active{
    background: var(--accent-color-ff-704-d);
  }

</style>