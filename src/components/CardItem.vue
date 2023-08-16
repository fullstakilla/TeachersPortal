<template>
  <div class="under-fsc-container__card">
    <router-link :to="ToPage" class="router_link">
      <div class="under-fsc-container__card-caption">
        <p class="under-fsc-container__card-caption__p">{{title}}</p>
        <img src="@/assets//img/mainpage-img/ArrowRightorange.svg" alt="" class="under-fsc-container__card-caption__img">
      </div>
    </router-link>
    <div class="under-fsc-container__card__p description-text">{{description}}
    </div>
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
    computed: {
      ToPage(){
        if(this.title === 'Поиск репетитора'){
          return '/TeachersPortal/FindTeachers'
        }
        else if(this.title === 'Поиск учеников'){
          return '/TeachersPortal/FindPupils'
        }
      }
    }
  }
</script>

<style scoped>
  .under-fsc-container__card {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    border-radius: 16px;
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  } 
  .under-fsc-container__card-caption {
    display: flex;
    align-items: center;
  } 
  .under-fsc-container__card-caption__p {
    color: var(--accent-color-ff-8800);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    margin-right: 8px;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
    transition: 0.15s ease-in;
  }
  .under-fsc-container__card-caption__p:hover {
    cursor: pointer;
    color: #E97E03;
  }
  .under-fsc-container__card-caption__p:active {
    color: var(--accent-color-ff-704-d);
  }
  .under-fsc-container__card-caption__img {
    width: 24px;
    height: 24px;
  }
  .under-fsc-container__card__p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .router_link{
    text-decoration: none;
  }
  @media (max-width: 679px) {
    .under-fsc-container__card-caption {
      margin: 0 auto;
    }
    .router_link{
      margin: 0 auto;
    }
    .under-fsc-container__card__p {
      text-align: center;
    }
  }
</style>