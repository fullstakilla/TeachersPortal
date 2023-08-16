<template>
  <div class="first-screen-content container">
    <div class="fsc-container">
      <div class="fsc-container-left">
        <div class="fsc-container-left__uptext">
          <h3 class="fsc-container-left__uptext__h3 heading-1">Онлайн-занятия с</h3>
          <div class="fsc-container-left__uptext__img">
            <img src="@/assets/img/mainpage-img/1circle.png" alt="" class="fsc-container-left__uptext__img-item">
            <img src="@/assets/img/mainpage-img/2circle.png" alt="" class="fsc-container-left__uptext__img-item">
            <img src="@/assets/img/mainpage-img/3circle.png" alt="" class="fsc-container-left__uptext__img-item">
            <div class="fsc-container-left__uptext__img-4item">
              <img src="@/assets/img/mainpage-img/4circle.png" alt="" class="fsc-container-left__uptext__img-4item-4">
              <p class="fsc-container-left__uptext__img-4item-p">+90</p>
            </div>
          </div>
        </div>
        <h3 class="fsc-container-left__uptext__h3 heading-1">опытными репетиторами</h3>
        <p class="fsc-container-left__p description-text">
            Подберите преподавателя, который подойдёт именно <br>
            вам, а мы позаботимся об остальном. Только лучшие <br>
            преподаватели, прошедшие строгий отбор.
          </p>
        <router-link to="/TeachersPortal/FindTeachers" class="router_page">
          <button class="fsc-container-left__button">
            <p class="fsc-container-left__button__p heading-5">Подобрать репетитора</p>
            <img src="@/assets/img/mainpage-img/ArrowRight.svg" alt="" class="fsc-container-left__button__img">
          </button>
        </router-link>
        <div class="fsc-container-left__items">
          <ItemPlus 
            v-for="itemEl of itemsEl"
            :key="itemEl.id"
            :title="itemEl.title"
            :description="itemEl.description"
            :symbol="itemEl.symbol"
          />
        </div>
      </div>
      <div class="fsc-container-right">
        <img src="@/assets/img/mainpage-img/girl.png" alt="" class="fsc-container-right__img">
      </div>
    </div>
  </div>
</template>

<script>
import ItemPlus from './ItemPlus.vue'
  export default {
    components: {
      ItemPlus
    },
    data(){
      return {
        itemsEl: [
          {id: 1, title: "Предметов для изучения", description: 92, symbol: "+"},
          {id: 2, title: "Опытных репетиторов", description: 250, symbol: "+"},
          {id: 3, title: "Учеников занимаются с нами сейчас", description: 1200, symbol: "+"},
        ],
      }
    }
  }
</script>

<style scoped>
  .first-screen-content {
    min-height: 606px
  }
  .fsc-container {
    background-color: var( --accent-color-fff-7-ef);
    display: flex;
    padding: 50px;
    justify-content: center;
    align-items: center;
    gap: 60px;
    border-radius: 24px;
  }
  .fsc-container-left {
    max-width: 680px;
    margin-right: 0px;
  }
  .fsc-container-left__uptext {
    display: flex;
  }
  .fsc-container-left__uptext__h3{
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .fsc-container-left__uptext > h3 {
    margin-right: 16px
  }
  .fsc-container-left__uptext__img {
    display: flex;
    height: 64px;
    align-items: center;
    max-width: 350px;
    position: relative;
  }
  .fsc-container-left__uptext__img-item {
    position: absolute;
    width: 64px;
    height: 64px;
    background-color: var(--accent-color-ffe-1-bf);
    border-radius: 50%;
    border: 2px solid var(--accent-color-ffffff);
  }
  .fsc-container-left__uptext__img-item:nth-child(2) {
    left: 35px;
  }
  .fsc-container-left__uptext__img-item:nth-child(3) {
    left: 70px;
  }
  .fsc-container-left__uptext__img-4item {
    border-radius: 50%;
    position: relative;
    width: 64px;
    height: 64px;
    left: 105px;
  }
  .fsc-container-left__uptext__img-4item-4 {
    background-color: var(--accent-color-ffe-1-bf);
    border-radius: 50%;
    width: 100%;
  }
  .fsc-container-left__uptext__img-4item-p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFF;
    font-family: 'TT Norms Pro', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .fsc-container-left__p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-top: 32px;
  }
  .fsc-container-left__button {
    display: flex;
    padding: 24px 32px;
    align-items: center;
    gap: 8px;
    background-color: var(--accent-color-ff-8800);
    border-radius: 16px;
    border: none;
    margin-top: 48px;
    max-width: 357px;
    justify-content: space-between;
    transition: 0.15s ease-in;
  }
  .fsc-container-left__button:hover {
    background: #E97E03;
    cursor: pointer;
  }
  .fsc-container-left__button:active {
    background: var(--accent-color-ff-704-d);
  }
  .fsc-container-left__button__p {
    color: var(--accent-color-ffffff);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .fsc-container-left__button__img {
    width: 24px;
    height: 24px;
  }
  .fsc-container-left__items {
    display: flex;
    margin-top: 56px;
  }
  .fsc-container-right {
    max-width: 570px;
    background: var(--accent-color-ffe-1-bf);
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
  }
  .fsc-container-right__img {
    width: 454px;
    height: 506px;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  .router_page{
    text-decoration: none;
  }
  @media (max-width: 1330px) {
    .fsc-container {
      flex-direction: column;
    }
    .fsc-container-left__p {
      text-align: center;
      margin-bottom: 30px;
    }
    .fsc-container-left__button {
      margin: 0 auto;
    }

  }
  @media (max-width: 1000px) {
    .first-screen-content {
      margin-top: 20px;
    }
  }
  @media (max-width: 814px) {
    .fsc-container-left__uptext__img {
      width: 150px;
      margin: 0 auto;
    }
    h3 {
      text-align: center;
    }
    .fsc-container-left__uptext {
      flex-direction: column;
    }
  }
  @media (max-width: 700px) {
    .fsc-container {
      gap: 30px;
    }
    .fsc-container-left__items {
      flex-direction: column;
      margin-top: 35px;
    }
    .fsc-container-left__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
    }
    .fsc-container-left__items-item:last-child {
      grid-column: 1 / span 2; 
      justify-self: center;
    }
  }
  @media (max-width: 550px) {
    .fsc-container {
      padding: 30px;
    }
  }
  @media (max-width: 400px) {
    .fsc-container-left__button {
      padding: 20px 28px 20px 28px;
    }
  }
  @media (max-width: 383px) {
    .fsc-container-left__button {
    }
  }
  @media (max-width: 361px) {
    .fsc-container-left__uptext__img {
      height: 50px;
    }
    .fsc-container-left__uptext__img-item {
      width: 50px;
      height: 50px;
    }
    .fsc-container-left__uptext__img-4item {
      width: 50px;
      height: 50px;
    }
    .fsc-container-left__uptext__img-4item-p {
      font-size: 16px;
    }
  }
</style>