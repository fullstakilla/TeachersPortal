<template>
  <div class="edit">
    <div class="container">
      <div class="edit_section">
        <div class="edit_section_1">
          <EditCard />
          <BalanceCard />
        </div>
        <EditInputs />
      </div>
    </div>
  </div>
</template>

<script>
import BalanceCard from '@/components/BalanceCard.vue';
import EditCard from '@/components/EditCard.vue';
import EditInputs from '@/components/EditInputs.vue';
  export default {
    components: { BalanceCard, EditCard, EditInputs }
}
</script>

<style scoped>
  .edit{
    padding: 50px 0 100px 0;
  }
  .edit_section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
  }
  .edit_section_1{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media screen and (max-width: 968px){
    .edit_section{
      flex-direction: column;
    }
    .edit_section_1{
      width: 100%;
    }
  }
  @media screen and (max-width: 810px){
    .edit {
      padding: 90px 0 100px 0;
    }
  }  
  @media screen and (max-width: 520px){
    .edit{
      padding: 90px 0 64px 0;
    }
  }
</style>