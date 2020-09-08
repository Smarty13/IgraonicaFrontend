<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Brisanje grupe"
      hide-header-close
      hide-footer
    >
      <p>{{ grupa.naziv }}</p>
      <p>{{ grupa.klijent.ime }} {{ grupa.klijent.prezime }}</p>
      <p>{{ grupa.klijent.kontakt }}</p>
      <p>{{ grupa.opis }}</p>
      <b-button variant="danger " class="mr-3" @click="deleteGrupa()">OBRISI</b-button>
      <b-button variant="warning" @click="closeModal()">Ponisti</b-button>
    </b-modal>
  </div>
</template>
<script>
import grupaService from "../../services/grupa.service";
export default {
  props: ["showMe", "grupa"],
  data: function () {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    deleteGrupa() {
      grupaService
        .deleteGrupa(this.grupa.id)
        .then((rez) => {
          this.$toastr.s("Korisnik izbrisan", "SUCCESS. Korisnik izbrisan!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Grupa ne postoji.",
            "ERROR: 404 grupa nije pronadjena."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
