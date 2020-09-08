<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Dadaj pojedinca</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">JMBG:</span>
            <input class="col-md-6 form-control" type="text" v-model="pojedinac.jmbg" />
          </div>
          <div>
            <b-button class="btn mb-2" @click="showModal=true">Izaberi klijenta</b-button>
          </div>
          <div v-if="klijent">
            <p>Ime: {{klijent.ime}}</p>
            <p>Prezime: {{klijent.prezime}}</p>
            <p>kontakt: {{klijent.kontakt}}</p>
          </div>
          <div>
            <KlijentSelect :showMe="showModal" @closeModal="hideModalKlijenti" />
          </div>
        </div>
        <div class="footer">
          <button type="button" class="btn btn-success mr-5" @click="postPojedinac()">Sacuvaj</button>
          <button type="button" class="btn btn-secondary ml-5" @click="cancel()">Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pojedinacService from "../../services/pojedinac.service";
import KlijentSelect from "@/components/klijent/KlijentSelectModalComponent.vue";
export default {
  components: {
    KlijentSelect,
  },
  data: function () {
    return {
      pojedinac: {
        jmbg: "",
        klijent_id: null,
      },
      klijent: null,
      showModal: false,
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: "/pojedinac" });
    },
    hideModalKlijenti(selectedKlijent) {
      this.showModal = false;
      this.klijent = selectedKlijent;
      this.pojedinac.klijent_id = selectedKlijent.id;
    },
    postPojedinac() {
      pojedinacService
        .postPojedinac(this.pojedinac)
        .then((rez) => {
          this.$toastr.s(
            "Pojedinac uspesno dodat.",
            "SUCCESS, Pojedinac dodat!"
          );
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Greska pri dodavanju novog pojedinca.",
            "ERROR. Neuspesno dodavanje."
          );
        });
      this.$router.push({ path: "/pojedinac" });
    },
  },
};
</script>

<style></style>
