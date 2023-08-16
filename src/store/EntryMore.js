export const EntryMore = {
  state: {
    isEntry: false,
  },
  mutations: {
    clickChangeMutation(state){
      state.isEntry = !state.isEntry
      localStorage.setItem('fl:', JSON.stringify(state.isEntry))
      JSON.parse(localStorage.getItem('fl:'))
    }, 
    changeFl(state){
      if(JSON.parse(localStorage.getItem('fl:')) == true){
        state.isEntry = true
      }
      else {
        state.isEntry = false
      }
    }
  }, 
  getters: {
    showNew(state){
      return state.isEntry
    }
  }
}