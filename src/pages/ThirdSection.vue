<template>
  <div class="container">
    
    <div class="page-header">
      <h4>Our pricing plans</h4>
      <span class="text-info">
        We only make money when our creators make money. Our plans are always affordable, and 
        it’s completely free to get started.
      </span>
    </div>

    <div class="page-content">
      <img class="icon-1" src="assets/icon-free.svg" alt="icon-free"/>
      <q-card tag="div" class="bg-secondary card-1">
        <q-card-section class="q-mt-md">
          <div class="text-subtitle2 q-mb-md text-white">Dip your toe</div>
          <span class="text-info">Just getting started? No problem at all! Our free plan will take you a long way.</span>
        </q-card-section>

        <q-card-section style="margin-top: -20px; margin-bottom: -30px">
          <h4>Free</h4>
        </q-card-section>

        <q-card-section>
          <div v-for="(item, index) in freeCardItemList" :key="index + '-free'" class="q-my-md">
            <q-icon name="check" color="primary" size="xs"  class="q-mr-md"/> <span class="text-white" v-html="item"></span>
          </div>
        </q-card-section>
        
        
      </q-card>

      <img class="icon-2" src="assets/icon-paid.svg" alt="icon-paid"/>
      <q-card tag="div" class="bg-primary card-2">
        <q-card-section class="q-mt-lg">
          <div class="text-subtitle2 text-dark q-mb-md">Dive right in</div>
          <span style="color: #2d333d">Ready for the big time? Our paid plan will help you take your business to the next level.</span>
        </q-card-section>
        
        <q-card-section style="margin-top: -20px; margin-bottom: -30px">
          <div style="display: flex;">
            <h4 class="text-dark">$25.00</h4> <span class="q-ml-sm" style="margin-top: 20px; color: #2d333d">/ month</span>
          </div>
        </q-card-section>
        
        <q-card-section>
          <div v-for="(item, index) in paidCardItemList" :key="index + '-paid'" class="q-my-md">
             <q-icon name="check" color="secondary" size="xs"  class="q-mr-md"/> <span class="text-dark" v-html="item"></span>
          </div>
        </q-card-section>
        
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThirdSectionPage',
  setup() {
    return {
      freeCardItemList: ["Unlimited products", "Basic analytics", "Limited marketplace exposure", "10% fee per transaction"],
      paidCardItemList: ["Custom domain", "Advanced analytics and reports", "High marketplace visibility", "5% fee per transaction"]
    }
  }
})
</script>

<style scoped>
.page-header {
  margin: 0px auto 20px;
  text-align: center;
  width: 540px;
}
.page-content {
  display: flex;
  margin: 70px auto;
  justify-content: center;
  width: 80%;
}
.card-1, .card-2 {
  border-radius: 15px;
  padding: 10px 20px;
  width: 31%;
}
.card-1 {
  margin-top: 10px;
  height: 50%;
}
.card-2 {
  height: 60%;
  padding-bottom: 20px;
}
.icon-1, .icon-2 {
  position: relative;
  width: 46px;
  height: 46px;
  z-index: 1;
}
.icon-1 {
  top: -12px;
  left: 80px;
}
.icon-2 {
  top: -22px;
  right: -80px;
}

@media screen and (max-width: 1024px) {
  .page-content {
    flex-direction: column;
    align-items: center;
  }
  .card-1, .card-2 {
    width: 60%;
    height: 100%;
  }
  .icon-1 {
    top: 34px;
    left: -20%;
  }
  .icon-2 {
    top: 30px;
    right: 20%;
    width: 51px;
    height: 65px;
  }
}

@media screen and (max-width: 668px) {
  .page-header {
    margin: 0px auto 20px;
    text-align: center;
    width: 327px;
  }
  .card-1, .card-2 {
    width: 90%;
  }
  .icon-1 {
    top: 34px;
    left: -30%;
  }
  .icon-2 {
    top: 30px;
    right: 30%;
    width: 51px;
    height: 65px;
  }
}
</style>