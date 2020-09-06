<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div
      v-if="rezervacija!=null"
      class="card text-white bg-secondary mb-3"
      style="max-width: 18 rem;"
    >
      <div class="card-header">
        <div>
          <h5 class="card-title">Rezervacija</h5>
        </div>
      </div>
      <div class="card-body">
        <div>
          <h6 class="card-subtitle mb-2 text">Teren: {{ teren.naziv }}</h6>
          <p class="card-text">Sport: {{sport.naziv}}</p>
          <p class="card-text">Lokacija: {{lokacija.naziv}}</p>
          <p class="card-text">Adresa: {{lokacija.adresa}},</p>
          <p class="card-text">{{lokacija.deo_grada}}, {{grad.naziv}}</p>
          <p class="card-text">Klijent: {{klijent.ime}} {{klijent.prezime}}</p>
          <p class="card-text">Iznos racuna: {{racun.ukupno}}</p>
          <p class="card-text">Rezervacija kreirana: {{rezervacija.created_at}}</p>
          <p class="card-text">Rezervacija izmenjena: {{rezervacija.updated_at}}</p>
        </div>
      </div>
      <div class="card-footer">
        <div>
          <button type="button" class="btn btn-dark mr-5" @click="zavrsi">U redu</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rezervacijaService from "../../services/rezervacija.service";
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
      lokacija: {
        naziv: "",
        kvadratura: "",
        adresa: "",
        deo_grada: "",
        grad_id: "",
      },
      sport: {
        naziv: "",
      },
      grad: {
        naziv: "",
        postanski_kod: "",
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
    };
  },
  methods: {
    zavrsi() {
      this.$router.push("/rezervacije");
    },
  },
  created() {
    rezervacijaService
      .getRezervacijaById(this.$route.params.id)
      .then((res) => {
        this.rezervacija = res["data"];

        rezervacijaService
          .getTerenById(this.rezervacija.teren_id)
          .then((res) => {
            this.teren = res["data"];

            rezervacijaService
              .getLokacijaById(this.teren.lokacija_id)
              .then((res) => {
                this.lokacija = res["data"];

                rezervacijaService
                  .getGradById(this.lokacija.grad_id)
                  .then((res) => {
                    this.grad = res["data"];
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });

            rezervacijaService
              .getSportById(this.teren.sport_id)
              .then((res) => {
                this.sport = res["data"];
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

        rezervacijaService
          .getKlijentById(this.rezervacija.klijent_id)
          .then((res) => {
            this.klijent = res["data"];
          })
          .catch((err) => {
            console.log(err);
          });

        rezervacijaService
          .getRacunById(this.rezervacija.racun_id)
          .then((res) => {
            this.racun = res["data"];
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        this.$toastr.e("Rezervacija ne postoji", "Greska!");
      });
  },
};
</script>
<style>
</style>