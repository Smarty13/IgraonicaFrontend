<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Brisanje klijenta"
      hide-header-close
      hide-footer
    >
      <p>{{ klijent.ime }} {{ klijent.prezime }}</p>
      <p>{{ klijent.kontakt }}</p>
      <b-button variant="danger " class="mr-3" @click="deleteKlijent()"
        >OBRISI</b-button
      >
      <b-button variant="warning" @click="closeModal()">Ponisti</b-button>
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
    deleteKlijent() {
      klijentService
        .deleteKlijent(this.klijent.id)
        .then((rez) => {
          this.$toastr.s("Korisnik izbrisan", "SUCCESS. Korisnik izbrisan!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "User with the given ID does not exist.",
            "ERROR: 404 user not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
