<template>
  <div class="container">
    <p></p>
    <button class="btn btn-secondary" @click="dodajPoziciju">Dodaj poziciju</button>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Naziv pozicije</th>
          <th scope="col">Opcije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in computedPozicije" :key="p.id" @click="redirekcija(p.id)">
          <th scope="row">{{ p.id }}</th>
          <td>{{ p.naziv }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="izmeniPoziciju(p.id)">Izmeni</button>
            <button class="btn btn-danger btn-sm ml-1" @click="obrisiPoziciju(p.id)">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import pozicijaService from "../../services/pozicija.service";
export default {
  data: function () {
    return {
      pozicije: [],
      pozicija: {
        naziv: "",
      },
    };
  },
  methods: {
    dodajPoziciju() {
      this.$router.push("/pozicije/add");
    },
    izmeniPoziciju(id) {
      this.$router.push("/pozicije/edit/" + id);
    },
    obrisiPoziciju(id) {
      pozicijaService
        .deletePozicija(id)
        .then((res) => {
          this.$toastr.s("Pozicija obrisana", "Brisanje uspesno");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e("Pozicija nije obrisana", "Brisanje neuspesno");
        });
    },
    redirekcija(id) {
      this.$router.push("/pozicije/" + id);
    },
  },
  created() {
    pozicijaService
      .getAllPozicija()
      .then((res) => {
        this.pozicije = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedPozicije() {
      return this.pozicije;
    },
  },
};
</script>
<style>
</style>