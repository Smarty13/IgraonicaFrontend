<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="w-md-50">
            <div>
                <div class="header">
                    <h5 class="display-4 mb-5">Izmeni poziciju</h5>
                </div>
                <div class="body">
                    <div class="row mb-2">
                        <span class="col-md-6">Naziv pozicije</span>
                        <input class="col-md-6 form-control" type="text" v-model="pozicija.naziv">
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn btn-success mr-5" @click="izmeni">Izmeni</button>
                    <button type="button" class="btn btn-secodary ml-5" @click="odustani">Odustani</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pozicijaService from '../../services/pozicija.service'
export default {
    data: function(){
        return {
            pozicija: {
                naziv: ""
            }
        }
    },
    methods:{
        izmeni(){
            pozicijaService.editPozicija(this.pozicija, this.$route.params.id)
            .then((res) => {
                this.$toastr.s('Pozicija je izmenjena', "Pozicija izmenjena");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
            });
            this.$router.push('/pozicije');
        },
        odustani() {
            this.$router.go(-1);
        }
    },
    created() {
        pozicijaService.getPozicijaById(this.$route.params.id)
        .then((res) => {
            this.pozicija=res['data']
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
</script>
<style>

</style>