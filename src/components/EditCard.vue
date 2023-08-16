<template>
  <div class="card_teacher">
    <div class="about">
      <div class="author_img">
        <img :src="ProfileImg" alt="">
      </div>
      <h2 class="heading-5">{{ nameInput }}</h2>
    </div>
    <div class="works_block">
      <img src="../assets/img/teacher_page-img/Iconly/Two-tone/ShieldDone.svg" alt="">
      <p class="subtext work_p">Проведено 450 занятий</p>
    </div>
    <div class="stars_section">
      <Stars 
        v-for="starItem in starsItems"
        :imgStar="starItem.imgStar"
      />
      <p class="subtext">4.5</p>
    </div>
    <div class="down_content">
      <a class="heading-6" @click="uploadImage">Загрузить фото</a>
      <img src="@/assets/img/edit-img/Iconly/Two-tone/Image.svg" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Stars from '@/components/UI/Stars.vue'


import starImg from '@/assets/img/findteachers-img/Iconly/Bulk/Star.svg'
import star1 from '@/assets/img/findteachers-img/Iconly/Bulk/Star50.svg'
import peopleImg from "@/assets/img/ui-img/Profile.png"
  export default {
    components: {
      Stars,
    }, 
    data(){
      return{
        starsItems: [
          {id: 1, imgStar: starImg},
          {id: 2, imgStar: starImg},
          {id: 3, imgStar: starImg},
          {id: 4, imgStar: starImg},
          {id: 5, imgStar: star1},
        ], 
        imgPeople: peopleImg
      }
    },
    methods: {
      ...mapActions([
        'changeImg'
      ]),
      ...mapMutations([
        'changeProfileImg'
      ]),
      uploadImage() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/jpeg,image/png";
      input.addEventListener("change", event => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
          const reader = new FileReader();
          reader.onload = e => {
            const newImg = e.target.result;
            this.imgPeople = newImg;
            this.changeImg(newImg);   
          };
          reader.readAsDataURL(file);
        }
      });
      input.click();
      }
    }, 
    computed: {
      ...mapGetters([
        'nameInput',
        'ProfileImg'
      ])
    }, 
    created(){
      this.changeProfileImg()
    }
  }
</script>

<style scoped>
  .card_teacher {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--gray-f-2-f-2-f-2);
    background: var(--accent-color-ffffff);
    box-shadow: 0px 6px 25px 0px rgba(204, 204, 204, 0.20);
    width: 330px;
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .author_img img {
    width: 128px;
    height: 128px;
    display: block;
    margin: 0 auto;
  }
  .author_img{
    border-radius: 474.074px;
    background: var(--accent-color-ffe-1-bf);
    overflow: hidden;
    width: 128px;
    height: 128px;
    display: block;
    margin: 0 auto;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--heading-222222-heading);
    text-align: center;
  }
  .works_block {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .work_p {
    color: var(--heading-333333-text) !important;
  }
  .stars_section {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
  }
  .subtext {
    font-style: normal;
    font-weight: 400;
    line-height: 130%;  
    color: var(--heading-666666-text);
  }
  .down_content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .heading-6{
    color: var(--accent-color-ff-8800);
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-decoration: none;
    border-bottom: 1.5px solid var(--accent-color-ff-8800);
  }
  @media screen and (max-width: 968px){
    .card_teacher{
      width: 100%;
    }
  }
</style>