<template>
  <div class="card">
    <div class="card-top">
      <p class="card-course subheading">{{ sub }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
        <path d="M12.6199 4.9209L9.42081 7.4966C8.8154 7.97125 7.96672 7.97125 7.36131 7.4966L4.13477 4.9209" stroke="#FF8800" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83387 0.75H11.9048C12.9244 0.761435 13.8947 1.19245 14.59 1.94265C15.2852 2.69286 15.6446 3.69677 15.5844 4.72059V9.6165C15.6446 10.6403 15.2852 11.6442 14.59 12.3944C13.8947 13.1446 12.9244 13.5756 11.9048 13.5871H4.83387C2.64394 13.5871 1.16797 11.8055 1.16797 9.6165V4.72059C1.16797 2.53159 2.64394 0.75 4.83387 0.75Z" stroke="#FF8800" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h6 class="card-title heading-6">{{ about }}</h6>
    <h6 class="card-price heading-6">{{ price }} ₽</h6>
    <div class="card-date">
      <img src="@/assets/img/findpupil-img/Iconly/Two-tone/Calendar.svg" alt="">
      <p class="subtext">{{ dateText }}</p>
    </div>
    <div class="card-author">
        <div class="card-author__img">
          <img :src="img" alt="">
        </div>
        <p class="subtext">{{ who }}</p>
    </div>
    <div class="card-down">
      <h6 class="heading-6">Ожидает ответа</h6>
      <a v-if="about === 'Нужен репетитор по физике'" data-bs-toggle="modal" data-bs-target="#modalConfirm" href="#" class="leave-review heading-6">Открыть</a>
      <a v-else-if="about === 'Нужен репетитор по английскому'" data-bs-toggle="modal" data-bs-target="#modalConfirm2" href="#" class="leave-review heading-6">Открыть</a>
      <a v-else data-bs-toggle="modal" data-bs-target="#modalConfirm1" href="#" class="leave-review heading-6">Открыть</a>
    </div>
    <ConfirmModal 
    @clickRemoveCards="clickRemoveCard"
    />
    <ConfirmModalNew 
    @clickRemoveCardsNew="clickRemoveCardNew"/>
    <ConfirmModalPupil 
    @clickOkNow="clickOkNow" />
  </div>
</template>

<script>
import ConfirmModal from '@/components/UI/ConfirmModal.vue';
import ConfirmModalPupil from '@/components/UI/ConfirmModalPupil.vue';
import ConfirmModalNew from '@/components/UI/ConfirmModalNew.vue';

  export default {
    props: {
        sub: {
          type: String,
          required: true,
        },
        about: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        dateText: {
          type: String,
          required: true,
        },
        who: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
        }
    },
    components: { ConfirmModal, ConfirmModalPupil, ConfirmModalNew },
    methods: {
      clickOkNow(){
        this.$emit('clickOkNow')
      }, 
      clickRemoveCard(){
        this.$emit('remove')
      },
      clickRemoveCardNew(){
        this.$emit('removeNew')
      }
    }
}
</script>

<style scoped>
  .card {
    display: flex;
    max-width: 480px;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-down {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-down > h6 {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-course {
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
  }
  .card-title {
    margin-top: 4px;
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-price {
    margin-top: 20px;
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .card-date {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-date > img {
    width: 24px;
    height: 24px;
  }
  .card-date > p {
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-author > p{
    color: var(--heading-333333-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .card-author__img {
    border-radius: 118.519px;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 32px;
    height: 32px;
  }
  .card-author__img > img {
    width: 32px;
    height: 32px;
  }
  .card-finish {
    margin-top: 20px;
    color: #24B50D;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .leave-review {
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration-line: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
    transition: 0.15s ease-in;
  }
  .leave-review:hover {
    color: #E97E03;
  }
  @media screen and (max-width: 1100px){
    .card{
      max-width: 100%;
    }
  }
</style>