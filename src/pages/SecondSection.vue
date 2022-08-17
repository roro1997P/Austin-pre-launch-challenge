<template>
  <div class="container">
    <div class="row justify-evenly">
      <div 
        v-for="(item, index) in itemList" :key="item.id" 
        class="animation-container tablet-size mobile-size mobile-size-margin" 
        :class="[index % 2 === 0 ? 'tablet-size-margin' : '', index % 2 !== 0 ? 'desktop-margin' : '']"
        style="width: 255px;"
      >
        <div class="bg-image"/>
        <img 
          class="image" :width="item.img_width"
          :src="item.image" :alt="item.title"
          :style="item.img_margin ? `margin: ${item.img_margin}` : ''"
        />
        
        <div class="text-div">
          <h5>{{ item.title }}</h5>
          <span class="text-info">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SecondSectionPage',
  setup() {
    return {
      itemList: [
        { 
          id: 0, title: "Indulge your passions", 
          text: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.", 
          image: "assets/illustration-passions.svg", img_width: '88'
        },
        { 
          id: 1, title: "Gain financial freedom", 
          text: "Start making money work for you. There’s nothing quite like earning while you sleep.", 
          image: "assets/illustration-financial-freedom.svg", img_width: '74'
        },
        { 
          id: 2, title: "Choose your lifestyle", 
          text: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.", 
          image: "assets/illustration-lifestyle.svg", img_width: '80'
        },
        { 
          id: 3, title: "Work from anywhere", 
          text: "Selling online means not being pinned down. Want to work AND travel? Go for it!", 
          image: "assets/illustration-work-anywhere.svg", img_width: '104', img_margin: '0px 0px 0px 70px;'
        }
      ]
    }
  }
})
</script>

<style scoped>
.animation-container:hover {
  transform: translateY(-5%);
  transition: 0.5s ease;
}

.animation-container:not(:hover) {
  transform: translateY(0%);
  transition: 0.5s ease;
}
.container {
  width: 80%;
  margin: 0px auto 100px;
}
.container > div {
  width: 100%;
}
.desktop-margin {
  margin-top: 50px;
}
.bg-image {
  background-color: #093F68;
  width: 160px;
  margin-top: -10px;
  border-radius: 30%;
  height: 164px;
  position: relative;
  left: 40px; 
  top: 130px;
}
.image {
  position: relative;
  margin-left: 80px;
}
.text-div {
  margin-top: 70px;
  width: 255px;
}

.text-div > span {
  display: block; 
  text-align: justify;
}

@media screen and (max-width: 954px) {
  .animation-container:hover {
    transform: translateX(10%);
    transition: 0.5s ease;
  }
  .animation-container:not(:hover) {
    transform: translateX(0%);
    transition: 0.5s ease;
  }
  .row {
    flex-direction: column;
  }
  .desktop-margin {
    margin-top: 0px;
  }
  .tablet-size {
    width: 100%;
    height: 200px;
  }
  .image {
    position: relative;
  }
  .tablet-size-margin {
    margin-left: 50px;
  }
  .text-div {
    position: relative;
    top: -200px;
    left: 225px;
    width: 360px;
    text-align: justify;
  }
}

@media screen and (max-width: 738px) {
  .animation-container:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }
  .animation-container:not(:hover) {
    transform: scale(1);
    transition: 0.5s ease;
  }
  .mobile-size {
    width: 100% !important ;
    height: 400px;
    margin: 0px auto;
    text-align: center;
  }
  .mobile-size-margin {
    margin-left: 0px;
  }
  .text-div {
    position: unset;
    width: 100%;
    text-align: center;
  }
  .text-div > span {
    display: block;
    text-align: center;
    width: 55%;
    margin: 0px auto;
  }
  .bg-image {
    margin: -10px auto;
    position: relative;
    top: 130px;
    left: 0px;
  }
  .image {
    position: relative;
    margin-left: 0px !important;
  }
}
</style>