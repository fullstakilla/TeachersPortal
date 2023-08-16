<template>
  <header v-show="!isMobile" class="header">
    <div class="container">
      <div class="header__section">
        <router-link class="router__header_logo" to="/TeachersPortal/">
          <div class="logo_header_section">
            <img src="@/assets/img/header-img/Iconly/Bulk/Work.svg" alt="bulk-work" class="img_header">
            <h1 class="heading-5">Портал учителя</h1>
          </div>
        </router-link>
        <ul class="ul__header">
          <li class="li__header"><router-link :to="linkToPage" class="description-text">{{ linkText }}</router-link></li>
          <li class="li__header"><router-link to="/TeachersPortal/FindTeachers" class="description-text">Найти репетитора</router-link></li>
          <li class="li__header" v-if="isCreate"><router-link to="/TeachersPortal/CreateTask" class="description-text">Создать задачу</router-link></li>
        </ul>
        <div class="btn__header_section">
          <div class="registr_btn">
            <btn-border v-if="showWallet" data-bs-toggle="modal" data-bs-target="#registrationModal">Зарегистрироваться</btn-border>
            <router-link v-else class="router__header_logo" to="/TeachersPortal/Account">
              <btn-border id="border_wallet" >
              <img src="@/assets/img/ui-img/Iconly/Two-tone/Wallet.svg" alt="">
              {{ changeBalanceState }}
              ₽
            </btn-border>
            </router-link>
          </div>
          <div ref="menu" class="btn_entry_walet">
            <button v-if="showWallet" data-bs-toggle="modal" data-bs-target="#entryModal" id="entry__header">
            Войти
            <img src="@/assets/img/header-img/Iconly/Two-tone/Login.svg" alt="">
          </button>
          <button class="entry__header_1" @click="clickProfileMenu" v-else >
            <div class="section_profile_1">
              <div class="img_section">
                <img :src="ProfileImg" alt="">
              </div>
              {{ nameRegistration }}
            </div>
            <img :style="{ transform: arrowRotationStyle }" class="img_arrow_menu" src="@/assets/img/ui-img/Iconly/ArrowDown.svg" alt="">
          </button>
          <ProfileMenu @clickOff="clickOff" v-show="isMenu" class="menu_item" @clickOut="clickNoEntry"/>
          </div>
        </div>
        <div ref="menu1" class="btn_section_2">
          <button-full v-if="isnotCheck" data-bs-toggle="modal" data-bs-target="#entryModal">
            <img class="img_after" src="@/assets/img/header-img/Iconly/Two-tone/Login.svg" alt="">
            {{ textfullBtn }}
          </button-full>
          <button-full class="btn_new" @click="clickMenu1" v-else >
            {{ changeBalanceState }} ₽ / {{ nameRegistration1 }}
          </button-full>
          <ProfileMenu @clickOff="clickOff" @clickOut="clickNoEntry" class="menu_1064" v-show="isMenu1"/>
        </div>
      </div>
    </div>
  </header>
  <HeaderMobile
    :isRegistration="isRegistration"
    v-show="isMobile" 
    :btnRegistration="btnRegistration"
    @clickOff="clickOff"
   />
  <modal-entry 
  @updateClick="entrySite"
  :modalInputs="modalInputs"
  />
  <modal-registration 
  :modalInputsRegistration="modalInputsRegistration"
  />
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import HeaderMobile from '@/components/layouts/HeaderMobile.vue'
import ProfileMenu from '@/components/UI/ProfileMenu.vue'
  export default {
    components: {
      HeaderMobile,
      ProfileMenu,
    },
    data(){
      return {
        modalInputs: [
          {id: 1, title: "Введите e-mail", description: "E-mail:", value: ""},
          {id: 2, title: "Введите пароль", description: "Пароль:", value: ""}
        ],
        modalInputsRegistration: [
          {id: 1, title: "Введите имя", description: "Имя:", value: ""},
          {id: 2, title: "Введите e-mail", description: "E-mail:", value: ""},
          {id: 3, title: "Введите пароль", description: "Пароль:", value: ""},
        ],
        isMobile: window.innerWidth,
        showWallet: true,
        isMenu: false,
        count: 0,
        isCreate: false,
        textfullBtn: "Вход / Регистрация",
        isnotCheck: true,
        isMenu1: false,
        isRegistration: false,
        btnRegistration: true, 
        name_str: '',
        name1: '',
      }
    },
    methods: {
      ...mapActions([
        'createdNew'
      ]),
      ...mapMutations([
        'setNameRegistration',
        'changeStorage',
        'exit',
        'clickChangeMutation',
      ]),
      checkWidth(){
        this.isMobile = window.innerWidth <= 810
      },
      entrySite(){
        this.createdNew()
        if(localStorage.getItem('Имя:')){
          this.clickChangeMutation()
          JSON.parse(localStorage.getItem('fl:'))
        }
        localStorage.setItem('BtnBool:', JSON.stringify(!this.showWallet))
        localStorage.setItem('BtnBool1:', JSON.stringify(!this.isnotCheck))
        localStorage.setItem('BtnBool2:', JSON.stringify(!this.btnRegistration))
        localStorage.setItem('Create:', JSON.stringify(!this.isCreate)); localStorage.setItem('CreateMobile:', JSON.stringify(!this.isRegistration))
        this.setNameRegistration()
        this.showWallet = JSON.parse(localStorage.getItem('BtnBool:'))
        this.isnotCheck = JSON.parse(localStorage.getItem('BtnBool1:'))
        this.isRegistration = true
        this.btnRegistration = JSON.parse(localStorage.getItem('BtnBool2:'))
        this.isCreate = JSON.parse(localStorage.getItem('Create:'));this.isRegistration = JSON.parse(localStorage.getItem('CreateMobile:'))
        if(localStorage.getItem('Имя:') == '' || !localStorage.getItem('Имя:')){
          this.isRegistration = false
          this.showWallet = true
          this.isCreate = false
          this.isnotCheck = true
          this.btnRegistration = true
          this.setNameRegistration()
          localStorage.removeItem('BtnBool:')
          localStorage.removeItem('BtnBool1:')
          localStorage.removeItem('BtnBool2:')
          localStorage.removeItem('Create:'); localStorage.removeItem('CreateMobile:')
        }
      },
      clickProfileMenu(){
        this.count ++
        this.isMenu = !this.isMenu
        if(this.count % 2 == 1){
          document.querySelector('.img_arrow_menu').style.transform = "rotate(180deg)"
        }
        else {
          document.querySelector('.img_arrow_menu').style.transform = "unset"
        }
      }, 
      clickMenu1(){
        this.isMenu1 = !this.isMenu1
      },
      closeMenu() {
        this.isMenu = false;
      },
      clickNoEntry(){
        this.isMenu1 = false
        this.isMenu = false
      },
      onDocumentClick(event) {
        if (this.$refs.menu && !this.$refs.menu.contains(event.target)) {
          this.isMenu = false
        }
        if(this.$refs.menu1 && !this.$refs.menu1.contains(event.target)) {
          this.isMenu1 = false
        }
      },
      clickOff(){
        this.isMenu1 = false
        this.isMenu = false
        localStorage.setItem('BtnBool:', JSON.stringify(!this.showWallet))
        localStorage.setItem('BtnBool1:', JSON.stringify(!this.isnotCheck))
        localStorage.setItem('BtnBool2:', JSON.stringify(!this.btnRegistration))
        localStorage.setItem('Create:', JSON.stringify(!this.isCreate)); localStorage.setItem('CreateMobile:', JSON.stringify(!this.isRegistration))
        this.setNameRegistration()
        this.showWallet = JSON.parse(localStorage.getItem('BtnBool:'))
        this.isnotCheck = JSON.parse(localStorage.getItem('BtnBool1:'))
        this.isRegistration = false
        this.btnRegistration = JSON.parse(localStorage.getItem('BtnBool2:'))
        this.isCreate = JSON.parse(localStorage.getItem('Create:'));this.isRegistration = JSON.parse(localStorage.getItem('CreateMobile:'))
        this.clickChangeMutation()
        localStorage.removeItem('fl:')
        this.exit()
      }
    },
    computed: {
      ...mapGetters([
        'changeBalanceState',
        'ProfileImg',
        'nameRegistration',
        'nameRegistration1',
      ]),
      linkToPage(){
        if(this.$route.path === '/TeachersPortal/' || this.$route.path === '/TeachersPortal/FindTeachers' || this.$route.path === '/TeachersPortal/FindPupils'){
          return '/TeachersPortal/FindPupils'
        }
        else {
          return '/TeachersPortal/ApplicationPage'
        }
      },
      linkText(){
        if(this.$route.path === '/TeachersPortal/' || this.$route.path === '/TeachersPortal/FindTeachers' || this.$route.path === '/TeachersPortal/FindPupils'){
          return 'Найти ученика'
        }
        else {
          return 'Разместить заявку' 
        }
      }, 
      linkToCreate(){
        if(this.entrySite()){
          return '/TeachersPortal/Questions'
        }
      }, 
      arrowRotationStyle() {
        if (this.isMenu) {
          return 'rotate(180deg)'
        }
        else {
          return 'unset'
        }
      },
    },
    created(){
      this.setNameRegistration()
      this.changeStorage()
      const createValue = localStorage.getItem('Create:');
      const createValue1 = localStorage.getItem('CreateMobile:');
      this.isCreate = createValue ? JSON.parse(createValue) : false; this.isRegistration = createValue1 ? JSON.parse(createValue1) : false;
      const btnBoolValue = localStorage.getItem('BtnBool:');
      this.showWallet = btnBoolValue ? JSON.parse(btnBoolValue) : true;
      const btnBool1Value = localStorage.getItem('BtnBool1:');
      this.isnotCheck = btnBool1Value ? JSON.parse(btnBool1Value) : true;
      const btnBool2Value = localStorage.getItem('BtnBool2:');
      this.btnRegistration = btnBool2Value ? JSON.parse(btnBool2Value) : true;
    },
    mounted(){
      this.checkWidth()
      window.addEventListener('resize', this.checkWidth)
      document.addEventListener("click", this.onDocumentClick)
    },  
    beforeDestroy(){
      window.removeEventListener('resize', this.checkWidth)
      document.removeEventListener("click", this.onDocumentClick)
    }
  }
</script>

<style lang="css" scoped>
  .header {
    margin-top: 30px;
  }
  .header__section{
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  .header__section_another{
    display: none;
  }
  .logo_header_section {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .router__header_logo{
    text-decoration: none;
  }
  .img_section{
    border-radius: 81.481px;;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }
  .img_section img{
    width: 22px;
    height: 22px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ff-8800);
  }
  .ul__header {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .li__header {
    margin-right: 30px;
  }
  .li__header:last-child {
    margin-right: 0;
  }
  .description-text {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-333333-text);
    text-decoration: none;
    transition: 0.15s ease-in;
  }
  .description-text:hover, .description-text:active{
    color: var(--accent-color-ff-8800);
  }
  .btn__header_section {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  #entry__header{
    display: flex;
    align-items: center;
    padding: 12px 18px;
    gap: 6px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    border-radius: 12px;
    background: var(--accent-color-ff-8800);
    border: none;
    transition: 0.15s ease-in;
  }
  #entry__header:hover{
    background: #E97E03;
  }
  #entry__header:active{
    background: var(--accent-color-ff-704-d);
  }
  .entry__header_1{
    position: relative;
    min-width: 205px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 18px;
    justify-content: space-between;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    border-radius: 12px;
    background: var(--accent-color-ff-8800);
    border: none;
    transition: 0.15s ease-in;
  }
  #border_wallet{
    display: flex;
    align-items: center;
  }
  #border_wallet img{
    margin-right: 6px;
  }
  .section_profile_1{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .btn_section_2{
    display: none;
    position: relative;
  }
  .btn_entry_walet{
    position: relative;
  }
  @media screen and (max-width: 1366px){
    #entry__header{
      font-size: 18px;
      border: none;
    }
  }
  @media screen and (max-width: 1120px){
    .btn__header_section{
      display: none;
    }
    .btn_section_2{
      display: block;
    }
    .menu_1064{
      display: flex;
      z-index: 99;
    }
  }
  @media screen and (max-width: 890px){
    .li__header{
      margin-right: 16px;
    }
    .logo_header_section{
      gap: 6px;
    }
  }
</style>