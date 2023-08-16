<template>
  <div class="achieve-goals">
    <div class="achieve-goals-container container">
      <h3 class="achieve-goals-container__h3 heading-2">
        Помогаем достичь поставленных целей
      </h3>
      <div class="achieve-goals-container__under-h3">
        <div class="achieve-goals-container__under-h3-left">
          <AchieveItem 
            v-for="achieveElement of achieveElements"
            :key="achieveElement.id"
            :title="achieveElement.title"
            :description="achieveElement.description"
          />
        </div>
        <div class="achieve-goals-container__under-h3-right">
          <img src="@/assets/img/mainpage-img/uni.png" alt="" class="achieve-goals-container__under-h3-right__img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AchieveItem from './AchieveItem.vue'
  export default {
    components: {
      AchieveItem
    },
    data(){
      return {
        achieveElements: [
          {id: 1, title: "Выберите лучшего репетитора прямо сейчас!", description: "Наш сервис предоставляет широкий выбор репетиторов по разным предметам. Они подходят для учеников всех возрастов и уровней подготовки. Вы можете выбрать репетитора для постоянных занятий или для подготовки к экзаменам в любой точке мира."},
          {id: 2, title: "Удобный выбор и эффективное сотрудничество!", description: "Выбирайте репетитора нашего сервиса и получайте надежное сотрудничество с профессионалом своего дела! Наши репетиторы имеют многолетний опыт работы в области обучения и помогут вам быстро повысить свой уровень знаний."},
        ],
      }
    }
  }
</script>

<style scoped>
  .achieve-goals {
    margin-top: 100px;
  }
  .achieve-goals-container__h3 {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .achieve-goals-container__under-h3 {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    margin-top: 50px;
  }
  .achieve-goals-container__under-h3-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
  } 

  .achieve-goals-container__under-h3-right__img {
    width: 585px;
    height: 390px;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 1330px) {
    .achieve-goals-container__under-h3 {
      flex-direction: column;
    }
    .achieve-goals-container__under-h3-left-card {
      max-width: 10000px;
    }
    .achieve-goals-container__under-h3-right {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 810px){
    .achieve-goals-container__h3 {
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .achieve-goals{
      margin-top: 64px;
    }
    .achieve-goals-container__under-h3{
      margin-top: 32px;
    }
  }
  @media (max-width: 360px) {
    .achieve-goals{
      margin-top: 64px;
    }
    .achieve-goals-container__under-h3-left-cars__h2 {
      text-align: center;
    }
    .achieve-goals-container__under-h3-left-cars__p {
      text-align: center;
    }
  }

</style>