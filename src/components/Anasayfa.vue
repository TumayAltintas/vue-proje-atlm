<template>
  <div>
    <div>
      <Top-Header/>
    </div>
    <div>
      <OgrenciEkleSil/>
    </div>
  </div>
</template>
<script>
import OgrenciEkleSil from "@/components/AdminComponents/OgrenciTablosu.vue";
export default {
  name: 'Anasayfa',
  components: {
    OgrenciEkleSil,

  },
}
</script>

<style scoped>

</style>