<template>
  <div class="container">
    <p></p>
    <button class="btn btn-secondary" @click="dodajPopust">Dodaj popust</button>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Oznaka popusta</th>
          <th scope="col">Vrednost popusta</th>
          <th scope="col">Opcije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in computedPopusti" :key="p.id" @click="redirekcija(p.id)">
          <th scope="row">{{ p.id }}</th>
          <td>{{ p.oznaka_popust }}</td>
          <td>{{ p.vrednost_popust }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="izmeniPopust(p.id)">Izmeni</button>
            <button class="btn btn-danger btn-sm ml-1" @click="obrisiPopust(p.id)">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import popustService from "../../services/popust.service";

export default {
  data: function () {
    return {
      popusti: [],
      popust: {
        oznaka_popust: "",
        vrednost_popust: "",
      },
    };
  },
  methods: {
    dodajPopust() {
      this.$router.push("/popusti/add");
    },
    izmeniPopust(id) {
      this.$router.push("popusti/edit/" + id);
    },
    obrisiPopust(id) {
      popustService
        .deletePopust(id)
        .then((res) => {
          this.$toastr.s("Popust obrisan", "Brisanje uspesno");
          this.$router.go("/");
        })
        .catch((err) => {
          this.$toastr.e("Popust nije obrisan", "Brisanje neuspesno");
        });
    },
    redirekcija(id) {
      this.$router.push("/popusti/" + id);
    },
  },
  created() {
    popustService
      .getAllPopusti()
      .then((res) => {
        this.popusti = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedPopusti() {
      return this.popusti;
    },
  },
};
</script>
<style>
</style>