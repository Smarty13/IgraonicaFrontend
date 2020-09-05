<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div v-if="pice!=null" class="card text-white bg-secondary mb-3 " style="max-width: 18rem;">
            <div class="cerd-header">
                <div>
                    <h5 class="card-title">Pice</h5>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h6 class="card-subtitle mb-2 text">{{ pice.Naziv_Pica }}</h6>
                    <p class="card-text">{{ pice.Cena_Pica }}</p>
                </div>
            </div>
            <div class="card-footer">
                <div>
                    <button type="button" class="btn btn-dark mr-5" @click="zavrsi">U redu</button>
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
        zavrsi(){
            this.$router.push('/pica');
        }
    },
   created() {
        piceService.getPiceById(this.$route.params.id)
        .then((res) => {
            this.pice = res['data'];
        })
        .catch((err) => {
            this.$toastr.e('Pice ne postoji', "Greska!");
        });
    }
}
</script>
<style>

</style>