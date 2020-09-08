<template>
  <div>
    <b-modal no-close-on-backdrop hide-header size="xl" hide-footer v-model="showMe">
      <div class="row">
        <b-form-input class="mx-5 my-3" v-model="search" placeholder="Pretraga klijenata"></b-form-input>
        <h5 v-for="(k) in filteredClients" :key="k.id" class="card ml-2" style="width: 17rem;">
          <div
            v-if="stringContains(k.ime, search) || stringContains(k.prezime, search)"
            class="d-flex flex-column card-body"
          >
            <h5 class="card-title">{{k.ime}} {{k.prezime}}</h5>
            <p class="card-text">{{k.kontakt}}</p>
            <a href="#" class="btn btn-primary mt-auto" @click="returnKlijent(k)">Potvrdi</a>
          </div>
        </h5>
      </div>
    </b-modal>
  </div>
</template>
<script>
import klijentService from "../../services/klijent.service";
export default {
  props: ["showMe"],
  data: function () {
    return {
      klijenti: [],
      show: false,
      search: "",
    };
  },
  methods: {
    stringContains(string, substring) {
      return string.includes(substring);
    },
    returnKlijent(kl) {
      this.$emit("closeModal", kl);
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
    filteredClients() {
      return this.klijenti.filter((klijent) => {
        return klijent.ime.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style scoped>
</style>