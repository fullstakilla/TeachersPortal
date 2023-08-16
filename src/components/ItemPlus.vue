<template>
  <div class="fsc-container-left__items-item">
    <h2 class="fsc-container-left__items-item__h2">{{description}}<span>{{symbol}}</span></h2>
    <p class="fsc-container-left__items-item__p description-text">{{title}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      description: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      symbol: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .fsc-container-left__items-item {
    max-width: 123px;
    margin-right: 48px;
  }
  .fsc-container-left__items-item:nth-child(2) {
    max-width: 121px;
  }
  .fsc-container-left__items-item:nth-child(3) {
    max-width: 207px;
    margin-right: 0;
  }
  .fsc-container-left__items-item__h2 {
    color: var(--heading-333333-text);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    margin-bottom: 8px;
  }
  .fsc-container-left__items-item__h2 > span {
    color: var(--accent-color-ff-8800);
  }
  .fsc-container-left__items-item__p {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
  } 
  @media screen and (max-width: 1330px){
    .fsc-container-left__items-item {
      margin: 0 auto;
    }
    .fsc-container-left__items-item__h2 {
      text-align: center;
    }
    .fsc-container-left__items-item__p {
      text-align: center;
    }
  }
  @media screen and (max-width: 700px){
    .fsc-container-left__items-item {
      margin-bottom: 20px;
    }
    .fsc-container-left__items-item:last-child {
      margin: 0 auto;
    }
    .fsc-container-left__items-item:last-child {
      grid-column: 1 / span 2; 
      justify-self: center;
    }
    .fsc-container-left__items-item__h2{
      font-size: 26px;
    }
    @media screen and (max-width: 520px){
      .fsc-container-left__items-item__h2{
      font-size: 20px;
    }
    }
  }
</style>