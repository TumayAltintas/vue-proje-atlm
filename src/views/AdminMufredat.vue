<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SideBar/>
    </div>
    <div style="margin-left: 95px;margin-top: 25px">
      <MüfredatOlusturma/>
    </div>
  </div>
</template>

<script>
import MüfredatOlusturma from "@/components/AdminComponents/MüfredatOlusturma.vue";
import SideBar from "@/components/LeftSideMenu/AdminSideMenu.vue";
export default {
  name: "AdminMufredat",
  components: {MüfredatOlusturma,
    SideBar
  },
}
</script>

<style scoped>

</style>