<template>
  <div class="card_pupils_section">
    <CardPupilItem 
      v-for="cardItem of cardItems"
      :key="cardItem.id"
      :about="cardItem.about"
      :title="cardItem.title"
      :price="cardItem.price"
      :data_title="cardItem.data_title"
      :who="cardItem.who"
      :img="cardItem.img"
      :imgFire="cardItem.imgFire"
      :fire="cardItem.fire"
    />
    <btn-background :disable="isDisabled" :style="btnDowlandStyle" @click="dowlandMore" class="btn_grid_pupils">{{btn_dowland}}</btn-background>
  </div>
</template>

<script>
import CardPupilItem from '@/components/CardPupilItem.vue';
  export default {
    components: { CardPupilItem },
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
  .card_pupils_section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .btn_grid_pupils{
    grid-column: span 2;
  }
  @media screen and (max-width: 1143px){
    .card_pupils_section{
      grid-template-columns: repeat(1, 1fr);
    }
    .btn_grid_pupils{
      grid-column: span 1;
    }
  }
  @media screen and (max-width: 784px){
    .card_pupils_section{
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .btn_grid_pupils{
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 750px){
    .card_pupils_section{
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }
    .btn_grid_pupils{
      grid-column: span 1;
    }
  }
</style>