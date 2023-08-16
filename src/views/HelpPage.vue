<template>
  <div class="help_page">
    <div class="container">
      <h1 class="heading-1">Служба поддержки</h1>
      <div class="help_block">
        <h2 class="heading-4">Остались вопросы? Напишите нам и мы ответим как можно быстрее!</h2>
        <div class="block_help_inputs">
          <div class="block_help_input">
            <input-element id="input_main"
              v-for="(inputel, index) of inputs"
              :key = "inputel.id"
              :description = "inputel.description"
              :title = "inputel.title"
              v-model:value="inputel.value"
              @input="onInputChange(index)"
            />
          </div>
        </div>
        <textarea-element
              v-for="textareaElement of textareaElements"
              :key= "textareaElement.id"
              :description= "textareaElement.description"
              :title= "textareaElement.title"
          >
          </textarea-element> 
        <div class="checked_block">
          <checkbox-element
          />
          <p class="subtext">Согласен <router-link class="checked_a" to="/TeachersPortal/UserData">с политикой обработки данных</router-link></p>
        </div>
        <btn-background :disabled="isBtnDisabled" :style="buttonStyle" data-bs-toggle="modal" data-bs-target="#modalCheck" class="btn_help" @click="getStorage">Отправить</btn-background>
      </div>
    </div>
  </div>
  <modal-check
  :title="title"
  :description="description"
  ></modal-check>
</template>

<script>
  export default {
    
    data(){
      return{
        inputs: [
          {id: 1, title: "Введите имя", description: "Имя:", value: ''},
          {id: 2, title: "Введите ваш e-mail", description: "E-mail:", value: ''},
        ],
        textareaElements: [
          {id: 1, title: "Ваше сообщение", description: "Сообщение:"}
        ],
        check: 0,
        buttonStyle: {},
        isBtnDisabled: false,
        title: "Ваша заявка принята!",
        description: "Создать еще заявку"
      }
    },
    methods: {
      getStorage(){
        this.inputs[0].value = ''
        this.inputs[1].value = ''
      },
      checkInput1(){
        const regex = /[0-9!/@#$%^&*(),.?":{}|<>]/
        if (regex.test(this.inputs[0].value)) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
        } 
        else {
          this.buttonStyle = {
            background: "",
            color: "",
            cursor: "pointer",
          }
          this.isBtnDisabled = false
        }
      },
      checkInput2() {
        const containsEmail = this.inputs[1].value.includes("@");
        const containsDom = this.inputs[1].value.includes(".com") || this.inputs[1].value.includes(".ru")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!containsDom || !containsEmail) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
          if (this.inputs[1].value == '') {
            this.buttonStyle = {
              background: "",
              color: "",
              cursor: "pointer",
            }
            this.isBtnDisabled = false
          }
        } 
        else {
          this.buttonStyle = {
            background: "",
            color: "",
            cursor: "pointer",
          }
          this.isBtnDisabled = false
        }
      },
      onInputChange(index){
        if(index === 0){
          this.checkInput1()
        }
        else if(index === 1){
          this.checkInput2()
        }
      },
      
    }

  }
</script>

<style scoped>
  .help_page {
    padding: 50px 0 100px 0;
  }
  .heading-1 {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .help_block {
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .heading-4 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-333333-text);
  }
  .block_help_input {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .checked_block {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--heading-666666-text);
  }
  .checked_a{
    text-decoration: underline;
    color: var(--accent-color-ff-8800);
  }
  .btn_help{
    align-self: flex-start;
  }
  @media screen and (max-width: 810px){
    .help_page {
      padding: 90px 0 100px 0;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px){
    .block_help_input{
      display: flex;
      flex-direction: column;
    }
    .heading-1{
      margin-bottom: 30px;
      text-align: center;
    }
    .heading-4{
      text-align: center;
    }
  }
  @media screen and (max-width: 520px){
    .help_page {
      padding: 90px 0 64px 0;
    }
  }
</style>