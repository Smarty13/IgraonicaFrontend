<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="w-md-50">
            <div>
                <div class="header">
                    <h5 class="display-4 mb-5">Dodaj sport</h5>
                </div>
                <div class="body">
                    <div class="row mb-2">
                        <span class="col-md-6">Naziv sporta</span>
                        <input class="col-md-6 form-control" type="text" v-model="sport.naziv">
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
import sportService from '../../services/sport.service';
export default {
    data: function(){
        return{
            sport: {
                naziv: ""
            }
        }
    },
    methods:{
        dodaj() {
            sportService.addSport(this.sport)
            .then((res) => {
                this.$toastr.s ('Sport je dodat.', "Sport dodat!");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
            })
            this.$router.push('/sportovi');
        },
        odustani() {
           this.$router.go(-1);
        }
    }
}
</script>
<style>
</style>