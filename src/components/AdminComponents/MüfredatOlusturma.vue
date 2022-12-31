<template>
  <div class="container">
    <div class="mb-3 w-25 form-group">
      <label for="exampleFormControlInput1" class="form-label">Müfredat adı</label>
      <input v-model="müfredat_adı" type="text" class="form-control" id="exampleFormControlInput1">
    </div>
    <div class="row d-flex">
      <div class="col-lg-2 mb-3" v-for="(ders,index) in dersler.GrafikMuh_Mufredat" :key="index">
        <section class="opacity-100 " style="width: max-content">
          <div>
            <p>{{ ders.ders_adi }}</p>
          </div>
          <div class="justify-content-center align-self-center">
            <p>{{ ders.ders_kodu }}</p>
          </div>
          <div class="justify-content-center align-self-center">
            <p>{{ ders.ders_kredi }}</p>
          </div>
          <div class="justify-content-center align-self-center">
            <p>{{ ders.ders_durum }}</p>
          </div>
          <div>
            <button @click="müfredatOlustur" class="justify-content-center btn btn-primary">Ekle</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MüfredatOlusturma",
  data() {
    return {
      müfredat_adı: null,
      dersler: {}
    }
  },
  methods: {
    müfredatOlustur() {
      console.log(this.müfredat_adı)
      this.$appAxios.patch("/MUFREDAT/" + this.müfredat_adı, {...this.dersler}).then((login_response) => {
        console.log(login_response)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.$appAxios.get("/MUFREDAT").then((response) => {
      this.dersler = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>