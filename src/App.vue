<script>
import {RouterLink, RouterView} from 'vue-router'
import store from "./store";

export default {
  name: 'App',


  methods(){
    store.dispatch('logoutUser')
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