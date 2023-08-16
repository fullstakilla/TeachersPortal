<template>
  <div class="card-container">
    <p class="card-number subtext">Задание № 257</p>
    <div class="card-urgent">
      <img src="@/assets/img/findpupil-img/fire_orange.svg" alt="">
      <p class="subheading">Срочное задание</p>
    </div>
    <p class="card-about subheading">Иностранные языки</p>
    <h5 class="card-title heading-5">Нужен репетитор по английскому</h5>
    <p class="card-about subheading">О задаче:</p>
    <p class="card-maintext subtext">
      Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начизучение и достичь своих целей. Я изучал английский в школе, но это было давно, и необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьереживу в США и работаю в международной компании, поэтому мне нужен репетитор, который смопомочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хнайти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебнагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить слексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивразговорное общение поможет выработать правильный акцент и научиться мыслить на английсязыке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиямудобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успв изучении английского языка!
    </p>
    <p class="card-term subheading">Срок:</p>
    <div class="card-date">
      <img src="@/assets/img/findpupil-img/Iconly/Two-tone/Calendar.svg" alt="">
      <p class="subtext">29.05.2023 - 05.07.2023</p>
    </div>
    <p class="card-budget subheading">Бюджет:</p>
    <h6 class="card-price heading-6">15 000 ₽</h6>
    <p class="card-payment subheading">Способ оплаты:</p>
    <p class="card-payment-type subtext">Банковской картой</p>
    <p class="card-email subheading">E-mail:</p>
    <a class="card-email-address subtext" href = "mailto: teacherportal@mail.ru">teacherportal@mail.ru</a>
    <p class="card-phone subheading">Телефон:</p>
    <p class="card-phone-number subtext">+7 (999) 999 - 99 - 99</p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .card-container{
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    max-width: 1050px;
    width: 100%;  
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
    gap: 8px;
  }
  .card-urgent > p {
    color: var(--accent-color-ff-8800);
    margin-bottom: 0;
  }
  .card-author {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-author > p {
    margin-bottom: 0;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author__circle > img{
    width: 32px;
    height: 32px;
  }
  .card-about {
    margin-top: 20px;
    margin-bottom: 4px;
  }
  .card-title {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-about {
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
    gap: 8px; 
  }
  .card-date > img{
    width: 24px;
    height: 24px;
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
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
    text-decoration: none;
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
</style>