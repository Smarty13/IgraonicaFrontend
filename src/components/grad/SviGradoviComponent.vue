<template>
  <div class="container">
    <p></p>
    <button class="btn btn-secondary" @click="dodajGrad">Dodaj grad</button>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Naziv</th>
          <th scope="col">Postanski kod</th>
          <th scope="col">Opcije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" (l, i) in computedGradovi" :key="l.id" @click="redirekcija(l.id)">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{l.naziv}}</td>
          <td>{{l.postanski_kod}}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="izmeniGrad(l.id)">Izmeni</button>
            <button class="btn btn-danger btn-sm ml-1" @click="obrisiGrad(l.id)">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import gradService from "../../services/grad.service";

export default {
  data: function () {
    return {
      gradovi: [],
    };
  },
  methods: {
    dodajGrad() {
      this.$router.push("/dodajGrad");
    },
    izmeniGrad(id) {
      this.$router.push("/gradovi/edit/" + id);
    },
    obrisiGrad(id) {
      gradService
        .deleteGrad(id)
        .then((res) => {
          this.$toastr.s("Grad obrisan", "Brisanje uspesno");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e("Grad nije obrisan", "Brisanje neuspesno");
        });
    },
    redirekcija(id) {
      this.$router.push("/gradovi/" + id);
    },
  },
  created() {
    gradService
      .getAllGrad()
      .then((res) => {
        this.gradovi = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedGradovi() {
      return this.gradovi;
    },
  },
};
</script>
<style>
</style>