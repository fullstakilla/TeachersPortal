<template>
  <div class="block_el_text_contacts">
    <p class="name_text_contacts">{{title}}</p>
    <p class="description-text">{{description}}</p>
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
    },
  }
</script>

<style scoped>
  .block_el_text_contacts {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .block_el_text_contacts:nth-child(5){
    gap: 0;
  }
  .name_text_contacts {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .description-text {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-333333-text);
  }
  .block_el_text_contacts:nth-child(6) .description-text {
    padding-top: 1px;
    border-bottom: 1px solid var(--heading-333333-text);
    cursor: pointer;
  }

</style>