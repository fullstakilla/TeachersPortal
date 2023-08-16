<template>
  <div class="payments-history">
    <div class="payments-history-container container">
      <h1 class="heading-1">История платежей</h1>
      <div class="table_form">
        <div class="table-header_form">
          <div class="date-title">
            <p class="subheading">Дата</p>
            <img src="@/assets/img/paymenthistory-img/sorting.svg" alt="">
          </div>
          <div class="sum-title">
            <p class="subheading">Сумма</p>
            <img src="@/assets/img/paymenthistory-img/1/sorting.svg" alt="">
          </div>
          <p class="operation-type-title subheading">Тип операции</p>
          <p class="payment-method-title subheading">Способ оплаты</p>
        </div>
        <div class="payments">
          <PaymentOne v-if="showPayment"
            v-for="PaymentItem of payArray"
            :key="PaymentItem.id"
            :date="PaymentItem.date"
            :by="PaymentItem.by"
            :about="PaymentItem.about"
            :sign="PaymentItem.sign"
            :balanceMode="PaymentItem.balanceMode"
          />
          <p v-else class="subtext">История платежей пуста! Пополните свой баланс и используйте его в подборе репетиторов или учеников!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentOne from '@/components/PaymentOne.vue';
import {mapGetters, mapActions} from 'vuex'
  export default {
    components: { PaymentOne }, 
    data(){
      return{ 

      }
    }, 
    methods: {
      ...mapActions([
        'createdNew'
      ])
    },
    computed: {
      ...mapGetters([
        'payArray',
        'paymentsNew',
        'showPayment'
      ])
    }, 
    created(){
      this.createdNew()
    }
  }
</script>

<style scoped>
  .payments-history {
    padding: 50px 0 100px 0;  
  }
  .payments-history h1 {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
  .payments-history-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .table_form {
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 30px;
    border-radius: 24px;
    border: 1px solid #F2F2F2;
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .table-header_form {
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    background: var(--gray-f-2-f-2-f-2);
  }
  .date-title {
    width: 85px;
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
  }
  .date-title > p {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    cursor: pointer;
  }
  .sum-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sum-title > p {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    cursor: pointer;
  }
  .operation-type-title {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    cursor: pointer;
  }
  .payment-method-title {
    width: 131px;
    max-width: 100%;
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    cursor: pointer;
  }
  .payments {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sep {
    max-width: 1350px;
    height: 1px;
    background: var(--gray-e-5-e-5-e-5);
  }
  .subtext{
    color: var(--accent-color-ff-704-d);
    text-align: center;
  }
  @media screen and (max-width: 810px){
    .payments-history {
      padding: 90px 0 100px 0;  
    }
    .payments-history h1{
      text-align: center;
    }
    .payments-history-container{
      gap: 30px;
    }
  }
  @media (max-width: 650px) {
    .operation-type-title {
      display: none;
    }
    .payment-method-title {
      display: none;
    }
    .payments-history h1 {
      text-align: center;
    }
  }
</style>