<template>
  <div class="more_section_items">
    <h1 class="heading-2">{{ desc }}</h1>
    <div class="cards_section">
      <CardProfileItem
        v-for="cardItem of cardItems"
        :key="cardItem.id"
        :about="cardItem.about"
        :title="cardItem.title"
        :price="cardItem.price"
        :data_title="cardItem.data_title"
        :who="cardItem.who"
        :img="cardItem.img"
        :imgFire="cardItem.imgFire"
        :fire="cardItem.fire"
      />
      <btn-background :disable="isDisabled" :style="btnDowlandStyle" @click="dowlandMore" class="btn_grid">{{btn_dowland}}</btn-background>
    </div>
  </div>
</template>

<script>
import CardProfileItem from '@/components/UI/CardProfileItem.vue';

import img1 from '@/assets/img/mainpage-img/1circle.png'
import img2 from '@/assets/img/mainpage-img/2circle.png'
import img3 from '@/assets/img/mainpage-img/3circle.png'
import img4 from '@/assets/img/mainpage-img/4cir.png'
import fireImg from "@/assets/img/findpupil-img/fire.svg"
  export default {
    components: {
      CardProfileItem,
    }, 
    props: {
      desc: {
        type: String,
        required: true,
      }
    },
    data(){
      return{
        cardItems: [
          {id: 1, about: "Иностранные языки", title: "Нужен репетитор по английскому", price: 15000, data_title: "27.05.2023 - 02.06.2023", who: "Александр Кайсаров", img: img1, imgFire: fireImg, fire:"Срочное задание"},
          {id: 2, about: "Для взрослых", title: "Нужен инструктор по вождению", price: 12000, data_title: "29.05.2023 - 05.07.2023", who: "Елюкина Виктория ", img: img2, imgFire: "", fire:""},
          {id: 3, about: "Музыка и рисование", title: "Нужен репетитор по музыке", price: 5000, data_title: "27.06.2023 - 12.06.2023", who: "Мария Сидорова", img: img4, imgFire: "", fire:""},
          {id: 4, about: "Физика и электротехника", title: "Нужен репетитор по физике", price: 3400, data_title: "07.03.2023 - 15.06.2023", who: "Иван Петров", img: img3, imgFire: fireImg, fire:"Срочное задание"},
          {id: 5, about: "Программирование и дизайн", title: "Нужен репетитор по информатике", price: 10000, data_title: "03.01.2023 - 10.08.2023", who: "Александр Кайсаров", img: img1, imgFire: "", fire:""},
          {id: 6, about: "География и экономика", title: "Нужен репетитор по географии", price: 7500, data_title: "01.05.2023 - 22.09.2023", who: "Елюкина Виктория ", img: img2, imgFire: fireImg, fire:"Срочное задание"},
          {id: 7, about: "Иностранные языки", title: "Нужен репетитор по английскому", price: 15000, data_title: "27.05.2023 - 02.06.2023", who: "Александр Кайсаров", img: img1, imgFire: fireImg, fire:"Срочное задание"},
          {id: 8, about: "Для взрослых", title: "Нужен инструктор по вождению", price: 12000, data_title: "29.05.2023 - 05.07.2023", who: "Елюкина Виктория ", img: img2, imgFire: "", fire:""},
          {id: 9, about: "Музыка и рисование", title: "Нужен репетитор по музыке", price: 5000, data_title: "27.06.2023 - 12.06.2023", who: "Мария Сидорова", img: img4, imgFire: "", fire:""},
          {id: 10, about: "Физика и электротехника", title: "Нужен репетитор по физике", price: 3400, data_title: "07.03.2023 - 15.06.2023", who: "Иван Петров", img: img3, imgFire: fireImg, fire:"Срочное задание"},
          {id: 11, about: "Программирование и дизайн", title: "Нужен репетитор по информатике", price: 10000, data_title: "03.01.2023 - 10.08.2023", who: "Александр Кайсаров", img: img1, imgFire: "", fire:""},
          {id: 12, about: "География и экономика", title: "Нужен репетитор по географии", price: 7500, data_title: "01.05.2023 - 22.09.2023", who: "Елюкина Виктория ", img: img2, imgFire: fireImg, fire:"Срочное задание"},
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
      gap: 20px;
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