<template>
  <div class="about-cont">
    <p class="subheading">Обо мне:</p>
    <p class="about-main subtext">Привет! Меня зовут Алекс и я ищу репетитора по английскому языку, который поможет мне начать изучение и достичь своих целей. Я изучал английский в школе, но это было давно, и мне необходимо фундаментальное обучение, чтобы повысить уровень языка и продвинуться в карьере. Я живу в США и работаю в международной компании, поэтому мне нужен репетитор, который сможет помочь мне научиться произносить корректно и грамотно говорить на английском языке. Я хочу найти репетитора, который сможет индивидуализировать программу обучения, учитывая мою учебную нагрузку и уровень владения английским языком. Я полагаю, что одновременно расширить свой лексикон и грамматические знания поможет мне быстрее достигнуть моих целей, а интенсивное разговорное общение поможет выработать правильный акцент и научиться мыслить на английском языке. Я приветствую опытных репетиторов и новичков, занимаюсь индивидуальными занятиями в удобное время онлайн или офлайн. Буду рад найти репетитора, который поможет мне достичь успеха в изучении английского языка!</p>
    <div class="about-edit">
      <router-link class="heading-6 router_link" to="/TeachersPortal/EditProfile">Редактировать профиль</router-link>
      <img src="@/assets/img/ui-img/Iconly/Two-tone/Edit.svg" alt="">
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    
  }
</script>

<style scoped>
  .about-cont {
    max-width: 1050px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .subheading {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
  .about-main {
    margin-top: 4px;
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
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
</style>