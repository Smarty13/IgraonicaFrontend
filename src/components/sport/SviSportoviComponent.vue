<template>
  <div class="container">
    <p></p>
    <button class="btn btn-secondary" @click="dodajSport">Dodaj sport</button>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Naziv</th>
          <th scope="col">Cena po satu</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" (l, i) in computedSportovi" :key="l.id" @click="redirekcija(l.id)">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{l.naziv}}</td>
          <td>{{l.cena_po_satu}}din.</td>
          <td>
            <button class="btn btn-success btn-sm" @click="izmeniSport(l.id)">Izmeni</button>
            <button class="btn btn-danger btn-sm ml-1" @click="obrisiSport(l.id)">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import sportService from "../../services/sport.service";

export default {
  data: function () {
    return {
      sportovi: [],
    };
  },
  methods: {
    dodajSport() {
      this.$router.push("/dodajSport");
    },
    izmeniSport(id) {
      this.$router.push("/sportovi/edit/" + id);
    },
    obrisiSport(id) {
      sportService
        .deleteSport(id)
        .then((res) => {
          this.$toastr.s("Sport obrisan", "Brisanje uspesno");
          this.$router.push("/sportovi");
        })
        .catch((err) => {
          this.$toastr.e("Sport nije obrisan", "Brisanje neuspesno");
        });
    },
    redirekcija(id) {
      this.$router.push("/sportovi/" + id);
    },
  },
  created() {
    sportService
      .getAllSport()
      .then((res) => {
        this.sportovi = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedSportovi() {
      return this.sportovi;
    },
  },
};
</script>
<style>
</style>