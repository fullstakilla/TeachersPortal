<template>
  <div>
    <div class="card">
    <p class="card-course subheading">{{ sub }}</p>
    <h6 class="card-title heading-6">{{ about }}</h6>
    <h6 class="card-price heading-6">{{ price }} ₽ / час</h6>
    <div class="card-done">
      <img src="@/assets/img/teacher_page-img/Iconly/Two-tone/ShieldDone.svg" alt="">
      <p class="subtext">{{ much }}</p>
    </div>
    <div class="card-rating">
        <Stars 
        v-for="starsItem in starsItems"
        :key="starsItem.id"
        :imgStar="starsItem.imgStar"
        />
        <p class="card-rating-number subtext">{{ raiting_1 }}</p>
        <p class="card-rating-reviews subtext">{{ raiting_2 }}</p>
    </div>
    <div class="card-author">
        <div class="card-author__img">
            <img :src="img" alt="">
        </div>
        <p class="subtext">{{ who }}</p>
    </div>
    <h6 class="card-finish heading-6">Завершено</h6>
    <a data-bs-toggle="modal" data-bs-target="#reviewsModal" href="#" class="leave-review sent heading-6">Оставить отзыв</a>
  </div>
  <ModalReviews 
  />
  </div>
</template>

<script>
import ModalReviews from '@/components/UI/ModalReviews.vue';
import Stars from '@/components/UI/Stars.vue'

import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star50.svg'

  export default {
    components: {
      Stars,
      ModalReviews,
    }, 
    props: {
      sub: {
        type: String,
        required: true,
      },
      about: {
        type: String, 
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      much: {
        type: String,
        required: true,
      },
      raiting_1: {
        type: String,
        required: true,
      },
      raiting_2: {
        type: String,
        required: true,
      },
      who: {
        type: String,
        reqired: true,
      },
      img: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        starsItems: [
          {id: 1, imgStar: starImg},
          {id: 2, imgStar: starImg},
          {id: 3, imgStar: starImg},
          {id: 4, imgStar: starImg},
          {id: 5, imgStar: star1},
        ]
      }
    }, 
  }
</script>

<style scoped>
  .card {
    display: flex;
    max-width: 480px;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .card-course {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .card-title {
    margin-top: 4px;
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%; 
  }
  .card-price {
    margin-top: 20px;
    color: var(--accent-color-ff-8800);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-date {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-date > img {
    width: 24px;
    height: 24px;
  }
  .card-date > p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-author > p{
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author__img {
    border-radius: 118.519px;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 32px;
    height: 32px;
  }
  .card-author__img > img {
    width: 32px;
    height: 32px;
  }
  .card-finish {
    margin-top: 20px;
    color: #24B50D;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  } 
  .leave-review {
    margin-top: 20px;
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
    align-self: flex-start;
    transition: 0.15s ease-in;
  }
  .leave-review:hover {
    color: #E97E03;
  }
  .card-done {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .card-done > img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  .card-done > p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-rating {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .card-rating > img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .card-rating > img:last-child {
    margin-right: 6px;
  }
  .card-rating-number {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-rating-reviews {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  @media screen and (max-width: 1100px){
    .card{
      max-width: 100%;
    }
  }
</style>