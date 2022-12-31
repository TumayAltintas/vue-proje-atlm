<template>
  <div class="top-header container-fluid">
    <div class="d-flex">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUwDlUk5QpJ5jJapsEFJ71ENLk2xpKslpvNPx_D8rdw&s">
      </div>
      <div class="position-absolute Name d-flex">
        <h3>
          {{ user.name }}
        </h3>
        <h3 style="margin-left: 5px">{{ user.surname }}</h3>
      </div>
      <div>
      </div>
      <div @click="onLogout" class="d-flex logout">
        <img src="src/assets/icons8-logout-rounded-50.png">
      </div>
    </div>
    <div class="ayrim">

    </div>
  </div>
</template>

<script>

import {signOut} from "firebase/auth";
import {auth} from "../firebase/firebase";


export default {
  data() {
    return {
      user: {},
      userid: this.$store.state.user.map(todo => todo.id)
    }
  },
  methods: {
    onLogout() {
      this.$store.commit("logoutUser");
      this.$router.push({name: "LoginChoice"});
    }
  },
  created() {
    this.$appAxios.get("/users/" + this.userid).then((response) => {
      this.user = response.data
    }).catch((error) => {
      console.log(error)
    })
  },
}


</script>

<style scoped>
top-header {

}

div.ayrim {
  width: 100%;
  background-color: darkblue;
  height: 25px;
  position: relative;
}

div.logout {
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 25px;
}

div.Name {
  left: 155px;
}
</style>