<template>
  <div class="create_task_section">
    <div class="container">
      <h1 class="heading-1">Редактирование задачи</h1>
      <div class="block_create_task">
        <div class="btns_block">
          <ButtonSlide @click="clickFirst" class="btn_slide_1">Я репетитор</ButtonSlide>
          <ButtonSlide @click="clickSecond" class="btn_slide_2">Я ученик</ButtonSlide>
        </div>
        <InputFormBlock 
          :showRep="showRep"
        />
        <div v-show="!showRep" class="show_fast">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 10.9257C16.6667 16.8515 11.63 18.3332 9.11083 18.3332C6.90833 18.3332 2.5 16.8515 2.5 10.9257C2.5 8.60733 3.7175 7.05067 4.88333 6.16233C5.53167 5.66733 6.35833 6.15983 6.44167 6.9715L6.51333 7.66983C6.60083 8.51983 7.37417 9.21733 8.09083 8.7515C9.495 7.839 10 5.64567 10 4.444V4.17483C10 2.98317 11.2033 2.2165 12.1683 2.91483C14.3042 4.45817 16.6667 7.15317 16.6667 10.9248V10.9257Z" :stroke="svgColorOrange" stroke-width="1.25"/>
            <path opacity="0.5" d="M6.66666 15.3707C6.66666 17.7407 8.74082 18.3332 9.77749 18.3332C10.6858 18.3332 12.5 17.7407 12.5 15.3707C12.5 14.4523 12.0083 13.8332 11.5333 13.4757C11.2017 13.2265 10.7358 13.4507 10.6217 13.8498C10.4733 14.3698 9.93582 14.6965 9.66166 14.2298C9.41166 13.8032 9.41166 13.1632 9.41166 12.7773C9.41166 12.2473 8.87832 11.904 8.44916 12.2157C7.58832 12.8407 6.66666 13.8998 6.66666 15.3707Z" :stroke="svgColorOrange" stroke-width="1.25"/>
          </svg>
          <p @click="PclickOrange" @mouseout="PMouseOut" @mouseover="PMouseOver" :style="PStyleOrange">Отметить как срочное задание</p>
        </div>
        <div class="textarea_form">
          <p class="subheading">Подробное описание:</p>
          <div class="subtext">
            {{ textFor }}
          </div>
        </div>
        <btn-background data-bs-toggle="modal" data-bs-target="#modalCheck" :disabled="disabledBtn" :style="styleGetter" class="btn_orange">{{ btnText }}</btn-background>
      </div>
    </div>
  </div>
  <modal-check 
  :title="title"
  :description="description"
  />
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import InputFormBlock from "@/components/InputFormBlock.vue";
import ButtonSlide from "@/components/UI/ButtonSlide.vue"
  export default {
    components:{
      ButtonSlide,
      InputFormBlock,
    }, 
    data(){
      return {
        PStyleOrange: {},
        svgColorOrange: "#CCCCCC",
        isOver: false,
        count: 0,
        showRep: false,
        textFor: "Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!",
        btnText: "Опубликовать задачу",
        title: "Ваше задание успешно опубликовано!",
        description: "Просмотреть задание"
      }
    },
    methods: {
      // ...mapMutations([
      //   'changeBtn'
      // ]),
      PMouseOver(){
        if(this.count % 2 === 0){
          this.svgColorOrange = "var(--accent-color-ff-8800)"
        }
        this.isOver = true
      },
      PMouseOut(){
        if(this.count % 2 === 0){
          this.svgColorOrange = "#CCCCCC"
        }
        this.isOver = false
      }, 
      PclickOrange(){
        this.count ++ 
        if(this.count % 2 == 1){
          this.PStyleOrange = {
            color: "var(--accent-color-ff-8800)",
            borderBottom: "1px solid var(--accent-color-ff-8800)",
          }
          this.svgColorOrange = "var(--accent-color-ff-8800)"
        }
        else {
          this.PStyleOrange = {}
        }
        if(!this.isOver){
          this.svgColorOrange = "#CCCCCC"
        }
      }, 
      clickFirst(){
        this.title="Ваше резюме успешно опубликовано!"
        this.description="Просмотреть резюме"
        this.showRep = true
        this.textFor = "Привет! Если вы чувствуете, что вам необходимо улучшить свои навыки в английском языке, я готова помочь! Я профессиональный репетитор, который поможет вам достичь ваших целей. Независимо от вашего текущего уровня, я буду ставить перед вами реальные задачи и помогать вам их достичь. Мы будем фокусироваться на грамматике, лексике и произношении, но в нашем обучении я уделяю также внимание вашим личным интересам. Со мной вы сможете заниматься на индивидуальной основе, в удобное для вас время и день недели. Я предоставлю вам материалы для работы и ответы на любые ваши вопросы по языку. Мой подход основан на многолетнем опыте работы с учениками разного возраста, национальности и уровня языка. Я уверена, что вместе мы сможем достичь любых целей в изучении английского языка!"
        document.querySelector('.btn_slide_1').style.background = "var(--accent-color-ff-8800)"
        document.querySelector('.btn_slide_1').style.color = "var(--accent-color-ffffff)"
        document.querySelector('.btn_slide_2').style.background = "var(--accent-color-ffffff)"
        document.querySelector('.btn_slide_2').style.color = "var(--heading-222222-heading)"
        this.btnText = "Опубликовать резюме"
      },
      clickSecond(){
        this.title = "Ваше задание успешно опубликовано!"
        this.description = "Просмотреть задание"
        this.showRep = false
        this.textFor =  "Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!"
        document.querySelector('.btn_slide_2').style.background = "var(--accent-color-ff-8800)"
        document.querySelector('.btn_slide_2').style.color = "var(--accent-color-ffffff)"
        document.querySelector('.btn_slide_1').style.background = "var(--accent-color-ffffff)"
        document.querySelector('.btn_slide_1').style.color = "var(--heading-222222-heading)"
        this.btnText = "Опубликовать задачу"
      }, 
    }, 
    computed: {
      ...mapGetters([
        'styleGetter',
        'disabledBtn',
      ])
    }
  }
</script>

<style scoped>
  .create_task_section {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    margin-bottom: 50px;
    color: var(--heading-222222-heading);
  } 
  .block_create_task {
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);   
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .btns_block {
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 4px;
  }
  .btn_slide_1 {
    background: var(--accent-color-ffffff);
    color: var(--heading-222222-heading);
    transition: 0.15s ease-in;
    max-width: 661px;
  }
  .btn_slide_2 {
    color: var(--accent-color-ffffff);
    background: var(--accent-color-ff-8800);
    transition: 0.15s ease-in;
    max-width: 661px;
  }
  .show_fast {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .show_fast p{
    color: var(--heading-666666-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    border-bottom: 1px solid var(--heading-666666-text);
    cursor: pointer;
  }
  .show_fast p:hover{
    color: var(--accent-color-ff-8800);
    border-bottom: 1px solid var(--accent-color-ff-8800);
  }
  .textarea_form {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .textarea_form p{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;  
    color: var(--heading-666666-text);
  }
  .textarea_form div {
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px;
  }
  .subtext{
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--heading-333333-text);
  }
  .btn_orange{
    align-self: flex-start;
  }
  @media screen and (max-width: 810px){
    .heading-1{
      text-align: center;
      margin-bottom: 30px;
    }
    .create_task_section{
      padding: 90px 0 100px 0;
    }
  }
  @media screen and (max-width: 520px){
    .create_task_section{
      padding: 90px 0 64px 0;
    }
  }
  @media screen and (max-width: 400px){
    .show_fast p{
      font-size: 14px;
    }
  }
</style>