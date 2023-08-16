<template>
  <div class="textarea_full">
    <p class="subheading">{{ description }}</p>
    <textarea class="textarea_el subtext" :placeholder="title"></textarea>
  </div>
</template>

<script>
  export default {
    name: "textarea-element",
    props: {
      description: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: false
      }
    },
  }
</script>

<style scoped>
  .textarea_full{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .textarea_el{
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--gray-cccccc);
    outline: none;
    min-height: 101px;
    font-family: 'TT Norms Pro', sans-serif;
    transition: 0.15s ease-in;
  }
  .textarea_el::placeholder{
    color: var(--gray-cccccc);
    transition: 0.15s ease-in;
  }
  .textarea_el:hover::placeholder{
    color: var(--heading-333333-text);
  }
  .textarea_el:focus{
    color: var(--heading-333333-text);
    border: 1px solid var(--accent-color-ff-8800);
  }
  .textarea_el:focus::placeholder{
    color: var(--heading-333333-text);
  }
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 4px;
    color: var(--heading-666666-text);
  }
</style>