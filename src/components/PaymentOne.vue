<template>
  <div class="payment">
    <p class="payment-date">{{date}}</p>
    <p :style="styleSign" class="payment-sum">{{ sign }} {{ balanceMode }} ₽</p>
    <p class="payment-operation-type">{{ about }}</p>
    <p class="payment-method">{{by}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    props: {
      date: {
        type: String,
        required: true,
      },
      by: {
        type: String,
        required: true,
      },
      sign: {
        type: String,
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
      balanceMode: {
        type: Number,
        required: true,
      }
    }, 
    data(){
      return {
        styleSign: {},
      }
    }, 
    computed: {
      // ...mapGetters([
      //   'signItem',
      //   'signItemMinus',
      //   'aboutItem',
      //   'changeBalanceState',
      //   'checkFlag',
      //   'showMinus'
      // ])
    },
    created(){
      if(this.sign == '-'){
        this.styleSign = {
          color: "var(--accent-color-ff-8800)"
        }
      }
      else if(this.sign == '+'){
        this.styleSign = {
          color: "#24B50D"
        }
      }
    }
  }
</script>

<style scoped>
  .payment {
    display: flex;
    padding: 0px 30px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-e-5-e-5-e-5);
  }
  .payment-date {
    width: 85px;
    max-width: 100%;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .payment-sum {
    width: 76px;
    max-width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .payment-operation-type {
    width: 104px;
    max-width: 100%;
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .payment-method {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .green {
    color: #24B50D;
  }
  @media (max-width: 650px) {
    .payment-operation-type {
      display: none;
    }
    .payment-method {
      display: none;
    }
  }
</style>