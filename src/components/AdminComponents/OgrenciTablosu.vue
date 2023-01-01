<template>
  <div>
    <div class="container">
      <div class=" ekran">
        <div style="position: relative; left: 25px;top: 25px">
          <router-link to="/AdminAddStudent">
            <button class="btn btn-danger">EKLE</button>
          </router-link>
          <router-link to="/MUFREDAT">
            <button class="btn btn-danger">Müfredat</button>
          </router-link>
        </div>
        <div style="position: relative; top: 55px; left: 0">
          <table class="table table-bordered table-sm ">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">İsim</th>
              <th scope="col">Soyisim</th>
              <th scope="col">Email</th>
              <th scope="col">ÖğrenciNo</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="(Student,index) in students" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ Student.name }}</td>
              <td>{{ Student.surname }}</td>
              <td>{{ Student.email }}</td>
              <td>{{ Student.studentno }}</td>
              <td>
                <router-link :to="'/EditStudent/' + Student.id">
                  <button class="btn btn-warning">Güncelle</button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase";

export default {
  name: "OgrenciTablosu",

  data() {
    return {
      students: [],
      // getdata : [],

    }
  },
  async created() {

    this.$appAxios.get("/users")
        .then(response => {
          this.students = response.data;

        })
        .catch(error => {
          console.log(error);
        });
  },
}
</script>

<style scoped>
div.ekran {
  margin-top: 5px;
  height: 500px;
}
</style>