<template>
  <div class="d-flex justify-content-center" style="height:100%">
    <div class="w-md-50">

      <h3 class="display-4 mb-5">Novo Pice</h3>
      <div class="container">
        <div class="row mb-2">
          <span class="col-md-6">Naziv pica:</span>
          <input class="col-md-6 form-control" type="text" v-model="pice.Naziv_Pica">
        </div>
        <div class="row mb-2">
          <span class="col-md-6">Cena pica:</span> 
          <input class="col-md-6 form-control" type="text" v-model="pice.Cena_Pica">
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-success btn-large w-50" @click="callCreatePice">Dodaj Pice</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import piceService from '../../services/pice.service';
export default {
  data: function () {
    return {
      pice: {
        Naziv_Pica: 'Test',
        Cena_Pica: '100'
      }
    }
  },

  methods: {
    callCreatePice: function () {
      piceService.createPice(this.pice)
        .then((res) => {
          this.$toastr.s(`${res.data.Naziv_Pica} dodat.`, "Pice dodato!")
        })
        .catch((err)=> {
          this.$toastr.e(err.message, "Greška");
        });
    }
  }
}


</script>
