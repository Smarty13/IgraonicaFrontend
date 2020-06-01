<template>
  <div class="d-flex justify-content-center">
      <div class="">
        <h3 class="display-4 mb-5">Prijava</h3>
        <div class="">
          <div class="mb-2">
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
              <span class=""> Email: </span>
              <div><input type="text" class=" form-control" v-model="korisnik.email"></div>
              <div><span class="alert alert-danger float-right w-100" v-show="errors[0]"> {{ errors[0] }} </span></div>
            </ValidationProvider>
          </div>
          <div class="mb-5">
            <ValidationProvider name="password" rules="required" v-slot="{ errors }">
              <span> Sifra: </span>
              <input type="password" class=" form-control"
              v-model="korisnik.password">
              <div><span class="alert alert-danger float-right w-100 mb-5" v-show="errors[0]"> {{ errors[0] }} </span></div>
            </ValidationProvider>
          </div>
          <div class="mt-1 container">
            <div class="float-right">
              <button class="btn btn-success btn-large" @click="callLogin">Login</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import authenticationService from '../../services/authentication.service';
export default {
  data: function () {
    return {
      korisnik: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    callLogin: function () {
      authenticationService.login(this.korisnik)
      .then((res)=> {
        authenticationService.setToken(res['data']['access_token']);
        this.$router.go('/');
      })
      .catch((err)=> {
        console.log(err);
      })
    }
  }
}


</script>

<style>
.form-control {
  width: 500px
}
</style>