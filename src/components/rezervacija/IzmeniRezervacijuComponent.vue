<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Izmeni rezervaciju</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">Teren</span>
            <select
              class="col-md-6 form-control"
              v-model="rezervacija.teren_id"
            >
              <option v-for="t in computedTereni" :key="t.id">
                {{ t.naziv }}
              </option>
            </select>
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Klijent</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="klijent.ime"
              disabled
            />
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Racun</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="racun.id"
              disabled
            />
          </div>
        </div>
        <div class="footer">
          <button type="button" class="btn btn-success mr-5" @click="izmeni">
            Izmeni
          </button>
          <button
            type="button"
            class="btn btn-secondary ml-5"
            @click="odustani"
          >
            Odustani
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rezervacijaService from "../../services/rezervacija.service";
import terenService from "../../services/teren.service";
import klijentService from "../../services/klijent.service";
import racunService from "../../services/racun.service";
export default {
  data: function() {
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
    };
  },
  methods: {
    izmeni() {
      rezervacijaService
        .editRezervacija(this.rezervacija, this.$route.params.id)
        .then((res) => {
          this.$toastr.s("Rezervacija je izmenjena", "Rezervacija izmenjena!");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e(err.message, "Greska");
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
  },
  created() {
    rezervacijaService
      .getRezervacijaById(this.$route.params.id)
      .then((res) => {
        this.rezervacija = res["data"];

        terenService
          .getAllTeren()
          .then((res) => {
            this.tereni = res["data"];

            klijentService
              .getById(this.rezervacija.klijent_id)
              .then((res) => {
                this.klijent = res["data"];

                racunService
                  .getById(this.rezervacija.racun_id)
                  .then((res) => {
                    this.racun = res["data"];
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
      })
      .catch((err) => {
        this.$toastr.e("Rezervacija ne postoji", "Greska!");
      });
  },
};
</script>
<style></style>
