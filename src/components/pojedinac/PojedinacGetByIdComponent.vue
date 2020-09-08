<template>
  <div class="d-flex justify-content-center" style="height: 100%">
    <div class="card w-50 bg-dark mb-3" v-if="pojedinac">
      <div class="text-justify card-header text-warning">Grupa</div>
      <div class="card-body d-flex flex-column w-100 h-100">
        <h5
          class="card-title text-warning"
        >{{ pojedinac.klijent.prezime }} {{ pojedinac.klijent.ime }}</h5>
        <p class="card-text text-white text-align:center">Klijent</p>
        <p class="card-text text-white">JMBG: {{ pojedinac.jmbg}}</p>
        <p class="card-text text-white">Kontakt: {{ pojedinac.klijent.kontakt }}</p>
        <a href="#" @click="showEdit = true" class="btn btn-warning">Izmeni</a>
      </div>
    </div>
  </div>
</template>
<script>
import pojedinacService from "../../services/pojedinac.service";
export default {
  data: function () {
    return {
      showEdit: false,
      showDelete: false,
      pojedinac: null,
    };
  },
  created() {
    pojedinacService
      .getById(this.$route.params.id)
      .then((res) => {
        this.pojedinac = res["data"];
        return this.pojedinac;
      })
      .catch((err) => {
        console.log(err);
        this.$toastr.e(
          "Trazeni pojedinac ne postoji.",
          "ERROR 404 pojedinac not found!"
        );
      });
  },
};
</script>
