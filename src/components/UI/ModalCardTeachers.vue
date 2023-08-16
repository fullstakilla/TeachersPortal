<template>
  <div class="modal fade" id="cardModalTeachers" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <div class="card-container">
            <p class="card-number subtext">Репетитор № 257</p>
            <p class="card-about subheading">Категория:</p>
            <h5 class="card-title heading-5">Иностранные языки</h5>
            <p class="card-about subheading">О задаче:</p>
            <p class="card-maintext subtext">Привет! Если вы чувствуете, что вам необходимо улучшить свои навыки в английском языке, я готова помочь! Я профессиональный репетитор, который поможет вам достичь ваших целей. Независимо от вашего текущего уровня, я буду ставить перед вами реальные задачи и помогать вам их достичь. Мы будем фокусироваться на грамматике, лексике и произношении, но в нашем обучении я уделяю также внимание вашим личным интересам. Со мной вы сможете заниматься на индивидуальной основе, в удобное для вас время и день недели. Я предоставлю вам материалы для работы и ответы на любые ваши вопросы по языку. Мой подход основан на многолетнем опыте работы с учениками разного возраста, национальности и уровня языка. Я уверена, что вместе мы сможем достичь любых целей в изучении английского языка!</p>
            <p class="card-budget subheading">Ставка:</p>
            <h6 class="card-price heading-6">1 500 ₽ / час</h6>
            <p class="card-payment subheading">Способ оплаты:</p>
            <p class="card-payment-type subtext">Банковской картой</p>
            <p class="card-email subheading">E-mail:</p>
            <a class="card-email-address subtext" href = "mailto: teacherportal@mail.ru">teacherportal@mail.ru</a>
            <p class="card-phone subheading">Телефон:</p>
            <p class="card-phone-number subtext">+7 (999) 999 - 99 - 99</p>
            <p class="your-desc subheading">Ваше описание:</p>
            <div class="description">
                <p class="subtext">Добрый день! Я хочу записаться к вам на урок по английскому языку</p>
            </div>
            <p class="your-price subheading">Ваш бюджет:</p>
            <div class="price">
                <p class="subtext">15 000</p>
                <p class="subtext">₽</p>
            </div>
            <btn-background data-bs-dismiss="modal">Откликнуться</btn-background>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
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
  .your-desc {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .description {
    margin-top: 4px;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px;
  }
  .description > p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .your-price {
    margin-top: 20px;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .price {
    display: flex;
    margin-top: 4px;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .price > p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
</style>