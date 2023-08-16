<template>
  <div class="inputs_section">
    <div class="inputs_section_1">
      <input-element 
      :title="titleAbout"
      :description="descAbout"
      v-model:value="$store.state.createInput.aboutValue"
    />
    <InputDropdown 
      :valueSelect="value_1"
      :place="place"
      :description="descCategory"
      v-model = "valueDrop"
    />
    </div>
    <div class="inputs_section_2">
      <input-element 
      :title="title_email"
      :description="description_email"
      v-model:value="$store.state.createInput.emailValue"
      @input="inputEmail"
    />
    <input-element 
      :title="title_tel"
      :description="description_tel"
      v-model:value="$store.state.createInput.telValue"
      @input="inputTel"
    />
    </div>
    <div class="inputs_section_3">
      <InputDate class="date_new" v-show="!showRep"
      :checked="checked"
      v-model:value="$store.state.createInput.dateValue"
      @clickCheckThis="clickCheck"
    />
    <div class="group_inputs">
      <div class="budget">
        <div class="p_check">
          <p class="subheading">Бюджет:</p>
          <CheckFind class="check_p" v-show="showRep"
            :index="index"
            :checked="checked"
            :title="title_1"
          />
        </div>
        <BudgetInput 
        :place="placeBudget"
        v-model="$store.state.createInput.budgetValue"
        class="budget_input"/>
      </div>
      <InputDropdownBank class="dropdown"
        :valueSelect="value_2"
        :place="place"
        :description="descCard"
      />
    </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
import InputDropdown from "@/components/UI/InputDropdown.vue"
import InputDropdownBank from "@/components/UI/InputDropdownBank.vue"
import InputDate from "@/components/UI/InputDate.vue"
import BudgetInput from '@/components/UI/BudgetInput.vue'
import CheckFind from '@/components/UI/CheckFind.vue'
  export default {
    components: {
      InputDropdown,
      InputDropdownBank,
      InputDate,
      BudgetInput,
      CheckFind,
    }, 
    props: {
      showRep: {
        type: Boolean,
        required: true,
      }
    },
    data(){
      return {
        title_email: "Введите ваш e-mail", description_email: "E-mail:",
        title_tel: "+7 (999) 999 - 99 - 99", description_tel: "Телефон:",
        titleAbout: "",
        descAbout: "Название задания:", descCard: "Способ оплаты:",
        place: "",
        descCategory: "Категория:",
        checked: false,
        value_1: '',
        value_2: '',
        index: 2,
        title_1: "По договоренности",
        placeBudget: "",
        valueDrop: '',
        valueDate: '',
        checked: false,
      }
    }, 
    methods:{
      ...mapActions([
        'CheckBoxOff'
      ]),
      ...mapMutations([
        'changeBtn',
        'changeBtn1'
      ]),
      clickCheck(){
        this.checked = true
        this.CheckBoxOff()
      },
      inputEmail(){
        this.changeBtn()
      },
      inputTel(){
        this.changeBtn1()
      }
    }, 
  }
</script>

<style scoped>
  .inputs_section{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .inputs_section_1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
  }
  .inputs_section_2{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
  }
  .inputs_section_3{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  .group_inputs{
    max-width: 100%;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .budget{
    /* max-width: 323px; */
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: 4px;
  }
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
    color: var(--heading-666666-text);
  }
  .date_new{
    max-width: 665px;
  }
  .dropdown{
    /* max-width: 323px; */
    width: 100%;
  }
  .p_check{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .check_p{
    margin-bottom: 0;
  }
  @media screen and (max-width: 860px){
    .inputs_section_1, .inputs_section_2, .inputs_section_3{
      display: flex;
      flex-direction: column;
    }
    .group_inputs{
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>