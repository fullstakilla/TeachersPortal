<template>
  <div class="modal fade" id="entryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal__entry_block">
            <h1 class="heading-5">
              Авторизация
            </h1>
            <div class="links_registrations_entry">
              <a class="subtext a-modal-entry a-focus__entry" href="">Вход</a>
              <a @click="updateInputsStop" data-bs-toggle="modal" data-bs-target="#registrationModal" class="subtext a-modal-entry a-hover__entry" href="">Регистрация</a>
            </div>
            <div class="input_forms_entry">
              <input-element 
                v-for="(modalInput, index) of modalInputs"
                :key="modalInput.id"
                :title="modalInput.title"
                :description="modalInput.description"
                v-model:value="modalInput.value"
                @input="onInputChangeEntry(index)"
              />
            </div>
            <div class="check_modal__entry">
              <checkbox-element 
                @click="getItems"
              />
              <p class="subtext">Запомнить меня</p>
            </div>
            <btn-background :disabled="isBtnDisabled" :style="buttonStyle" @click="updateClick" data-bs-dismiss="modal" class="btnModal__entry">Войти</btn-background>
            <a @click="updateInputsStop" data-bs-toggle="modal" data-bs-target="#forgetModal" class="subtext a-modal-entry a-focus__entry" href="">Забыли пароль</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <forget-block />
  <forget-form />
</template>

<script>
  export default {
    name: "modal-entry",
    emits: ['updateClick'],
    props: {
      modalInputs: {
        type: Array,
      }
    },
    data(){
      return {
        checked: 0,
        buttonStyle: {},
        isBtnDisabled: false
      }
    },
    created(){
      this.updateInputs()
    },
    methods: {
      updateInputs(){
        this.modalInputs[0].value = localStorage.getItem('E-mail:') || ""
        this.modalInputs[1].value = localStorage.getItem('Пароль:') || ""
      },
      updateClick(){
        this.$emit('updateClick')
        this.updateInputs()
      },
      getItems(){
        this.checked ++
        if(this.checked % 2 == 1){
          localStorage.setItem('E-mail:', this.modalInputs[0].value)
          localStorage.setItem('Пароль:', this.modalInputs[1].value)
        }
        else {
          localStorage.removeItem('E-mail:', this.modalInputs[0].value)
          localStorage.removeItem('Пароль:', this.modalInputs[1].value)
        }
      },
      updateInputsStop(){
        this.modalInputs[0].value = ''
        this.modalInputs[1].value = ''
      },
      checkItem1() {
        const containsEmail = this.modalInputs[0].value.includes("@");
        const containsDom = this.modalInputs[0].value.includes(".com") || this.modalInputs[0].value.includes(".ru")
        if (!containsDom || !containsEmail) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
          if (this.modalInputs[0].value == '') {
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
      checkItem2() {
        if (this.modalInputs[1].value.length < 8) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
          if (this.modalInputs[1].value == '') {
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
      onInputChangeEntry(index){
        if(index === 0){
          this.checkItem1()
        }
        else if(index === 1){
          this.checkItem2()
        }
      },
    }
  }
</script>

<style scoped>
  .modal-body {
    padding: 30px;
  }
  .modal-content{
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .modal__entry_block{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .heading-5 {
    color: var(--heading-222222-heading);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .links_registrations_entry {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    color: var(--heading-666666-text);
  }
  .a-modal-entry {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .input_forms_entry {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .check_modal__entry {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .btnModal__entry{
    width: 100%;
  }
  .a-focus__entry{
    color: var(--accent-color-ff-8800);
  }
  .a-hover__entry:hover{
    color: var(--accent-color-ff-8800);
  }
</style>