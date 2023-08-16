<template>
  <div class="main-content">
    <div class="container">
      <div v-if="showNew" class="main_container">
        <div class="content_1">
          <CardTeacherPage />
          <BalanceCard />
        </div>
        <div class="content_2">
          <AboutItemBalance />
          <TaskContent />
          <ReviewsCards />
        </div>
      </div>
      <p v-else class="subtext">Войдите на сайт, чтобы пользоваться страницей Разместить заявку!</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import CardTeacherPage from '@/components/CardTeacherPage.vue'
import AboutItemBalance from '@/components/AboutItemBalance.vue'
import BalanceCard from '@/components/BalanceCard.vue'
import TaskContent from '@/components/TaskContent.vue'
import ReviewsCards from '@/components/ReviewsCards.vue'

  export default {
    components: {
      CardTeacherPage,
      AboutItemBalance,
      BalanceCard,
      TaskContent,
      ReviewsCards,
    }, 
    methods: {
      ...mapMutations([
        'changeFl',
        'changeError'
      ]),
    },
    computed: {
      ...mapGetters([
        'showNew'
      ])
    }, 
    created(){
      this.changeFl()
      this.changeError()
    }
  }
</script>

<style scoped>
  .main-content{
    padding: 50px 0 100px;
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
  .subtext{
    color: var(--accent-color-ff-704-d);
    text-align: center;
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