<template>
  <div class="under-fsc">
    <div class="under-fsc-container container">
      <CardItem 
        v-for="itemCard of itemsCard"
        :key="itemCard.id"
        :title="itemCard.title"
        :description="itemCard.description"
      />
    </div>
  </div>
</template>

<script>
import CardItem from './CardItem.vue'
  export default {
    components: {
      CardItem,
    },
    data(){
      return{
        itemsCard: [
          {id: 1, title: "Поиск репетитора", description: "Найдите опытного репетитора для своего обучения. Используйте фильтры чтобы сузить поиск"},
          {id: 2, title: "Поиск учеников", description: "Разместите описание своей услуги и найдите учеников которые заинтересованы в обучении"},
        ],
      }
    }
  }
</script>

<style scoped>
  .under-fsc {
    margin-top: 30px;
    min-height: 154px;
  }
  .under-fsc-container {
    display: flex;
    gap: 30px;
  } 
  @media (max-width: 679px) {
    .under-fsc-container {
      flex-direction: column;
      gap: 16px;
    }
  }
</style>