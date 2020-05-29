<template>
  <div>
      <h3>Register</h3>
      <p>Ime: <input type="text" v-model="korisnik.ime"></p>
      <p>Prezime: <input type="text" v-model="korisnik.prezime"></p>
      <p>Email: <input type="text" v-model="korisnik.email"></p>
      <p>Password: <input type="password" v-model="korisnik.password"></p>
      <p>Confirm password: <input type="password" v-model="korisnik.confirmPassword"></p>
      <p>Broj telefona: <input type="text" v-model="korisnik.broj_telefona"></p>
      <p>JMBG: <input type="text" v-model="korisnik.jmbg"></p>
      <p>pozicija_trenutna_id: <input type="text" v-model="korisnik.pozicija_trenutna_id"></p>
      <p>lokacija_trenutna_id: <input type="text" v-model="korisnik.lokacija_trenutna_id"></p>
      <button class="btn btn-success btn-large" @click="callRegister">Register</button>



  </div>
</template>

<script>
import authenticationService from '../../services/authentication.service';

export default {
  data: function (){
    return {
      korisnik: {
        ime: "Test",
        prezime: "Testic",
        email: "test@gmail.com",
        password: "password",
        confirmPassword: "password",
        broj_telefona: "066666",
        jmbg: "2134123123",
        pozicija_trenutna_id: 1,
        lokacija_trenutna_id: 1
      }
    }
  },
  methods: {
    callRegister: function () {
      authenticationService.register(this.korisnik)
      .then((res) => {
        console.log(res);
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