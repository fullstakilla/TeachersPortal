import ProfileImg from "@/assets/img/ui-img/Profile.png"
export const ProfileItems = {
  state: {
    nameInput: 'Александр Кайсаров',
    imgProfile: ProfileImg,
    nameRegistration: '',
    emailInput: '',
    passwordInput: '',                    
  },  
  mutations: {
    changeNameMutation(state, newValue){
      state.nameInput = newValue
      localStorage.setItem('Имя:', newValue)
    },
    changeEmailMutation(state, newEmail){
      state.emailInput = newEmail
      localStorage.setItem('E-mail:', newEmail)
    },
    changePasswordMutation(state, newPassword){
      state.passwordInput = newPassword
      localStorage.setItem('Пароль:', newPassword)
    },
    changeImgProfileMutation(state, newImg){
      state.imgProfile = newImg
      localStorage.setItem('Изображение профиля: ', newImg)
    },
    changeNamefull(state){
      state.nameInput = localStorage.getItem('Имя:')
      state.nameRegistration = state.nameInput
      if(!localStorage.getItem('Имя:')){
        state.nameInput = 'Александр Кайсаров'
      }
    }, 
    changeProfileImg(state){
      state.imgProfile = localStorage.getItem('Изображение профиля: ')
      if(!localStorage.getItem('Изображение профиля: ')){
        state.imgProfile = ProfileImg
      }
    },
    changeNameRegistationMutation(state, newName){
      state.nameRegistration = newName
      localStorage.setItem('Имя:', newName)
    },  
    setNameRegistration(state){
      state.nameRegistration = localStorage.getItem('Имя:')
      if(!localStorage.getItem('Имя:')){
        state.nameRegistration = 'Александр Кайсаров'
      }
      state.nameInput = state.nameRegistration
    }
  },
  actions: {
    changeName({commit}, newValue){
      commit('changeNameMutation', newValue)
    }, 
    changeEmail({commit}, newEmail){
      commit('changeEmailMutation', newEmail)
    },
    changePassword({commit}, newPassword){
      commit('changePasswordMutation', newPassword)
    },
    changeImg({commit}, newImg){
      commit('changeImgProfileMutation', newImg)
    }, 
    changeNameRegistation({commit}, newName){
      commit('changeNameRegistationMutation', newName)
    }, 
  }, 
  getters: { 
    nameInput(state){
      return state.nameInput
    }, 
    ProfileImg(state){
      return state.imgProfile
    }, 
    nameRegistration(state){
      return state.nameRegistration
    },
    nameRegistration1(state){
      return state.nameRegistration.charAt(0)
    },
  }
}