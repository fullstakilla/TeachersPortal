<template>
  <div class="input_el_full">
    <div class="check_date">
      <p class="subheading">Сроки выполнения:</p>
      <CheckFind class="checkBoxes"
        :checked="checked"
        :index="index"
        v-model:value="valueCheck"
        :title="title"
        @clickCheck="clickCheck"
      />
    </div>
    <input class="input_el subtext" type="text" required @input="inputMain"
      ref="inputElement" :value="value" placeholder="дд.мм.гггг - дд.мм.гггг"
    >
  </div>  
</template>

<script>
import CheckFind from '@/components/UI/CheckFind.vue'
  export default {
    components: {
      CheckFind,
    },
    props: {
      checked: {
        type: Boolean,
        required: true,
      },
      value: {
        type: String,
      }
    },
    data(){
      return {
        title: "Бессрочное задание",
        index: 1,
        valueCheck: '',
      }
    },
    methods: {
      inputMain(event){
        this.$emit('update:value', event.target.value)
      }, 
      clickCheck(){
        this.$emit('clickCheckThis')
      }
    },
  }
</script>

<style lang="css" scoped>
  .input_el_full{
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  .check_date{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .checkBoxes{
    margin-bottom: 0;
  }
  .input_el{
    border-radius: 12px;
    border: 1px solid var(--gray-cccccc);
    background: var(--accent-color-ffffff);
    padding: 15px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--gray-cccccc);
    outline: none;
    transition: 0.15s ease-in;
  }
  .input_el::placeholder{
    color: var(--gray-cccccc);
    transition: 0.15s ease-in;
  }
  .input_el:hover::placeholder{
    color: var(--heading-333333-text);
  }
  .input_el:focus{
    color: var(--heading-333333-text);
    border: 1px solid var(--accent-color-ff-8800);
  }
  .input_el:focus::placeholder{
    color: var(--heading-333333-text);
  }
  .subheading{
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .invalid:focus, .invalid {
    border: 1px solid var(--accent-color-ff-704-d);
    color: var(--accent-color-ff-704-d);
  }
</style>
