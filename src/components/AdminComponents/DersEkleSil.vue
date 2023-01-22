<template>
  <div class="container">
    <div :userdata=UserData class="row">
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">ders adı</label>
        <input v-model="UserData.ders_adi" type="text" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">ders kodu</label>
        <input v-model="UserData.ders_kodu" type="text" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">ders kredisi</label>
        <input v-model="UserData.ders_kredi" type="text" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">ders durumu</label>
        <input v-model="UserData.ders_durum" type="text" class="form-control" id="exampleFormControlInput1">
      </div>
      <button @click="onSave" class="btn btn-primary">Dersi ekle</button>
    </div>
    <div>
      <table class="table table-bordered table-sm ">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ders adı</th>
          <th scope="col">Ders kodu</th>
          <th scope="col">Ders kredisi</th>
          <th scope="col">Durumu</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(ders,index) in dersler" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ ders.ders_adi }}</td>
          <td>{{ ders.ders_kodu }}</td>
          <td>{{ ders.ders_kredi }}</td>
          <td>{{ ders.ders_durum }}</td>
          <td>
            <button @click="DurunGuncelleme(ders)" class="btn btn-warning">Güncelle</button>
          </td>
          <td>
            <button style="margin-left: 15px" @click="Sil(ders)" class="btn btn-danger">Sil</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserData: {
        ders_kodu: null,
        ders_adi: null,
        ders_kredi: null,
        ders_durum: null
      },
      dersler: [],
      dersid: "",
    }
  },
  async created() {
    this.$appAxios.get("/dersler")
        .then(response => {
          this.dersler = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    async onSave() {
      this.$appAxios.post("/dersler", {...this.UserData}).then((res) => {
      }).catch((error) => {
        console.log(error)
      })
    },
    async Sil(ders) {
      this.dersid = ders.id
      this.$appAxios.delete("/dersler/" + this.dersid).then((res) => {
        window.location.reload();
      }).catch((error) => {
        console.log(error)
      })
    },
    async DurunGuncelleme(ders) {
      this.dersid = ders.id
      if (ders.ders_durum === "0") {
        ders.ders_durum = "1"
      } else {
        ders.ders_durum = "0"
      }
      this.$appAxios.patch("/dersler/" + this.dersid,ders).then((res) => {
        console.log(res.data)

      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>