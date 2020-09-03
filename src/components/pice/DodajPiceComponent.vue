<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="w-md-50">
            <div>
                <div class="header">
                    <h5 class="display-4 mb-5">Dadaj pice</h5>
                </div>
                <div class="body">
                    <div class="row mb-2">
                        <span class="col-md-6">Naziv pica</span>
                        <input class="col-md-6 form-control" type="text" v-model="pice.Naziv_Pica">
                    </div>
                    <div class="row mb-2">
                        <span class="col-md-6">Cena pica</span> 
                        <input class="col-md-6 form-control" type="number" v-model="pice.Cena_Pica">
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn btn-success mr-5"  @click="dodaj">Sacuvaj</button>
                    <button type="button" class="btn btn-secondary ml-5" @click="odustani">Odustani</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import piceService from '../../services/pice.service';

export default {
    data: function(){
        return{
            pice: {
                Naziv_Pica: "",
                Cena_Pica: ""
            }
        }
    },
    methods:{
        dodaj() {
            piceService.addPice(this.pice)
            .then((res) => {
                this.$toastr.s ('Pice ${res.data.Naziv_Pica} je dodato.', "Pice dodato!");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
            })
            this.$router.push('/pica');
        },
        odustani() {
           this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>