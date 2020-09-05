<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">

      <h3 class="display-4 mb-5">Dodaj Lokaciju</h3>
      <div class="container">
        <div class="row mb-2">
          <span class="col-md-6">Naziv lokacije:</span>
          <input class="col-md-6 form-control" type="text" v-model="lokacija.naziv">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Kvadratura:</span> 
          <input class="col-md-6 form-control" type="text" v-model="lokacija.kvadratura">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Adresa:</span> 
          <input class="col-md-6 form-control" type="text" v-model="lokacija.adresa">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Deo grada:</span> 
          <input class="col-md-6 form-control" type="text" v-model="lokacija.deo_grada">
        </div>
    
        <div class="row mb-2">
          <span class="col-md-6">Grad: </span>
          <select class="col-md-6 form-control" v-model="lokacija.grad_id">
            <option v-for="p in computedGradovi" :key="p.id"
            v-bind:value="p.id"> {{p.naziv}} </option>
          </select>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success mr-5"  @click="dodaj">Sacuvaj</button>
            <button type="button" class="btn btn-secondary ml-5" @click="odustani">Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lokacijaService from '../../services/lokacija.service';
import gradService from '../../services/grad.service';
export default {
  data: function (){
    return {
      lokacija: {
        naziv: "",
        kvadratura: "",
        adresa: "",
        deo_grada: "",
        grad_id: ""
      },
      gradovi: []
    }
  },
  methods: {
        dodaj() {
            lokacijaService.addLokacija(this.lokacija)
            .then((res) => {
                this.$toastr.s ('Lokacija je dodata.', "Lokacija dodata!");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
                console.log(err);
            })
            this.$router.push('/lokacije');
        },
        odustani() {
           this.$router.go(-1);
        }
  },
  computed: {
    computedGradovi() {
      return this.gradovi;
    }
  },
  created() {
      gradService.getAllGrad()
      .then((res) => {
        this.gradovi = res['data'];
      })
      .catch((err)=> {
        console.log(err);
      });
  }
}
</script>

<style>
  
</style>