<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Uredi racun"
      hide-header-close
      hide-footer
    >
      <b-form>
        <b-form-group id="input-group-1" label="ukupno:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="this.racun.ukupno"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="placeno:" label-for="input-2">
          <b-form-checkbox
            id="checkbox-1"
            v-model="$props.racun.placeno"
            name="checkbox-1"
            value="1"
            unchecked-value="0"
          >
            Racun placen
          </b-form-checkbox>
        </b-form-group>
      </b-form>
      <b-button variant="primary " class="mr-3" @click="postRacun()"
        >Potvrdi</b-button
      >
      <b-button variant="warning" @click="closeModal()">Zatvori</b-button>
    </b-modal>
  </div>
</template>
<script>
import racunService from "../../services/racun.service";
export default {
  props: ["showMe", "racun"],
  data: function() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    postRacun() {
      racunService
        .putRacun(this.racun.id, this.racun)
        .then((rez) => {
          this.$toastr.s("Racun izmenjen", "SUCCESS. Racun izmenjen!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Racun with the given ID does not exist.",
            "ERROR: 404 racun not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
