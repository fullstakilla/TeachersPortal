<template>
  <div class="subjects-container__item">
    <router-link to="/TeachersPortal/FindTeachers" class="router_page">
      <div class="subjects-container__item__p description-text">
        {{title}}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String, 
        required: true,
      }
    }
  }
</script>

<style scoped>
  .subjects-container__item {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 16px;
    background: var(--accent-color-ffffff);
    border: none;
    transition: 0.15s ease-in;
  }
  .subjects-container__item:hover {
    cursor: pointer;
  }
  .description-text:hover{
    color: var(--accent-color-ff-8800);
  }
  .subjects-container__item div.heading-6 {
    color: var(--accent-color-ffffff);
  }
  .subjects-container__item__p {
    color: var(--heading-222222-heading);
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    transition: 0.15s ease-in;
  }
  .router_page{
    text-decoration: none;
  }
  @media screen and (max-width: 964px){
    .subjects-container__item:nth-child(15) {
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 608px){
    .subjects-container__item:last-child {
      grid-column: span 1; 
    }
    .subjects-container__item:nth-child(15) {
      grid-column: span 1;
    }
  }
</style>