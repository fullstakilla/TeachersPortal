<template>
  <div class="offer">
    <div class="container">
      <div class="offer-container">
        <div class="offer-container-left">
          <h2 class="offer-container-left__h2 heading-2">Начните сейчас!</h2>
          <p class="offer-container-left__p description-text">
            Мы предлагаем надежный сервис подбора репетиторов и учеников для онлайн занятий. Уверенно выбирайте своего учителя или ученика, который подойдёт именно вам. 
          </p>
          <div class="offer-container-left__btns">
            <router-link class="router_to_page" to="/TeachersPortal/FindTeachers"><btn-background class="btn_1">Найти репетитора</btn-background></router-link>
            <router-link class="router_to_page" to="/TeachersPortal/FindPupils"><btn-border class="btn_1">Найти ученика</btn-border></router-link>
          </div>
        </div>
        <div class="offer-container-right">
          <div class="offer-container-right__circle">
            <img src="@/assets/img/mainpage-img/girlfooter.png" alt="" class="offer-container-right__img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .offer {
    min-height: 327px;
    margin-top: 100px;
    z-index: 1;
  }
.offer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    background: var(--gray-f-2-f-2-f-2);
    overflow: hidden; 
  }
  .offer-container-left {
    display: flex;
    max-width: 700px;
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    flex-shrink: 0;
    z-index: 3;
  }
  .offer-container-left__h2 {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .offer-container-left__p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    max-width: 600px;
  }
  .offer-container-left__btns {
    display: flex;
    gap: 16px;
  }
  .offer-container-right {
    position: relative;
  }
  .offer-container-right__circle {
    position: absolute;
    top: -300px;
    right: -210px; 
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: #FFE1BF;
  }
  .offer-container-right__img {
    position: absolute;
    transform: translate(-50px, 140px);
    max-width: 100%;
    height:auto;
    } 
    .router_to_page{
      text-decoration: none;
    }
  @media (max-width: 930px) {
    .offer-container {
      flex-direction: column;
    }
    .offer-container-left {
      padding: 20px;
    }
    .offer-container-left__btns {
      flex-direction: column;
      width: 100%;
    }
    .btn_1{
      width: 100%;
    }
    .offer-container-left__h2 {
      text-align: center;
    }
    .offer-container-left__p {
      text-align: center;
    }
    .offer-container-right {
      margin-top: 300px;
    }
    .offer-container-right__circle {
      right: -300px; 
      top: -250px;
    }
    .offer-container-right__img {
      transform: translate(105px, -65px);
    }
  } 
  @media screen and (max-width: 520px){
    .offer{
      margin-top: 64px;
    }
  }
</style>