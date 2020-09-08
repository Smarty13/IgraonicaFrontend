<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">
      <div>
        <div class="header">
          <h5 class="display-4 mb-5">Dadaj racun</h5>
        </div>
        <div class="body">
          <div class="row mb-2">
            <span class="col-md-6">Ukuno:</span>
            <input
              class="col-md-6 form-control"
              type="text"
              v-model="racun.ukupno"
            />
          </div>
          <div class="row mb-2">
            <span class="col-md-6">Racun placen:</span>
            <b-form-checkbox
              id="checkbox-1"
              v-model="racun.placeno"
              name="checkbox-1"
              value="1"
              unchecked-value="0"
            >
              Racun placen
            </b-form-checkbox>
          </div>
        </div>
        <div class="footer">
          <button
            type="button"
            class="btn btn-success mr-5"
            @click="postRacun()"
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
import racunService from "../../services/racun.service";
export default {
  data: function() {
    return {
      racun: {
        ukupno: 0,
        placeno: false
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: "/racun" });
    },
    postRacun() {
      racunService
        .postRacun(this.racun)
        .then((rez) => {
          this.$toastr.s("Racun uspesno dodat.", "SUCCESS, Racun dodat!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Greska pri dodavanju novog racuna.",
            "ERROR. Neuspesno dodavanje."
          );
        });
      this.$router.push({ path: "/racun" });
    },
  },
};
</script>

<style></style>
