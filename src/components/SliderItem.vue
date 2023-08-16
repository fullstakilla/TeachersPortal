<template>
  <div class="slider-container__item">  
    <h2 class="slider-container__item__h2 heading-2">{{ title }}</h2>
    <p class="slider-container__item__p description-text">
      {{description}}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .slider-container__item {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    border-radius: 24px;
  }
  .slider-container__item:nth-child(2) {
    background: var(--aqua-color);
  }
  .slider-container__item:nth-child(3) {
    background: var(--green-color);
    margin-bottom: 0;
  }
  .slider-container__item__h2 {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .slider-container__item__p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  @media (max-width: 715px) {
    .heading-2 {
      text-align: center;
    }
    .slider-container__item__p {
      text-align: center;
    }
    .slider-container__item{
      align-items: center;
      padding: 16px;
    }
  }
  @media (max-width: 500px) {
    .slider-container__item{
      gap: 12px;
    }
    .heading-2{
      font-size: 26px;
    }
  }
  @media (max-width: 420px) {
    .heading-2{
      font-size: 22px;
    }
  }
  @media (max-width: 380px) {
    .heading-2{
      font-size: 20px;
    }
  }
</style>