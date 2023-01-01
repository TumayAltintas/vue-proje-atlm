<template>
  <div class="d-flex ">
    <div>
      <AdminSideMenu/>
    </div>
  </div>
</template>

<script>
import AdminSideMenu from "@/components/LeftSideMenu/AdminSideMenu.vue";
export default {
  name: "HomeAdmin",
  components:{
    AdminSideMenu
  }
}
</script>

<style scoped>

</style>