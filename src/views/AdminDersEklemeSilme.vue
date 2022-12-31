<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SideBar/>
    </div>
    <div style="margin-left: 95px">
      <DersEkleSil/>
    </div>
  </div>
</template>

<script>
import DersEkleSil from "@/components/AdminComponents/DersEkleSil.vue";
import SideBar from "@/components/LeftSideMenu/AdminSideMenu.vue";
export default {
  name: "AdminDersEklemeSilme",
  components: {
    DersEkleSil,
    SideBar
  },
}
</script>

<style scoped>

</style>