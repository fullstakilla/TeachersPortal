<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <i class="btn-close bx bx-x" data-bs-dismiss="offcanvas" aria-label="Close"></i>
      <h1 class="heading-5">Портал учителя</h1>
    </div>
    <div class="offcanvas-body">
      <ul class="ul__header_mobile">
        <li data-bs-dismiss="offcanvas" class="li__header_mobile"><router-link to="/TeachersPortal/FindPupils" class="description-text">Найти ученика</router-link></li>
        <li data-bs-dismiss="offcanvas" class="li__header_mobile"><router-link to="/TeachersPortal/FindTeachers" class="description-text">Найти репетитора</router-link></li>
        <li v-if="isRegistration" data-bs-dismiss="offcanvas" class="li__header_mobile"><router-link to="/TeachersPortal/CreateTask" class="description-text">Создать задачу</router-link></li>
        <li v-if="isRegistration" data-bs-dismiss="offcanvas" class="li__header_mobile"><router-link to="/TeachersPortal/ApplicationPage" class="description-text">Разместить заявку</router-link></li>
      </ul>
      <div v-show="btnRegistration" class="btns_mobile">
        <button data-bs-toggle="modal" data-bs-target="#entryModal" id="entry__header_mobile">
          Войти
          <img src="@/assets/img/header-img/Iconly/Two-tone/Login.svg" alt="">
        </button>
        <btn-border data-bs-toggle="modal" data-bs-target="#registrationModal">Зарегистрироваться</btn-border>
      </div>
      <div ref="menu" v-show="!btnRegistration" class="btns_mobile_1">
        <router-link to="/TeachersPortal/Account" class="router_decor">
          <btn-border data-bs-dismiss="offcanvas" class="border_mobile">
            <img src="@/assets/img/ui-img/Iconly/Two-tone/Wallet.svg" alt="">
            {{ changeBalanceState }}
            ₽
          </btn-border>
        </router-link>
        <div class="btn_section_new">
          <button class="menu_btn" @click="openMenu" id="entry__header_mobile_1">
            <div class="logo_btn">
              <div class="img_section">
                <img :src="ProfileImg" alt="">
              </div>
              {{ nameRegistration }}
            </div>
            <img :style="{ transform: arrowRotationStyle }" class="img_arrow" src="@/assets/img/ui-img/Iconly/ArrowDown.svg" alt="">
          </button>
          <ProfileMenu @clickOff="clickOff" data-bs-dismiss="offcanvas" class="menu" v-show="isMenuOpen"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProfileMenu from '@/components/UI/ProfileMenu.vue'
  export default {
    components: {
      ProfileMenu,
    },
    props: {
      isRegistration: {
        type: Boolean,
        required: true,
      },
      btnRegistration:{
        type: Boolean,
        required: true,
      }
    },
    data(){
      return {
        isMenuOpen: false,
        count: 0,
      }
    },
    methods: {
      btnEntryMobile(){
        this.$emit('btnEntryMobileNew')
      }, 
      openMenu(){
        this.isMenuOpen = !this.isMenuOpen  
        this.count ++
        if(this.count % 2 === 1){
          document.querySelector('.img_arrow').style.transform = "rotate(180deg)"
        }
        else {
          document.querySelector('.img_arrow').style.transform = "unset"
        }
      },
      onDocumentClick(event) {
        if (this.$refs.menu && !this.$refs.menu.contains(event.target)) {
          this.isMenuOpen = false
        }
      },
      clickOff(){
        this.$emit('clickOff')
      }
    }, 
    computed: {
      ...mapGetters([
        'changeBalanceState',
        'nameRegistration',
        'ProfileImg'
      ]),
      arrowRotationStyle() {
        if (this.isMenuOpen) {
          return 'rotate(180deg)'
        }
        else {
          return 'unset'
        }
      },
    }, 
    mounted(){
      document.addEventListener('click', this.onDocumentClick)
    },
    beforeDestroy(){
      document.removeEventListener('click', this.onDocumentClick)
    }
  }
</script>

<style scoped>
  .bx-x{
    color: var(--accent-color-ff-8800);
  }
  .heading-5{
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ff-8800);
  }
  .ul__header_mobile {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 30px;
  }
  .li__header_mobile {
    margin-top: 16px;
  }
  .li__header_mobile:last-child {
    margin-top: 16px;
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

  #entry__header_mobile{
    display: flex;
    align-items: center;
    padding: 12px 18px;
    gap: 6px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    border-radius: 12px;
    background: var(--accent-color-ff-8800);
    border: none;
    transition: 0.15s ease-in;
  }
  #entry__header_mobile:hover{
    background: #E97E03;
  }
  #entry__header_mobile:active{
    background: var(--accent-color-ff-704-d);
  }
  #entry__header_mobile_1{
    position: relative;
    min-width: 188px;
    display: flex;
    align-items: center;
    padding: 12px 18px;
    gap: 6px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    border-radius: 12px;
    background: var(--accent-color-ff-8800);
    border: none;
    transition: 0.15s ease-in;
  }
  #entry__header_mobile_1:hover{
    background: #E97E03;
  }
  #entry__header_mobile_1:active{
    background: var(--accent-color-ff-704-d);
  }
  .btns_mobile{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .btns_mobile_1{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .btn_section_new{
    position: relative;
  }
  .border_mobile{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .logo_btn{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .menu{
    top: 100px;
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
  .menu_btn{
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .router_decor{
    text-decoration: none;
  }
  @media screen and (max-width: 1366px){
    #entry__header_mobile{
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px){
    #entry__header_mobile{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 360px){
    #entry__header_mobile{
      font-size: 14px;
    }
  }
  .decor_offcanvas{
    text-decoration: none;
  }
</style>