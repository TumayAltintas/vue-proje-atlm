<template>
  <section class="vh-100 bg-dark">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class=" w-25" style="border-radius: 15px;">
          <div class="card-body p-5">
            <h2 style="color: white" class=" text-center mb-4">Giriş Yap</h2>
            <form>
              <input v-model="userData.username" type="email" id="form3Example3" class="form-control mb-4"
                     placeholder="Kullanıcı_Adı"/>

              <input v-model="userData.password" type="password" id="form3Example4" class="form-control mb-3"
                     placeholder="Şifre"/>
              <div class="m-4" style="justify-content: center;display: flex">
                <button @click="onsubmit()" type="button" class="btn btn-primary btn-lg"
                        style="  padding-left: 2.5rem; padding-right: 2.5rem;">Giriş
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  data() {
    return {
      userData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    onsubmit() {
      this.$appAxios.get(`users?username=${this.userData.username}&password=${this.userData.password}`).then(login_response => {
        if (login_response.data.length > 0) {
          this.$router.push({name: 'Home'});
          this.$store.commit('setUser', login_response.data);
        } else {
          alert("Kullanıcı adı veya şifre hatalı");
        }
      });
    }

  }

}


</script>

<style scoped>

</style>