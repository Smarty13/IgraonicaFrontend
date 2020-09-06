<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Dodaj rezervaciju</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">Teren</span>
            <select class="col-md-6 form-control" v-model="rezervacija.teren_id">
              <option v-for="t in computedTereni" :key="t.id" v-bind:value="t.id">{{t.naziv}}</option>
            </select>
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Klijent</span>
            <select class="col-md-6 form-control" v-model="rezervacija.klijent_id">
              <option
                v-for="k in computedKlijenti"
                :key="k.id"
                v-bind:value="k.id"
              >{{k.ime}} {{k.prezime}}</option>
            </select>
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Racun</span>
            <select class="col-md-6 form-control" v-model="rezervacija.racun_id">
              <option v-for="r in computedRacuni" :key="r.id" v-bind:value="r.id">{{r.id}}</option>
            </select>
          </div>
        </div>
        <div class="footer">
          <button type="button" class="btn btn-success mr-5" @click="dodaj">Sacuvaj</button>
          <button type="button" class="btn btn-secondary ml-5" @click="odustani">Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rezervacijaService from "../../services/rezervacija.service";
import klijentService from "../../services/klijent.service";
import terenService from "../../services/teren.service";
import racunService from "../../services/racun.service";
export default {
  data: function () {
    return {
      rezervacija: {
        teren_id: "",
        klijent_id: "",
        racun_id: "",
        created_at: "",
        updated_at: "",
      },
      teren: {
        naziv: "",
        sport_id: "",
        lokacija_id: "",
      },
      klijent: {
        ime: "",
        prezime: "",
        kontakt: "",
      },
      racun: {
        ukupno: "",
        placeno: "",
        created: "",
        updated_at: "",
      },
      tereni: [],
      racuni: [],
      klijenti: [],
    };
  },
  methods: {
    dodaj() {
      rezervacijaService
        .addRezervacija(this.rezervacija)
        .then((res) => {
          this.$toastr.s("Rezervacija je dodata", "Rezervacija dodata");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$$toastr.e(err.message, "Greska");
        });
      this.$router.push("/rezervacije");
    },
    odustani() {
      this.$router.go(-1);
    },
  },
  computed: {
    computedTereni() {
      return this.tereni;
    },
    computedKlijenti() {
      return this.klijenti;
    },
    computedRacuni() {
      return this.racuni;
    },
  },
  created() {
    terenService
      .getAllTeren()
      .then((res) => {
        this.tereni = res["data"];
        klijentService
          .getAll()
          .then((res) => {
            this.klijenti = res["data"];
            racunService
              .getAll()
              .then((res) => {
                this.racuni = res["data"];
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
</style>