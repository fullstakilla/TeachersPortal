<template>
  <div class="card_teacher">
    <div class="about">
      <div class="img_section">
        <img :src="ProfileImg" alt="">
      </div>
      <h2 class="heading-5">{{ nameInput }}</h2>
    </div>
    <div class="works_block">
      <img src="@/assets/img/teacher_page-img/Iconly/Two-tone/ShieldDone.svg" alt="">
      <p class="subtext work_p">Проведено 450 занятий</p>
    </div>
    <div class="stars_section">
      <Stars 
        v-for="starItem in starsItems"
        :imgStar="starItem.imgStar"
      />
      <p class="subtext">4.5</p>
      <p class="subtext">(40 отзывов)</p>
    </div>
    <btn-background data-bs-toggle="modal" data-bs-target="#cardModalTeachers">Откликнуться</btn-background>
  </div>
  <ModalCardTeachers />
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Stars from '@/components/UI/Stars.vue'
import ModalCardTeachers from '@/components/UI/ModalCardTeachers.vue'

import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star50.svg'

  export default {
    components: {
      Stars,
      ModalCardTeachers,
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
    }, 
    methods: {
      ...mapMutations([
        'changeNamefull',
        'changeProfileImg',

      ])
    },
    computed: {
      ...mapGetters([
        'ProfileImg', 
        'nameInput'
      ])
    },
    created(){
      this.changeNamefull()
      this.changeProfileImg()
    }
  }
</script>

<style scoped>
  .card_teacher {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    width: 330px;
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .about img {
    width: 128px;
    height: 128px;
    display: block;
    margin: 0 auto;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
    text-align: center;
  }
  .works_block {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .work_p {
    color: var(--heading-333333-text) !important;
  }
  .stars_section {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;  
    color: var(--heading-666666-text);
  }
  .img_section{
    border-radius: 474.074px;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 128px;
    height: 128px;
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 968px){
    .card_teacher{
      width: 100%;
    }
  }
</style>