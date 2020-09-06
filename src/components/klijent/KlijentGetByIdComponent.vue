<template>
  <div class="d-flex justify-content-center" style="height: 100%">
    <div class="card bg-dark mb-3" v-if="klijent">
      <div class="text-justify card-header text-warning">Klijent</div>
      <div class="card-body">
        <h5 class="card-title text-warning">
          {{ klijent.ime }} {{ klijent.prezime }}
        </h5>
        <p class="card-text text-white">Kontakt: {{ klijent.kontakt }}</p>
        <p class="card-text text-white">ID: {{ klijent.id }}</p>
        <a href="#" @click="showEditModal" class="btn btn-warning mr-5"
          >Izmeni</a
        >
        <a href="#" @click="showDeleteModal" class="btn btn-danger">Obrisi</a>
      </div>
      <div v-if="showEdit">
        <KlijentEditModal
          :showMe="showEdit"
          :klijent="klijent"
          @closeModal="hideModal()"
        />
      </div>
      <div v-if="showDelete">
        <KlijentDeleteModal
          :showMe="showDelete"
          :klijent="klijent"
          @closeModal="hideModalDelete()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import KlijentEditModal from "@/components/klijent/KlijentEditModalComponent.vue";
import KlijentDeleteModal from "@/components/klijent/KlijentDeleteModalComponent.vue";
import klijentService from "../../services/klijent.service";
export default {
  components: {
    KlijentEditModal,
    KlijentDeleteModal,
  },
  data: function() {
    return {
      showEdit: false,
      showDelete: false,
      klijent: null,
    };
  },
  methods: {
    showEditModal() {
      this.showEdit = true;
    },
    showDeleteModal() {
      this.showDelete = true;
    },
    hideModalDelete() {
      this.showDelete = false;
      this.$router.push({ path: "/klijent" });
    },
    hideModalEdit() {
      this.showEdit = false;
      this.$forceUpdate();
    },
  },
  created() {
    klijentService
      .getById(this.$route.params.id)
      .then((res) => {
        this.klijent = res["data"];
        return this.klijent;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
