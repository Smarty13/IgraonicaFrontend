<template>
  <div class="d-flex justify-content-center" style="height: 100%">
    <div class="card w-50 bg-dark mb-3" v-if="grupa">
      <div class="text-justify card-header text-warning">Grupa</div>
      <div :key="reRenderKey" class="card-body d-flex flex-column w-100 h-100">
        <h5 class="card-title text-warning">{{ grupa.naziv }}</h5>
        <b-form-textarea
          id="textarea"
          class="mb-2"
          v-model="grupa.opis"
          rows="3"
          max-rows="8"
          disabled
        ></b-form-textarea>
        <p class="card-text text-white text-align:center">Klijent</p>
        <p class="card-text text-white">Ime: {{ grupa.klijent.ime }}</p>
        <p class="card-text text-white">Prezime: {{ grupa.klijent.prezime }}</p>
        <p class="card-text text-white">Kontakt: {{ grupa.klijent.kontakt }}</p>
        <a href="#" @click="showEdit = true" class="btn btn-warning">Izmeni</a>
        <a href="#" @click="showDelete = true" class="btn mt-auto btn-danger">Obrisi</a>
      </div>
      <div v-if="showEdit">
        <GrupaEditModal :showMe="showEdit" :grupa="grupa" @closeModal="hideModalEdit" />
      </div>
      <div v-if="showDelete">
        <GrupaDeleteModal :showMe="showDelete" :grupa="grupa" @closeModal="hideModalDelete" />
      </div>
    </div>
  </div>
</template>
<script>
import GrupaEditModal from "@/components/grupa/GrupaEditModalComponent.vue";
import GrupaDeleteModal from "@/components/grupa/GrupaDeleteModalComponent.vue";
import grupaService from "../../services/grupa.service";
export default {
  components: {
    GrupaEditModal,
    GrupaDeleteModal,
  },
  data: function () {
    return {
      showEdit: false,
      showDelete: false,
      grupa: null,
      reRenderKey: 0,
    };
  },
  methods: {
    hideModalDelete() {
      this.showDelete = false;
      this.$router.push({ path: "/grupa" });
    },
    hideModalEdit() {
      this.showEdit = false;
      this.$forceUpdate();
    },
  },
  created() {
    grupaService
      .getById(this.$route.params.id)
      .then((res) => {
        this.grupa = res["data"];
        return this.grupa;
      })
      .catch((err) => {
        console.log(err);
        this.$toastr.e(
          "Trazena grupa ne postoji.",
          "ERROR 404 group not found!"
        );
      });
  },
};
</script>
