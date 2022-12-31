<template>
  <section class="vh-100 bg-dark">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class=" w-25" style="border-radius: 15px;">
          <div class="card-body p-5">
            <h2 style="color: white" class=" text-center mb-4">Giriş seçimi</h2>
            <form>
              <div class="m-4" style="justify-content: center;display: flex">
                <router-link to="/Login">
                  <button type="button" class="btn btn-primary btn-lg"
                          style="  padding-left: 2.5rem; padding-right: 2.5rem;">Admin giriş
                  </button>
                </router-link>
              </div>
              <div class="m-4" style="justify-content: center;display: flex">
                <router-link to="/LoginStudent">
                  <button type="button" class="btn btn-primary btn-lg"
                          style="  padding-left: 2.5rem; padding-right: 2.5rem;">Öğrenci giriş
                  </button>
                </router-link>
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
  name: "LoginChoice"
}
</script>

<style scoped>

</style>