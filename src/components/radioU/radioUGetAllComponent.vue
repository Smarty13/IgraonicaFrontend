<template>
  <div class="container">
    <p></p>
    <p></p>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">od:</th>
          <th scope="col">do</th>
          <th scope="col">ime</th>
          <th scope="col">prezime</th>
          <th scope="col">pozicija</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in computedRadio" :key="r.id">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ r.radio_od }}</td>
          <td>{{ r.radio_do }}</td>
          <td>{{ r.user.ime }}</td>
          <td>{{ r.user.prezime }}</td>
          <td>{{ r.pozicija.naziv }}m</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import radiioUService from "../../services/radioU.service";
export default {
  data: function () {
    return {
      radio: [],
    };
  },
  methods: {},
  created() {
    radiioUService
      .getAll()
      .then((res) => {
        this.radio = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedRadio() {
      return this.radio;
    },
  },
};
</script>
<style></style>
