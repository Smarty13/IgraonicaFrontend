<template>
  <div>
      <h3>Login</h3>
      <p>Email: <input type="text" v-model="korisnik.email"></p>
      <p>Password: <input type="password" v-model="korisnik.password"></p>
      <button class="btn btn-success btn-large" @click="callLogin">Login</button>

  </div>
</template>

<script>
import authenticationService from '../../services/authentication.service';
export default {
  data: function () {
    return {
      korisnik: {
        email: 'test@gmail.com',
        password: 'password'
      }
    }
  },

  methods: {
    callLogin: function () {
      authenticationService.login(this.korisnik)
      .then((res)=> {
        authenticationService.setToken(res['data']['access_token']);
        authenticationService.setUser(res['data']['user']);
        this.$router.push('/');
      })
      .catch((err)=> {
        console.log(err);
      })
    }
  }
}


</script>

<style>

</style>