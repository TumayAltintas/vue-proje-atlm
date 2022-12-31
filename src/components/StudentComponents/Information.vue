<template>
  <div class="container">
    <div class="align-self-center justify-content-center d-flex mt-2 mb-5">
      <h1 style="color: darkblue"> Kişisel Bilgileri</h1>
    </div>
    <section class="d-flex align-self-center justify-content-center">
      <div class="ms-3">
        <label>İsim</label>
        <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.name]]"
               aria-label="Disabled input example" disabled>
      </div>
      <div class="ms-3">
        <label>Soyisim</label>
        <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.surname]]"
               aria-label="Disabled input example" disabled>
      </div>
      <div class="ms-3">
        <label>Tc kimlik no</label>
        <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.tcno]]"
               aria-label="Disabled input example" disabled>
      </div>
      <div class="ms-3">
        <label>Öğrenci numarası</label>
        <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.studentno]]"
               aria-label="Disabled input example" disabled>
      </div>
      <div class="ms-3">
        <label>Doğum tarihi</label>
        <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.date_of_birth]]"
               aria-label="Disabled input example" disabled>
      </div>
    </section>
    <div class="align-self-center justify-content-center d-flex mt-2">
      <h1 style="color: darkblue"> İletişim bilgileri</h1>
    </div>
    <section class="d-flex align-self-center justify-content-center">
      <div>
        <label>Telefon</label>
        <input v-model="getUser.gsm" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.gsm]]">
      </div>
      <div>
        <label>Email</label>
        <input v-model="getUser.email" type="text" class="form-control" id="exampleFormControlInput1"
               :placeholder="[[getUser.email]]">
      </div>
    </section>
    <div class="align-self-center justify-content-center d-flex mt-2 mb-5">
      <h1 style="color: darkblue"> İkametgah Bilgileri</h1>
    </div>
    <section class="align-self-center justify-content-center">
      <div class="d-flex ms-3 align-self-center justify-content-center">
        <div>
          <label>Adres</label>
          <input style="width: 500px"  class="form-control" type="text" :placeholder="[[getUser.adres]]"
                 aria-label="Disabled input example" disabled>
        </div>
      </div>

      <div class="d-flex align-self-center justify-content-center">
        <div class="ms-3">
          <label>il</label>
          <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.il]]"
                 aria-label="Disabled input example" disabled>
        </div>
        <div class="ms-3">
          <label>İlçe</label>
          <input style="width: max-content" class="form-control" type="text" :placeholder="[[getUser.ilce]]"
                 aria-label="Disabled input example" disabled>
        </div>
      </div>

    </section>
    <div class="align-self-center justify-content-center d-flex  m-5">
      <button @click="onSave" class="btn btn-primary">İletişim bilgilerini güncelle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentInformation",
  data() {
    return {
      getUser: {},
      userid: this.$store.state.user.map(res => res.id)

    }
  },
  methods: {
    onSave() {
      this.$appAxios.patch("/users/" + this.userid, {...this.getUser}).then((login_response) => {
        window.location.reload();
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.$appAxios.get("/users/" + this.userid).then((response) => {
      this.getUser = response.data
    }).catch((error) => {
      console.log(error)
    })
  },

}
</script>

<style scoped>

</style>
<!--<div  class="d-flex">-->
<!--<div style="width: max-content">-->
<!--  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUwDlUk5QpJ5jJapsEFJ71ENLk2xpKslpvNPx_D8rdw&s">-->
<!--</div>-->
<!--<div style="width: max-content">-->
<!--  <h3 class="form-label">{{getUser.name}}</h3>-->
<!--</div>-->
<!--<div style="width: max-content;margin-left: 15px">-->
<!--  <h3 class="form-label">{{getUser.surname}}</h3>-->
<!--</div>-->
<!--<div style="width: max-content;margin-left: 15px">-->
<!--  <h3  class="form-label">Öğrenci no : {{getUser.studentno}}</h3>-->
<!--</div>-->
<!--</div>-->