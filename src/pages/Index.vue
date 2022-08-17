<template>
  <q-layout view="hHh lpR fFf" class="bg-dark" style="overflow: hidden;">
    <q-page-container class="q-pb-xl">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
import ThirdSection from './ThirdSection.vue'
import FourthSection from './FourthSection.vue'

export default defineComponent({
  components: { FirstSection, SecondSection, ThirdSection, FourthSection },
  name: 'IndexPage'
})
</script>