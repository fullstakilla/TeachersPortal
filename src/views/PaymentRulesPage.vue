<template>
  <div class="payments__rules_page">
    <div class="container">
      <h1 class="heading-1">Правила оплаты</h1>
      <div class="payments_rules_block">
        <h2 class="heading-5">Оплата услуг происходит в два этапа:
        </h2>
        <div class="blocks_16_payment_rules">
          <div class="blocks_8_payment_rules">
            <ul>
              <li class="heading-6 li_payment_rules">
                Ввод средств в личный кабинет
              </li> 
            </ul>
            <p class="description-text">
              Добавление денежных средств осуществляется на требуемую для оплаты услуги сумму или на любую другую, согласно вашему удобству и потребностям как пользователя. На этом этапе вы еще ничего не оплачиваете исполнителю, а только обеспечиваете возможность оплаты.
            </p>
          </div>
          <div class="blocks_8_payment_rules">
            <ul>
              <li class="heading-6 li_payment_rules">
                Оплата услуги
              </li> 
            </ul>
            <p class="description-text">
              На этом этапе вы оплачиваете задание по стоимости, на которую вы договорились с исполнителем (суммы, которую вы указали во время создания задания).
            </p>
          </div>
          <p class="description-text">
            К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide, МИР.
          </p>
          <p class="description-text">
            Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите способ оплаты: банковской картой.
          </p>
          <p class="description-text">
            К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide, МИР.
          </p>
          <p class="description-text">
            При оплате заказа банковской картой, обработка платежа происходит на авторизационной странице банка, где Вам необходимо ввести данные Вашей банковской карты:
          </p>
          <ul>
            <li class="li_payment_rules description-text">тип карты</li>
            <li class="li_payment_rules description-text">номер карты</li>
            <li class="li_payment_rules description-text">срок действия карты (указан на лицевой стороне карты)</li>
            <li class="li_payment_rules description-text">Имя держателя карты (латинскими буквами, точно также как указано на карте)</li>
            <li class="li_payment_rules description-text">CVC2/CVV2 код</li>
          </ul>
          <p class="description-text">
            Если Ваша карта подключена к услуге 3D-Secure, Вы будете автоматически переадресованы на страницу банка, выпустившего карту, для прохождения процедуры аутентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.
          </p>
          <p class="description-text">
            Безопасность обработки интернет-платежей через платежный шлюз банка гарантирована международным сертификатом безопасности PCI DSS. Передача информации происходит с применением технологии шифрования SSL. Эта информация недоступна посторонним лицам.
          </p>
        </div>
        <h2 class="heading-5">Советы и рекомендации по необходимым мерам безопасности проведения платежей с использованием банковской карты:
        </h2>
        <div class="blocks_16_payment_rules">
          <ul>
            <li class="li_payment_rules_2 description-text"> <span class="heading-6">берегите свои пластиковые карты </span>так же, как бережете наличные деньги. Не забывайте их в машине, ресторане, магазине и т.д.</li>
            <li class="li_payment_rules_2 description-text">никогда <span class="heading-6">не передавайте полный номер своей кредитной карты </span>по телефону каким-либо лицам или компаниям</li>
            <li class="li_payment_rules_2 description-text">всегда имейте под рукой номер телефона для экстренной связи с банком, выпустившим вашу карту, и в случае ее утраты немедленно свяжитесь с банком</li>
            <li class="li_payment_rules_2 description-text">вводите реквизиты карты только при совершении покупки. Никогда не указывайте их по каким-то другим причинам.</li>
          </ul>
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
  .payments__rules_page {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    margin-bottom: 50px;
    color: var(--heading-222222-heading);
  }
  .payments_rules_block {
    padding: 30px;
    border-radius: 24px;
    background: var(--gray-f-2-f-2-f-2);
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 20px;
  }
  .blocks_16_payment_rules {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .blocks_8_payment_rules {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-333333-text);
  }
  .li_payment_rules {
    margin-left: 13px;
  }
  .description-text {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-666666-text);
  } 
  .li_payment_rules_2 {
    margin-bottom: 16px;
    color: var(--heading-333333-text);
    margin-left: 13px;
  }
  .li_payment_rules_2 {
    margin-bottom: 16px;
  }
  .li_payment_rules_2:last-child {
    margin-bottom: 0;
  }
  .description-text, .heading-6{
    list-style: inside;
  }
  @media screen and (max-width: 810px){
    .payments__rules_page {
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px){
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .payments__rules_page {
      padding: 90px 0 64px 0;
    }
  }
</style>