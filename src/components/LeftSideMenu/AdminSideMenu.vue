<template>
  <div class="ms-3">
    <div class="AdminMenuButton">
      <router-link to="/AdminAddStudent">
        <button type="button" class="btn btn-primary SideButton">Öğrenci ekle</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="/EditLesson">
        <button type="button" class="btn btn-primary SideButton">Ders ekle/sil</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="/AdminMufredat">
        <button type="button" class="btn btn-primary SideButton">Müfredat oluşturma</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="">
        <button type="button" class="btn btn-primary SideButton">Öğrenci tablosu</button>
      </router-link>
    </div>
    <div class="AdminMenuButton">
      <router-link to="">
        <button type="button" class="btn btn-primary SideButton">Öğrenci ekle</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
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