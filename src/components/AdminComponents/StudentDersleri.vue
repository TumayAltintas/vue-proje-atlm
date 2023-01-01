<template>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4 class="card-title">{{ isim + soyisim}} Dersleri</h4>
      </div>
      <div class="card-body">
        <table class="table">
          <thead class=" text-primary">
          <th>Ders Adı</th>
          <th>Ders Kodu</th>
          <th>Ders Kredisi</th>
          </thead>
          <tbody>
          <tr v-for="ders in dersler" :key="ders.id">
            <td>{{ ders.ders_adi }}</td>
            <td>{{ ders.ders_kodu }}</td>
            <td>{{ ders.ders_kredi }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDersleri",

  data() {
    return {
      dersler: [],
      isim : '',
      soyisim : ''

    }
  },
  created() {
    this.$appAxios.get("/users/" + this.$route.params.id).then((response) => {
      this.isim = response.data.name;
      this.soyisim = response.data.surname;
      this.dersler = response.data.derslerim
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>