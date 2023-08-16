<template>
  <div class="tasks-cont">
    <h5 class="heading-5">Мои задачи</h5>
    <div class="pick-container">
      <ButtonSlide :style="style1" @click="clickSlide1" class="slide_1">Я репетитор</ButtonSlide>
      <ButtonSlide :style="style2" @click="clickSlide2" class="slide_2">Я ученик</ButtonSlide>
      <ButtonSlide :style="style3" @click="clickSlide3" class="slide_3">
        Ожидает подтверждения
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
          <path d="M12.6199 4.9209L9.42081 7.4966C8.8154 7.97125 7.96672 7.97125 7.36131 7.4966L4.13477 4.9209" :stroke="svgMail" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83387 0.75H11.9048C12.9244 0.761435 13.8947 1.19245 14.59 1.94265C15.2852 2.69286 15.6446 3.69677 15.5844 4.72059V9.6165C15.6446 10.6403 15.2852 11.6442 14.59 12.3944C13.8947 13.1446 12.9244 13.5756 11.9048 13.5871H4.83387C2.64394 13.5871 1.16797 11.8055 1.16797 9.6165V4.72059C1.16797 2.53159 2.64394 0.75 4.83387 0.75Z" :stroke="svgMail" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </ButtonSlide>
    </div>
    <div class="cards teachers">
      <CardBalanceTeachers v-show="isShow1"
        v-for="cardTeacher in cardTeachers"
        :key="cardTeacher.id"
        :sub="cardTeacher.sub"
        :about="cardTeacher.about"
        :price="cardTeacher.price"
        :dateText="cardTeacher.dateText"
        :who="cardTeacher.who"
        :img="cardTeacher.img"
        :review="cardTeacher.review"
      />
    </div>
    <div class="cards pupils">
      <CardBalancePupils v-show="isShow2"
        v-for="cardPupil in cardPupils"
        :key="cardPupil.id"
        :sub="cardPupil.sub"
        :about="cardPupil.about"
        :price="cardPupil.price"
        :much="cardPupil.much"
        :who="cardPupil.who"
        :img="cardPupil.img"
        :raiting_1="cardPupil.raiting_1"
        :raiting_2="cardPupil.raiting_2"
      />
    </div>
    <div class="cards confirms">
      <ConfirmCard v-if="cardNow" v-show="isShow3"
        v-for="cardConfirm in cardConfirms"
        :key="cardConfirm.id"
        :sub="cardConfirm.sub"
        :about="cardConfirm.about"
        :price="cardConfirm.price"
        :dateText="cardConfirm.dateText"
        :who="cardConfirm.who"
        :img="cardConfirm.img"
        @clickOkNow="clickOkNow"
        @remove="removeCard"
        @removeNew="removeCardNew"
      />
      <p v-else class="subtext">Список заявок, ожидающих подтверждение пуст!</p>
    </div>
  </div>
</template>

<script>
import ButtonSlide from '@/components/UI/ButtonSlide.vue';
import CardBalanceTeachers from '@/components/CardBalanceTeachers.vue';
import CardBalancePupils from '@/components/CardBalancePupils.vue';
import ConfirmCard from '@/components/ConfirmCard.vue';

import img1 from '@/assets/img/mainpage-img/1circle.png'
import img2 from '@/assets/img/mainpage-img/2circle.png'
import img4 from '@/assets/img/mainpage-img/4cir.png'
  export default {
    components: {
      ButtonSlide,
      CardBalanceTeachers,
      CardBalancePupils,
      ConfirmCard,
    }, 
    data(){
      return {
        cardTeachers: [
          {id: 1, sub: "Иностранные языки", about: "Нужен репетитор по английскому", price: 2000, dateText: "27.05.2023 - 02.06.2023", who: "Александр Кайсаров", img: img1, review: "Оставить отзыв"},
          {id: 2, sub: "Математика и информатика", about: "Нужен репетитор по математике", price: 10000, dateText: "27.05.2023 - 02.06.2023", who: "Елюкина Виктория", img: img2, review: "Оставить отзыв"},
          {id: 3, sub: "Физика и электротехника", about: "Нужен репетитор по физике", price: 5000, dateText: "27.05.2023 - 02.06.2023", who: "Мария Сидорова", img: img4, review: "Оставить отзыв"},
        ],
        cardPupils: [
          {id: 1, sub: "Иностранные языки", about: "Репетитор по английскому", price: 15000, much:"Проведено 450 занятий", who: "Александр Кайсаров", img: img1, raiting_1: "4.5", raiting_2: "(40 отзывов)"},
          {id: 2, sub: "Математика и информатика", about: "Репетитор по математике", price: 10000, much:"Проведено 450 занятий", who: "Мария Сидорова", img: img4, raiting_1: "4.5", raiting_2: "(40 отзывов)"},
          {id: 3, sub: "Физика и электротехника", about: "Репетитор по физике", price: 5500, much:"Проведено 450 занятий", who: "Елюкина Виктория", img: img2, raiting_1: "4.5", raiting_2: "(40 отзывов)"},
        ],
        cardConfirms: [
          {id: 1, sub: "Иностранные языки", about: "Нужен репетитор по английскому", price: 1000, dateText: "27.05.2023 - 02.06.2023", who: "Александр Кайсаров", img: img1},
          {id: 2, sub: "Математика и информатика", about: "Репетитор по математике", price: 5500, dateText: "27.05.2023 - 02.06.2023", who: "Елюкина Виктория", img: img2},
          {id: 3, sub: "Физика и электротехника", about: "Нужен репетитор по физике", price: 10000, dateText: "27.05.2023 - 02.06.2023", who: "Иван Петров", img: img4},
        ],
        isShow1: false, isShow2: true, isShow3: false,
        style1: {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }, 
        style2: {
          background: "var(--accent-color-ff-8800)",
          color: "var(--accent-color-ffffff)"
        },
        style3: {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        },
        svgMail: "var(--accent-color-ff-8800)",
        cardNow: true,
        checkCard: {
          card1: true,
          card2: true,
          card3: true,
        }
      }
    }, 
    methods: {
      async clickOkNow(){
        this.cardConfirms.forEach(card => {
          if(card.id == 2){
            this.cardConfirms = this.cardConfirms.filter(card => card.id !== 2)
          }
        });
        this.checkCard.card1 = false
        await this.NoCards()
      },
      async removeCard(){
        this.cardConfirms.forEach(card => {
          if(card.id == 3){
            this.cardConfirms = this.cardConfirms.filter(card => card.id !== 3)
          }
        });
        this.checkCard.card2 = false
        await this.NoCards()
      },
      async removeCardNew(){
        this.cardConfirms.forEach(card => {
          if(card.id == 1){
            this.cardConfirms = this.cardConfirms.filter(card => card.id !== 1)
          }
        });
        this.checkCard.card3 = false
        await this.NoCards()
      },
      async NoCards(){
        if(this.checkCard.card1 == false && this.checkCard.card2 == false && this.checkCard.card3 == false ){
          this.cardNow = false
        }
      },
      clickSlide1(){
        this.isShow1 = true
        this.isShow2 = false
        this.isShow3 = false
        this.style1 = {
          background: "var(--accent-color-ff-8800)",
          color: "var(--accent-color-ffffff)"
        }
        this.style2 =  {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.style3 =  {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.svgMail = "var(--accent-color-ff-8800)"
      },
      clickSlide2(){
        this.isShow1 = false
        this.isShow2 = true
        this.isShow3 = false
        this.style1 = {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.style2 = {
          background: "var(--accent-color-ff-8800)",
          color: "var(--accent-color-ffffff)"
        }
        this.style3 = {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.svgMail = "var(--accent-color-ff-8800)"
      },
      clickSlide3(){
        this.isShow1 = false
        this.isShow2 = false
        this.isShow3 = true
        this.style1 = {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.style2 = {
          background: "var(--accent-color-ffffff)",
          color: "var(--heading-222222-heading)"
        }
        this.style3 = {
          background: "var(--accent-color-ff-8800)",
          color: "var(--accent-color-ffffff)"
        }
        this.svgMail = "var(--accent-color-ffffff)"
      }
    }
  }
</script>

<style scoped>
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 30px;
    max-width: 100%;
  }
  .slide_1, .slide_2, .slide_3{
    max-width: 325px;
    transition: 0.15s ease-in;
  }
  .slide_3{
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .tasks-cont {
    display: flex;
    max-width: 1050px;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    height: auto;
    border-radius: 24px;
    border: 1px solid #F2F2F2;
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .tasks-cont > h5{
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 30px;
  }
  .pick-container {
    display: flex;
    padding: 4px;
    gap: 4px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
  }
  svg path{
    transition: stroke 0.15s ease-in;
  }
  .teachers{
    margin-top: 30px;
  }
  .subtext{
    color: var(--accent-color-ff-704-d);
  }
  @media (max-width: 1100px) {
    .cards {
      display: grid;
      grid-template-columns: repeat(1, auto);
    }
  }
  @media screen and (max-width: 568px){
    .pick-container{
      flex-direction: column;
      gap: 4px;
    }
    .slide_1, .slide_2, .slide_3{
      max-width: 100%;
    }
  }
</style>