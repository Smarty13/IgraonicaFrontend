<template>
  <div>
    <b-modal
      no-close-on-backdrop
      v-model="showMe"
      id="modal-1"
      title="Uredi korisnika"
      hide-header-close
      hide-footer
    >
      <b-form>
        <b-form-group id="input-group-1" label="Ime:" label-for="input-1">
          <b-form-input id="input-1" v-model="user.ime" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Prezime:" label-for="input-2">
          <b-form-input id="input-2" v-model="user.prezime" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="jmbg:" label-for="input-3">
          <b-form-input id="input-3" v-model="user.jmbg" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="email:" label-for="input-4">
          <b-form-input id="input-4" v-model="user.email" type="email" required></b-form-input>
        </b-form-group>
      </b-form>
      <b-button variant="primary " class="mr-3" @click="postModal()">Potvrdi</b-button>
      <b-button variant="warning" @click="closeModal()">Zatvori</b-button>
    </b-modal>
  </div>
</template>
<script>
import userService from "../../services/user.service";
export default {
  props: {
    showMe: Boolean,
    user: Object,
  },
  data: function () {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    postModal() {
      userService
        .putById(this.$route.params.id, this.user)
        .then((rez) => {
          this.$toastr.s("Korisnik izmenjen", "SUCCESS. Korisnik izmenjen!");
        })
        .catch((err) => {
          console.log(err);
          this.$toastr.e(
            "User with the given ID does not exist.",
            "ERROR: 404 user not found."
          );
        });
      this.$emit("closeModal");
    },
  },
};
</script>
