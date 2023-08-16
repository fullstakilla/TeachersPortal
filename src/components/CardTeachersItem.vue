<template>
  <div class="card_teachers_item">
    <div class="text_1_block">
      <p class="subheading">{{ about }}</p>
      <h2 class="heading-6 title_text">{{ title }}</h2>
    </div>
    <h2 class="heading-6 price_orange">{{ price }} ₽ / час</h2>
    <div class="data_text">
      <img src="@/assets/img/findteachers-img/Iconly/Two-tone/ShieldDone.svg" alt="">
      <p class="subtext">{{ data_title }}</p>
    </div>
    <div class="section_raiting">
      <Stars 
        v-for="starItem in starsItems"
        :key="starItem.id"
        :imgStar="starItem.imgStar"
      />
      <p class="p-count_raiting subtext">{{ raiting1 }}</p>
      <p class="p-count_raiting subtext">{{ raiting2 }}</p>
    </div>
    <div class="logo_section">
      <div class="card_img">
        <img :src="img" alt="">
      </div>
      <p class="subtext">{{ who }}</p>
    </div>
    <div class="btns_section">
      <router-link to="/TeachersPortal/TeacherPage" class="router_profile">
          <!-- <btn-border class="border_profile">
            <p>Профиль</p>
            <img src="../assets/img/pupil_page-img/Iconly/Two-tone/Arrow - Right.svg" alt="">
          </btn-border> -->
          <btn-background>Откликнуться</btn-background>
        </router-link>
    </div>
  </div>
  <ModalCardTeachers />
</template>

<script>
import Stars from "@/components/UI/Stars.vue"
import ModalCardTeachers from "@/components/UI/ModalCardTeachers.vue";

import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star50.svg'

  export default {
    components: {
    Stars,
    ModalCardTeachers,
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
      raiting1: {
        type: String, 
        required: true,
      }, 
      raiting2: {
        type: String, 
        required: true,
      },
    }, 
    data(){
      return{
        starsItems: [
          {id: 1, imgStar: starImg},
          {id: 2, imgStar: starImg},
          {id: 3, imgStar: starImg},
          {id: 4, imgStar: starImg},
          {id: 5, imgStar: star1},
        ]
      }
    }
  }
</script>

<style scoped>
  .card_teachers_item {
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
  .section_raiting{
    display: flex;
    align-items: center;
    gap: 6px;
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
  .btns_section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
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
    .card_teachers_item{
      width: 350px;
    }
  }
  @media screen and (max-width: 1143px){
    .card_teachers_item{
      width: 450px;
    }
  }
  @media screen and (max-width: 884px){
    .card_teachers_item{
      width: 350px;
    }
  }
  @media screen and (max-width: 750px){
    .card_teachers_item{
      width: 100%;
    }
  }
</style>