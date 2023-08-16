<template>
  <div class="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal__registration_block">
            <h1 class="heading-5">Регистрация</h1>
            <div class="links_registrations_registr">
              <a @click="updateInputsRegistration1" data-bs-toggle="modal" data-bs-target="#entryModal" class="subtext a-modal-registr a-hover__registr" href="">Вход</a>
              <a class="subtext a-modal-registr a-focus__registr" href="">Регистрация</a>
            </div>
            <div class="inputs__registr">
              <input-element 
                v-for="(modalInput, index) of modalInputsRegistration"
                :key="modalInput.id"
                :title="modalInput.title"
                :description="modalInput.description"
                v-model:value="modalInput.value"
                @input="onInputChangeRegistr(index)"
              />
            </div>
            <div class="check__registr">
              <checkbox-element 
              :checked="checked"
              @click="clickCheck"
              />
              <p class="subtext p__registr">Нажимая на кнопку, я соглашаюсь <a data-bs-dismiss="modal" @click="redirectToOtherPage">на обработку персональных данных</a></p>
            </div>
            <p v-if="checked1" class="subtext p-error">Требуется ваше согласие</p>
              <btn-background 
                :style="buttonStyle" 
                :disabled="isBtnDisabled" 
                @click="updateInputsRegistration" 
                :data-bs-toggle="checked==false ? null : 'modal'"
                :data-bs-target="checked ==false ? null : '#entryModal'" 
                class="btn__registr">
                Зарегистрироваться
              </btn-background>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: "modal-registration",
    props: {
      modalInputsRegistration: {
        type: Array,
        required: true,
      }
    },
    data(){
      return{
        isBtnDisabled: false,
        buttonStyle: {},
        checked: false,
        checked1: false,
      }
    },
    methods: {
      ...mapActions([
        'changeNameRegistation'
      ]),
      redirectToOtherPage() {
        this.$router.push('/TeachersPortal/UserData');
      },
      updateInputsRegistration(){
        if(this.checked == false){
          this.checked1 = true
        }
        else {
          this.checked1 = false
          const newName = this.modalInputsRegistration[0].value
          this.changeNameRegistation(newName)
          localStorage.setItem('E-mail:', this.modalInputsRegistration[1].value)
          localStorage.setItem('Пароль:', this.modalInputsRegistration[2].value)
          this.modalInputsRegistration[0].value=''
          this.modalInputsRegistration[1].value=''
          this.modalInputsRegistration[2].value=''
        }
      },
      updateInputsRegistration1(){
        this.modalInputsRegistration[0].value=''
        this.modalInputsRegistration[1].value=''
        this.modalInputsRegistration[2].value=''
      },
      checkItem1(){
        const regex = /[0-9!/@#$%^&*(),.?":{}|<>]/
        if (regex.test(this.modalInputsRegistration[0].value)) {
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
      checkItem2() {
        const containsEmail = this.modalInputsRegistration[1].value.includes("@");
        const containsDom = this.modalInputsRegistration[1].value.includes(".com") || this.modalInputsRegistration[1].value.includes(".ru")
        if (!containsDom || !containsEmail) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
          if (this.modalInputsRegistration[1].value == '') {
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
      checkItem3() {
        if (this.modalInputsRegistration[2].value.length < 8) {
          this.buttonStyle = {
            background: "#E5E5E5",
            color: "rgba(204, 204, 204, 1)",
            cursor: "no-drop",
          }
          this.isBtnDisabled = true
          if (this.modalInputsRegistration[2].value == '') {
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
      onInputChangeRegistr(index){
        if(index===0){
          this.checkItem1()
        }
        else if(index===1){
          this.checkItem2()
        }
        else {
          this.checkItem3()
        }
      }, 
      clickCheck(){
        this.checked = !this.checked
        this.checked1 = false
      }
    }, 
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
  .modal__registration_block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
  }
  .links_registrations_registr {
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
  .a-modal-registr {
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--heading-666666-text);
  }
  .a-focus__registr {
    color: var(--accent-color-ff-8800);
  }
  .a-hover__registr:hover {
    color: var(--accent-color-ff-8800);
  }
  .inputs__registr {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .check__registr {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .check__registr p{
    width: 100%;
  }
  .btn__registr{
    width: 100%;
  }
  .p__registr a{
    text-decoration: underline;
    line-height: 120%;
    color: var(--accent-color-ff-8800);
    cursor: pointer;
  }
  .p-error{
    color: var(--accent-color-ff-704-d);
  }
</style>