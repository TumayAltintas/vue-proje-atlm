<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SudentSideMenu/>
    </div>
    <div style="margin-left: 95px;margin-top: 25px">
      <DersSecimi/>
    </div>
  </div>
</template>

<script>
import DersSecimi from "@/components/StudentComponents/DersSecimi.vue";
import SudentSideMenu from "@/components/LeftSideMenu/SudentSideMenu.vue";
export default {
  name: "StudentDers",
  components: {SudentSideMenu, DersSecimi}
}
</script>

<style scoped>

</style>