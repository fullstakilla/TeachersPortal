<template>
  <div class="filter_section">
    <div class="logo_filter">
      <h1 class="heading-5">Поиск по фильтрам</h1>
      <img src="@/assets/img/findpupil-img/Iconly/Two-tone/Filter.svg" alt="">
    </div>
    <div class="search_input">
      <input :value="value" @input="updateValue" @mouseover="mouseOverInput" @mouseout="mouseOutInput" @blur="onBlur" @focus="onFocus" ref="enterNone" class="subtext" placeholder="Поиск по ключевым словам" type="text">
      <svg @click="clickDone" id="svg_search" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" :fill="svgColor">
        <path d="M13.5233 12.9628L16.7355 16.1743L15.6743 17.2355L12.4628 14.0233C11.2678 14.9812 9.7815 15.5022 8.25 15.5C4.524 15.5 1.5 12.476 1.5 8.75C1.5 5.024 4.524 2 8.25 2C11.976 2 15 5.024 15 8.75C15.0022 10.2815 14.4812 11.7678 13.5233 12.9628ZM12.0187 12.4062C12.9706 11.4274 13.5022 10.1153 13.5 8.75C13.5 5.849 11.1503 3.5 8.25 3.5C5.349 3.5 3 5.849 3 8.75C3 11.6503 5.349 14 8.25 14C9.61532 14.0022 10.9274 13.4706 11.9062 12.5187L12.0187 12.4062V12.4062Z" :fill="svgColor"/>
      </svg>
    </div>
    <div class="budget_blocks">
      <BudgetInput
       v-model="budget1"
       @input="ThisBudget1"
       :place="place1"
      />
      <BudgetInput
        v-model="budget2"
        @input="ThisBudget2"
        :place="place2"
      />
    </div>
    <div class="show_fast">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 10.9257C16.6667 16.8515 11.63 18.3332 9.11083 18.3332C6.90833 18.3332 2.5 16.8515 2.5 10.9257C2.5 8.60733 3.7175 7.05067 4.88333 6.16233C5.53167 5.66733 6.35833 6.15983 6.44167 6.9715L6.51333 7.66983C6.60083 8.51983 7.37417 9.21733 8.09083 8.7515C9.495 7.839 10 5.64567 10 4.444V4.17483C10 2.98317 11.2033 2.2165 12.1683 2.91483C14.3042 4.45817 16.6667 7.15317 16.6667 10.9248V10.9257Z" :stroke="svgColorOrange" stroke-width="1.25"/>
        <path opacity="0.5" d="M6.66666 15.3707C6.66666 17.7407 8.74082 18.3332 9.77749 18.3332C10.6858 18.3332 12.5 17.7407 12.5 15.3707C12.5 14.4523 12.0083 13.8332 11.5333 13.4757C11.2017 13.2265 10.7358 13.4507 10.6217 13.8498C10.4733 14.3698 9.93582 14.6965 9.66166 14.2298C9.41166 13.8032 9.41166 13.1632 9.41166 12.7773C9.41166 12.2473 8.87832 11.904 8.44916 12.2157C7.58832 12.8407 6.66666 13.8998 6.66666 15.3707Z" :stroke="svgColorOrange" stroke-width="1.25"/>
      </svg>
      <p @click="PclickOrange" @mouseout="PMouseOut" @mouseover="PMouseOver" :style="PStyleOrange">{{showTitle}}</p>
    </div>
    <CheckFind 
      v-for="(checksItem, index) of checksItems"
      :key="checksItem.id"
      :title="checksItem.title"
      @input="checkBox"
      v-model:value="check"
      :checked="checksItem.checked"
      :index="index"
      @clickCheck="clickForCheck"
    />
    <div class="bnts__section">
      <btn-background @click="clickDone">Применить</btn-background>
      <a @click="OffAll" href="#">Сбросить</a>
    </div>
  </div>
</template>

<script>
import BudgetInput from '@/components/UI/BudgetInput.vue'
import CheckFind from '@/components/UI/CheckFind.vue'
  export default {
    components: {
      BudgetInput,
      CheckFind,
    },
    props: {
      value: {
        type: String,
      },
      checksItems: {
        type: Array,
        required: true,
      },
      showTitle: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        place1: "Бюджет от", place2: "Бюджет до",
        svgColor: "#CCCCCC",
        isFocused: false,
        isHover: false,
        svgColorOrange: "#CCCCCC",
        count: 0,
        PStyleOrange: {},
        isOver: false,
        modelValue: "", 
        budget1: '',
        budget2: '',
        check: '',
        kolvo : 0,
      }
    },
    methods: {
      clickForCheck(index){
        this.checksItems[index].checked = !this.checksItems[index].checked
      },
      checkBox(){
        this.$emit('checkBoxItems', this.check)
      },
      OffAll(){
        this.$emit('OffItems')
        this.budget1 = ''
        this.budget2 = ''
        this.checksItems.forEach(item => {
          item.checked = false;
        })
        this.PStyleOrange= {}
        this.svgColorOrange = "#CCCCCC"
        this.kolvo = 0
        this.count = 0
      },
      ThisBudget1(){
        this.$emit('Budget1Event', this.budget1)
      },
      ThisBudget2(){
        this.$emit('Budget2Event', this.budget2)
      },
      clickDone(){
        this.$emit('mainInput')
        this.$refs.enterNone.blur()
        this.PStyleOrange= {}
        this.svgColorOrange = "#CCCCCC"
        this.kolvo = 0
        this.count = 0
      },
      updateValue(event) {
        this.$emit('update:value', event.target.value);
      },
      mouseOverInput(){
        this.isHover = true
        if(!this.isFocused){
          this.svgColor = 'var(--heading-333333-text)'
        }
      }, 
      mouseOutInput(){
        this.isHover = false
        if(!this.isFocused){
          this.svgColor = '#CCCCCC'
        }
      }, 
      onFocus(){
        this.isFocused= true
        this.svgColor = 'var(--heading-333333-text)'
      },
      onBlur(){
        this.isFocused = false,
        this.svgColor = "#CCCCCC"
      },
      PMouseOver(){
        if(this.count % 2 === 0){
          this.svgColorOrange = "var(--accent-color-ff-8800)"
        }
        this.isOver = true
      },
      PMouseOut(){
        if(this.count % 2 === 0){
          this.svgColorOrange = "#CCCCCC"
        }
        this.isOver = false
      }, 
      PclickOrange(){
        this.kolvo++
        this.$emit('ClickFire', this.kolvo)
        this.count ++ 
        if(this.count % 2 == 1){
          this.PStyleOrange = {
            color: "var(--accent-color-ff-8800)",
            borderBottom: "1px solid var(--accent-color-ff-8800)",
          }
          this.svgColorOrange = "var(--accent-color-ff-8800)"
        }
        else {
          this.PStyleOrange = {}
        }
        if(!this.isOver){
          this.svgColorOrange = "#CCCCCC"
        }
      }
    }
  }
</script>

<style scoped>
  .filter_section {
    max-width: 450px;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .logo_filter {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 32px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .search_input {
    position: relative;
    max-width: 390px;
    width: 100%;
    margin-bottom: 16px;
  }
  .search_input input {
    max-width: 390px;
    width: 100%;
    padding: 15px 45px 15px 15px;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    outline: none;
    transition: 0.15s ease-in;
  }
  .search_input input::placeholder {
    color: var(--gray-cccccc);
    transition: 0.15s ease-in;
  }
  .search_input input:hover::placeholder {
    color: var(--heading-333333-text);
  }
  .search_input input:hover {
    color: var(--heading-333333-text);
  }
  .search_input input:focus::placeholder {
    color: var(--heading-333333-text);
  }
  .search_input input:focus {
    color: var(--heading-333333-text);
    border: 1px solid var(--accent-color-ff-8800)
  }
  .search_input svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  }
  .search_input svg path{
    transition: fill 0.15s ease-in;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--gray-cccccc);
  }
  .show_fast {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--gray-e-5-e-5-e-5);
  }
  .show_fast p{
    color: var(--heading-666666-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    border-bottom: 1px solid var(--heading-666666-text);
    cursor: pointer;
  }
  .show_fast p:hover{
    color: var(--accent-color-ff-8800);
    border-bottom: 1px solid var(--accent-color-ff-8800);
  }
  .bnts__section {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .bnts__section a{
    color: var(--accent-color-ff-8800);
    text-decoration: none;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    border-bottom: 1px solid var(--accent-color-ff-8800);
  }
  .budget_blocks{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 810px){
    .filter_section{
      width: 100%;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 400px){
    .show_fast p{
      font-size: 14px;
    }
    .budget_blocks{
      flex-direction: column;
    }
  }
</style>