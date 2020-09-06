<template>
  <div v-if="teren && sport && lokacija" class="card">
    <div class="card-header">ID terena: {{ this.$route.params.id }}</div>
    <div class="card-body">
      <h5 class="card-title"> {{ teren.naziv }}</h5>
      <p class="card-text">Sport: {{ sport.naziv }}</p>
      <p class="card-text">Lokacija: {{ lokacija.naziv }}</p>
      
      <a href="#" class="btn btn-primary" @click="izmeniTeren(teren.id)">Izmeni</a>
    </div>
  </div>
</template>
<script>

import terenService from '../../services/teren.service';

export default{

    data: function(){
        return{
            teren: null,
            sport: null,
            lokacija: null
        }
    },
    methods:{
        izmeniTeren(id) {
            this.$router.push('/tereni/edit/'+id);
        },
        obrisiTeren(id) {
            terenService.deleteTeren(id)
            .then((res) => {
                this.$toastr.s('Teren obrisan', 'Brisanje uspesno');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Teren nije obrisan', 'Brisanje neuspesno');
            })
        },
        zavrsi(){
            this.$router.push('/tereni');
        }
    },
    created(){ 
        terenService.getTerenById(this.$route.params.id)
        .then((res)=>{
            this.teren = res['data'];
            terenService.getSportById(this.teren.sport_id)
            .then((res) => {
                this.sport = res["data"];
                return this.sport;
            })
            .catch((err) => {
                console.log(err);
                this.$toastr.e('Sport nije pronadjen', "Greska!");
            });
            terenService.getLokacijaById(this.teren.lokacija_id)
            .then((res) => {
                this.lokacija = res["data"];
                return this.lokacija;
            })
            .catch((err) => {
                console.log(err);
                this.$toastr.e('Lokacija nije pronadjena', "Greška");
            })
        })
        .catch((err)=>{
            this.$toastr.e('Teren ne postoji', "Greska!");
            console.log(err);
        });
    }
}
</script>
<style>

</style>