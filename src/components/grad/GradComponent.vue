
<template>
  <div v-if="grad" class="card">
    <div class="card-header">ID grada: {{ this.$route.params.id }}</div>
    <div class="card-body">
      <h5 class="card-title"> {{ grad.naziv }}</h5>
      <p class="card-text">Postanski kod: {{ grad.postanski_kod }}</p>

      
      <a href="#" class="btn btn-primary" @click="izmeniGrad(grad.id)">Izmeni</a>
      <a href="#" class="btn btn-warning" @click="obrisiGrad(grad.id)">Fire</a>
    </div>
  </div>
</template>
<script>

import gradService from '../../services/grad.service';

export default{

    data: function(){
        return{
            grad: {
                naziv: "",
                postanski_kod: ""
            }
        }
    },
    methods:{
        izmeniGrad(id) {

        },
        obrisiGrad(id) {
            gradService.deleteGrad(id)
            .then((res) => {
                this.$toastr.s('Grad obrisan', 'Brisanje uspesno');
                this.$router.go('/');
            })
            .catch((err) => {
                this.$toastr.e('Grad nije obrisan', 'Brisanje neuspesno');
            })
        },
        zavrsi(){
            this.$router.push('/gradovi');
        }
    },
    created(){ 
        gradService.getGradById(this.$route.params.id)
        .then((res)=>{
            this.grad = res['data'];
        })
        .catch((err)=>{
            this.$toastr.e('Grad ne postoji', "Greska!");
            console.log(err);
        });
    }
}
</script>
<style>

</style>