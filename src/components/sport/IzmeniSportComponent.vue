<template>
    <div class="d-flex justify-content-center" style="height:100%">
        <div class="w-md-50">
            <div>
                <div class="header">
                    <h5 class="display-4 mb-5">Izmeni sport</h5>
                </div>
                <div class="body">
                    <div class="row mb-2">
                        <span class="col-md-6">Naziv sporta</span>
                        <input class="col-md-6 form-control" type="text" v-model="sport.naziv">
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn btn-success mr-5"  @click="izmeni">Sacuvaj</button>
                    <button type="button" class="btn btn-secondary ml-5" @click="odustani">Odustani</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sportService from '../../services/sport.service';
import sviSportovi from '../../components/sport/SviSportoviComponent';
export default {
    data: function(){
        return{
            sport: {
                naziv: ""
            }
        }
    },
    methods:{
        izmeni() {
            sportService.editSport(this.sport, this.$route.params.id)
            .then((res) => {
                this.$toastr.s('Sport je izmenjen.', "Sport izmenjen!");
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e(err.message, "Greska");
            });
            this.$router.push('/sportovi');
            
        },
        odustani() {
            this.$router.go(-1);
        }
    },
    created() {
        sportService.getSportById(this.$route.params.id)
        .then((res) => {
            this.sport=res['data']
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
</script>
<style>
</style>