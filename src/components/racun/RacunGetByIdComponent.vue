<template>
  <div>
    <div class="d-flex justify-content-center" style="height: 100%">
      <div class="card bg-dark mb-3" v-if="racun">
        <div class="text-justify card-header text-warning">Klijent</div>
        <div class="card-body">
          <h5 class="card-title text-warning">Ukupno: {{ racun.ukupno }} RSD</h5>
          <p v-if="racun.placeno" class="card-text text-white">Racun placen</p>
          <p v-else class="card-text text-white">Racun nije placen</p>
          <p class="card-text text-white">
            Datum kreiranja: {{ racun.created_at }}
          </p>
          <a href="#" @click="showEditModal" class="btn btn-warning mr-5"
            >Izmeni</a
          >
          <a href="#" @click="showDeleteModal" class="btn btn-danger">Obrisi</a>
        </div>
        <div v-if="showEdit">
          <RacunEditModal
            :showMe="showEdit"
            :racun="racun"
            @closeModal="hideModalEdit()"
          />
        </div>
        <div v-if="showDelete">
          <RacunDeleteModal
            :showMe="showDelete"
            :racun="racun"
            @closeModal="hideModalDelete()"
          />
        </div>
      </div>
    </div>

    <PicaComponent />
  </div>
</template>
<script>
import RacunEditModal from "@/components/racun/RacunEditModalComponent.vue";
import RacunDeleteModal from "@/components/racun/RacunDeleteModalComponent.vue";
import racunService from "../../services/racun.service";

import PicaComponent from "./PicaComponent";

export default {
  components: {
    RacunEditModal,
    RacunDeleteModal,
    PicaComponent,
  },
  data: function() {
    return {
      showEdit: false,
      showDelete: false,
      racun: null,
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
      this.$router.push({ path: "/racun" });
    },
    hideModalEdit() {
      this.showEdit = false;
      this.$forceUpdate();
    },
  },
  created() {
    racunService
      .getById(this.$route.params.id)
      .then((res) => {
        this.racun = res["data"];
        return this.racun;
      })
      .catch((err) => {
        this.$toastr.e("Racun nije pronadjen!", "ERROR Bill not found.");
        console.log(err);
      });
  },
};
</script>
