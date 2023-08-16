<template>
  <header class="header_mobile fixed_header">
    <div class="container">
      <div class="header_mobile_section">
        <router-link class="router__header_logo" to="/TeachersPortal/">
          <div class="logo_header_mobile-section">
            <img src="@/assets/img/header-img/Iconly/Bulk/Work.svg" alt="bulk-work">
            <h1 class="heading-5">Портал учителя</h1>
          </div>
        </router-link>
        <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" src="@/assets/img/header-img/Menu.svg" alt="menu">
      </div>
      <OffcanvasMobile 
        :isRegistration="isRegistration"
        :btnRegistration="btnRegistration"
        @clickOff="clickOff"
      />
    </div>
  </header>
</template>

<script>
import OffcanvasMobile from '@/components/UI/OffcanvasMobile.vue';
  export default {
    components: {
      OffcanvasMobile
    },
    props: {
      isRegistration: {
        type: Boolean,
        required: true,
      },
      btnRegistration: {
        type: Boolean,
        required: true,
      }
    },
    methods:{
      clickOff(){
        this.$emit('clickOff')
      }
    }
  }
</script>

<style lang="css" scoped>
  .header_mobile {
    padding: 20px 0;
  }
  .header_mobile_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo_header_mobile-section {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .heading-5 {
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    color: var(--accent-color-ff-8800);
  }
  .fixed_header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--accent-color-ffffff);
    opacity: 1;
    z-index: 99;
    transition: all 0.2s ease;
  }
  .router__header_logo{
    text-decoration: none;
  }
</style>