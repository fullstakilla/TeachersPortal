<template>
  <div class="card_teachers_section">
    <CardTeachersItem 
      v-for="cardItem of cardItems"
      :key="cardItem.id"
      :about="cardItem.about"
      :title="cardItem.title"
      :price="cardItem.price"
      :data_title="cardItem.data_title"
      :who="cardItem.who"
      :img="cardItem.img"
      :raiting1="cardItem.raiting1"
      :raiting2="cardItem.raiting2"
    />
    <btn-background :disable="isDisabled" :style="btnDowlandStyle" @click="dowlandMore" class="btn_grid_teachers">{{btn_dowland}}</btn-background>
  </div>
</template>

<script>
import CardTeachersItem from '@/components/CardTeachersItem.vue';
  export default {
    components: { CardTeachersItem },
    props: {
      cardItems: {
        type: Array,
        required: true,
      }
    },
    data(){
      return {
        count: 0,
        btn_dowland: "Загрузить еще",
        isDisabled: false,
      }
    },
    methods: {
      dowlandMore(){
        this.count++;
        if (this.count <= 5) {
          this.$emit('pushArr', this.cardItems)
        }
      },
    },
    computed: {
      btnDowlandStyle() {
        if (this.count >= 5) {
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
    },
  }
</script>

<style scoped>
  .card_teachers_section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .btn_grid_teachers{
    grid-column: span 2;
  }
  @media screen and (max-width: 1143px){
    .card_teachers_section{
      grid-template-columns: repeat(1, 1fr);
    }
    .btn_grid_teachers{
      grid-column: span 1;
    }
  }
  @media screen and (max-width: 784px){
    .card_teachers_section{
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .btn_grid_teachers{
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 750px){
    .card_teachers_section{
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }
    .btn_grid_teachers{
      grid-column: span 1;
    }
  }
</style>