<template>
  <div class="slider">
    <div class="container"> 
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :direction="'vertical'"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 120,
          depth: 40,
          modifier: 1.5,
          slideShadows: false,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="swiper_container"
      >
      <swiper-slide>
        <SliderItem 
        :title="sliderItems[0].title"
        :description="sliderItems[0].description"
        />
      </swiper-slide>
      <swiper-slide>
        <SliderItem 
        :title="sliderItems[1].title"
        :description="sliderItems[1].description"
        />
      </swiper-slide>
      <swiper-slide>
        <SliderItem 
        :title="sliderItems[2].title"
        :description="sliderItems[2].description"
        />
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
 import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import SliderItem from '@/components/SliderItem.vue'
  export default {
    components: {
      SliderItem, 
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, EffectCoverflow, Pagination],
      };
    },
    data(){
      return {
        sliderItems: [
          {id: 1, title: "Как найти репетитора для ученика", description: "Зарегистрируйтесь на сайте. Выберите репетитора из каталога. Опишите свои требования к репетитору. Для того, чтобы вы ничего не упустили, мы сделали форму заявки достаточно подробной."},
          {id: 2, title: "Как найти учеников для репититора", description: "Зарегистрируйтесь на сайте. Добавьте информацию о своей профессиональной квалификации. Подробно заполните свой профиль откликайтесь на заявки учеников."},
          {id: 3, title: "Процесс оплаты занятия", description: "Мы сделали удобную форму оплаты, гарантирующую безопасность сделки для учеников и репетиторов. Ученик может забронировать занятие, пополнив баланс, а репетитор получит оплату, когда занятие состоится."},
        ],
      }
    }
  }
</script>

<style scoped>
 .slider {
    margin-top: 80px;
  }
  .swiper_container {
    width: 100%;
    padding: 0;
    position: relative;
    height: 250px;
  }
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 24px;
  }
  .swiper-slide:nth-child(1){
    background: var(--accent-color-fff-7-ef);
  }
  .swiper-slide:nth-child(2){
    background: var(--aqua-color);
  }
  .swiper-slide:nth-child(3) {
    background: var(--green-color);
  }
  @media screen and (max-width: 520px){
    .slider{
      margin-top: 64px;
    }
  }
  @media screen and (max-width: 500px){
    .swiper-slide{
      width: 100% !important;
      height: 200px !important;
    }
  }
  </style>