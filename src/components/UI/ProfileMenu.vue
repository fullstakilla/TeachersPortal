<template>
  <div class="popup_wrapper">
    <div class="header-under-profile">
      <div class="my-profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98505 13.0669C4.43973 13.0669 1.41211 13.6029 1.41211 15.7497C1.41211 17.8964 4.42052 18.4517 7.98505 18.4517C11.5304 18.4517 14.5571 17.9148 14.5571 15.7689C14.5571 13.623 11.5496 13.0669 7.98505 13.0669Z" :stroke="svgColorOrange1" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M7.98468 10.0051C10.3113 10.0051 12.197 8.11848 12.197 5.79189C12.197 3.4653 10.3113 1.57959 7.98468 1.57959C5.6581 1.57959 3.77151 3.4653 3.77151 5.79189C3.76365 8.11062 5.63714 9.99721 7.955 10.0051H7.98468Z" :stroke="svgColorOrange1" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <router-link to="/TeachersPortal/Account" class="router_decor"><p @click="clickOut" @mouseover="PMouseOver1" @mouseout="PMouseOut1" class="subheading">Мой профиль</p></router-link>
      </div>
      <div class="sep"></div>
      <div class="payments-history">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9715 1.52051H6.02495C3.2557 1.52051 1.51953 3.48126 1.51953 6.25601V13.7433C1.51953 16.5181 3.24653 18.4788 6.02495 18.4788H13.9706C16.749 18.4788 18.4779 16.5181 18.4779 13.7433V6.25601C18.4779 3.48126 16.749 1.52051 13.9715 1.52051Z" :stroke="svgColorOrange2" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M13.1065 11.8491L9.99805 9.99465V5.99707" :stroke="svgColorOrange2" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <router-link to="/TeachersPortal/HistoryPayments" class="router_decor"><p @click="clickOut" @mouseover="PMouseOver2" @mouseout="PMouseOut2" class="subheading">История платежей</p></router-link>
      </div>
      <div class="sep"></div>
      <div class="leave">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path opacity="0.4" d="M12.7627 5.77369V4.91844C12.7627 3.05303 11.2502 1.54053 9.38481 1.54053H4.91606C3.05156 1.54053 1.53906 3.05303 1.53906 4.91844V15.1209C1.53906 16.9864 3.05156 18.4989 4.91606 18.4989H9.39398C11.2539 18.4989 12.7627 16.9909 12.7627 15.131V14.2666" :stroke="svgColorOrange3" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.9907 10.0199H7.95312" :stroke="svgColorOrange3" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.3066 7.34766L18.9906 10.0197L16.3066 12.6927" :stroke="svgColorOrange3" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p @click="clickOff" @mouseover="PMouseOver3" @mouseout="PMouseOut3" class="subheading">Выйти</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isMenu: {
        type: Boolean,
        default: false,
      }
    },
    data(){
      return {
        isOver: false,
        count: 0,
        svgColorOrange1: "var(--heading-333333-text)",
        svgColorOrange2: "var(--heading-333333-text)",
        svgColorOrange3: "var(--heading-333333-text)",
      }
    },
    methods: {
      PMouseOver1(){
        if(this.count % 2 === 0){
          this.svgColorOrange1 = "var(--accent-color-ff-8800)"
        }
        this.isOver = true
      },
      PMouseOut1(){
        if(this.count % 2 === 0){
          this.svgColorOrange1 = "var(--heading-333333-text)"
        }
        this.isOver = false
      }, 
      PMouseOver2(){
        if(this.count % 2 === 0){
          this.svgColorOrange2 = "var(--accent-color-ff-8800)"
        }
        this.isOver = true
      },
      PMouseOut2(){
        if(this.count % 2 === 0){
          this.svgColorOrange2 = "var(--heading-333333-text)"
        }
        this.isOver = false
      }, 
      PMouseOver3(){
        if(this.count % 2 === 0){
          this.svgColorOrange3 = "var(--accent-color-ff-8800)"
        }
        this.isOver = true
      },
      PMouseOut3(){
        if(this.count % 2 === 0){
          this.svgColorOrange3 = "var(--heading-333333-text)"
        }
        this.isOver = false
      }, 
      clickOut(){
        this.$emit('clickOut')
      },
      clickOff(){
        this.$emit('clickOff')
      },
    }, 
  }
</script>

<style scoped>
  .header-under-profile {
    width: 100%;
    z-index: 99;
    margin-top: 8px;  
    right: 0;
    position: absolute;
    display: flex;
    padding: 16px 18px;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff); 
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);  
  } 
  .header-under-profile img {
    display: flex;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
  }
  .my-profile {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .payments-history {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .leave {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-333333-text);
    transition: 0.15s ease-in;
  }
  .subheading:hover{
    color: var(--accent-color-ff-8800);
  }
  .sep{
    background: var(--gray-e-5-e-5-e-5);
    height: 1px;
  }
  svg path{
    transition: stroke 0.15s ease-in;
  }
  .router_decor{
    text-decoration: none;
  }
  @media screen and (max-width: 1120px){
    .header-under-profile{
      width: 205px;
    }
  }
  @media screen and (max-width: 810px){
    .header-under-profile{
      width: 100%;
    }
  }
</style>