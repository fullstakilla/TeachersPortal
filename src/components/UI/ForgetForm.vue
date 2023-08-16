<template>
  <div class="modal fade" id="forgetModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal__forget">
            <h1 class="heading-5">Введите пароль указанный в письме</h1>  
            <input-element 
              v-for="modalInput of modalInputs"
              :key="modalInput.id"
              :title="modalInput.title"
              :description="modalInput.description"
              v-model:value="modalInput.value"
              @input="checkPassword"
            />
            <btn-background :style="buttonStyle" @click="clickOff" data-bs-dismiss="modal" class="btn__forget">Войти</btn-background>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forget-form",
    data(){
      return {
        modalInputs: [
          {id: 1, title: "Введите пароль:", description: "Пароль:", value: ""},
        ], 
        buttonStyle: {},
        isBtnDisabled: false,
      }
    }, 
    methods: {
      checkPassword(){
        if (this.modalInputs[0].value.length < 8) {
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
      clickOff(){
        this.modalInputs[0].value = ''
      }
    }
  }
</script>

<style lang="css" scoped>
  .modal-body {
    padding: 30px;
  }
  .modal-content{
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
  }
  .modal__forget {
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
  .btn__forget {
    width: 100%;
  }

</style>