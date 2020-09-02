<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="card text-white bg-secondary mb-3 " style="max-width: 18rem;">
            <div class="card-body">
                <div>
                    <h5 class="card-title">Pice</h5>
                </div>
                <div>
                <h6 class="card-subtitle mb-2 text">{{ pice.Naziv_Pica }}</h6>
                <p class="card-text">{{ pice.Cena_Pica }}</p>
                </div>
                <button type="button" class="btn btn-dark mr-5" @click="zavrsi">U redu</button>
                
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
            },
            pica: []
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
            console.log(err);
            this.$toastr.e('Pice ne postoji', "Greska!");
        });
    }
}
</script>
<style>

</style>