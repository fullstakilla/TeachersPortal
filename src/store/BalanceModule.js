export const BalanceModule = {
  state: {
    balance: 0,
    count: 0,
    budgetBalance: '',
    balanceCount: 0,
    PaymentItems: [

    ],
    showPayment: false,
    fl: true,
    errorBalance: false,
  },
  mutations: {
    changeBalanceMutation(state){
      state.errorBalance = false
      if(state.budgetBalance == ''){
        state.showPayment = false
      }
      else {
        state.count ++ 
        if(state.count >= 1 && state.budgetBalance !== ''){
          state.balance += parseInt(state.budgetBalance)
        }
        parseInt(localStorage.setItem('Баланс:', state.balance))
        const newPayment = {
          id: Date.now(),
          date: "21.02.2023",
          balanceMode: parseInt(state.budgetBalance),
          sign: "+",
          about: "Оплата урока",
          by: "Банковская карта"
        };
        if(!Array.isArray(state.PaymentItems)){
          state.PaymentItems = []
        }
        if(Array.isArray(state.PaymentItems)){
          state.PaymentItems.push(newPayment)
        }
        localStorage.setItem('paymentsArray', JSON.stringify(state.PaymentItems))
        state.showPayment = true
        state.budgetBalance = ''
      }
    }, 
    noBudgetMutation(state) {
      state.errorBalance = false
      const budgetAmount = parseInt(state.budgetBalance)
      if(state.budgetBalance == ''){
        state.showPayment = false
      }
      else {
        if (budgetAmount <= state.balance) {
          state.balance -= budgetAmount
          state.balanceCount = state.balance - budgetAmount
          const PaymentNew1 = {
            date: "21.02.2023",
            balanceMode: budgetAmount,
            sign: "-",
            about: "Вывод",
            by: "Банковская карта"
          }
          if (!Array.isArray(state.PaymentItems)) {
            state.PaymentItems = []
          }
          if (Array.isArray(state.PaymentItems)) {
            state.PaymentItems.push(PaymentNew1)
          }
          localStorage.setItem('paymentsArray', JSON.stringify(state.PaymentItems))
          state.showPayment = true
          state.errorBalance = false
        } 
        else {
          state.errorBalance = true
        }
        state.budgetBalance = ''
        localStorage.setItem('Баланс:', state.balance)
        localStorage.setItem('Вывод:', state.balanceCount)
        localStorage.setItem('Баланс до вывода:', localStorage.getItem('Вывод:'))
      }
    },
    changeStorage(state){
      state.balance = parseInt(localStorage.getItem('Баланс:'))
      if(!localStorage.getItem('Баланс:')){
        state.balance = 0
      }
    },
    createdItems(state){
      state.PaymentItems = JSON.parse(localStorage.getItem('paymentsArray'))
      if(localStorage.getItem('paymentsArray')){
        state.showPayment = true
      }
    }, 
    exit(state){
      if(localStorage.getItem('paymentsArray')){
        state.showPayment = false
      }
    }, 
    changeError(state){
      state.errorBalance = false
    }
  },
  actions: {
    changeBalance({commit}){
      commit('changeBalanceMutation')
    },
    outBalance({commit}){
      commit('noBudgetMutation')
    }, 
    createdNew({commit}){
      commit('createdItems')
    }
  },
  getters: {
    changeBalanceState(state){
      return state.balance
    },
    changeCount(state){
      return state.count
    },
    balanceInput(state){
      return state.budgetBalance
    },
    payArray(state){
      return state.PaymentItems
    },
    paymentsNew(state){
      return state.PaymentNew
    },
    showPayment(state){
      return state.showPayment
    },
    showMinus(state){
      return state.balanceCount
    },
    errorBalance(state){
      return state.errorBalance
    }
  }
}