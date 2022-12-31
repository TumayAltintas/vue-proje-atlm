<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4 class="card-title">Ders Seçimi</h4>
      </div>
      <div class="card-body">
        <table class="table">
          <thead class=" text-primary">
          <th>Ders Adı</th>
          <th>Ders Kodu</th>
          <th>Ders Kredisi</th>
          <th>Ders Seç</th>
          </thead>
          <tbody>
          <tr v-for="ders in dersler" :key="ders.id">
            <td>{{ ders.ders_adi }}</td>
            <td>{{ ders.ders_kodu }}</td>
            <td>{{ ders.ders_kredi }}</td>
            <td>
              <button class="btn btn-primary" @click="dersSec(ders.id)">Ders Seç</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DersSecimi",
  data() {
    return {
      dersler: []
    }
  },
  created() {
    this.$appAxios.get('MUFREDAT').then(response => {
      this.dersler = response.data.BilgMuh_Mufredat;
    });
  },

}
</script>

<style scoped>

</style>