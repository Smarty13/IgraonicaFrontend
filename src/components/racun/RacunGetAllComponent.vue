<template>
  <div class="container">
    <button class="btn btn-secondary" @click="addRacun">Dodaj racun</button>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ukupno</th>
          <th scope="col">Placeno</th>
          <th scope="col">datum:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in computedRacuni" :key="r.id" @click="redirekcija(r.id)">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ r.ukupno }}</td>
          <td v-if="r.placeno">Placen</td>
          <td v-else>Nije placen</td>
          <td>{{ r.created_at }}</td>
          <td>
            <button @click="showEditModal(r)" class="btn btn-warning mr-3">Izmeni</button>
            <button @click="showDeleteModal(r)" class="btn btn-danger">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showEdit">
      <RacunEditModal :showMe="showEdit" :racun="racun" @closeModal="hideModal()" />
    </div>
    <div v-if="showDelete">
      <RacunDeleteModal :showMe="showDelete" :racun="racun" @closeModal="hideModal()" />
    </div>
  </div>
</template>

<script>
import RacunEditModal from "@/components/racun/RacunEditModalComponent.vue";
import RacunDeleteModal from "@/components/racun/RacunDeleteModalComponent.vue";
import racunService from "../../services/racun.service";
export default {
  components: {
    RacunEditModal,
    RacunDeleteModal,
  },
  data: function () {
    return {
      showEdit: false,
      showDelete: false,
      racuni: [],
      racun: null,
    };
  },
  methods: {
    addRacun() {
      this.$router.push("/racun/add");
    },
    hideModal() {
      this.showEdit = false;
      this.showDelete = false;
      this.$forceUpdate();
    },
    showEditModal(id) {
      this.racun = id;
      this.showEdit = true;
    },
    showDeleteModal(id) {
      this.racun = id;
      this.showDelete = true;
    },
    redirekcija(id) {
      this.$router.push("/racun/" + id);
    },
  },
  created() {
    racunService
      .getAll()
      .then((res) => {
        this.racuni = res["data"];
      })
      .catch((err) => {
        this.$toastr("ERROR in getting data.", "Niz racuna nedostupan!");
        console.log(err);
      });
  },
  computed: {
    computedRacuni() {
      return this.racuni;
    },
  },
};
</script>
<style></style>
