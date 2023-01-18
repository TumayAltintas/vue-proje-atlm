<template>
  <div class="container">
    <div  class="row">
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İsim</label>
        <input v-model="getUser.name" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder=[[getUser.name]]>
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Soyisim</label>
        <input v-model="getUser.surname" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.surname]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input v-model="getUser.email" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.email]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Öğrenci no</label>
        <input v-model="getUser.studentno" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.studentno]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Tc no</label>
        <input v-model="getUser.tcno" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.tcno]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Doğum yeri</label>
        <input v-model="getUser.Place_of_birth" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.Place_of_birth]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Doğum tarihi</label>
        <input v-model="getUser.date_of_birth" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.date_of_birth]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Telefon numarası</label>
        <input v-model="getUser.gsm" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.gsm]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">kimlik id</label>
        <input v-model="getUser.kimlik_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.kimlik_id]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">müfredat id</label>
        <input v-model="getUser.müfredat_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.müfredat_id]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">iletişim id</label>
        <input v-model="getUser.iletisim_id" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.iletisim_id]]">
      </div>
      <div class="form-group">
        <label>ADRES</label>
        <textarea v-model="getUser.adres" type="text" class="form-control" :placeholder="[[getUser.adres]]"></textarea>
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İl</label>
        <input v-model="getUser.il" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.il]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">İlce</label>
        <input v-model="getUser.ilce" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.ilce]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Kullanıcı adı</label>
        <input v-model="getUser.username" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.username]]">
      </div>
      <div class="mb-3 w-25 form-group">
        <label for="exampleFormControlInput1" class="form-label">Şifre</label>
        <input v-model="getUser.password" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.password]]">
      </div>
      <button @click="onSave" class="btn btn-primary">Bilgileri güncelle</button>
    </div>
  </div>
</template>

<script>
import {collection, getDoc, doc, updateDoc, addDoc, getFirestore} from "firebase/firestore";
import {useRoute} from "vue-router";

const db = getFirestore();
export default {
  data() {
    return {
      getUser: {}
    }
  },
  methods: {
    onSave() {
      this.$appAxios.patch("/users/" + this.$route.params.id, {...this.getUser}).then((login_response) => {
        console.log(login_response)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.$appAxios.get("/users/" + this.$route.params.id).then((response) => {
      this.getUser = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>