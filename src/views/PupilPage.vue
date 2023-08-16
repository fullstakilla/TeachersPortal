<template>
  <div class="pupil__page">
    <div class="container">
      <router-link to="/TeachersPortal/FindPupils" class="router_none">
        <div class="back_to_page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
            <path d="M3.75 10.9766L18.75 10.9766" stroke="#FF8800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.7998 4.951L3.7498 10.975L9.7998 17" stroke="#FF8800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="heading-6">Вернуться назад</p>
        </div>
      </router-link>
      <div class="about__section">
        <div class="about__section_1">
          <CardPupilPage />
        </div>
        <div class="about__section_2">
          <AboutPupil />
          <ReviewsCards />
        </div>
      </div>
      <div class="more_section">
        <MoreItem 
        :desc="desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardPupilPage from '@/components/CardPupilPage.vue';
import AboutPupil from '@/components/AboutPupil.vue';
import ReviewsCards from '@/components/ReviewsCards.vue';
import MoreItem from '@/components/MoreItem.vue';
  export default {
    components: {
      CardPupilPage,
      AboutPupil,
      ReviewsCards,
      MoreItem,
    },
    data(){
      return {
        desc: "Похожие задания"
      }
    }
  }
</script>

<style scoped>
.pupil__page {
  padding: 50px 0 100px 0;
}
.back_to_page {
  display: flex;
  align-items: center;
  gap: 8px;
}
.back_to_page p{
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  color: var(--accent-color-ff-8800);
  border-bottom: 1.5px solid var(--accent-color-ff-8800);
}
.about__section {
  padding: 30px 0 100px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.about__section_2 {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.router_none{
  text-decoration: none;
}

@media screen and (max-width: 1410px){
  .about__section{
    gap: 30px;
  }
}
@media screen and (max-width: 968px){
  .about__section{
    flex-direction: column;
  }
  .about__section_1{
    width: 100%;
  }
}
@media screen and (max-width: 810px){
    .pupil__page {
      padding: 90px 0 100px 0;
    }
}
@media screen and (max-width: 520px){
    .pupil__page{
      padding: 90px 0 64px 0;
    }
}
</style>