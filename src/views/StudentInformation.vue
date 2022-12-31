<template>
  <Top-Header/>
  <div class="d-flex flex-row align-items-start">
    <div>
      <SudentSideMenu/>
    </div>
    <div style="margin-left: 95px;margin-top: 25px">
    <Information/>
    </div>
  </div>
</template>

<script>
import Information from "@/components/StudentComponents/Information.vue";
import SudentSideMenu from "@/components/LeftSideMenu/SudentSideMenu.vue";
export default {
  name: "StudentInformation",
  components:{
    SudentSideMenu,
    Information
  },
}
</script>

<style scoped>

</style>