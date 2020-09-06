<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Dadaj klijenta</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">Ime:</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="klijent.ime"
            />
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Prezime:</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="klijent.prezime"
            />
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Kontakt:</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="klijent.kontakt"
            />
          </div>
        </div>
        <div class="footer">
          <button
            type="button"
            class="btn btn-success mr-5"
            @click="postKlijent()"
          >
            Sacuvaj
          </button>
          <button
            type="button"
            class="btn btn-secondary ml-5"
            @click="cancel()"
          >
            Odustani
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import klijentService from "../../services/klijent.service";
export default {
  data: function() {
    return {
      klijent: {
        ime: "",
        prezime: "",
        kontakt: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: "/klijent" });
    },
    postKlijent() {
      klijentService
        .postKlijent(this.klijent)
        .then((rez) => {
          this.$toastr.s("Klijent uspesno dodat.", "SUCCESS, Klijent dodat!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Greska pri dodavanju novog korisnika.",
            "ERROR. Neuspesno dodavanje."
          );
        });
      this.$router.push({ path: "/klijent" });
    },
  },
};
</script>

<style></style>
