<template>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SudentSideMenu/>
    </div>
  </div>
</template>

<script>
import SudentSideMenu from "@/components/LeftSideMenu/SudentSideMenu.vue";
export default {
  name: "HomeStudent",
  components:{
    SudentSideMenu
  }
}
</script>

<style scoped>

</style>