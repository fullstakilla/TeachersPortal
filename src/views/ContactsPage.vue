<template>
  <div class="contacts_page">
    <div class="container">
      <h1 class="heading-1">Контакты </h1>
      <div class="block__contacts">
        <div class="block_text_contacts">
          <ContactsTextBlock @click="emailTo(block)"
            v-for="block of blocks"
            :key="block.id"
            :title = "block.title"
            :description = "block.description"
          />
        </div>
        <YandexMap />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsTextBlock from '@/components/ContactsTextBlock.vue'
import YandexMap from '@/components/YandexMap.vue'
  export default {
    components: {
      ContactsTextBlock,
      YandexMap,
    },
    data(){
      return {
        blocks: [
          {id: 1, title: "ООО:", description: "Портал учителя"},
          {id: 2, title: "ИНН:", description: "9719033918"},
          {id: 3, title: "КПП:", description: "771901001"},
          {id: 4, title: "ОРГН:", description: "1227700846328"},
          {id: 5,description: "105318, Россия, г. Москва, ул. Измайловский вал, д. 20, пом. 2, ком. 4"},
          {id: 6, title: "Email:", description: "info@teacherlg.com"},
          {id: 7, title: "Телефон:", description: "8 800 550 95 48"},
        ]
      }
    },
    methods: {
      emailTo(block){
        if(block.id === 6) {
          window.location.href = `mailto:${block.description}`
        }
        else {

        }
      }
    }
  }
</script>

<style scoped>
  .contacts_page {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: var(--heading-222222-heading);
    margin-bottom: 50px;
  }
  .block__contacts {
    gap: 20px;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 24px;
    background: var(--gray-f-2-f-2-f-2);
  }
  .block_text_contacts {
    flex-direction: column;
    display: flex;
    gap: 16px;
  }
  @media screen and (max-width: 890px){
    .block__contacts{
      flex-direction: column;
      gap: 50px;
    }
  }
  @media screen and (max-width: 810px){
    .contacts_page {
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 768px){
    .block__contacts{
      gap: 30px;
      align-items: center;
    }
    .block_text_contacts{
      text-align: center;
      align-items: center;
    }
    .heading-1{
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .contacts_page {
      padding: 90px 0 64px 0;
    }
  }
</style>