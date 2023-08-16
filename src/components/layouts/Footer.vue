<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_section">
        <router-link class="router__footer_logo" to="/TeachersPortal/">
          <div class="logo__footer">
            <img src="@/assets/img/header-img/Iconly/Bulk/Work.svg" alt="bulk-work">
            <h1 class="heading-5">Портал учителя</h1>
          </div>
        </router-link>
        <ul class="ul__footer">
          <li class="li__footer"><router-link to="/TeachersPortal/Questions" class="heading-6">Частые вопросы</router-link></li>
          <li class="li__footer"><router-link to="/TeachersPortal/HelpPage" class="heading-6">Служба поддержки</router-link></li>
          <li class="li__footer"><router-link to="/TeachersPortal/Contacts" class="heading-6">Контакты</router-link></li>
          <li class="li__footer"><router-link to="/TeachersPortal/PaymentRules" class="heading-6">Правила и ответы</router-link></li>
          <li class="li__footer"><router-link to="/TeachersPortal/NoService" class="heading-6">Отказ от услуги</router-link></li>
        </ul>
        <div class="footer_bottom">
          <div class="rights__footer">
            <router-link class="router_footer" to="/TeachersPortal/Rules"><p class="subtext">© teacherportal.com / Правила сервиса</p></router-link>
            <router-link class="router_footer" to="/TeachersPortal/UserData"><p class="subtext">Правила обработки пользовательских данных</p></router-link>
          </div>
          <div class="pay__footer">
            <img src="@/assets/img/footer-img/visa.svg" alt="visa">
            <img src="@/assets/img/footer-img/mir.svg" alt="mir">
            <img src="@/assets/img/footer-img/master.svg" alt="master">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="css" scoped>
  .footer{
    margin-bottom: 54px;
  }
  .footer_section {
    padding: 50px;
    background: var(--heading-333333-text);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .router__footer_logo{
    text-decoration: none;
  }
  .logo__footer {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ff-8800);
  }
  .ul__footer {
    list-style: none;
    display: flex;
  }
  .li__footer {
    margin-right: 30px;
  }
  .li__footer:last-child {
    margin-right: 0;
  }
  .heading-6 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ffffff);
    text-decoration: none;
    /* transition: 0.15s ease-in; */
  }
  .heading-6:hover{
    border-bottom: 1.5px solid var(--accent-color-ffffff);
  }
  .footer_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .rights__footer {
    display: flex;
    align-items: center;
    gap: 18px;
  } 
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--accent-color-ffffff);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  .pay__footer {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .pay__footer img {
    cursor: pointer;
  }
  .router_footer{
    text-decoration: none;
  }

  @media screen and (max-width: 1138px){
    .rights__footer {
      flex-direction: column;
      align-items: flex-start;
    } 
  }
  @media screen and (max-width: 927px){
    .ul__footer{
      flex-wrap: wrap;
    }
    .li__footer:last-child{
      margin-top: 16px;
    }
  }
  @media screen and (max-width: 830px){
    .footer_bottom{
      flex-direction: column;
      align-items: flex-start;
      gap: 50px;
    }
  }
  @media screen and (max-width: 810px){
    .footer_section{
      align-items: center;
    }
    .footer_bottom{
      align-items: center;
    }
    .ul__footer{
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
    .li__footer{
      margin-right: 0;
    }
    .li__footer:last-child{
      margin-top: 0;
    }
    .rights__footer{
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px){
    .footer_section{
      padding: 32px 16px;
      gap: 32px;
    }
    .footer{
      margin-bottom: 15px;
    }
    .footer_bottom{
      gap: 32px;
    }
    .rights__footer{
      gap: 18px;
    }
    .pay__footer{
      gap: 16px;
    }
  }
  @media screen and (max-width: 420px){
    .ul__footer{
      flex-direction: column;
    }
  }

</style>