<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Uredi klijentas"
      hide-header-close
      hide-footer
    >
      <b-form>
        <b-form-group id="input-group-1" label="Ime:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="$props.klijent.ime"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Prezime:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="$props.klijent.prezime"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="kontakt:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="$props.klijent.kontakt"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>
      <b-button variant="primary " class="mr-3" @click="postKlijent()"
        >Potvrdi</b-button
      >
      <b-button variant="warning" @click="closeModal()">Zatvori</b-button>
    </b-modal>
  </div>
</template>
<script>
import klijentService from "../../services/klijent.service";
export default {
  props: ["showMe", "klijent"],
  data: function() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    postKlijent() {
      klijentService
        .putKlijent(this.klijent.id, this.klijent)
        .then((rez) => {
          this.$toastr.s("Korisnik izmenjen", "SUCCESS. Korisnik izmenjen!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Client with the given ID does not exist.",
            "ERROR: 404 client not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
