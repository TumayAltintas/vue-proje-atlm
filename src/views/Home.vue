<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div v-show="show">
      <HomeAdmin/>
    </div>
  </div>
</template>

<script>
import HomeAdmin from "@/components/HomeAdmin.vue";

export default {
  name: "Home",
  components: {
    HomeAdmin,
  },
}
</script>

<style scoped>

</style>