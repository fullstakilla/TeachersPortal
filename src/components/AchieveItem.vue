<template>
  <div class="achieve-goals-container__under-h3-left-card">
    <h2 class="achieve-goals-container__under-h3-left-cars__h2 heading-4">
      {{title}}
    </h2>
    <p class="achieve-goals-container__under-h3-left-cars__p">
      {{ description }}
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
  .achieve-goals-container__under-h3-left-card {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 24px;
    background: var(--green-color);
    max-width: 795px;
  }
  .achieve-goals-container__under-h3-left-card:last-child {
    background: var(--aqua-color);
  }
  .achieve-goals-container__under-h3-left-cars__h2 {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .achieve-goals-container__under-h3-left-cars__p {
    color: var(--heading-333333-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px;
  }
  @media screen and (max-width: 1330px){
    .achieve-goals-container__under-h3-left-card {
      max-width: 10000px;
    }
  }
  @media (max-width: 360px) {
    .achieve-goals-container__under-h3-left-cars__h2 {
      text-align: center;
    }
    .achieve-goals-container__under-h3-left-cars__p {
      text-align: center;
    }
  }
</style>