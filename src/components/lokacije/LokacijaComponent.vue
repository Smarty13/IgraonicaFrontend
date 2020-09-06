<template>
  <div v-if="lokacija && grad" class="card">
    <div class="card-header">ID lokacija: {{ this.$route.params.id }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ lokacija.naziv }}</h5>
      <p class="card-text">adresa: {{ lokacija.adresa }}</p>
      <p class="card-text">Deo Grada: {{ lokacija.deo_grada }}</p>
      <p class="card-text">Grad: {{ grad.naziv }}</p>
      <p class="card-text">Kvadratura: {{ lokacija.kvadratura }}</p>

      <a href="#" class="btn btn-primary" @click="izmeniLokaciju(lokacija.id)"
        >Izmeni</a
      >
      <a href="#" class="btn btn-warning" @click="obrisiLokaciju(lokacija.id)"
        >Fire</a
      >
    </div>
  </div>
</template>
<script>
import lokacijaService from "../../services/lokacija.service";
import gradService from "../../services/grad.service";

export default {
  data: function() {
    return {
      lokacija: null,
      grad: null,
    };
  },
  methods: {
    izmeniLokaciju(id) {},
    obrisiLokaciju(id) {
      lokacijaService
        .deleteLokacija(id)
        .then((res) => {
          this.$toastr.s("Lokacija obrisana", "Brisanje uspesno");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e("Lokacija nije obrisana", "Brisanje neuspesno");
        });
    },
    zavrsi() {
      this.$router.push("/lokacije");
    },
  },
  created() {
    lokacijaService
      .getLokacijaById(this.$route.params.id)
      .then((res) => {
        this.lokacija = res["data"];
        gradService
          .getGradById(this.lokacija.grad_id)
          .then((res) => {
            this.grad = res["data"];
            return this.grad;
          })
          .catch((err) => {
            console.log(err);
            this.$toastr.e("Grad nije pronadjen", "Greska!");
          });
      })
      .catch((err) => {
        this.$toastr.e("Lokacija ne postoji", "Greska!");
        console.log(err);
      });
  },
};
</script>
<style></style>
