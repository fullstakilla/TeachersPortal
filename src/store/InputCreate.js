export const InputCreate = {
  state:{
    aboutValue: '',
    emailValue: '',
    telValue: '',
    dateValue: '',
    budgetValue:'',
    buttonStyle: {},
    isBtnDisabled: false,
  },
  mutations: {
    offThemMutation(state){
      state.aboutValue = ''
      state.emailValue = ''
      state.telValue = ''
      state.budgetValue = ''
      state.dateValue = ''
    },
    deleteSomeMutation(state){
      state.dateValue = ''
    }, 
    changeBtn(state){
      const containsEmail = state.emailValue.includes("@");
      const containsDom = state.emailValue.includes(".com") || state.emailValue.includes(".ru")
      if (!containsDom || !containsEmail) {
        state.buttonStyle = {
          background: "#E5E5E5",
          color: "rgba(204, 204, 204, 1)",
          cursor: "no-drop",
        }
        state.isBtnDisabled = true
        if (state.emailValue == '') {
          state.buttonStyle = {
            background: "",
            color: "",
            cursor: "pointer",
          }
        state.isBtnDisabled = false
        }
      } 
      else {
        state.buttonStyle = {
          background: "",
          color: "",
          cursor: "pointer",
        }
        state.isBtnDisabled = false
      }
    }, 
    changeBtn1(state){
      const telRegex = /^[\d()+]+$/
      if (!telRegex.test(state.telValue)) {
        state.buttonStyle = {
          background: "#E5E5E5",
          color: "rgba(204, 204, 204, 1)",
          cursor: "no-drop",
        }
        state.isBtnDisabled = true
        if (state.telValue == '') {
          state.buttonStyle = {
            background: "",
            color: "",
            cursor: "pointer",
          }
        state.isBtnDisabled = false
        }
      } 
      else {
        state.buttonStyle = {
          background: "",
          color: "",
          cursor: "pointer",
        }
        state.isBtnDisabled = false
      }
    }
  }, 
  actions: {
    OffThem({commit}){
      commit('offThemMutation')
    },
    CheckBoxOff({commit}){
      commit('deleteSomeMutation')
    }
  },  
  getters: {
    styleGetter(state){
      return state.buttonStyle
    },
    disabledBtn(state){
      return state.isBtnDisabled
    }
  }
}