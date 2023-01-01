<template>
  <Top-Header/>
  <div class="d-flex">
    <div>
      <SideBar/>
    </div>
    <div style="margin-left: 95px;margin-top: 25px">
      <EditStudent/>
    </div>
  </div>
  <div>
    <StudentDersleri/>
  </div>
</template>

<script>
import EditStudent from "@/components/AdminComponents/EditStudent.vue";
import SideBar from "@/components/LeftSideMenu/AdminSideMenu.vue";
import StudentDersleri from "@/components/AdminComponents/StudentDersleri.vue";
export default {
  name: "AdminEditStudent",
  components: {
    StudentDersleri,
    EditStudent,
    SideBar
  },
}
</script>

<style scoped>

</style>