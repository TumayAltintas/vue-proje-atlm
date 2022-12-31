<template>
  <div class="container">
    <div :userdata=UserData class="row">
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İsim</label>
        <input v-model="UserData.name" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder=[[UserData.name]]>
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Soyisim</label>
        <input v-model="UserData.surname" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.surname]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input v-model="UserData.email" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.email]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Öğrenci no</label>
        <input v-model="UserData.studentno" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.studentno]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Tc no</label>
        <input v-model="UserData.tcno" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.tcno]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Doğum yeri</label>
        <input v-model="UserData.Place_of_birth" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.Place_of_birth]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Doğum tarihi</label>
        <input v-model="UserData.date_of_birth" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.date_of_birth]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Telefon numarası</label>
        <input v-model="UserData.gsm" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.gsm]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">kimlik id</label>
        <input v-model="UserData.kimlik_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.kimlik_id]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">müfredat id</label>
        <input v-model="UserData.müfredat_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.müfredat_id]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">iletişim id</label>
        <input v-model="UserData.iletisim_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.iletisim_id]]">
      </div>
      <div class="form-group">
        <label>ADRES</label>
        <textarea v-model="UserData.adres" type="text" class="form-control"
                  :placeholder="[[UserData.adres]]"></textarea>
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İl</label>
        <input v-model="UserData.il" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.il]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İlce</label>
        <input v-model="UserData.ilce" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.ilce]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Kullanıcı adı</label>
        <input v-model="UserData.username" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.username]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Şifre</label>
        <input v-model="UserData.password" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[UserData.password]]">
      </div>
      <button @click="onSave" class="btn btn-primary">Öğrenciyi ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserData: {
        name: null,
        surname: null,
        studentno: null,
        tcno: null,
        Place_of_birth: null,
        date_of_birth: null,
        adres: null,
        il: null,
        ilce: null,
        email: null,
        gsm: null,
        username: null,
        password: null,
        iletisim_id: null,
        müfredat_id: null,
        kimlik_id: null,
        request: 0
      },
    }
  },
  methods: {
    onSave() {
      this.$appAxios.post("/users", {...this.UserData}).then((login_response) => {
        console.log(login_response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>