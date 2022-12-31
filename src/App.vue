<script>
import {RouterLink, RouterView} from 'vue-router'
import TopHeader from '@/components/TopHeader/TopHeader.vue'
import OgrenciEkleSil from "@/components/AdminComponents/OgrenciTablosu.vue";

export default {
  name: 'App',
  components: {
    TopHeader,
    OgrenciEkleSil,

  }
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>

</template>
<style scoped>


</style>