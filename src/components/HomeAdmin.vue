<template>
  <div class="d-flex flex-row align-items-start">
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