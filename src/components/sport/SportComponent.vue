
<template>
  <div v-if="sport" class="card">
    <div class="card-header">ID sport: {{ this.$route.params.id }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ sport.naziv }}</h5>
      
      <a href="#" class="btn btn-primary" @click="izmeniSport(sport.id)">Izmeni</a>
    </div>
  </div>
</template>
<script>

import sportService from '../../services/sport.service';

export default{

    data: function(){
        return{
            sport: {
                naziv: ""
            }
        }
    },
    methods:{
        izmeniSport(id) {
            this.$router.push('/sportovi/edit/'+id);
        },
        obrisiSport(id) {
            sportService.deleteSport(id)
            .then((res) => {
                this.$toastr.s('Sport obrisan', 'Brisanje uspesno');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Sport nije obrisan', 'Brisanje neuspesno');
            })
        },
        zavrsi(){
            this.$router.push('/sportovi');
        }
    },
    created(){ 
        sportService.getSportById(this.$route.params.id)
        .then((res)=>{
            this.sport = res['data'];
        })
        .catch((err)=>{
            this.$toastr.e('Sport ne postoji', "Greska!");
            console.log(err);
        });
    }
}
</script>
<style>

</style>