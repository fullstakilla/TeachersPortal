<template>
  <div class="main-content">
    <div class="container">
      <div class="main_container">
        <div class="content_1">
          <CardTeacherPage />
          <BalanceCard />
        </div>
        <div class="content_2">
          <AboutItemBalance />
          <ContentAccountCards />
          <ReviewsCards />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import CardTeacherPage from '@/components/CardTeacherPage.vue'
import AboutItemBalance from '@/components/AboutItemBalance.vue'
import BalanceCard from '@/components/BalanceCard.vue'
import ContentAccountCards from '@/components/ContentAccountCards.vue'
import ReviewsCards from '@/components/ReviewsCards.vue'

  export default {
    components: {
      CardTeacherPage,
      AboutItemBalance,
      BalanceCard,
      ContentAccountCards,
      ReviewsCards,
    }, 
    methods: {
      ...mapMutations([
        'changeError'
      ])
    }, 
    created(){
      this.changeError()
    }
  }
</script>

<style scoped>
  .main-content{
    padding: 50px 0 100px 0;
  }
  .main_container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .content_1{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .content_2{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media screen and (max-width: 1410px){
    .main_container{
      gap: 30px;
    }
  }
  @media screen and (max-width: 968px){
    .main_container{
      display: flex;
      flex-direction: column;
    }
    .content_1{
      width: 100%;
    }
  }
  @media screen and (max-width: 810px){
    .main-content {
      padding: 90px 0 100px 0;
    }
  }
  @media screen and (max-width: 520px){
    .main-content{
      padding: 90px 0 64px 0;
    }
  }
</style>