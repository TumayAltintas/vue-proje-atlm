<template>
  <div class="ms-3">
    <div class="AdminMenuButton">
      <router-link to="/StudentInformation">
        <button type="button" class="btn btn-primary SideButton">Kişisel bilgilerim</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="/StudentDers">
        <button type="button" class="btn btn-primary SideButton">Derslerim</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="/AdminMufredat">
        <button type="button" class="btn btn-primary SideButton">Ders seçimi</button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "SudentSideMenu"
}
</script>

<style scoped>
.AdminMenuButton{
  height: max-content;
  width: max-content;
  font-size: 12px;
}
.SideButton{
  width: 175px;
}
</style>