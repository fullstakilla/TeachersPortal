<template>
  <div class="modal fade" id="modalConfirm" tabindex="-1" aria-labelledby="checkModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable ">
      <div class="modal-content">
        <div class="modal-body">
          <div class="card-container">
            <p class="card-number subtext">Задание № 257</p>
              <div class="card-urgent">
                <img src="@/assets/img/ui-img/fire.svg" alt="">
                <p class="subheading">Срочное задание</p>
              </div>
              <div class="card-author">
                <div class="card-author__circle">
                  <img src="@/assets/img/mainpage-img/1circle.png" alt="">
                </div>
                <p class="subtext">Александр Кайсаров</p>
              </div>
              <p class="card-about subheading">Иностранные языки</p>
              <h5 class="card-title heading-5">Нужен репетитор по английскому</h5>
              <p class="card-about subheading">О задаче:</p>
              <p class="card-maintext subtext">Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!</p>
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
              <div class="teacher-container">
                <div class="card-author">
                  <div class="card-author__circle">
                    <img src="@/assets/img/mainpage-img/2circle.png" alt="">
                  </div>
                  <p class="subtext">Елюкина Виктория</p>
                </div>
                <p class="card-desc subheading">Описание:</p>
                <p class="card-desc-text subtext">Добрый день! Я готова провести с вами урок по английскому языку</p>
              </div>
              <btn-background data-bs-dismiss="modal" @click="clickRemove">Подтвердить выполнение</btn-background>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickRemove(){
        this.$emit('clickRemoveCards')
      }
    }
  }
</script>

<style scoped>
  .modal-body {
    padding: 30px;
  }
  .modal-content{
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
  .card-author {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .card-author > p {
    margin-bottom: 0;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author__circle {
    border-radius: 118.519px;
    background: var(--accent-color-ffe-1-bf);
    margin-right: 8px;
    overflow: hidden;
    width: 32px;
    height: 32px;
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
    font-size: 20px;
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
  .teacher-container {
    margin-top: 20px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    height: auto;
    margin-bottom: 20px;
  }
  .teacher-container .card-author {
    margin-top: 0px;
    margin-bottom: 20px;
  }
  .card-desc {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-desc-text {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
</style>