<template>
  <div class="check_item">
    <checkbox-element :id="index" :checked="checked" :value="title" @click="clickCheckbox"/>
    <label :for="index" style="cursor: pointer;" class="subtext form-check-label">{{ title }}</label>
  </div>
</template> 

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      value: String,
      checked: Boolean,
      index: Number,
    }, 
    data(){
      return {
      }
    },
    methods: { 
      clickCheckbox(event) {
        this.$emit('update:value', event.target.value);
        this.$emit('clickCheck', this.index)
      },
    }
  }
</script>

<style scoped>
  .check_item{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  .check_item:nth-child(19){
    margin-bottom: 32px;
  }
  .subtext{
    color: var(--heading-666666-text);
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none;
  }
  .subtext:hover{
    color: rgba(233, 126, 3, 1);
  }
</style>