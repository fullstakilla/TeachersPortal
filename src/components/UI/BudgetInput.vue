<template>
  <div class="budget_1">
    <input @mouseover="onMouseoverInput" @mouseout="onMouseoutInput" @blur="onBlur" @focus="onFocus" :placeholder="place" :value="modelValue" @input="updateInput" class="subtext input__budget" type="number">
    <svg width="10" height="12" viewBox="0 0 10 12" :fill="svgColorBudget" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.08 12V10H0.8V8.88H2.08V7.52H0.8V6.4H2.08V0.799999H6.24C7.27467 0.799999 8.11733 1.12 8.768 1.76C9.42933 2.38933 9.76 3.18933 9.76 4.16C9.76 5.13067 9.42933 5.936 8.768 6.576C8.11733 7.20533 7.27467 7.52 6.24 7.52H3.28V8.88H7.2V10H3.28V12H2.08ZM3.28 6.4H6.24C6.912 6.4 7.46667 6.18667 7.904 5.76C8.34133 5.33333 8.56 4.8 8.56 4.16C8.56 3.52 8.34133 2.98667 7.904 2.56C7.46667 2.13333 6.912 1.92 6.24 1.92H3.28V6.4Z" :fill="svgColorBudget"/>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
      }, 
      place: {
        type: String,
        required: true,
      }
    },
    data(){
      return {
        isFocused: false,
        isHovered: false,
        svgColorBudget: "#CCCCCC",
      }
    }, 
    methods: {
      updateInput(event){
        this.$emit('update:modelValue', event.target.value)
      },
      onMouseoverInput(){
        this.isHovered = true
        if(!this.isFocused){
          this.svgColorBudget = "var(--heading-333333-text)"
        }
      }, 
      onMouseoutInput(){
        this.isHovered = false
        if(!this.isFocused){
          this.svgColorBudget = "#CCCCCC"
        }
      }, 
      onFocus(){
        this.isFocused = true,
        this.svgColorBudget = "var(--heading-333333-text)"
      }, 
      onBlur(){
        this.isFocused  = false
        this.svgColorBudget = "#CCCCCC"
      },
    }
  }
</script>

<style scoped>
  .budget_1{
    position: relative;
    width: 100%;
  }
  .budget_1 svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
  .budget_1 svg path {
    transition: fill 0.15s ease-in;
  }
  .subtext{
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--gray-cccccc);
  }
  .subtext { 
    -moz-appearance: textfield;
  } 
  .subtext::-webkit-inner-spin-button { 
    display: none;
  }
  .input__budget{
    outline: none;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px 45px 15px 15px;
    /* max-width: 191px; */
    width: 100%;
    transition: 0.15s ease-in;
  }
  .input__budget:hover::placeholder{
    color: var(--heading-333333-text);
  }
  .input__budget:hover{
    color: var(--heading-333333-text);
  }
  .input__budget:focus{
    color: var(--heading-333333-text);
    border: 1px solid var(--accent-color-ff-8800);
  }
  .input__budget::placeholder{
    color: var(--gray-cccccc);
    transition: 0.15s ease-in;
  }
  .input__budget:focus::placeholder{
    color: var(--heading-333333-text);
  }

  @media screen and (max-width: 400px){
    .budget_1{
      max-width: 100%;
    }
    .input__budget{
      width: 100%;
      max-width: 100%;
    }
  }
</style>