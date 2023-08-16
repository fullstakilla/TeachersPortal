<template>
  <div class="input_el_full">
    <p class="subheading">{{ description }}</p>
    <input class="input_el subtext" :placeholder="title" :type="typeVar" required @input="inputMain"
      ref="inputElement" @blur="onBlur" @focus="onFocus" :value="value" 
    >
    <div class="subtext error_message">
      {{errorMessage}}
    </div>
  </div>  
</template>

<script>

  export default {
    data(){
      return {
        inputValue: "",
        errorMessage: "",
        flag: false,
      }
    },
    name: "input-element",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true
      },
      value: [String, Number],
    },
    methods: {
      inputMain(event){
        this.updateInput(event)
        this.checkSymbol()
      },
      updateInput(event){
        this.$emit('update:value', event.target.value)
      },
      checkSymbol() {
        const inputValue = this.$refs.inputElement.value
        const containsDigits = /\d/.test(inputValue)
        const containSpecific = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(inputValue)
        const containsEmail = inputValue.includes("@");
        const containsDom = inputValue.includes(".com") || inputValue.includes(".ru")
        const containsTel = /^[\d()+]+$/.test(inputValue)
        if (inputValue === "") {
          this.errorMessage = "";
          this.$refs.inputElement.classList.remove("invalid");
        }
        else if (this.description === "Имя:" && (containsDigits || containSpecific || containsDom || containsEmail)) {
          this.errorMessage = "Неверный формат"
          this.$refs.inputElement.classList.remove("input_el:focus");
          this.$refs.inputElement.classList.add("invalid");
          this.$refs.inputElement.classList.add("invalid:focus");
        } 
        else if (this.description === "Телефон:" && (!containsTel)) {
          this.errorMessage = "Неверный формат"
          this.$refs.inputElement.classList.remove("input_el:focus");
          this.$refs.inputElement.classList.add("invalid");
          this.$refs.inputElement.classList.add("invalid:focus");
        } 
        else if (this.flag || this.errorMessage) {
          if(this.description === "E-mail:" && (!containsEmail || !containsDom)){
            this.$refs.inputElement.classList.add("invalid");
            this.$refs.inputElement.classList.remove("invalid:focus");
            this.errorMessage = "Неверный формат"
          }
          else if(this.description === "Пароль:" && inputValue.length < 8){
            this.errorMessage = "Пароль должен содержать не менее 8 символов"
            this.$refs.inputElement.classList.add("invalid");
            this.$refs.inputElement.classList.remove("invalid:focus");
          }
          else{
            this.$refs.inputElement.classList.add("input_el:focus");
            this.$refs.inputElement.classList.remove("invalid");
            this.errorMessage = ""
          }
        } 
        else {
          this.errorMessage = ""
          this.$refs.inputElement.classList.add("input_el:focus");
          this.$refs.inputElement.classList.remove("invalid");
          this.$refs.inputElement.classList.remove("invalid:focus");
        }
      },
      onBlur() {
        this.flag = true;
        this.checkSymbol()
      },
      onFocus(){
        this.flag = false;
        this.errorMessage = ""
        this.$refs.inputElement.classList.remove("invalid");
      },
    },
    computed: {
      typeVar(){
        return this.description==="Пароль:" ? "password" : "text"
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
  .error_message{
    margin-top: 2px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--accent-color-ff-704-d);
  }
</style>