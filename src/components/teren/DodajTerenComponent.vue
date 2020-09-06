<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">

      <h3 class="display-4 mb-5">Dodaj Teren</h3>
      <div class="container">
        <div class="row mb-2">
          <span class="col-md-6">Naziv terena:</span>
          <input class="col-md-6 form-control" type="text" v-model="teren.naziv">
        </div>
    
        <div class="row mb-2">
          <span class="col-md-6">Sport: </span>
          <select class="col-md-6 form-control" v-model="teren.sport_id">
            <option v-for="p in computedSportovi" :key="p.id"
            v-bind:value="p.id"> {{p.naziv}} </option>
          </select>
        </div>

        <div class="row mb-2">
          <span class="col-md-6">Lokacija: </span>
          <select class="col-md-6 form-control" v-model="teren.lokacija_id">
            <option v-for="p in computedLokacije" :key="p.id"
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
import terenService from '../../services/teren.service';
import sportService from '../../services/sport.service';
import lokacijaService from '../../services/lokacija.service';
export default {
  data: function (){
    return {
      teren: {
        naziv: "",
        sport_id: "",
        lokacija_id: ""
      },
      sportovi: [],
      lokacije: []
    }
  },
  methods: {
        dodaj() {
            terenService.addTeren(this.teren)
            .then((res) => {
                this.$toastr.s ('Teren je dodat.', "Teren dodata!");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
                console.log(err);
            })
            this.$router.push('/tereni');
        },
        odustani() {
           this.$router.go(-1);
        }
  },
  computed: {
    computedSportovi() {
      return this.sportovi;
    },
    computedLokacije(){
        return this.lokacije;
    }
  },
  created() {
      sportService.getAllSport()
      .then((res) => {
        this.sportovi = res['data'];
      })
      .catch((err) => {
        console.log(err);
      });
      lokacijaService.getAllLokacija()
      .then((res) => {
          this.lokacije = res['data'];
      })
      .catch((err) => {
          console.log(err);
      });
  }
}
</script>

<style>
  
</style>