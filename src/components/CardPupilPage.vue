<template>
  <div class="card_pupil">
    <div class="about">
      <img src="@/assets/img/pupil_page-img/Avatar.png" alt="">
      <h2 class="heading-5">Александр Кайсаров</h2>
    </div>
    <div class="stars_section">
      <Stars 
        v-for="starItem in starsItems"
        :imgStar="starItem.imgStar"
      />
      <p class="subtext">4.5</p>
      <p class="subtext">(40 отзывов)</p>
    </div>
    <btn-background data-bs-toggle="modal" data-bs-target="#cardModal">Откликнуться</btn-background>
  </div>
  <ModalCard />
</template>

<script>
import Stars from '@/components/UI/Stars.vue'
import ModalCard from '@/components/UI/ModalCard.vue'

import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star50.svg'

  export default {
    components: {
      Stars,
      ModalCard,
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
  .card_pupil {
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
  @media screen and (max-width: 968px){
    .card_pupil{
      width: 100%;
    }
  }
</style>