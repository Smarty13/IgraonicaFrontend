<template>
  <div class="d-flex justify-content-center" style="height: 100%">
    <div class="card bg-dark mb-3" v-if="user && grad">
      <div class="text-justify card-header text-warning">{{ user.prezime }} {{ user.ime }}</div>
      <div v-if="setEmployment" class="card-body">
        <h5 class="card-title text-warning">{{ user.pozicija.naziv }}</h5>
        <p class="card-text text-white">e-mail: {{ user.email }}</p>
        <p class="card-text text-white">verifikovan datuma: {{ user.email_verified_at }}</p>
        <p class="card-text text-white">lokacija: {{ user.lokacija.naziv }}</p>
        <p class="card-text text-white">deo grada: {{ user.lokacija.deo_grada }}</p>
        <p class="card-text text-white">grad: {{ grad.naziv }}</p>
        <p class="card-text text-white">telefon: {{ user.broj_telefona }}</p>
        <p class="card-text text-white">JMBG: {{ user.jmbg }}</p>
        <p class="card-text text-white">ID: {{ user.id }}</p>
        <a href="#" @click="showModal = true" class="btn btn-warning mr-5">Edit</a>
        <a href="#" @click="fireUser" class="btn btn-secondary">Fire</a>
      </div>
      <div v-else class="card-body">
        <h5 class="card-title text-warning">Otpušten</h5>
        <p class="card-text text-white">e-mail: {{ user.email }}</p>
        <p class="card-text text-white">grad: {{ grad.naziv }}</p>
        <p class="card-text text-white">telefon: {{ user.broj_telefona }}</p>
        <p class="card-text text-white">JMBG: {{ user.jmbg }}</p>
        <p class="card-text text-white">ID: {{ user.id }}</p>
        <a href="#" @click="showModal = true" class="btn btn-warning mr-5">Zaposli</a>
      </div>

      <RadioU @EmploymentSetter="employment" />
      <UserEditModal :showMe="showModal" :user="user" @closeModal="hideModal()" />
    </div>
  </div>
</template>
<script>
import UserEditModal from "@/components/user/UserEditModalComponent.vue";
import RadioU from "@/components/radioU/radioUGetAllComponent.vue";

import radiioUService from "../../services/radioU.service";
import userService from "../../services/user.service";
import gradService from "../../services/grad.service";

import UserEditModalComponentVue from "./UserEditModalComponent.vue";
export default {
  components: {
    UserEditModal,
    RadioU,
  },
  data: function () {
    return {
      showModal: false,
      setEmployment: true,
      user: null,
      grad: null,
    };
  },
  methods: {
    fireUser() {},
    employment(set) {
      this.setEmployment = set;
    },
    hideModal() {
      this.showModal = false;
    },
  },

  created() {
    userService
      .getUserById(this.$route.params.id)
      .then((res) => {
        this.user = res["data"];
        gradService
          .getGradById(this.user.lokacija.grad_id)
          .then((res) => {
            this.grad = res["data"];
            return this.grad;
          })
          .catch((err) => {
            console.log(err);
            this.$toastr.e("Grad ne postoji.", "ERROR: 404 grad not found.");
          });
      })
      .catch((err) => {
        console.log(err);
        this.$toastr.e(
          "User with the given ID does not exist.",
          "ERROR: 404 user not found."
        );
      });
  },
};
</script>

<style></style>
