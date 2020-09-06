<template>
  <div>
    <div>
      <b-form-select v-model="selected" :options="gradovi"></b-form-select>
      <b-form-select
        v-model="selected"
        :options="lokacije"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <div class="mt-3">
        Selected:
        <strong>{{ selected }}</strong>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import userService from "../../services/user.service";
import gradService from "../../services/grad.service";
export default {
  data: function() {
    return {
      lokacije: [],
      gradovi: [],
      user: null,
    };
  },
  methods: {},
  created() {
    gradService
      .getAllGrad()
      .then((res) => {
        this.grad = res["data"];
        return this.grad;
      })
      .catch((err) => {
        console.log(err);
        this.$toastr.e("Error GET(All)GRAD!", "Greska u preuzimanju gradova!");
      });
  },
};
</script>

<style></style>
