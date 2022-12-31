<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SideBar/>
    </div>
    <div style="margin-left: 95px">
      <OgrenciEkle/>
    </div>
  </div>
</template>

<script>
import OgrenciEkle from "@/components/AdminComponents/OgrenciEkle.vue";
import SideBar from "@/components/LeftSideMenu/AdminSideMenu.vue";
export default {
  name: "AdminAddStudent",
  components: {
    OgrenciEkle,
    SideBar
  },
}
</script>

<style scoped>

</style>