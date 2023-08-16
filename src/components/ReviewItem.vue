<template>
  <div class="reviews-item">
    <div class="reviews-item__top">
      <div class="reviews-item__top-left">  
        <img :src="imgto" alt="" class="reviews-item__top-left__img">
        <div class="reviews-item__top-left__name-cont">
          <h1 class="reviews-item__top-left__name heading-6">{{title}}</h1>
          <p class="reviews-item__top-left__prof subheading">{{description}}</p>
        </div>
      </div>
      <ImgReviews 
        v-for="imgItem of imgItems"
        :key="imgItem.id"
        :img="imgItem.img"
      />
    </div>
    <p class="reviews-item__p description-text">
      {{about}}
    </p>
  </div>
</template>

<script>
import ImgReviews from '@/components/ImgReviews.vue';
import starImg from '@/assets/img/mainpage-img/Star.svg'
  export default {
    components: {
      ImgReviews,
    },
    data(){
      return{
        imgItems: [
          {id: 1, img:starImg},
        ]
      }
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String, 
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
      imgto: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .reviews-item {
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 10px;
    border-radius: 24px;
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .reviews-item__top {
    display: flex;
    justify-content: space-between;
  }
  .reviews-item__top-left {
    display: flex;
  }
  .reviews-item__top-left__img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--accent-color-ffe-1-bf);
    margin-right: 16px;
  }
  .reviews-item__top-left__name-cont {
    display: flex;
    flex-direction: column;
  }
  .reviews-item__top-left__name {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    margin-top: 9.5px;
  }
  .reviews-item__top-left__prof {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 5px;
  }
  .reviews-item__p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-top: 10px;
  }
  @media (max-width:505px) {
    .reviews-item__top {
      flex-direction: column;
    }
    .reviews-item__p {
      margin-top: 0px;
    }
  }
</style>