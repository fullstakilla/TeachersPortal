<template>
  <div class="reviews_card_item">
    <div class="section_about">
      <div class="about_reviews">
        <div class="about_main">
          <img :src="img" alt="">
          <div class="about_text">
            <h3 class="heading-6">{{ who }}</h3>
            <div class="about_text_p">
              <p class="subheading">{{ title }}</p>
              <p class="subtext">{{ time }}</p>
            </div>
          </div>
        </div>
        <div class="stars_content_block">
          <Stars class="stars_content"
          v-for="starItem in starItems"
          :key="starItem.id"
          :imgStar="starItem.imgStar"
          />
        </div>
      </div>
      <p class="description-text">
          {{ description }}
        </p>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/UI/Stars.vue"
import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
  export default {
    components: {
      Stars,
    }, 
    props: {
      img: {
        type: String,
        required: true,
      },
      who: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        starItems: [
          {id: 1, imgStar: starImg},
          {id: 2, imgStar: starImg},
          {id: 3, imgStar: starImg},
          {id: 4, imgStar: starImg},
          {id: 5, imgStar: star1},
        ],
      }
    }
  }
</script>

<style scoped>
  .reviews_card_item {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-e-5-e-5-e-5);
  }
  .section_about {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .about_reviews {
    display: flex;
    justify-content: space-between;
    align-items: flex-start
  }
  .about_main {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .stars_content_block{
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 9px;
  }
  .about_main img{
    width: 64px;
    height: 64px;
  }
  .about_text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-333333-text);
  }
  .about_text_p {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .subheading {
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--heading-666666-text);
  }
  .description-text {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-333333-text);
  }
  @media screen and (max-width: 494px){
    .about_reviews{
      flex-direction: column;
    }
  }
</style>