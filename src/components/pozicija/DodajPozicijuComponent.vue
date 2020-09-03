<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="w-md-50">
            <div>
                <h5 class="display-4 mb-5">Dodaj poziciju</h5>
            </div>
            <div class="body">
                <div class="row mb-2">
                    <span class="col-md-6">Naziv pozicije</span>
                    <input class="col-md-6 form-control" type="text" v-model="pozicija.naziv">
                </div>
            </div>
            <div class="footer">
                <button type="button" class="btn btn-success mr-5" @click="dodaj">Sacuvaj</button>
                <button type="button" class="btn btn-secondary ml-5">Odustani</button>
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
    methods: {
        dodaj() {
            pozicijaService.addPozicija(this.pozicija)
            .then((res) => {
                this.$toastr.s('Pozicija je dodata', "Pozicija odata");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message,"Greska");
            })
            this.$router.push('/pozicije');
        },
        odustati(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>