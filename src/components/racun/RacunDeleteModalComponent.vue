<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Brisanje racuna"
      hide-header-close
      hide-footer
    >
      <p>Ukupno:{{ racun.ukupno }} RSD</p>
      <p>Placeno:{{ racun.placeno }} RSD</p>
      <p>{{ racun.created_at }}</p>
      <b-button variant="danger " class="mr-3" @click="deleteRacun()"
        >OBRISI</b-button
      >
      <b-button variant="warning" @click="closeModal()">Ponisti</b-button>
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
    deleteRacun() {
      racunService
        .deleteRacun(this.racun.id)
        .then((rez) => {
          this.$toastr.s("Racun izbrisan", "SUCCESS. Racun izbrisan!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Billing with the given ID does not exist.",
            "ERROR: 404 bill not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
