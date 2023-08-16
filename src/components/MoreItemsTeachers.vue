<template>
  <div class="more_section_items">
    <h1 class="heading-2">{{ desc }}</h1>
    <div class="cards_section">
      <CardProfileTeachersItem
      v-for="cardItem of cardItems"
      :key="cardItem.id"
      :about="cardItem.about"
      :title="cardItem.title"
      :price="cardItem.price"
      :data_title="cardItem.data_title"
      :who="cardItem.who"
      :img="cardItem.img"
      :raiting1="cardItem.raiting1"
      :raiting2="cardItem.raiting2"
      />
      <btn-background :disable="isDisabled" :style="btnDowlandStyle" @click="dowlandMore" class="btn_grid">{{btn_dowland}}</btn-background>
    </div>
  </div>
</template>

<script>
import CardProfileTeachersItem from '@/components/UI/CardProfileTeachersItem.vue';

import img1 from '@/assets/img/mainpage-img/1circle.png'
import img2 from '@/assets/img/mainpage-img/2circle.png'
import img3 from '@/assets/img/mainpage-img/3circle.png'
import img4 from '@/assets/img/mainpage-img/4cir.png'
  export default {
    components: { CardProfileTeachersItem },
    props: {
      desc: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        cardItems: [
          {id: 1, about: "Иностранные языки", title: "Репетитор по английскому", price: 15000, data_title: "Проведено 450 занятий", who: "Александр Кайсаров", img: img1, raiting1: "4.5", raiting2: "(40 отзывов)"},
          {id: 2, about: "Для взрослых", title: "Инструктор по вождению", price: 12000, data_title: "Проведено 120 занятий", who: "Елюкина Виктория ", img: img2, raiting1: "4.0", raiting2: "(46 отзывов)"},
          {id: 3, about: "Музыка и рисование", title: "Репетитор по музыке", price: 5000, data_title: "Проведено 150 занятий", who: "Мария Сидорова", img: img4, raiting1: "4.5", raiting2: "(12 отзывов)"},
          {id: 4, about: "Физика и электротехника", title: "Репетитор по физике", price: 3400, data_title: "Проведено 239 занятий", who: "Иван Петров", img: img3, raiting1: "4.5", raiting2: "(32 отзывов)"},
          {id: 5, about: "Программирование и дизайн", title: "Репетитор по информатике", price: 10000, data_title: "Проведено 127 занятий", who: "Александр Кайсаров", img: img1, raiting1: "5.0", raiting2: "(23 отзывов)"},
          {id: 6, about: "География и экономика", title: "Репетитор по географии", price: 7500, data_title: "Проведено 340 занятий", who: "Елюкина Виктория ", img: img2, raiting1: "4.5", raiting2: "(124 отзыва)"},
          {id: 7, about: "Иностранные языки", title: "Репетитор по английскому", price: 15000, data_title: "Проведено 450 занятий", who: "Александр Кайсаров", img: img1, raiting1: "4.5", raiting2: "(40 отзывов)"},
          {id: 8, about: "Для взрослых", title: "Инструктор по вождению", price: 12000, data_title: "Проведено 120 занятий", who: "Елюкина Виктория ", img: img2, raiting1: "4.0", raiting2: "(46 отзывов)"},
          {id: 9, about: "Музыка и рисование", title: "Репетитор по музыке", price: 5000, data_title: "Проведено 150 занятий", who: "Мария Сидорова", img: img4, raiting1: "4.5", raiting2: "(12 отзывов)"},
          {id: 10, about: "Физика и электротехника", title: "Репетитор по физике", price: 3400, data_title: "Проведено 239 занятий", who: "Иван Петров", img: img3, raiting1: "4.5", raiting2: "(32 отзывов)"},
          {id: 11, about: "Программирование и дизайн", title: "Репетитор по информатике", price: 10000, data_title: "Проведено 127 занятий", who: "Александр Кайсаров", img: img1, raiting1: "5.0", raiting2: "(23 отзывов)"},
          {id: 12, about: "География и экономика", title: "Репетитор по географии", price: 7500, data_title: "Проведено 340 занятий", who: "Елюкина Виктория ", img: img2, raiting1: "4.5", raiting2: "(124 отзыва)"},
        ],
        count: 0,
        btn_dowland: "Загрузить еще",
        isDisabled: false,
      }
    },
    methods: {
      dowlandMore(){
        this.count++;
        if (this.count <= 3) {
          const newArr = this.cardItems.slice(0, 12)
          this.cardItems = this.cardItems.concat(newArr)
        }
      },
    },
    computed: {
      btnDowlandStyle() {
        if (this.count >= 3) {
          this.isDisabled = true
          return {
            background: "var(--gray-e-5-e-5-e-5)",
            cursor: "no-drop",
          }
        } 
        else {
          return {}
        }
      },
    }
  }
</script>

<style scoped>
  .more_section_items {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .heading-2 {  
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .cards_section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .btn_grid {
    grid-column: span 3;
    width: 100%;
  }
  @media screen and (max-width: 1440px){
    .cards_section{
      justify-items: center;
    }
  }
  @media screen and (max-width: 1220px){
    .cards_section{
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .btn_grid {
      grid-column: span 2;
    }
    .heading-2{
      text-align: center;
    }
  }
  @media screen and (max-width: 884px){
    .cards_section{
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
      justify-items: flex-start;
    }
    .btn_grid {
      grid-column: span 1;
    }
    .heading-2{
      text-align: start;
    }
    .more_section_items{
      gap: 30px;
    }
  }
  @media screen and (max-width: 810px){
    .heading-2{
      text-align: center;
    }
  }
</style>