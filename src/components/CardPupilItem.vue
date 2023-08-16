<template>
  <div class="card_pupil_item">
    <div class="text_1_block">
      <p class="subheading">{{ about }}</p>
      <h2 class="heading-6 title_text">{{ title }}</h2>
    </div>
    <h2 class="heading-6 price_orange">{{ price }} ₽</h2>
    <div class="data_text">
      <img src="@/assets/img/findpupil-img/Iconly/Two-tone/Calendar.svg" alt="">
      <p class="subtext">{{ data_title }}</p>
    </div>
    <div class="logo_section">
      <div class="card_img">
        <img :src="img" alt="">
      </div>
      <p class="subtext">{{ who }}</p>
    </div>
    <div class="btns_section">
      <div class="btn_section_1">
        <router-link to="/TeachersPortal/PupilPage" class="router_profile">
          <!-- <btn-border class="border_profile">
            <p>Профиль</p>
            <img src="../assets/img/pupil_page-img/Iconly/Two-tone/Arrow - Right.svg" alt="">
          </btn-border> -->
          <btn-background>Откликнуться</btn-background>
        </router-link>
      </div>
      <div class="section_fire_now">
        <img :src="imgFire" alt="">
        <p class="fire_now subheading">{{ fire }}</p>
      </div>
    </div>
  </div>
<ModalCard />
</template>

<script>
import ModalCard from '@/components/UI/ModalCard.vue';
  export default {
    components: {
    ModalCard,
},
    props: {
      about: {
        type: String,
        required: true,
      },
      title: {
        type: String, 
        required: true,
      }, 
      price: {
        type: Number,
        required: true,
      },
      data_title: {
        type: String,
        required: true,
      },
      who: {
        type: String,
        required: true,
      },
      img: {
        type: String, 
        required: true,
      }, 
      imgFire: {
        type:String,
        required: true,
      },
      fire: {
        type: String,
        required: true,
      }
    }, 
  }
</script>

<style scoped>
  .card_pupil_item {
    width: 450px;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    flex-direction: column;
    display: flex;
    gap: 20px;
  }
  .text_1_block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .subheading {
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%; 
  }
  .price_orange{
    color: var(--accent-color-ff-8800);
  }
  .title_text{
    color: var(--heading-222222-heading);
  }
  .data_text {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--heading-333333-text);
  }
  .logo_section {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .logo_section img {
    width: 32px;
    height: 32px;
  }
  .fire_now{
    color: var(--accent-color-ff-8800);
    margin-left: 8px;
  }
  .section_fire_now{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btns_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn_section_1{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .border_profile{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .border_profile img{
    transform: rotate(-180deg);
  }
  .router_profile{
    text-decoration: none;
  }
  .card_img{
    border-radius: 118.519px;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 32px;
    height: 32px;
  }
  .card_img img{
    width: 32px;
    height: 32px;
  }
  @media screen and (max-width: 1366px){
    .card_pupil_item{
      width: 350px;
    }
    .btns_section{
      gap: 40px;
    }
  }
  @media screen and (max-width: 1143px){
    .card_pupil_item{
      width: 450px;
    }
    .btns_section{
      gap: unset;
    }
  }
  @media screen and (max-width: 884px){
    .card_pupil_item{
      width: 350px;
    }
    .btns_section{
      gap: 40px;
    }
  }
  @media screen and (max-width: 750px){
    .card_pupil_item{
      width: 100%;
    }
    .btns_section{
      gap: unset;
    }
  }
  @media screen and (max-width: 400px){
    .btns_section{
      gap: 40px;
    }
  }
  @media screen and (max-width: 360px){
    .btns_section{
      gap: 30px;
    }
  }
</style>