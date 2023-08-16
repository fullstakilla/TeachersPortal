<template>
  <div class="subjects">
    <div class="container">
      <div class="subjects-container">
      <SubjectItem class="div.subjects-container__item"
        v-for="subjectElement of subjectElements"
        :key="subjectElement.id"
        :title="subjectElement.title"
      />
      <button @click="clickSubjects" class="subjects-container__item_btn">
        <div class="subjects-container__item__p_btn heading-6">{{ titleBtn }}</div>
        <img src="@/assets/img/mainpage-img/ArrowRight.svg" alt="" class="subjects-container__item__arrow">
      </button>
    </div>
    </div>
  </div>
</template>

<script>
import SubjectItem from './SubjectItem.vue';
  export default {
    components: {
      SubjectItem,
    },
    data(){
      return {
        subjectElements: [
          {id: 1, title: "Начальные классы"},
          {id: 2, title: "Русский язык и литература"},
          {id: 3, title: "Математика и информатика"},
          {id: 4, title: "Биология и химия"},
          {id: 5, title: "История и обществознание"},
          {id: 6, title: "География и экономика"},
          {id: 7, title: "Иностранные языки"},
          {id: 8, title: "Музыка и рисование"},
          {id: 9, title: "Подготовка к ЕГЭ и ОГЭ"},
          {id: 10, title: "Университетская программа"},
          {id: 11, title: "Для взрослых"},
          {id: 12, title: "Физика и электротехника"},
        ],
        element13: {id: 13, title: "Правоведение и философия"},
        element14: {id: 14, title: "Рукоделие и творчество"},
        element15: {id: 15, title: "Программирование и дизайн"},
        titleBtn: "Смотреть все",
        count: 0,
      }
    },
    methods: {
      clickSubjects(){
        this.count ++
        if(this.count % 2 == 1) { 
          this.subjectElements.push(this.element13, this.element14, this.element15)
          this.titleBtn = "Скрыть"
          document.querySelector('.subjects-container__item__arrow').style.rotate = "-90deg"
        } 
        else {
          this.subjectElements.splice(-3)
          this.titleBtn = "Смотреть все"
          document.querySelector('.subjects-container__item__arrow').style.rotate = "90deg"
        }
      },
    },
  }
</script>

<style scoped>
  .subjects {
    margin-top: 30px;
  }
  .subjects-container {
    border-radius: 24px;
    background: var(--gray-f-2-f-2-f-2);
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  .subjects-container__item_btn{
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    background: var(--accent-color-ff-8800);
    grid-column: span 3;
    border-radius: 16px;
    border: 1px solid var(--accent-color-ff-8800);
    height: 46px;
    transition: 0.15s ease-in;
  }
  .subjects-container__item_btn:hover{
    background: #E97E03;
    border: 1px solid #E97E03;
  }
  .subjects-container__item_btn:active{
    background: var(--accent-color-ff-704-d);
    border: 1px solid var(--accent-color-ff-704-d);
  }
  .subjects-container__item__p_btn {
    color: var(--accent-color-ffffff);
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .subjects-container__item__arrow {
    rotate: 90deg;
  }
  @media screen and (max-width: 964px){
    .subjects-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .subjects-container__item_btn{
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 608px){
    .subjects-container {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 20px;
      padding: 20px;
    }
    .subjects-container__item_btn{
      grid-column: span 1;
    }
  }
</style>