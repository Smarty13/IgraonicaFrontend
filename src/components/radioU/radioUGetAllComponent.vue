<template>
  <div class="container">
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">OD</th>
          <th v-show="radio_do_switch" scope="col">DO</th>
          <th scope="col">LOKACJIA</th>
          <th scope="col">POZICIJA</th>
        </tr>
      </thead>
      <tbody class="text-warning">
        <tr v-for="(r, i) in computedRadio" :key="r.id">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ r.radio_od }}</td>
          <td v-show="radio_do_switch">{{ r.radio_do }}</td>
          <td>{{ r.lokacija.naziv }}</td>
          <td>{{ r.pozicija.naziv }}</td>
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
      radio_do_switch: false,
    };
  },
  methods: {},
  created() {
    radiioUService
      .getAllForUser(this.$route.params.id)
      .then((res) => {
        this.radio = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
    if (this.radio.radio_od == this.radio.radio_od) {
      this.$emit("EmploymentSetter", true);
    } else {
      this.radio_do_switch = true;
      this.$emit("EmploymentSetter", false);
    }
  },
  computed: {
    computedRadio() {
      return this.radio;
    },
  },
};
</script>
<style></style>
