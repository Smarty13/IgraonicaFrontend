<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Dadaj grupu</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">Naziv:</span>
            <input class="col-md-6 form-control" type="text" v-model="grupa.naziv" />
          </div>
          <div class="row mb-2">
            <b-form-textarea
              id="textarea"
              v-model="grupa.opis"
              placeholder="Unesite opis..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
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
          <button type="button" class="btn btn-success mr-5" @click="postGrupa()">Sacuvaj</button>
          <button type="button" class="btn btn-secondary ml-5" @click="cancel()">Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import grupaService from "../../services/grupa.service";
import KlijentSelect from "@/components/klijent/KlijentSelectModalComponent.vue";
export default {
  components: {
    KlijentSelect,
  },
  data: function () {
    return {
      grupa: {
        naziv: "",
        opis: "",
        klijent_id: null,
      },
      klijent: null,
      showModal: false,
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: "/grupa" });
    },
    hideModalKlijenti(selectedKlijent) {
      this.showModal = false;
      this.klijent = selectedKlijent;
      this.grupa.klijent_id = selectedKlijent.id;
    },
    postGrupa() {
      grupaService
        .postGrupa(this.grupa)
        .then((rez) => {
          this.$toastr.s("Grupa uspesno dodata.", "SUCCESS, Grupa dodata!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Greska pri dodavanju nove grupe.",
            "ERROR. Neuspesno dodavanje."
          );
        });
      this.$router.push({ path: "/grupa" });
    },
  },
};
</script>

<style></style>
