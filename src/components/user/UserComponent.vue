<template>
  <div class="d-flex justify-content-center" style="height: 100%">
    <div class="card bg-dark mb-3" v-if="user && lokacija && pozicija && grad">
      <div class="text-justify card-header text-warning">
        {{ user.prezime }} {{ user.ime }}
      </div>
      <div class="card-body">
        <h5 class="card-title text-warning">{{ pozicija.naziv }}</h5>
        <p class="card-text text-white">e-mail: {{ user.email }}</p>
        <p class="card-text text-white">
          verifikovan datuma: {{ user.email_verified_at }}
        </p>
        <p class="card-text text-white">lokacija: {{ lokacija.naziv }}</p>
        <p class="card-text text-white">deo grada: {{ lokacija.deo_grada }}</p>
        <p class="card-text text-white">grad: {{ grad.naziv }}</p>
        <p class="card-text text-white">telefon: {{ user.broj_telefona }}</p>
        <p class="card-text text-white">jmbg: {{ user.jmbg }}</p>
        <p class="card-text text-white">ID: {{ this.$route.params.id }}</p>
        <a href="#" @click="showModal = true" class="btn btn-warning mr-5"
          >Edit</a
        >
        <a href="#" class="btn btn-secondary">Fire</a>
      </div>
      <UserEditModal
        :showMe="showModal"
        :user="user"
        @closeModal="hideModal()"
      />
    </div>
  </div>
</template>
<script>
import UserEditModal from "@/components/user/UserEditModalComponent.vue";
import userService from "../../services/user.service";
import lokacijaService from "../../services/lokacija.service";
import gradService from "../../services/grad.service";
import pozicijaService from "../../services/pozicija.service";
import UserEditModalComponentVue from "./UserEditModalComponent.vue";
export default {
  components: {
    UserEditModal,
  },
  data: function () {
    return {
      showModal: false,
      user: null,
      lokacija: null,
      pozicija: null,
      grad: null,
    };
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
  },

  created() {
    userService.getUserById(this.$route.params.id).then((res) => {
      this.user = res["data"];

      lokacijaService
        .getLokacijaById(this.user.lokacija_trenutna_id)
        .then((res) => {
          this.lokacija = res["data"];
          gradService
            .getGradById(this.lokacija.grad_id)
            .then((res) => {
              this.grad = res["data"];
              return this.grad;
            })
            .catch((err) => {
              console.log(err);
              this.$toastr.e(
                "User with the given ID does not exist.",
                "ERROR: 404 user not found."
              );
            });
        })
        .catch((err) => {
          console.log(err);
        });
      pozicijaService
        .getPozicijaById(this.user.pozicija_trenutna_id)
        .then((res) => {
          this.pozicija = res["data"];
          return this.pozicija;
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "Pozicija sa unesenim ID-jem ne postoji.",
            "ERROR: 404 user not found."
          );
        });
    });
  },
};
</script>

<style></style>
