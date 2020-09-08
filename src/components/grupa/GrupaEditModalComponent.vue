<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Uredi grupu"
      hide-header-close
      hide-footer
    >
      <b-form>
        <b-form-group id="input-group-1" label="Naziv:" label-for="input-1">
          <b-form-input
            id="input-1"
            label="naziv"
            v-model="$props.grupa.naziv"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Opis:" label-for="input-2">
          <b-form-textarea id="textarea" v-model="$props.grupa.opis" rows="3" max-rows="6" required></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-3" label="Klijent:" label-for="input-3">
          <p>Ime: {{$props.grupa.klijent.ime}}</p>
          <p>Prezime: {{$props.grupa.klijent.prezime}}</p>
          <p>kontakt: {{$props.grupa.klijent.kontakt}}</p>
        </b-form-group>
        <div>
          <b-button class="btn mb-2" @click="showModal=true">Izaberi klijenta</b-button>
        </div>
      </b-form>
      <b-button variant="primary " class="mr-3" @click="postGrupa">Potvrdi</b-button>
      <b-button variant="warning" @click="closeModalEdit">Zatvori</b-button>
    </b-modal>
    <div>
      <KlijentSelect :showMe="showModal" @closeModal="hideModalKlijenti" />
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
  props: ["showMe", "grupa"],
  data: function () {
    return {
      showModal: false,
      grupaData: {
        naziv: null,
        opis: null,
        klijent_id: null,
      },
      klijent: null,
    };
  },
  methods: {
    closeModalEdit() {
      this.$emit("closeModal");
    },
    hideModalKlijenti(selectedKlijent) {
      this.showModal = false;
      this.grupa.klijent_id = selectedKlijent.id;
      console.log("grupa logger", this.grupaData);
    },
    postGrupa() {
      grupaService
        .putGrupa(this.grupa.id, this.grupa)
        .then((rez) => {
          this.$toastr.s("Grupa izmenjena", "SUCCESS. grupa izmenjena!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Group with the given ID does not exist.",
            "ERROR: 404 group not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
