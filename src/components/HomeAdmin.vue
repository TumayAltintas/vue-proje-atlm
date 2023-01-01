<template>
  <div class="d-flex ">
    <div>
      <AdminSideMenu/>
    </div>
    <div>
      <OgrenciTablosu/>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/LeftSideMenu/AdminSideMenu.vue";
import OgrenciTablosu from "@/components/AdminComponents/OgrenciTablosu.vue";
export default {
  name: "HomeAdmin",
  components:{
    OgrenciTablosu,
    AdminSideMenu
  }
}
</script>

<style scoped>

</style>