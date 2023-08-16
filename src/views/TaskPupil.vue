<template>
  <div class="main-content">
    <div class="main-content-cont container">
        <router-link @click="offInputs" class="router_page" to="/TeachersPortal/Account">
          <div class="return-back">
            <img src="@/assets/img/createpage-img/ArrowRight.svg" alt="">  
            <a class="heading-6">Вернуться в профиль</a>
          </div>
        </router-link>
      <div class="main-content-cards">
        <div class="profile-cont">
          <div class="profile-circle">
            <img src="@/assets/img/createpage-img/man.png" alt="">
          </div>
          <h5 class="profile-name heading-5">Александр Кайсаров</h5>
        </div>
        <div class="card-container">
          <p class="card-number subtext">Задание № 257</p>
          <div class="card-urgent">
            <img src="@/assets/img/createpage-img/solar_fire-line-duotone.svg" alt="">
            <p class="subheading">Срочное задание</p>
          </div>
          <p class="card-about subheading">Иностранные языки:</p>
          <h5 class="card-title heading-5">{{ $store.state.createInput.aboutValue }}</h5>
          <p class="card-about subheading">О задаче:</p>
          <p class="card-maintext subtext">Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!</p>
          <p class="card-term subheading">Срок:</p>
          <div class="card-date">
            <img src="@/assets/img/createpage-img/Iconly/Two-tone/Calendar.svg" alt="">
            <p class="subtext">29.05.2023 - 05.07.2023</p>
          </div>
          <p class="card-budget subheading">Бюджет:</p>
          <h6 class="card-price heading-6">{{$store.state.createInput.budgetValue}} ₽</h6>
          <p class="card-payment subheading">Способ оплаты:</p>
          <p class="card-payment-type subtext">Банковской картой</p>
          <p class="card-email subheading">E-mail:</p>
          <a class="card-email-address subtext" href = "mailto: teacherportal@mail.ru">{{ $store.state.createInput.emailValue }}</a>
          <p class="card-phone subheading">Телефон:</p>
          <p class="card-phone-number subtext">{{ $store.state.createInput.telValue }}</p>
          <div class="card-footer">
            <router-link to="/TeachersPortal/CreateTask" class="router_page">
              <div class="card-edit">
                <a class="heading-6">Редактировать задание</a>
                <img src="@/assets/img/createpage-img/Iconly/Two-tone/Edit.svg" alt="">
              </div>
            </router-link>
            <router-link @click="offInputs" to="/TeachersPortal/CreateTask" class="router_page"><a class="card-footer_a heading-6">Удалить задание</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'OffThem'
      ]),
      offInputs(){
        this.OffThem()
      }
    }
  }
</script>

<style scoped>
  .main-content {
    padding: 50px 0 100px 0;
  }
  .return-back {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .return-back > img {
    width: 24px;
    height: 22px;
  }
  .return-back > a {
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line: none;
    border-bottom: 1.5ps solid var(--accent-color-ff-8800);
    cursor: pointer;
  }
  .main-content-cont {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .main-content-cards {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    gap: 30px;
  }
  .profile-cont {
    display: flex;
    max-width: 330px;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 230px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .profile-circle {
    border-radius: 474.074px;
    background: var(--accent-color-ffe-1-bf);
    width: 128px;
    height: 128px;
    overflow: hidden;
  }
  .profile-circle > img {
    width: 128px;
    height: 128px;
  }
  .profile-name {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-container {
    max-width: 1200px;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .card-number {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 20px;
  }
  .card-urgent {
    display: flex;
    align-items: center;
  }
  .card-urgent > img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .card-urgent > p {
    color: var(--accent-color-ff-8800);
    margin-bottom: 0;
  }
  .card-title {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-about {
    margin-top: 20px;
    margin-bottom: 4px;
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-maintext {
    margin-top: 4px;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-term {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-date {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
  .card-date > img{
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .card-date > p{
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-budget {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-price {
    margin-top: 4px;
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-payment {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-payment-type {
    margin-top: 4px;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-email {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-email-address {
    margin-top: 4px;
    color: var(--accent-color-ff-8800);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration-line: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
  }
  .card-phone {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
  }
  .card-phone-number {
    margin-top: 4px;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .card-footer_a {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line:none;
    border-bottom: 1.5px solid var(--heading-666666-text);
    cursor: pointer;
  }
  .card-edit {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-edit > a {
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
    text-align: left;
    cursor: pointer;
  }
  .card-edit > img {
    display: flex;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
  }
  .router_page{
    text-decoration: none;
  }
  @media (max-width: 968px) {
    .main-content-cards{
      display: flex;
      flex-direction: column;
    }
    .profile-cont{
      max-width: 100%;
    }
  }
  @media (max-width: 810px) {
    .main-content{
      padding: 90px 0 100px 0;
    }
  }
  @media (max-width: 520px) {
    .card-footer{
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
</style>