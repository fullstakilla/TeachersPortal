<template>
  <div class="find__teachers_page">
    <div class="container">
      <h1 class="heading-1">Найти репетитора</h1>
      <div class="find_section">
        <FilterTeachers v-model:value="search" @Budget2Event="thisBudget2" @Budget1Event="thisBudget1" @mainInput="mainSearch" @checkBoxItems="checkBoxItem" @OffItems="OffItem" @clickCheckOne="clickCheckForOne" @clickCheckBox="clickRaiting" :checksItems="checksItems" :checked="checked" :showTitle="showTitle"/>
        <div class="cards">
          <CardsTeachers 
          v-if="showCards" :cardItems="cardItems" @pushArr="clickPush"
          />
          <p v-else class="subtext p-error">Список вакансий пуст! Проверьте правильность ввода данных</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterTeachers from '@/components/FilterTeachers.vue'
import CardsTeachers from '@/components/CardsTeachers.vue';

import img1 from "@/assets/img/mainpage-img/1circle.png"
import img2 from "@/assets/img/mainpage-img/2circle.png"
import img3 from "@/assets/img/mainpage-img/3circle.png"
import img4 from "@/assets/img/mainpage-img/4cir.png"
  export default {
    components: {
      FilterTeachers,
      CardsTeachers,
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
        ],
        checksItems: [
          {id: 1, title: "Начальные классы", checked: false},
          {id: 2, title: "Русский язык и литература", checked: false},
          {id: 3, title: "Математика и информатика", checked: false},
          {id: 4, title: "Биология и химия", checked: false},
          {id: 5, title: "История и обществознание", checked: false},
          {id: 6, title: "География и экономика", checked: false},
          {id: 7, title: "Иностранные языки", checked: false},
          {id: 8, title: "Музыка и рисование", checked: false},
          {id: 9, title: "Подготовка к ЕГЭ и ОГЭ", checked: false},
          {id: 10, title: "Университетская программа", checked: false},
          {id: 11, title: "Для взрослых", checked: false},
          {id: 12, title: "Физика и электротехника", checked: false},
          {id: 13, title: "Правоведение и философия", checked: false},
          {id: 14, title: "Рукоделие и творчество ", checked: false},
          {id: 15, title: "Программирование и дизайн", checked: false},
        ],
        search: '',
        fullItems: [],
        checkArray: [],
        showCards: true,
        budgetNew1: '',
        budgetNew2: '', 
        checkBoxNew: '',
        checked: false, 
        showTitle: "Показать только срочные задания",
        checkedRaiting: false,
      }
    }, 
    methods: {
      mainSearch(){
        let selectedCheckboxes = this.checkArray.length > 0;
        const filterByCheckbox = (item) => {
          return selectedCheckboxes ? this.checkArray.includes(item.about) : true;
        }
        const filterByPrice = (item) => {
          if (this.budgetNew1 && this.budgetNew2) {
            const budgetInt1 = parseInt(this.budgetNew1)
            const budgetInt2 = parseInt(this.budgetNew2)
            return item.price >= budgetInt1 && item.price <= budgetInt2
          }
          else if(this.budgetNew1){
            const budgetInt1 = parseInt(this.budgetNew1)
            return item.price >= budgetInt1
          }
          else if(this.budgetNew2){
            const budgetInt2 = parseInt(this.budgetNew2)
            return item.price <= budgetInt2
          }
          return true;
        }
        const filterBySearch = (item, regex) => {
          return regex.test(item.about);
        }
        const searchWords = this.search.split(' ');
        const regexPatterns = searchWords.map(word => `(?=.*${word})`);
        const regex = new RegExp(regexPatterns.join(''), 'i');
        this.cardItems = this.fullItems.filter((cardItem) => {
          return filterByCheckbox(cardItem) && filterByPrice(cardItem) && filterBySearch(cardItem, regex);
        })
        this.showCards = this.cardItems.length > 0;
      }, 
      clickPush(){
        const newArr = this.cardItems.slice(0, 6)
        this.cardItems = this.cardItems.concat(newArr)
      },
      OffItem(){
        this.search = ''
        this.cardItems = this.fullItems
        this.showCards = this.cardItems.length > 0
        this.checkArray = []
        this.checkBoxNew = ''
        this.budgetNew1 = ''
        this.budgetNew2 = ''
      },
      thisBudget1(value){
        this.budgetNew1 = value
      },
      thisBudget2(value){
        this.budgetNew2 = value
      },
      checkBoxItem(value){
        if (!this.checkArray.includes(value)) {
          this.checkArray.push(value);
        } 
        else {
          const index = this.checkArray.indexOf(value);
          if (index !== -1) {
            this.checkArray.splice(index, 1);
          }
        }
      },
      clickCheckForOne() {
        this.checksItems.forEach(item => {
          item.checked = true;  
        });
      }, 
      clickRaiting(){
        this.checkedRaiting = !this.checkedRaiting
        if(this.checkedRaiting == true){
          this.cardItems = this.cardItems.filter(item => item.raiting1 > parseInt("4.5"))
        }
        else{
          this.cardItems = this.fullItems
        }
      }
    },
    created(){
      this.fullItems = [...this.cardItems]
    },
  }
</script>

<style scoped>
  .find__teachers_page{
    padding: 50px 0 100px 0;
  }
  .heading-1{
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 50px;
  }
  .find_section{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .p-error{
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--accent-color-ff-704-d);
    text-align: center;
    padding-top: 5px;
    padding-right: 200px;
  }
  @media screen and (max-width: 1410px){
    .find_section{
      gap: 30px;
    }
  }
  @media screen and (max-width: 810px){
    .find__teachers_page{
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }
  @media screen and (max-width: 784px){
    .find_section{
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 750px){
    .find_section{
      align-items: unset;
    }
  }
  @media screen and (max-width: 520px){
    .find__teachers_page{
      padding: 90px 0 64px 0;
    }
  }
</style>