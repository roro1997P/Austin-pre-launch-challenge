<template>
  <div class="q-pa-xl">
    <div class="logo">
      <img src="assets/logo.svg">
    </div>

    <div class="text-center">
      <div class="flex flex-center" style="margin-top: 180px">
        
        <div>
          <img src="assets/illustration-hero-left.svg" class="bg-image-left"/>
          <img src="assets/illustration-hero-right.svg" class="bg-image-right"/>
        </div>

        <img src="assets/bg-footer-squiggle.svg" class="bg-image"/>

        <div class="text-container">
          <h2>Get paid for the work you <b class="text-primary">love</b> to do.</h2>

          <div class="subtitle">
            <span class="text-info">
              The 9-5 grind is so last century. We believe in living life on your 
              own terms. Whether you’re looking to escape the rat race or set up 
              a side hustle, we’ve got you covered.
            </span>
          </div>
        </div>
      </div>
      
      <img src="assets/icon-scroll.svg" class="scroll-icon"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FirstSectionPage'
})
</script>


<style scoped>
.text-container {
  text-align: center;
  width: 730px;
}

h2 {
  margin: 0px 80px;
}

.subtitle {
  margin: 24px auto;
  width: 540px;
}

.bg-image {
  width: 544.31px;
  height: 377.98px;
  position: absolute;
}
.bg-image-left {
  width: 408px;
  height: 459px;
  position: absolute;
  top: 200px;
  right: 77%;
}

.bg-image-right {
  width: 396px;
  height: 444px;
  position: absolute;
  top: 200px;
  left: 77%;
}

.scroll-icon {
  margin-top: 40px;
}

@media screen and (max-width: 920px) {
  h2, b {
    font-size: 40px;
  }
  .subtitle {
    width: 457px;
  }
  h2 {
    margin: 0px 140px;
  }
  .bg-image-left {
    right: 82%;
  }
  .bg-image-right {
    left: 82%;
  }
}

@media screen and (max-width: 570px) {
  .logo {
    text-align: center;
  }
  .logo > img {
    width: 100px;
  }
  .text-container {
    position: relative;
    top: 150px;
    width: 100%;
  }
  h2, b {
    font-size: 32px;
    line-height: 40px;
    margin: 0px;
  }
  .subtitle {
    width: 100%;
  }
  .bg-image-left {
    width: 40%;
    height: 231px;
    top: 120px;
    right: 50%;
  }
  .bg-image-right {
    width: 40%;
    height: 231px;
    top: 120px;
    left: 50%;
  }
  .bg-image {
    display: none;
  }
  .scroll-icon {
    margin-top: 200px;
  }
}
</style>