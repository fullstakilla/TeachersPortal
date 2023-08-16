<template>
  <div class="main_page">
    <FirstScreen />
    <UnderFsc />
    <AchieveGoals />
    <SubjectElems />
    <SliderElement />
    <Reviews />
    <OfferElement />
  </div>
</template>

<script>
import FirstScreen from '@/components/FirstScreen.vue'
import UnderFsc from '@/components/UnderFsc.vue'
import AchieveGoals from '@/components/AchieveGoals.vue'
import SubjectElems from '@/components/SubjectElems.vue'
import SliderElement from '@/components/SliderElement.vue'
import Reviews from '@/components/Reviews.vue'
import OfferElement from '@/components/OfferElement.vue'

  export default {
    components: {
      FirstScreen,
      UnderFsc,
      AchieveGoals,
      SubjectElems,
      SliderElement,
      Reviews,
      OfferElement,
    },
  }
</script>

<style scoped>
  .main_page{
    padding: 50px 0 100px 0;
  }
  @media screen and (max-width: 520px){
    .main_page{
      padding: 50px 0 64px 0;
    }
  }
</style>