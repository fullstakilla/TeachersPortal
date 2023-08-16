<template>
  <div class="input_section_drop">
    <p class="subheading">{{ description }}</p>
    <div class="input_dropdown">
      <select @mouseover="onMouseoverInput" @mouseout="onMouseoutInput" @blur="onBlur" @focus="onFocus" :placeholder="place" :value="modelValue" @input="updateInput" class="subtext input__budget">
        <option :value="valueSelect" selected>Банковская карта</option>
        <option value="1">Перевод</option>
        <option value="2">Наличкой при встрече</option>
      </select>
      <img src="@/assets/img/ui-img/Arrow.svg" alt="">
    </div>
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
      },
      description: {
        type: String,
        required: true,
      },
      valueSelect: {
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
  .input_section_drop{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .input_dropdown{
    position: relative;
  }
  .input_dropdown img{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
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
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .input__budget{
    outline: none;
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px 45px 15px 15px;
    width: 100%;
    transition: 0.15s ease-in;
    appearance: none;
    -webkit-appearance: none; 
    -moz-appearance: none;
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
    .input_dropdown{
      max-width: 100%;
    }
    .input__budget{
      width: 100%;
      max-width: 100%;
    }
  }
</style>