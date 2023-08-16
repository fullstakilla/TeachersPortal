<template>
  <button class="btnBorder heading-6">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "btn-border"
  }
</script>

<style scoped>
    .btnBorder{
      /* font-size: 20px; */
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      color: var(--accent-color-ff-8800);
      padding: 12px 18px;
      border-radius: 12px;
      border: 1px solid var(--accent-color-ff-8800);
      background: #fff;
      transition: 0.15s ease-in;
      height: 46px;
    }
    .btnBorder:hover{
      color: #E97E03;
      border: 1px solid #E97E03;
    }
    .btnBorder:active{
      color: var(--accent-color-ff-704-d);
      border: 1px solid var(--accent-color-ff-704-d);
    }
</style>