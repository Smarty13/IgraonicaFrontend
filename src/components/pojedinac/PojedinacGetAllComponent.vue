<template>
  <div class="container">
    <button class="btn btn-secondary" @click="addPojedinac">Dodaj pojedinca</button>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">IME</th>
          <th scope="col">PREZIME</th>
          <th scope="col">KONTAKT</th>
          <th scope="col">JMBG</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in computedPojedinci" :key="p.id">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ p.klijent.ime }}</td>
          <td>{{ p.klijent.prezime }}</td>
          <td>{{ p.klijent.kontakt }}</td>
          <td>{{ p.jmbg }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import pojedinacService from "../../services/pojedinac.service";
export default {
  data: function () {
    return {
      pojedinci: [],
      pojedinac: null,
    };
  },
  methods: {
    addPojedinac() {
      this.$router.push("/pojedinac/add");
    },
  },
  created() {
    pojedinacService
      .getAll()
      .then((res) => {
        this.pojedinci = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedPojedinci() {
      return this.pojedinci;
    },
  },
};
</script>
<style></style>
