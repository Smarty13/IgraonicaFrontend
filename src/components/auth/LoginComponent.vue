<template>
  <div>
      <h3>Login</h3>
      <p>Email: <input type="text" v-model="korisnik.email"></p>
      <p>Password: <input type="password" v-model="korisnik.password"></p>
      <button @click="callLogin">Login</button>

  </div>
</template>

<script>
import loginService from '../../services/authentication.service';
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
      loginService.login(this.korisnik)
      .then((res)=> {
        loginService.setToken(res['data']['access_token']);
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

</style>