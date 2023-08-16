<template>
  <div class="reviews">
    <div class="reviews-container container">
      <div class="reviews-h2 heading-2">
        Отзывы наших клиентов
      </div>
      <div class="reviews-items">
        <ReviewItem 
          v-for="reviewsElement of reviewsElements"
          :key="reviewsElement.id"
          :title="reviewsElement.title"
          :description="reviewsElement.description"
          :about="reviewsElement.about"
          :imgto="reviewsElement.imgto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewItem from './ReviewItem.vue'
import img1circle from '@/assets/img/mainpage-img/1circle.png';
import img2circle from '@/assets/img/mainpage-img/2circle.png';
import img3circle from '@/assets/img/mainpage-img/3circle.png';
import img4circle from '@/assets/img/mainpage-img/4cir.png';
  export default {
    components: {
      ReviewItem,
    },
    data(){
      return {
        reviewsElements: [
          {id: 1, title: "Петр Кузнецов", description: "Ученик по математике", about: "Начал заниматься с репетитором, найденным на сервисе Портал учителя, и доволен результатом. Очень удобно, что все занятия проводятся онлайн, что позволяет мне заниматься в удобное время и не тратить время на дорогу до учителя. Результаты уже заметны!", imgto: img1circle},
          {id: 2, title: "Елена Иванова", description: "Репетитор по английскому языку", about: "Я уже несколько месяцев использую сервис Портал учителя для поиска учеников и остаюсь довольна результатом. Все мои ученики - целеустремленные и серьезные люди, которые действительно хотят учиться. Большое спасибо за качественный сервис!", imgto: img2circle},
          {id: 3, title: "Иван Петров", description: "Ученик по физике", about: "Был очень рад, что попал на этот сервис и смог найти отличного репетитора. Занятия проходят на высоком уровне, а самое главное - дистанционно, что позволяет мне заниматься дома, не выходя из квартиры. Благодарю Портал учителя за такую возможность!", imgto: img3circle},
          {id: 4, title: "Мария Сидорова", description: "Репетитор по Французскому языку", about: "Портал учителя - это отличный инструмент для поиска новых учеников. У меня появилось много новых учеников, которые действительно заинтересованы в изучении французского языка. Сервис стал хорошей помощью для развития моей карьеры!", imgto: img4circle},
        ],
      }
    }
  }
</script>

<style scoped>
  .reviews {
    margin-top: 90px;
  }
  .reviews-h2 {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 50px;
  }
  .reviews-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  } 
  @media (max-width: 930px) {
    .reviews-items {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  } 
  @media screen and (max-width: 810px){
    .reviews-h2{
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .reviews{
      margin-top: 64px;
    }
    .reviews-h2{
      margin-bottom: 32px;
    }
  }
</style>