<template>
  <div class="questions">
    <div class="container">
      <h1 class="heading-1">Частые вопросы</h1>
      <Accordion />
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
  export default {
    components: {
      Accordion
    }
  }
</script>

<style scoped>
  .questions {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 50px;
  }
  @media screen and (max-width: 810px){
    .questions {
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px){
    .heading-1{
      text-align: center;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 520px){
    .questions {
      padding: 90px 0 64px 0;
    }
  }
</style>