<template>
  <div class="modal fade" id="reviewsModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal_reviews_block">
            <h1 class="heading-5">Ваш отзыв</h1>
            <div class="stars_section">
              <p class="subheading">Оценка:</p>
              <div class="stars_block">
                <Stars
                v-for="imgItem in imgItems" 
                :key="imgItem.id"
                :imgStar="imgItem.imgStar"
              />
              </div>
            </div>
            <input-element 
              :description="description"
              :title="title"
              v-model:value="value"
            />
            <btn-background data-bs-dismiss="modal">Отправить отзыв</btn-background>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/UI/Stars.vue';

import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'

  export default {
    components: { Stars },
    data(){
      return {
        imgItems: [
          {id: 1, imgStar: starImg},
          {id: 2, imgStar: starImg},
          {id: 3, imgStar: starImg},
          {id: 4, imgStar: starImg},
          {id: 5, imgStar: starImg},
        ], 
        description: "Описание:", title: "Введите описание", value: ''
      }
    }, 

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
  .modal_reviews_block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .stars_section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .subheading {
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .stars_block{
    align-items: center ;
    display: flex;
    gap: 4px;
  }

</style>