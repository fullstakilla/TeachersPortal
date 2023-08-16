<template>
  <div class="balance-cont">
    <div class="balance-price">
      <p class="subheading">Баланс:</p>
      <h6 class="heading-6 balance-price-number">{{ changeBalanceState}} ₽</h6>
    </div>
    <BudgetInput 
      v-model="$store.state.balanceObject.budgetBalance"
      :place="place"
    />
    <btn-background @click="clickBalance" class="btn_item">Пополнить</btn-background>
    <btn-border @click="noBudget" class="btn_item">Вывести</btn-border>
    <router-link class="no_router" to="/TeachersPortal/HistoryPayments">
      <a class="balance-cont_a heading-6" href="#">История платежей</a>
    </router-link>
    <p v-if="errorBalance" class="subtext">Сумма превышает ваш баланс!</p>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import BudgetInput from '@/components/UI/BudgetInput.vue'
  export default {
    components: {
      BudgetInput,
    }, 
    data(){
      return {
        place: 'Введите сумму',
      }
    },
    methods: {
      ...mapActions([
        'changeBalance',
        'outBalance',
      ]),
      ...mapMutations([
        'changeStorage'
      ]),
      clickBalance(){
        this.changeBalance()
      }, 
      noBudget(){
        this.outBalance()
      }
    }, 
    computed: {
      ...mapGetters([
        'changeBalanceState',
        'changeCount',
        'balanceInput',
        'errorBalance'
      ]),
    }, 
    created(){
      this.changeStorage()
    }
  }
</script>

<style scoped>
  .balance-cont {
    display: flex;
    width: 330px;
    max-width: 100%;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .balance-price {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .balance-price > p {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .balance-price > h6{
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%; 
  }
  .balance-cont_a {
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
  }
  .subtext{
    color: var(--accent-color-ff-704-d);
  }
  .balance-cont_a > a:hover {
    color: #E97E03;
  }
  .btn_item{
    width: 100%;
  }
  .no_router{
    text-decoration: none;
  }
  @media screen and (max-width: 968px){
    .balance-cont{
      width: 100%;
    }
  }
</style>