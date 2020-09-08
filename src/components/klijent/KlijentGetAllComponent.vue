<template>
  <div class="container">
    <button class="btn btn-secondary mt-2 mb-2" @click="addKlijent">Dodaj klijenta</button>
    <table class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">IME</th>
          <th scope="col">PREZIME</th>
          <th scope="col">KONTAKT</th>
          <th scope="col">OPCIJE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(k, i) in computedKlijent" :key="k.id" @click="redirekcija(k.id)">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ k.ime }}</td>
          <td>{{ k.prezime }}</td>
          <td>{{ k.kontakt }}</td>
          <td>
            <button @click="showEditModal(k)" class="btn btn-warning mr-3">Izmeni</button>
            <button @click="showDeleteModal(k)" class="btn btn-danger">Obrisi</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showEdit">
      <KlijentEditModal :showMe="showEdit" :klijent="klijent" @closeModal="hideModal()" />
    </div>
    <div v-if="showDelete">
      <KlijentDeleteModal :showMe="showDelete" :klijent="klijent" @closeModal="hideModal()" />
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
  data: function () {
    return {
      showEdit: false,
      showDelete: false,
      klijenti: [],
      klijent: null,
    };
  },
  methods: {
    addKlijent() {
      this.$router.push("/klijent/add");
    },
    showEditModal(id) {
      this.klijent = id;
      this.showEdit = true;
    },
    showDeleteModal(id) {
      this.klijent = id;
      this.showDelete = true;
    },
    hideModal() {
      this.showEdit = false;
      this.showDelete = false;
      this.$forceUpdate();
    },
    redirekcija(id) {
      this.$router.push("/klijent/" + id);
    },
  },
  created() {
    klijentService
      .getAll()
      .then((res) => {
        this.klijenti = res["data"];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    computedKlijent() {
      return this.klijenti;
    },
  },
};
</script>
<style></style>
