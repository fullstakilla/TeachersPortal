<template>
  <button class="full__btn heading-6">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "button-full"
  }
</script>

<style lang="css" scoped>
  .full__btn{
    display: none;
    align-items: center;
    padding: 12px 18px;
    gap: 6px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    border-radius: 12px;
    background: var(--accent-color-ff-8800);
    border: none;
    transition: 0.15s ease-in;
  }
  .full__btn:hover{
    background: #E97E03;
  }
  .full__btn:active{
    background: var(--accent-color-ff-704-d);
  }
  @media screen and (max-width: 1120px){
    .full__btn{
      display: flex;
    }
  }
  @media screen and (max-width: 920px){
    
  }
</style>