<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <HomeStudent/>
    </div>
  </div>
</template>
<script>
import HomeStudent from "@/components/HomeStudent.vue";

export default {
  name: "StudentHomePage",
  components:{
    HomeStudent,
  },

}
</script>

<style scoped>

</style>