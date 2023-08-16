<template>
  <div class="inputs_edit_section">
    <div class="input_section">
      <InputElement 
        v-for="inputItem in inputItems"
        :title="inputItem.title"
        :description="inputItem.description"
        v-model:value="inputItem.value"
      />
    </div>
    <div class="textarea_form">
      <p class="subheading">Обо мне:</p>
      <div class="subtext">
        Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!
      </div>
    </div>
    <div class="about-edit">
      <router-link @click="clickThis" class="heading-6 router_link" to="/TeachersPortal/Account">Сохранить изменения</router-link>
      <img src="@/assets/img/ui-img/Iconly/Two-tone/Edit.svg" alt="">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import InputElement from '@/components/UI/InputElement.vue';
import AboutItemBalance from '@/components/AboutItemBalance.vue';
  export default {
    components: {
      InputElement,
      AboutItemBalance,
    }, 
    data(){
      return {
        inputItems: [
          {id: 1, title: "Введите имя", description: "Имя:", value: ""},
          {id: 2, title: "Введите ваш e-mail", description: "E-mail:", value: ""},
          {id: 3, title: "Введите пароль", description: "Пароль:", value: ""},
          {id: 4, title: "+7 (999) 999 - 99 - 99", description: "Телефон:", value: ""},
          {id: 5, title: "Введите город", description: "Город:", value: ""},
          {id: 6, title: "дд.мм.гггг", description: "Дата рождения:", value: ""},
        ],
      }
    },
    methods: {
      ...mapActions([
        'changeName',
        'changeEmail',
        'changePassword',
      ]),
      ...mapMutations([
        'changeNamefull' 
      ]),
      clickThis(){
        const newValue = this.inputItems[0].value
        this.changeName(newValue)
        const newValueEmail = this.inputItems[1].value
        this.changeEmail(newValueEmail)
        const newValuePassword = this.inputItems[2].value
        this.changePassword(newValuePassword)
      }
    }, 
    computed: {
      ...mapGetters([
        'nameInput'
      ]),
    }, 
    created(){
      this.changeNamefull()
      this.inputItems[0].value = localStorage.getItem('Имя:')
      this.inputItems[1].value = localStorage.getItem('E-mail:')
      this.inputItems[2].value = localStorage.getItem('Пароль:')
    }
  }
</script>

<style scoped>
  .inputs_edit_section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .input_section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
  .about-edit {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .router_link {
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    border-bottom: 1px solid var(--accent-color-ff-8800);
    text-decoration: none;
    transition: 0.15s ease-in;
  }
  .router_link:hover{
    color: #E97E03;
  }
  .about-edit > img{
    display: flex;
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 560px){
    .input_section{
      display: flex;
      flex-direction: column;
    }
  }
</style>