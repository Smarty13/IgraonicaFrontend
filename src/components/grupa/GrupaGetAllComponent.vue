<template>
  <div class="container">
    <button class="btn btn-secondary" @click="addGrupa">Dodaj grupu</button>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAZIV</th>
          <th scope="col">IME</th>
          <th scope="col">PREZIME</th>
          <th scope="col">KONTAKT</th>
          <th scope="col">OPCIJE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(g, i) in computedGrupe" :key="g.id">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ g.naziv }}</td>
          <td>{{ g.klijent.ime }}</td>
          <td>{{ g.klijent.prezime }}</td>
          <td>{{ g.klijent.kontakt }}</td>

          <td>
            <button @click="showEditModal(r)" class="btn btn-warning mr-3">Izmeni</button>
            <button @click="showDeleteModal(r)" class="btn btn-danger">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showEdit">
      <GrupaEditModal :showMe="showEdit" :racun="racun" @closeModal="hideModal()" />
    </div>
    <div v-if="showDelete">
      <GrupaDeleteModal :showMe="showDelete" :racun="racun" @closeModal="hideModal()" />
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
      grupe: [],
      grupa: null,
    };
  },
  methods: {
    addGrupa() {
      this.$router.push("/grupa/add");
    },
    hideModal() {
      this.showEdit = false;
      this.showDelete = false;
      this.$forceUpdate();
    },
    showEditModal(id) {
      this.grupa = id;
      this.showEdit = true;
    },
    showDeleteModal(id) {
      this.grupa = id;
      this.showDelete = true;
    },
  },
  created() {
    grupaService
      .getAll()
      .then((res) => {
        this.grupe = res["data"];
      })
      .catch((err) => {
        this.$toastr("ERROR in getting data.", "Niz grupa nedostupan!");
        console.log(err);
      });
  },
  computed: {
    computedGrupe() {
      return this.grupe;
    },
  },
};
</script>
<style></style>
