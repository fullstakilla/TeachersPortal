<template>
  <div>
    <div style="position:relative;overflow:hidden;">
      <iframe class="map_yandex" style="border-radius: 24px;" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3125029b357996d16633fb9fbf016bb12f18bad7ed762e425968974ff08e5818&amp;source=constructor" width="500" height="500" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  @media screen and (max-width: 768px){
    .map_yandex{
      max-width: 100%;
      width: 500px;
      height: 300px;  
    }
  }
</style>