<template>
  <div class="row" style="height:100%">
    <div class="container">

      <h3 class="display-4 mb-5">Novi zaposleni</h3>
      <div class="container ml-3">
        <p>Ime: <input type="text" v-model="korisnik.ime"></p>
        <p>Prezime: <input type="text" v-model="korisnik.prezime"></p>
        <p>Email: <input type="text" v-model="korisnik.email"></p>
        <p>Password: <input type="password" v-model="korisnik.password"></p>
        <p>Confirm password: <input type="password" v-model="korisnik.confirmPassword"></p>
        <p>Broj telefona: <input type="text" v-model="korisnik.broj_telefona"></p>
        <p>JMBG: <input type="text" v-model="korisnik.jmbg"></p>
        <p>Pozicija:
          <select v-model="korisnik.pozicija_trenutna_id">
            <option v-for="p in computedPozicije" :key="p.id"
            v-bind:value="p.id"> {{p.naziv}} </option>
          </select>
        </p>
        <p>Lokacija: 
          <select v-model="korisnik.lokacija_trenutna_id">
            <option v-for="l in computedLokacije" :key="l.id"
            v-bind:value="l.id"> {{l.naziv}} </option>
          </select>
        </p>
        <button class="btn btn-success btn-large float-right mr-5" @click="callRegister">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from '../../services/authentication.service';
import pozicijaService from '../../services/pozicija.service';
import lokacijaService from '../../services/lokacija.service';

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
      },
      pozicije: [],
      lokacije: []
    }
  },
  methods: {
    callRegister: function () {
      if(this.korisnik.password === this.korisnik.confirmPassword){
        authenticationService.register(this.korisnik)
        .then((res) => {
          this.$toastr.s(`Zaposleni ${res.data.ime} ${res.data.prezime} dodat.`, "Zaposleni dodat!")
        })
        .catch((err)=> {
          this.$toastr.e(err.message, "Greška");
        });
      } else {
        this.$toastr.e("Šifra i potvrda šifre se ne slažu", "Greška!");
      }
    }
  },
  computed: {
    computedLokacije() {
      return this.lokacije;
    },
    computedPozicije() {
      return this.pozicije;
    }
  },
  created() {
    lokacijaService.getAllLokacija()
    .then((res) => {
      this.lokacije = res['data'];
      pozicijaService.getAllPozicija()
      .then((res) => {
        this.pozicije = res['data'];
      })
      .catch((err)=> {
        console.log(err);
      });
    })
    .catch((err)=> {
      console.log(err);
    });
  }

}
</script>

<style>

</style>