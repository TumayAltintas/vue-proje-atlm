<script>
import {RouterLink, RouterView} from 'vue-router'

export default {
  name: 'App',


  mounted(){
      if ( this.$store.state.user != null){
           setTimeout(() => {
             this.$store.commit("logoutUser");
             this.$router.push({name: "LoginChoice"});
             window.location.reload();
             alert('Oturum süresi sona erdi')
        },  30000);
      }else {
  }
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