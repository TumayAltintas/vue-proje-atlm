<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SideBar/>
    </div>
    <div style="margin-left: 95px;margin-top: 25px">
      <EditStudent/>
    </div>
  </div>
</template>

<script>
import EditStudent from "@/components/AdminComponents/EditStudent.vue";
import SideBar from "@/components/LeftSideMenu/AdminSideMenu.vue";
export default {
  name: "AdminEditStudent",
  components: {
    EditStudent,
    SideBar
  },
}
</script>

<style scoped>

</style>