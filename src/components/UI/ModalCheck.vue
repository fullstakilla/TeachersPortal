<template>
  <div class="modal fade" id="modalCheck" tabindex="-1" aria-labelledby="checkModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal_check__content">
            <h1 class="heading-5">{{ title }}</h1>
            <p class="subtext">
              Уведомление об откликах можно увидеть в личном кабинете. 
              Так же они придут на почту.
            </p>
            <img src="@/assets/img/ui-img/Iconly/Bulk/TickSquare.svg" alt="">
            <div class="btns__section_check">
              <router-link v-if="description === 'Просмотреть задание'" class="router-help_page" to="/TeachersPortal/TaskPupil">
                <btn-background class="btns__section_check_2" data-bs-dismiss="modal">{{ description }}</btn-background>
              </router-link>
              <router-link v-else-if="description === 'Просмотреть резюме'" class="router-help_page" to="/TeachersPortal/TaskTeacher">
                <btn-background class="btns__section_check_2" data-bs-dismiss="modal">{{ description }}</btn-background>
              </router-link>
              <router-link class="router-help_page" to="/TeachersPortal/"><btn-border @click="offItems" data-bs-dismiss="modal" class="btns__section_check_2">Вернуться на главную</btn-border></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: "modal-check",
    props: {
      title: {
        type: String, 
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    }, 
    methods: {
      ...mapActions([
        'OffThem',
      ]),
      offItems(){
        this.OffThem()
      }
    }
  }
</script>

<style scoped>
  .modal-body{
    padding: 30px;
  }
  .modal-content{
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .modal_check__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal_check__content img{
    width: 64px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .heading-5 {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 16px;
    color: var(--heading-222222-heading);
  }
  .subtext {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--heading-333333-text);
    margin-bottom: 30px;
  }
  .btns__section_check {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .btns__section_check_2 {
    width: 100%;
  }
  .router-help_page{
    text-decoration: none;
  }
</style>