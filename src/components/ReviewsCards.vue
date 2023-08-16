<template>
  <div class="reviews_card">
    <h2 class="heading-5">Отзывы</h2>
    <div class="block_reviews">
      <ReviewsCardItem 
        v-for="ReviewsItem in ReviewsItems"
        :key="ReviewsItem.id"
        :img="ReviewsItem.img"
        :who="ReviewsItem.who"
        :title="ReviewsItem.title"
        :time="ReviewsItem.time"
        :description="ReviewsItem.description"
      />
    </div>
    <div @click="clickReviews" class="btn_section">
      <p class="heading-6">{{ text_btn }}</p>
      <img src="@/assets/img/pupil_page-img/Iconly/Two-tone/ArrowDown2.svg" alt="">
    </div>
  </div>
</template>

<script>
import ReviewsCardItem from '@/components/UI/ReviewsCardItem.vue';

import img1 from "@/assets/img/findpupil-img/3.png"
import img2 from '@/assets/img/pupil_page-img/2.png'
import img3 from '@/assets/img/pupil_page-img/Avatar.png'
  export default {
    components: {
      ReviewsCardItem,
    },
    data(){
      return {
        ReviewsItems: [
          {id: 1, img: img1, who: "Олеся Меньшакова", title: "Репетитор", time: "07.01.2023", description: "С Александром мы прошли курс по английскому языку. Стоит отметить, что он старательный ученик и успешно показал наши результаты на ЕГЭ"},
          {id: 2, img: img2, who: "Елюкина Виктория", title: "Репетитор", time: "12.02.2023", description: "С Александром Александровичем состоялось несколько занятий. Все прошло замечательно, педагог понравился - прекрасно объясняет материал, пунктуальный, деликатный. Рекомендую!"},
          {id: 3, img: img3, who: "Александр Булков", title: "Репетитор", time: "04.05.2023", description: "С Александром мы прошли курс по английскому языку. Стоит отметить, что он старательный ученик и успешно показал наши результаты на ЕГЭ"},
        ], 
        text_btn: "Смотреть все отзывы",
        count: 0,
        moreReviews: [
          {id: 4, img: img1, who: "Елюкина Виктория ", title: "Репетитор", time: "29.06.2023", description: "С Александром Александровичем состоялось несколько занятий. Все прошло замечательно, педагог понравился - прекрасно объясняет материал, пунктуальный, деликатный. Рекомендую!"},
          {id: 5, img: img2, who: "Олеся Меньшакова", title: "Репетитор", time: "08.07.2023", description: "С Александром мы прошли курс по английскому языку. Стоит отметить, что он старательный ученик и успешно показал наши результаты на ЕГЭ"},
        ]
      }
    },
    methods: {
      clickReviews(){
        this.count ++
        if(this.count % 2 === 1){
          this.text_btn = "Скрыть"
          document.querySelector('.btn_section img').style.transform = "rotate(180deg)"
          this.moreReviews.forEach(reviews => {
            this.ReviewsItems.push(reviews)
          })
        }
        else {
          this.text_btn = "Смотреть все отзывы"
          document.querySelector('.btn_section img').style.transform = "unset"
          this.ReviewsItems.splice(-2)
        }
      }
    }
  }
</script>

<style scoped>
  .reviews_card{
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    display: flex;
    flex-direction: column;
    max-width: 1050px;
    width: 100%;
  }
  .heading-5{
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 30px;
  }
  .btn_section {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ff-8800);
  }

</style>