<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">

      <h3 class="display-4 mb-5">Novi zaposleni</h3>
      <div class="container">
        <div class="row mb-2">
          <span class="col-md-6">Ime:</span>
          <input class="col-md-6 form-control" type="text" v-model="korisnik.ime">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Prezime:</span> 
          <input class="col-md-6 form-control" type="text" v-model="korisnik.prezime">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Email:</span> 
          <input class="col-md-6 form-control" type="email" v-model="korisnik.email">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Šifra:</span> 
          <input class="col-md-6 form-control" type="password" v-model="korisnik.password">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Potvrda šifre:</span> 
          <input class="col-md-6 form-control" type="password" v-model="korisnik.confirmPassword">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Broj telefona:</span> 
          <input class="col-md-6 form-control" type="text" v-model="korisnik.broj_telefona">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">JMBG:</span> 
          <input class="col-md-6 form-control" type="text" v-model="korisnik.jmbg">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Pozicija: </span>
          <select class="col-md-6 form-control" v-model="korisnik.pozicija_trenutna_id">
            <option v-for="p in computedPozicije" :key="p.id"
            v-bind:value="p.id"> {{p.naziv}} </option>
          </select>
        </div>
        <div class="row mb-5">
          <span class="col-md-6">Lokacija: </span>
          <select class="col-md-6 form-control" v-model="korisnik.lokacija_trenutna_id">
            <option v-for="l in computedLokacije" :key="l.id"
            v-bind:value="l.id"> {{l.naziv}}, {{l.grad.naziv}} </option>
          </select>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-success btn-large w-50" @click="callRegister">Register</button>
        </div>
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